import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "../lib/zod";
import postgres from "postgres";
import { Pool } from "@neondatabase/serverless";
import PostgresAdapter from "@auth/pg-adapter";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.DB_URL });
  return {
    adapter: PostgresAdapter(pool),
    providers: [
      GitHub,
      Credentials({
        credentials: {
          email: {},
          password: {},
        },
        authorize: async (credentials) => {
          console.log("Authorize called with ", credentials);
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );
          const sql = postgres(process.env.DB_URL!);
          const data = await sql`SELECT * FROM users WHERE email=${email}`;
          const user = data[0];
          if (!user) {
            console.log("not found");
            throw new Error("Invalid credentials!");
          }
          console.log("user authenticated: ", user);

          const passwordIsValid = await bcrypt.compare(password, user.password);

          if (!passwordIsValid) {
            throw new Error("Invalid credetials!");
          }

          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name,
          };
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    debug: true,
  };
});

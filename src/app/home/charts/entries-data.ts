import postgres from "postgres";
if (!process.env.DB_URL) {
  throw new Error("DB_URL is not found");
}

const sql = postgres(process.env.DB_URL!);

export async function getEntriesPerDay(user_email: string) {
  const result =
    await sql`SELECT date::date As date, COUNT(*)::int AS count  FROM food_intake WHERE user_email = ${user_email} GROUP BY date ORDER BY date`;
  return result.map((row) => ({
    date: row.date.toISOString().split("T")[0],
    count: row.count,
  }));
}

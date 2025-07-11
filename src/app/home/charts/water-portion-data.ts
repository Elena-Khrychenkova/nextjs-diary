import postgres from "postgres";
if (!process.env.DB_URL) {
  throw new Error("DB_URL is not found");
}

const sql = postgres(process.env.DB_URL!);

type WaterPortionStat = {
  water: "Yes" | "No";
  portion: string;
  count: number;
};

export async function getWaterPortionStats(
  user_email: string
): Promise<WaterPortionStat[]> {
  const result =
    await sql`SELECT water, portion, COUNT(*)::int AS count FROM food_intake WHERE user_email = ${user_email} GROUP BY water, portion`;

  const data: WaterPortionStat[] = result.map((row) => ({
    water: row.water === "Yes" ? "Yes" : "No",
    portion: String(row.portion),
    count: Number(row.count),
  }));
  return data;
}

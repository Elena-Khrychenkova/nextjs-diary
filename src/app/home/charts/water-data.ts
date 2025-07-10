import postgres from "postgres";

const sql = postgres(process.env.DB_URL!);

export async function getWaterStats(user_email: string) {
  const result = await sql`
    SELECT water, COUNT(*)::int AS count
    FROM food_intake
    WHERE user_email = ${user_email}
    GROUP BY water
  `;

  return result.map((row) => ({
    key: `water-${row.water}`,
    label: row.water === "Yes" ? "Drank Water" : "Didn't Drink", // "Yes" or "No"
    value: row.count,
    fill: row.water === "Yes" ? "#4ade80" : "#f87171", // green for Yes, red for No
  }));
}

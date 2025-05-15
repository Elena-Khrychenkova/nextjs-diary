import postgres from "postgres";
if (!process.env.DB_URL) {
  throw new Error("DB_URL is not found");
}

const sql = postgres(process.env.DB_URL!);

//comparing number of meals by mood: checking how many logs exist per mood
export async function getMoodCounts() {
  try {
    const result =
      await sql`SELECT mood, COUNT(*)::int AS count  FROM food_intake GROUP BY mood ORDER BY mood`;

    return result.map((row) => ({
      mood: row.mood,
      count: row.count,
    }));
  } catch (error) {
    return { message: "Failed to get mood counts ", error };
  }
}

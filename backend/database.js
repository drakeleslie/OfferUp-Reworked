import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new pg.Pool({
  connextionString: process.env.DATABASE_URL,
  ...dotenv(
    PROCESS.ENV.NODE_ENV === "production"
      ? {
          ssl: {
            rejectUnauthorized: false,
          },
        }
      : {}
  ),
});

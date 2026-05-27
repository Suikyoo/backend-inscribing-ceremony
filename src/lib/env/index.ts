import { configDotenv } from "dotenv"
configDotenv();

export const databaseUrl = process.env.DATABASE_URL;
export const storageUrl = process.env.STORAGE_URL;
export const adminUsername = process.env.ADMIN_USERNAME;
export const adminPassword = process.env.ADMIN_PASSWORD;
export const jwtSecret = process.env.JWT_SECRET;


if (!databaseUrl || !storageUrl) throw new Error("db or storage url missing. ");
if (!adminUsername || !adminPassword) throw new Error("No admin username/password as env variables. ");
if (!jwtSecret) throw new Error("JWT secret unset. ");

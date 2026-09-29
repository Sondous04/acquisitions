import 'dotenv/config';
import { PgDialect } from 'drizzle-orm/pg-core';
export default {
    schema: './src/models/*.js',
    out:'./drizzle',
    dialect: 'postgresql',
    dbCredentials:{
        url: process.env.DATABASE_URL,
    }
}
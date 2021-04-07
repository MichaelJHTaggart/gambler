DROP TABLE users;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "full_name" VARCHAR(100),
  "email" VARCHAR(100) UNIQUE,
  "password" VARCHAR(1000),
  "coins" NUMERIC
);
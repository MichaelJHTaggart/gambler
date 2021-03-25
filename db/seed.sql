DROP TABLE users, rewards;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "full_name" VARCHAR(100),
  "email" VARCHAR(100) UNIQUE,
  "password" VARCHAR(1000),
  "coins" NUMERIC
);

CREATE TABLE "rewards" (
  "cherries_three" NUMERIC,
  "cherries_two" NUMERIC,
  "apples_three" NUMERIC,
  "apples_two" NUMERIC,
  "bananas_three" NUMERIC,
  "bananas_two" NUMERIC,
  "lemons" NUMERIC  
);

INSERT INTO "rewards" (cherries_three, cherries_two, apples_three, apples_two, bananas_three, bananas_two, lemons) VALUES ('50', '40', '20', '10', '15', '5', '3')


INSERT INTO "users" (id, full_name, email, password, coins) VALUES (1,'Robin','pika@pika.com','BCZ47ABO9BB','11'),(2,'Emerald','char@char.com','SLU90SCF8QI','23'),(3,'Ayanna','squirtle@squirtle.com','SDH55DKY4TH','99');
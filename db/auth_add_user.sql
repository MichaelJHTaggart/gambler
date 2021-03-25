INSERT INTO users
(full_name, email, password, coins)
VALUES
($1, $2, $3, $4)
returning *;
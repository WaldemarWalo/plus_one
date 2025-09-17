CREATE TABLE counter (
    id SERIAL PRIMARY KEY,
    val INT NOT NULL DEFAULT 0
);

INSERT INTO counter (val) VALUES (1), (2);

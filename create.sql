DROP TABLE counter;

CREATE TABLE counter (
    id SERIAL PRIMARY KEY,
    val INT NOT NULL DEFAULT 0
);

select * from counter;

INSERT INTO counter (val) VALUES (0);
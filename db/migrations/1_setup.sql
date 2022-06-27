
DROP TABLE IF EXISTS members;

CREATE TABLE members(
    id serial PRIMARY KEY,
    username varchar(255) NOT NULL,
    points INT 
);

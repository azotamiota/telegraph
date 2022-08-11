DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(200) NOT NULL,
    name varchar(100) NOT NULL,
    story varchar(500) NOT NULL,
    date varchar(200) NOT NULL
);

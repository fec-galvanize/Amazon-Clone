DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    picture TEXT ,
    name TEXT,
    rating INT ,
    subject TEXT,
    country TEXT,
    date DATE,
    verified_purchase BOOLEAN,
    review_body TEXT
);
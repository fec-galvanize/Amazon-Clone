DROP TABLE IF EXISTS shirts;

CREATE TABLE shirts (
    id SERIAL PRIMARY KEY,
    color TEXT,
    img TEXT,
    display_img TEXT
)
DROP TABLE IF EXISTS shirts:

CREATE TABLE shirts (
    id SERIAL PRIMARY KEY,
    color TEXT,
    img_male TEXT,
    display_img_male TEXT,
    img_female TEXT,
    display_img_female TEXT,
)
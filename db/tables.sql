CREATE TABLE IF NOT EXISTS shows (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    firstAired VARCHAR(100) NOT NULL,
    episodes INT NOT NULL,
    length VARCHAR(30),
    image_url VARCHAR(500)
);
DROP TABLE shows
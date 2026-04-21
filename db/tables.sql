CREATE TABLE IF NOT EXISTS shows (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    firstAired VARCHAR(100) NOT NULL,
    episodes INT NOT NULL,
    length VARCHAR(30)
);
CREATE TABLE IF NOT EXISTS stars (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birthDate VARCHAR(100),
    description TEXT
);
CREATE TABLE IF NOT EXISTS starShow (
    showID INT,
    starID INT,
    PRIMARY KEY (showID, starID),
    CONSTRAINT fk_showsID
        FOREIGN KEY (showID)
        REFERENCES shows(id),
    CONSTRAINT fk_starID
        FOREIGN KEY (starID)
        REFERENCES stars(id)
);
DROP TABLE TV_Shows
DROP TABLE starShow
DROP TABLE Stars
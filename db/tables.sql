CREATE TABLE IF NOT EXISTS TV_Shows (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    firstAired VARCHAR(100) NOT NULL,
    episodes INT NOT NULL,
    length INT
);
CREATE TABLE IF NOT EXISTS Stars (
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
        REFERENCES TV_Shows(id)
    CONSTRAINT fk_starID
        FOREIGN KEY (starID)
        REFERENCES Stars(id)
);
DROP EXTENSION IF EXISTS pgcrypto;
CREATE EXTENSION pgcrypto;
DROP TABLE IF EXISTS SensorValues;
DROP TABLE IF EXISTS Buddies;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users(
                      ID SERIAL PRIMARY KEY,
                      name VARCHAR(100) NOT NULL,
                      email TEXT NOT NULL UNIQUE,
                      password TEXT NOT NULL,
                      salt varchar(255) NOT NULL
);
CREATE TABLE Buddies(
                        ID SERIAL PRIMARY KEY,
                        userID INT REFERENCES Users(ID),
                        plantType VARCHAR(255) NOT NULL
);
CREATE TABLE SensorValues(
                             ID SERIAL PRIMARY KEY,
                             Buddy_id INT REFERENCES Buddies(ID),
                             temperature DECIMAL NOT NULL,
                             light DECIMAL NOT NULL,
                             soil DECIMAL NOT NULL,
                             time TIMESTAMP
);

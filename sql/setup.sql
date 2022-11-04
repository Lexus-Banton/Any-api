-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS anime;

CREATE TABLE anime (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  type VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  year INT NOT NULL,
  stillRunning BOOLEAN NOT NULL
);

INSERT INTO anime (name, type, url, year, stillRunning)
VALUES 
('JoJo Bizarre Adventure', 'Adventure', 'https://en.wikipedia.org/wiki/JoJo%27s_Bizarre_Adventure#/media/File:JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg', 1987, TRUE),
('Sailor Moon', 'Magical Girl', 'https://en.wikipedia.org/wiki/Sailor_Moon#/media/File:SMVolume1.jpg', 1991, FALSE),
('Macross Frontier', 'Space Opera', 'https://en.wikipedia.org/wiki/File:MF_DVD_cover.jpg', 2007, FALSE),
('Dragon Ball', 'Action', 'https://en.wikipedia.org/wiki/Dragon_Ball_(TV_series)#/media/File:Dragon_Ball_anime_logo.png', 1986, FALSE);
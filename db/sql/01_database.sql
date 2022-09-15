BEGIN TRANSACTION;

CREATE TABLE record (
  record_id SERIAL PRIMARY KEY,
  catalog_number VARCHAR(255),
  artists VARCHAR(255),
  album_title VARCHAR(255),
  track_artists VARCHAR(255),
  song_titles VARCHAR(255),
  release_date DATE,
  title_version VARCHAR(255),
  genre VARCHAR(255)
);

CREATE TABLE record_image (
  id SERIAL PRIMARY KEY,
  name text,
  catalog_number VARCHAR(255)
);

COMMIT;
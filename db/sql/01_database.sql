BEGIN TRANSACTION;

CREATE TABLE records (
    catalog_number character varying(255),
    song_titles json,
    track_artist json,
    title_version json,
    record_id SERIAL PRIMARY KEY,
    artists character varying(255),
    album_title character varying(255),
    release_date date,
    genre character varying(255),
    image_name character varying(255)
);

CREATE TABLE record_image (
  id SERIAL PRIMARY KEY,
  name text,
  catalog_number VARCHAR(255)
);

COMMIT;
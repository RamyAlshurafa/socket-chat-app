DROP TABLE IF EXISTS message CASCADE;

CREATE TABLE message(
  id serial PRIMARY KEY,
  -- sender id
  user_id INTEGER REFERENCES users(id),
  body TEXT NOT NULL,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE
)
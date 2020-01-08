DROP TABLE IF EXISTS message_recipient CASCADE;

CREATE TABLE message_recipient(
  id serial PRIMARY KEY,
  recipient_id INTEGER REFERENCES users(id),
  message_id INTEGER REFERENCES message(id),
  is_seen BOOLEAN DEFAULT FALSE,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE
)
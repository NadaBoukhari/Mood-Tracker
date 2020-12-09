CREATE DATABASE mood_tracker;

CREATE TABLE moods(
  mood_id SERIAL PRIMARY KEY,
  mood_type VARCHAR(255),
  mood_color VARCHAR(50),
  mood_description VARCHAR(255),
  mood_log_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
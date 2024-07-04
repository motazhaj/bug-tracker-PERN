-- @block
CREATE DATABASE bug_tracker;
-- @block
DROP TABLE IF EXISTS bugs;
CREATE TABLE bugs(
  bug_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  resolved BOOLEAN default false,
  creationDate TIMESTAMP default current_timestamp,
  updateDate TIMESTAMP default null
);

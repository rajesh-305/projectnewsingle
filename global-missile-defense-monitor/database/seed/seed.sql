INSERT INTO users (username, password, email) VALUES
('admin', 'hashed_password_1', 'admin@example.com'),
('user1', 'hashed_password_2', 'user1@example.com'),
('user2', 'hashed_password_3', 'user2@example.com');

INSERT INTO scenarios (name, description) VALUES
('Scenario 1', 'Description for scenario 1'),
('Scenario 2', 'Description for scenario 2');

INSERT INTO threats (type, level, description) VALUES
('Cyber Attack', 'High', 'Description of a high-level cyber attack threat.'),
('Nuclear Threat', 'Critical', 'Description of a critical nuclear threat.');

INSERT INTO alerts (title, message, severity) VALUES
('Alert 1', 'This is a critical alert message.', 'Critical'),
('Alert 2', 'This is a warning alert message.', 'Warning');
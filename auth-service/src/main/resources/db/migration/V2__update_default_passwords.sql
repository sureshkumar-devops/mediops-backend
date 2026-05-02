-- Default password: 'changeme'
-- Bcrypt hash generated with strength 10
-- UPDATE auth.users
-- SET password = '$2a$10$BgAcKJGFdJwInJP1QQMscOOGrWr0qM8drclcO59HYNaBDUt1.o7be'
-- WHERE username IN ('admin', 'pharmacist1');

UPDATE auth.users
SET password = '$2a$10$bLvwuPjdy9kpYdvrSAA0HOyF35f4FcP9V1jM0qQ.ba3h7QlINiJTW'
WHERE username IN ('admin', 'pharmacist1');
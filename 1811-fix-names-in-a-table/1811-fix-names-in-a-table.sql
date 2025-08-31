# Write your MySQL query statement below
select user_id,
CONCAT(UPPER(SUBSTRING(name,1,1)),LOWER(SUBSTRING(name,2,1000000))) as name
FROM Users
ORDER BY user_id

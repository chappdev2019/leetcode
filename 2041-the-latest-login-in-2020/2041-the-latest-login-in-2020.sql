# Write your MySQL query statement below
SELECT user_id,MAX(time_stamp) as last_stamp
FROM (SELECT * 
FROM logins
WHERE time_stamp >= '2020-01-01' and time_stamp < '2021-01-01') as logins2020
GROUP BY user_id
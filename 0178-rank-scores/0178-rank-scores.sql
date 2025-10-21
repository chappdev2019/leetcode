# Write your MySQL query statement below
SELECT score, DENSE_RANK() OVER (order by SCORE DESC) as 'rank'
FROM SCORES 
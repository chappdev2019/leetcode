# Write your MySQL query statement below
SELECT p.firstName, p.lastName, a.city, a.state 
FROM  Address a
RIGHT JOIN Person p ON p.personId = a.personId
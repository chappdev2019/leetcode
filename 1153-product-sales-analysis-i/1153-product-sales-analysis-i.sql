# Write your MySQL query statement below
SELECT product_name, year, price
From Product p RIGHT JOIN SALES s  
ON P.product_id = s.product_id

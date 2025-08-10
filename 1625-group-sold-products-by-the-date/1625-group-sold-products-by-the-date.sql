# Write your MySQL query statement below
Select sell_date,COUNT(distinct product) as num_sold,Group_Concat(Distinct product order by product asc ) as products
from  Activities
group by sell_date
order by sell_date
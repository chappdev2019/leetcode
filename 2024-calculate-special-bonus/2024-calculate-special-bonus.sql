SELECT employee_id,
IF(employee_id%2<>0 and (name < 'M' or name>='N'),SALARY,0) AS bonus
FROM employees
ORDER BY employee_id
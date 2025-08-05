# Write your MySQL query statement below
SELECT machine_id,
Round(AVG(duration),3) as processing_time
FROM(
SELECT machine_id,process_id,
sum(IF(activity_type='start',-timestamp,timestamp)) as duration
FROM activity
Group by machine_id,process_id) as durations
Group by machine_id

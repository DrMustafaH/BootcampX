SELECT
  teachers.name as teacher,
  cohorts.name as cohort
FROM
  teachers
  JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
  JOIN students ON assistance_requests.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
GROUP BY
  teacher,
  cohort
HAVING
  cohorts.name = 'JUL02'
ORDER BY
  teacher;

-- compass answer below:
--   SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
-- FROM teachers
-- JOIN assistance_requests ON teacher_id = teachers.id
-- JOIN students ON student_id = students.id
-- JOIN cohorts ON cohort_id = cohorts.id
-- WHERE cohorts.name = 'JUL02'
-- ORDER BY teacher;
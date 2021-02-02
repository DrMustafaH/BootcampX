SELECT
  SUM(assignment_submissions.duration) as total_duration
FROM
  assignment_submissions,
  students
WHERE
  assignment_submissions.student_id = students.id
  AND students.name = 'Ibrahim Schimmel';

-- answer in compass is :
-- SELECT sum(assignment_submissions.duration) as total_duration
-- FROM assignment_submissions
-- JOIN students ON students.id = student_id
-- WHERE students.name = 'Ibrahim Schimmel';
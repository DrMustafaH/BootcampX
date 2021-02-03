const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const slicedArgs = process.argv.slice(2);

pool.query(`
SELECT students.id, students.name, cohort_id, cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '${slicedArgs[0]}%'
LIMIT ${slicedArgs[1]};
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack));
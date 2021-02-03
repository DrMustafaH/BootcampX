const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});



const slicedArgs = process.argv.slice(2);

const queryStr = `
SELECT students.id, students.name, cohort_id, cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;
const cohortName = slicedArgs[0];
const limit = slicedArgs[1];
const values = [`${cohortName}%`, limit];


pool.query(queryStr, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack));
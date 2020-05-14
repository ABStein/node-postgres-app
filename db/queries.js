const oneline = require('oneline')
const pool = require('../postgres')


const getUserById = async (id) => {
  const idQuery = oneline`
  SELECT * 
  FROM users
  WHERE id = ${id}`;

  // log id as well as the function we are using
  const params = [id];
  console.log(`[psql.idQuery] getUserById - Params: ${JSON.stringify(params)}`)

  let idResults;
  try {
    idResults = await pool.query(idQuery)
    console.log(`[psql.idQuery] getUserById - idResults: ${JSON.stringify(idResults.rows)}`)
  } catch (err) {
    console.log(`[psql.idQuery] getUserById - PSQL Query Error: ${JSON.stringify(err)}`);
    return err;
  }

  return idResults;
}

const getUsers = async () => {
  const allUserQuery = oneline`
  SELECT * 
  FROM users`;

  let userResults;
  try {
    userResults = await pool.query(allUserQuery)
    console.log(`[psql.allUserQuery] getUsers - userResults: ${JSON.stringify(userResults.rows)}`)
  } catch (err) {
    console.log(`[psql.allUserQuery] getUsers - PSQL Query Error: ${JSON.stringify(err.stack)}`);
    return err;
  }
  return userResults;
}




// prepared statement query which can be found here https://www.postgresql.org/docs/9.3/sql-prepare.html
// const query = {
//   name: 'fetch-all-users',
//   text: 'SELECT * FROM users',
//   rowMode: 'array',
// }

// pool
//   .query(query)
//   .then(res => console.log('This is res', res.rows), pool.end())
//   .catch(err => console.error(err.stack))


module.exports = {
  getUserById,
  getUsers
}
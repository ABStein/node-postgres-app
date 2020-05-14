const statusCodes = require('http-status-codes')
const db = require('../db/queries')


const getUser = async (req, res, next) => {
  // set id to take in the url param
  const { id } = req.params
  // open a results variable to later hold on to the result o fthe query
  let postgresResults;

  try {
    postgresResults = await db.getUserById(id)
    let user;
    if(postgresResults === 'Not a valid user.') {
      res.status(statusCodes.NOT_FOUND)
        .json({
          error: statusCodes.getStatusText(statusCodes.NOT_FOUND),
        })
    } else {
      user = postgresResults.rows[0]
      res.status(statusCodes.OK).json({
        user,
      })
    } 
  } catch (err){
    console.log(`[controllers.getUser] ${JSON.stringify(err.stack)}`);
    return next(err);
  }
}


const getAllUsers = async (req, res, next) => {
  let postgresResults;

  try {
    postgresResults = await db.getUsers()
    if(postgresResults.length === 0) {
      console.log(`[controllers.getAllUsers] ${JSON.stringify(err.stack)}`)
      return "Hmm, we don't seem to have what you are looking for, please try again."
    }
    // open a variable to collect the users that are looped through
    let users = [];
    for(i = 0; i < postgresResults.rows.length; i++) {
      users.push(postgresResults.rows[i])
    }

    res.status(statusCodes.OK).json({
      users,
    })

  } catch (err) {
    console.log(`[controllers.getAllUsers] ${JSON.stringify(err.stack)}`)
    return next(err);
  }
}

module.exports = {
  getUser,
  getAllUsers
}
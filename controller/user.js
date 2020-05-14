const statusCodes = require('http-status-codes')
const db = require('../db/queries')


const getUser = async (req, res, next) => {
  const { id } = req.params
  console.log(id)
  let postgresResults;

  try {
    postgresResults = await db.getUserById(id)
    
    if(postgresResults === 'Not a valid user.') {
      res.status(statusCodes.NOT_FOUND)
        .json({
          error: statusCodes.getStatusText(statusCodes.NOT_FOUND),
        })
    } else {
      res.status(statusCodes.OK).json({
        message: `Id ${id} belongs to ${postgresResults.rows[0].name}`
      })
    } 
  } catch (err){
    console.log(`[controllers.getUser] ${JSON.stringify(err.stack)}`);
    return next(err);
  }
}

module.exports = {
  getUser,
}
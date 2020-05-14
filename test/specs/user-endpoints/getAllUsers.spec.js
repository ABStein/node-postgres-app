const getUsersController = require('../../../controller/user')
const { mockRequest, mockResponse } = require('mock-req-res');
const statusCodes = require('http-status-codes');


describe('Testing Users API', function() {
  const sandbox = sinon.createSandbox();
  let res;

  beforeEach(function() {
      res = mockResponse();
  });

  afterEach(function() {
      res.json.resetHistory();
      sandbox.restore();
  });
  
  it('should hit the api and get a 200', async function() {
    const req = mockRequest({});
    
    await getUsersController.getAllUsers(req, res);
    expect(res.status).to.have.been.calledOnceWith(statusCodes.OK);       
  });
})

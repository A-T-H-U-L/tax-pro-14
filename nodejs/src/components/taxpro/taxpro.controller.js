const TaxProService = require('./taxpro.service');
const logger =require('../../support/logger');

const Taxprocontroller={
  /**
   * Handle logging in user.
   * @async
   * @method
   * @param {ExpressRequest} httpRequest
   * @returns {Promise.<ControllerResponse> }
   */

  //function for listing the tax professionals
  list: async (httpRequest) => {
    try {
    const loginData = await TaxProService.doTaxprolist(httpRequest.body);
    return {
      statusCode: 200,
      body: {
        data: loginData
      }
    };
  } catch (error) {
    logger.error('login()' + error);
    throw new BadRequestError(error.message);
  }

},
//function for Viewing the tax professionals by their Id
viewDetails: async (httpRequest) => {
  try {
    const loginData = await TaxProService.viewDetailTaxPro(httpRequest);
    return {
      statusCode: 200,
      body: {
        data: loginData
      }
    }; } catch (error) {
      logger.error('login()' + error);
      throw new BadRequestError(error.message);
    }

},

//function for adding the taxprofessional data 
addTaxPro :async (httpRequest) =>{

  try {
    const dataToAdd = await TaxProService.addDetails(httpRequest.body);
    //response of api call of register function (status code and data)
    console.log("dataToAdd",dataToAdd)
    return {
      statusCode: 200,
      body: {
        data: dataToAdd
      }
    };
  } catch (error) {
    logger.error('addTaxPro()' + error);
    throw new BadRequestError(error.message);
  }

}

}



module.exports=Taxprocontroller;
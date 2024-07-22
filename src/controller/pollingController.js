const pollingService = require("../service/pollingService");
const {logger} = require('../utils/logger');
module.exports = {
    
    async getPollingData(intent,res) {
        const FUNC_NAME = `getPollingData`
        let response;
        try {
            response = {
                status:200
            }
            response.body = await pollingService.getPollingDetails(intent)
           logger.info("API Succeeded")
        } catch (e) {
            console.log("error",e)
        }
        return res.status(response.status).send(response.body);
    },
}
/**
 * Node Modules
 */
const got = require('got');

/**
 * Local Modules
 */
const loggerService = require('./loggerService');

const requestApplication = async (applicationUrl) => {
    try {
        const response = await got(applicationUrl);
        return response.body;
    } catch(error) {
        loggerService.logError(rror.response.body);
    }
};

module.exports = { requestApplication };
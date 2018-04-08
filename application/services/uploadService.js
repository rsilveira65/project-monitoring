/**
 * Node Modules
 */
const { exec } = require('child-process-async');

/**
 * Local Modules
 */
const loggerService = require('./loggerService');

const uploadImage = async imagePath => {
    try {
        const response = await exec(`curl -F "file=@${imagePath}" https://file.io`);
        return JSON.parse(response.stdout).link;
    } catch(error) {
        loggerService.logError(error)
    }
};

module.exports = { uploadImage };





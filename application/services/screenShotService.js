/**
 * Node Modules
 */
const Pageres = require('pageres');

/**
 * Local Modules
 */
const configService = require('./configService');
const loggerService = require('./loggerService');


const pageres = new Pageres({delay: 2});

const getApplicationScreenShot = async (applicationUrl) => {
    try {
        const parameters = await configService.getParameters();
        await pageres.src(applicationUrl, ['1024x768']).dest(parameters.screenshot_path).run();

        return `${parameters.screenshot_path}/${applicationUrl.substring(7)}-1024x768.png`;
    } catch(error) {
        loggerService.logError(error);
    }
};

module.exports = { getApplicationScreenShot };
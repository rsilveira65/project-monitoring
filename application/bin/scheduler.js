/**
 * Node Modules
 */
const schedule = require('node-schedule');
const configService = require('../services/configService');

/**
 * Local Modules
 */
const app = require('./app');

const run = async () => {
    const parameters = await configService.getParameters();

    schedule.scheduleJob(parameters.scheduler, () => {
        app.run();
    });
};

module.exports = { run };

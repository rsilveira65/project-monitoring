/**
 * Local Modules
 */
const applicationRequestService = require('../services/requestService');
const contentParserService = require('../services/contentParserService');
const screenShotService = require('../services/screenShotService');
const telegramService = require('../services/telegramService');
const projectService = require('../services/projectService');
const loggerService = require('../services/loggerService');
const imageUploadService = require('../services/uploadService');

const run = async () => {
    try {
        const projects = await projectService.getProjects();

        projects.map(async project => {
            const applicationContent = await applicationRequestService.requestApplication(project.url);
            const hasContentIntoApplication = await contentParserService.parseContent(applicationContent, project.content);

            if (hasContentIntoApplication < 0) {
                const screenShotPath = await screenShotService.getApplicationScreenShot(project.url);
                const screenShotUrl = await imageUploadService.uploadImage(screenShotPath);

                const message = await `Your application ${project.name} - ${project.url} is offline! Check the image screenshot here ${screenShotUrl}`;

                if (project.telegram_notification) telegramService.sendMessage(message , false);

                loggerService.logError(message);
            } else {
                loggerService.logInfo(`Your application ${project.name} - ${project.url} is online!`);
            }
        });
    } catch (error) {
        loggerService.logError(error);
    }
};

module.exports = { run };
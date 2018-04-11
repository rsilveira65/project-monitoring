
const parseContent = (htmlContent, mustBeInContent) => htmlContent.search(mustBeInContent);

module.exports = { parseContent };
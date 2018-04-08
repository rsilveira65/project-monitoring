
const parseContent = (htmlContent, mustBeInContent) => {
    return htmlContent.search(mustBeInContent);
};

module.exports = { parseContent };
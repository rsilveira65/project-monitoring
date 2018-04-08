/**
 * Node Modules
 */
const YAML = require('yamljs');

/*
 * Parses yaml configuration file.
 */
const getProjects = async () => await YAML.load(__dirname + '/../config/projects.yml')['projects'];

module.exports = { getProjects };

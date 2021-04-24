
function getConfig(configName) {
    let configs = new Map();

    // add configurations here
    configs.set("backend-url", "http://localhost:8080");

    // return the requeste configuration
    return configs.get(configName);
}

export default getConfig;
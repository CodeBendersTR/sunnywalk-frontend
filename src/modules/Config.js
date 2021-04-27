
function getConfig(configName) {
    let configs = new Map();

    // add configurations here
    configs.set("backend-url", "http://localhost:8080");
    configs.set("gmaps-api", "https://maps.googleapis.com/maps/api/geocode/json");

    // return the requeste configuration
    return configs.get(configName);
}

export default getConfig;
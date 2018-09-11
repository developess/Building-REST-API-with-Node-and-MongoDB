const devConfig = { MONGO_URL: "mongodb://localhost/Building-REST-API-with-Node-and-MongoDB-dev" };
const testConfig = { MONGO_URL: "mongodb://localhost/Building-REST-API-with-Node-and-MongoDB-test" };
const prodConfig = { MONGO_URL: "mongodb://localhost/Building-REST-API-with-Node-and-MongoDB-prod" };

const defaultConfig = {
  PORT: process.env.PORT || 3000
};

function envConfig(env) {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
};

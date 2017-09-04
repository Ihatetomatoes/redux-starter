const commonConfig = require('./config/webpack.common');
const webpackMerge = require('webpack-merge');

const addons = (addonsArg) => {
    let addons = []
        .concat.apply([], [addonsArg])  //Normalize array of addons (flattern)
        .filter(Boolean);               // if addons is undefined, filter it out 
    return addons.map((addonName) => require(`./config/addons/webpack.${addonName}.js`));
}

module.exports = (env) => {
    console.log(env);
    const envConfig = require(`./config/webpack.${env.env}.js`);
    const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons));

    return mergedConfig;
}
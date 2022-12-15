// webpack.config.js
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
    output: {
        hashFunction: 'xxhash64'
    }
    const config = await createExpoWebpackConfigAsync(
        {
            ...env,
            babel: {
                dangerouslyAddModulePathsToTranspile: ['nativewind']
            }
        },
        argv
    )

    config.module.rules.push({
        test: /\.css$/i,
        use: ['postcss-loader']
    })

    return config
}

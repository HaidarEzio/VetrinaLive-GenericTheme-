const withImages = require('next-images')
// const { execSync } = require('child_process')
const withSourceMaps = require('@zeit/next-source-maps')({
  devtool: 'nosources-source-map'
})
const RollbarSourcemapPlugin = require('rollbar-sourcemap-webpack-plugin')

const ROLLBAR_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_ROLLBAR_ACCESS_TOKEN_SERVER_ITEM

module.exports = withImages(
  withSourceMaps({
    env: {
      ROLLBAR_ACCESS_TOKEN
    },
    webpack(config, { dev, webpack, buildId, isServer }) {
      config.module.rules.push({
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          emitFile: isServer,
          publicPath: `/_next/static/`,
          outputPath: `${isServer ? '../' : ''}static/`,
          name: '[path][name].[ext]'
        }
      })

      if (isServer && process.env.NODE_ENV === 'production') {
        require('./scripts/generate-sitemap')
      }

      if (!dev) {
        const codeVersion = JSON.stringify(buildId)
        config.output.futureEmitAssets = false
        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.NEXT_BUILD_ID': codeVersion
          })
        )
        config.plugins.push(
          new RollbarSourcemapPlugin({
            accessToken: ROLLBAR_ACCESS_TOKEN,
            version: codeVersion,
            publicPath: '/_next/'
          })
        )
      } else {
        config.devtool = 'cheap-module-source-map'
      }

      return config
    }
  })
)

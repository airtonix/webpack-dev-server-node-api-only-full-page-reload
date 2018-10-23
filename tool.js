const webpack = require('webpack')
const WebpackDevServer = require("webpack-dev-server")

const config = {
    mode: 'development',
    devServer: {
      hot: true,
      host: '0.0.0.0',
      port: 3000,
      // publicPath: '/',
      contentBase: `${__dirname}/src`,
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    context: __dirname,
    entry: [
      './src/app.js'
    ]
  };


WebpackDevServer.addDevServerEntrypoints(config, config.devServer);
const server = new WebpackDevServer(webpack(config), config.devServer);
server.listen(config.devServer.port, config.devServer.host, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('ready')
})

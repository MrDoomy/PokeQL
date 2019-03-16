module.exports = {
  publicPath: '.',
  devServer: {
    port: 1234,
    proxy: {
      '^/sprites': {
        target: 'http://localhost:5050'
      }
    }
  },
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.gql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
  }
};

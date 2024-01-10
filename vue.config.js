module.exports = {
  transpileDependencies: ['vue'],
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm-bundler.js',
      },
    },
  },
};

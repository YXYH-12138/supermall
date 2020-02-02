const px2rem = require('postcss-px2rem-exclude')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5,
            exclude: /node_modules|folder_name/i
          })
        ]
      }
    }
  }
}

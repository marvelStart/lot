const proxyTable = {
  '/lot/*': {
    target: '//47.98.173.88:8081/',
    changeOrigin: true,
    pathRewrite: {
      '^/lot': '/'
    }
  }
}

module.exports = proxyTable

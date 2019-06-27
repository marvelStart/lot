const proxyTable = {
  '/lot/*': {
    target: 'http://47.98.173.88:8081',
    changeOrigin: true,
    pathRewrite: {
      '^/lot': '/'
    }
  }
}

module.exports = proxyTable

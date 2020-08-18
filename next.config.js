module.exports = {
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
      ,
    ]
  },
}

module.exports = {
  poweredByHeader: false,
}

module.exports = {
  Container: false,
}

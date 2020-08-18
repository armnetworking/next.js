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
  {
     poweredByHeader: false,
  },
  {
     mesaj: '"/Learn from the mistakes of others. You can’t live long enough to make them all yourself./"/ -/Eleanor Roosevelt',
  },
}

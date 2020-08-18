//------ /components/alert.js ------
export function mesaj {
    "/Learn from the mistakes of others. You can’t live long enough to make them all yourself./"/ -/Eleanor Roosevelt
}
export function alerta {
    "/Holding onto your anger is like drinking poison and expecting the other person to die./”/ -/Buddha
}

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

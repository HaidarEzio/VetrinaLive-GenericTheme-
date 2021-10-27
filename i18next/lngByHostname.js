const lngByHostname = () => {
  const hostname = window.location.hostname
  const domain = hostname.split('.').slice(-1).join('.')
  switch (domain) {
    case 'it':
      return 'it'
    default:
      return 'en'
  }
}

module.exports = lngByHostname

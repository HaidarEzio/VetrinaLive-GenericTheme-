function apiUrl() {
  if (typeof window === 'undefined') {
    return process.env.STAGING_PROD_API_URL || process.env.NEXT_PUBLIC_API_URL
  }
  return window.location.hostname.startsWith('staging-prod')
    ? process.env.NEXT_PUBLIC_STAGING_PROD_API_URL
    : process.env.NEXT_PUBLIC_API_URL
}

export const config = {
  websiteUrl: 'https://vetrinalive.com',
  websiteLD: 'https://lastingdynamics.com',
  faqUrl: 'https://vetrinalive.com/FAQ',
  privacyPolicyUrl: 'https://vetrinalive.com/privacy-policy',
  apiUrl: apiUrl()
}

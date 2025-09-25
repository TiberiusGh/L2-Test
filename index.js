import ConsentTracer from 'consent-tracker'

const consentTracker = new ConsentTracer()
const pre = document.querySelector('pre')

function init() {
  pre.textContent = `Current consents: ${localStorage.getItem(
    'consent-tracker'
  )}`
}

init()

// Listen for changes in consents and update the <pre> element
consentTracker.onConsentChange((newConsents) => {
  pre.textContent = `Current consents: ${JSON.stringify(newConsents)}`
})

const essentialsOn = document.querySelector('#EssentialsOn')
essentialsOn.addEventListener('click', () =>
  consentTracker.uppdateConsent('essential', true)
)

const essentialsOff = document.querySelector('#EssentialsOff')
essentialsOff.addEventListener('click', () =>
  consentTracker.uppdateConsent('essential', false)
)

const marketingOn = document.querySelector('#MarketingOn')
marketingOn.addEventListener('click', () =>
  consentTracker.uppdateConsent('marketing', true)
)

const marketingOff = document.querySelector('#MarketingOff')
marketingOff.addEventListener('click', () =>
  consentTracker.uppdateConsent('marketing', false)
)

const analyticsOn = document.querySelector('#AnalyticsOn')
analyticsOn.addEventListener('click', () =>
  consentTracker.uppdateConsent('analytics', true)
)

const analyticsOff = document.querySelector('#AnalyticsOff')
analyticsOff.addEventListener('click', () =>
  consentTracker.uppdateConsent('analytics', false)
)

const acceptAllBtn = document.querySelector('#AcceptAll')
acceptAllBtn.addEventListener('click', () => consentTracker.acceptAll())

const rejectAllBtn = document.querySelector('#RejectAll')
rejectAllBtn.addEventListener('click', () => consentTracker.declineAll())

const setFalseConsentBtn = document.querySelector('#SetFalseConsent')
setFalseConsentBtn.addEventListener('click', () => {
  consentTracker.setConsents({
    essential: false,
    analytics: true,
    marketing: true
  })
})

const setTrueConsentBtn = document.querySelector('#SetTrueConsent')
setTrueConsentBtn.addEventListener('click', () => {
  consentTracker.setConsents({
    essential: true,
    analytics: true,
    marketing: false
  })
})

const getConsentsBtn = document.querySelector('#GetConsents')
getConsentsBtn.addEventListener('click', () => {
  const stored = consentTracker.getConsents()
  console.log(`Current consents: ${JSON.stringify(stored)}`)
})

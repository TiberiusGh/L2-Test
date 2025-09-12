import {
  getConsents,
  setConsents,
  uppdateConsent,
  acceptAll,
  declineAll,
  onConsentChange
} from 'consent-tracker'

const pre = document.querySelector('pre')

function init() {
  pre.textContent = `Current consents: ${JSON.stringify(getConsents())}`
}

init()

// Listen for changes in consents and update the <pre> element

onConsentChange((newConsents) => {
  pre.textContent = `Current consents: ${JSON.stringify(newConsents)}`
})

const essentialsOn = document.querySelector('#EssentialsOn')
essentialsOn.addEventListener('click', () => uppdateConsent('essential', true))

const essentialsOff = document.querySelector('#EssentialsOff')
essentialsOff.addEventListener('click', () =>
  uppdateConsent('essential', false)
)

const marketingOn = document.querySelector('#MarketingOn')
marketingOn.addEventListener('click', () => uppdateConsent('marketing', true))

const marketingOff = document.querySelector('#MarketingOff')
marketingOff.addEventListener('click', () => uppdateConsent('marketing', false))

const analyticsOn = document.querySelector('#AnalyticsOn')
analyticsOn.addEventListener('click', () => uppdateConsent('analytics', true))

const analyticsOff = document.querySelector('#AnalyticsOff')
analyticsOff.addEventListener('click', () => uppdateConsent('analytics', false))

const acceptAllBtn = document.querySelector('#AcceptAll')
acceptAllBtn.addEventListener('click', () => acceptAll())

const rejectAllBtn = document.querySelector('#RejectAll')
rejectAllBtn.addEventListener('click', () => declineAll())

const setFalseConsentBtn = document.querySelector('#SetFalseConsent')
setFalseConsentBtn.addEventListener('click', () => {
  setConsents({
    essential: false,
    analytics: true,
    marketing: true
  })
})

const setTrueConsentBtn = document.querySelector('#SetTrueConsent')
setTrueConsentBtn.addEventListener('click', () => {
  setConsents({
    essential: true,
    analytics: true,
    marketing: false
  })
})

const getConsentsBtn = document.querySelector('#GetConsents')
getConsentsBtn.addEventListener('click', () => {
  const stored = getConsents()
  console.log(`Current consents: ${JSON.stringify(stored)}`)
})

import { Trans } from '@lingui/macro'
import { AutoRow } from 'components/Row'
import { ExternalLink, ThemedText } from 'theme'

export default function Disclaimer() {
  return (
    <AutoRow style={{ flexWrap: 'nowrap', textAlign: 'left' }}>
      <ThemedText.BodySecondary fontSize={14} lineHeight="24px">
        <Trans>
          By connecting a wallet, you agree to Uniswap Labs’{' '}
          <ExternalLink href="https://uniswap.org/terms-of-service/">Terms of Service</ExternalLink> and consent to its{' '}
          <ExternalLink href="https://uniswap.org/privacy-policy">Privacy Policy</ExternalLink>.
        </Trans>
      </ThemedText.BodySecondary>
    </AutoRow>
  )
}

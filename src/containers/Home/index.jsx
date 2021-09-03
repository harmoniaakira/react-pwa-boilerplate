import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Container, Title } from './styles'

const Home = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Title color="primary" component="h1" variant="h4" gutterBottom>
        <Trans>{t('general.welcome')}</Trans>
      </Title>
    </Container>
  )
}

export default Home;

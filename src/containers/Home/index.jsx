import React, { useEffect } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Container, Title } from './styles'
import exampleService from '../../resources/example'

const Home = () => {
  const { t } = useTranslation()

  useEffect(() => {
    exampleService.all()
      .then(res => console.log('res: ', res))
  }, [])

  return (
    <Container>
      <Title color="primary" component="h1" variant="h4" gutterBottom>
        <Trans>{t('general.welcome')}</Trans>
      </Title>
    </Container>
  )
}

export default Home;

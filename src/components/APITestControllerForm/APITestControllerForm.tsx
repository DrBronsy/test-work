import React, {FC, useState, createContext} from 'react';

import { styled } from '@mui/material/styles';

import { Card, Tabs, Tab, Typography } from '@mui/material';

import VerificationForm from './../VerificationForm'
import SoundForm from './../SoundForm'
import SMSForm from './../SMSForm'

import './APITestControllerForm.scss'

type ITabOptions = {
  label: string
  value: string
  disabled?: boolean
}

const StyledTab = styled(Tab)({textTransform: 'none'})

const APITestControllerForm: FC = () => {

  const [tabValue, setTabValue] = useState<string>('verification')

  const handleChangeTab = (_: React.SyntheticEvent, tabValue: string) => {
    setTabValue(tabValue)
  }

  const tabsOptions: ITabOptions[] = [{
    label: 'Верификация',
    value: 'verification'
  },{
    label: 'Голосовое сообщение',
    value: 'sound'
  },{
    label: 'SMS',
    value: 'sms'
  },{
    label: 'IM Чат',
    value: 'im',
    disabled: true,
  },{
    label: 'Flash-звонок',
    value: 'flash',
    disabled: true,
  },{
    label: 'Информация о номере',
    value: 'info',
    disabled: true,
  },]

  return <div className='api-test-controller-form'>
    <Card variant='outlined'>
      <header className='api-test-controller-form__header'>
        <Typography variant='h6' component='h1' gutterBottom>Попробовать API</Typography>
        <Tabs value={tabValue} onChange={handleChangeTab}>
          {tabsOptions.map((tabOptions: ITabOptions) => <StyledTab {...tabOptions} key={tabOptions.value} />)}
        </Tabs>
      </header>
      <main className='api-test-controller-form__main'>

        <div hidden={tabValue !== 'verification'}>
            <VerificationForm />
        </div>

        <div hidden={tabValue !== 'sound'}>
            <SoundForm />
        </div>

        <div hidden={tabValue !== 'sms'}>
            <SMSForm />
        </div>

      </main>
    </Card>
  </div>
}

export default APITestControllerForm;
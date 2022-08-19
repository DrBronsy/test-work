import React, {FC, useState} from 'react';

import Grid from "@mui/material/Unstable_Grid2";
import {Button, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

import InputPhone from "../InputPhone";
import APITestPlayground from "../APITestPlayground";

const StyledButton = styled(Button)({textTransform: 'none', height: '40px'})

const VerificationForm: FC = () => {

  const [ formVerification, setFormVerification ] = useState<any>({
    phone: '',
    message: ''
  })

  const form = <form>
    <Grid container spacing={2}>
      <Grid xs={3}>
        <TextField
            value={formVerification?.phone}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(event: any) => setFormVerification({...formVerification, phone: event.target.value})}
        />
      </Grid>
      <Grid xs={5}>
        <TextField
            value={formVerification?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(event: any) => {
              setFormVerification({...formVerification, message: event.target.value})
            }}
        />
      </Grid>
      <Grid xs={4}>
        <StyledButton variant='contained' size='large' disableElevation>Отправить запрос</StyledButton>
      </Grid>
    </Grid>
  </form>

  return <APITestPlayground
      controls={form}
      apiDocUrl='https://google.com'
      text='curl -I https://www.google.com
            HTTP/1.1 200 OK
            Content-Type: text/html; charset=ISO-8859-1
            Date: Thu, 04 Jun 2020 15:07:42 GMT'
  />
}

export default VerificationForm;
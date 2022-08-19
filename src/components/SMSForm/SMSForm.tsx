import React, {FC, useState} from 'react';

import Grid from "@mui/material/Unstable_Grid2";
import {Button, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

import InputPhone from "../InputPhone";
import APITestPlayground from "../APITestPlayground";

const StyledButton = styled(Button)({textTransform: 'none', height: '40px'})

const SoundForm: FC = () => {

  const [ smsForm, setSmsForm ] = useState<any>({
    phone: '',
    message: ''
  })

  const form = <form>
    <Grid container spacing={2}>
      <Grid xs={3}>
        <TextField
          value={smsForm?.phone}
          variant='outlined'
          fullWidth
          size='small'
          onChange={(event: any) => setSmsForm({...smsForm, phone: event.target.value})}
        />
      </Grid>
      <Grid xs={5}>
        <TextField
            value={smsForm?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(event: any) => {
              setSmsForm({...smsForm, message: event.target.value})
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
            Date: Thu, 04 Jun 2020 15:07:42 GMT'
      />
}

export default SoundForm;
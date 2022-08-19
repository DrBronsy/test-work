import React, {FC} from 'react';

import {FormControl, OutlinedInput } from "@mui/material";
import {IMaskInput} from "react-imask";

import './InputPhone.scss'

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

interface IInputPhoneProps {
  value?: string
  onChange: (event: any) => void
}

const InputPhone: FC<IInputPhoneProps> = ({ value, onChange, ...props }: IInputPhoneProps) => {

  const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
      function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="+#(000) 000-0000"
                definitions={{
                  '#': /[1-9]/,
                }}
                inputRef={ref as any}
            />
        );
      },
  );

  return <FormControl
      variant='outlined'
      size='small'
      fullWidth
  >
    <OutlinedInput
      value={value}
      onChange={onChange}
      inputComponent={TextMaskCustom as any}
      {...props}
    />
  </FormControl>
}

export default InputPhone;
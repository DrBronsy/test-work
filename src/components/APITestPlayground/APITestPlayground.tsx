import React, {FC} from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { Card, Button, Tooltip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Stack from '@mui/material/Stack';

import './APITestPlayground.scss'

import {styled} from "@mui/material/styles";

interface IAPITestPlaygroundProps {
  controls?: JSX.Element
  apiDocUrl: string
  text?: string
}

const StyledButton = styled(Button)({textTransform: 'none'})

const APITestPlayground: FC<IAPITestPlaygroundProps> = ({ controls, text = '', apiDocUrl }: IAPITestPlaygroundProps) => {

  const [open, setOpen] = React.useState(false);

  return <div className='api-test-playground'>
    <div className='api-test-playground__controls'>
      {controls}
    </div>
    <div className='api-test-playground__code-area'>
      <Card variant="outlined">
        <CodeMirror
            className='api-test-playground__code-mirror'
            value={text}
            height="150px"
            editable={false}
            basicSetup={{
              lineNumbers: false,
            }}
            readOnly
        />
      </Card>
      <div className='api-test-playground__buttons'>
        <Stack direction="row" spacing={2}>
          <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={() => setOpen(false)}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Add"
          >
            <StyledButton
                variant="outlined"
                disableElevation
                startIcon={<CodeIcon />}
                size='small'
                onClick={() => navigator.clipboard.writeText(text)}
            >
              Копировать
            </StyledButton>
          </Tooltip>
          <StyledButton
              variant="outlined"
              disableElevation
              startIcon={<ContentCopyIcon />}
              href={apiDocUrl}
          >
            API док.
          </StyledButton>
        </Stack>
      </div>
    </div>
  </div>
}

export default APITestPlayground;
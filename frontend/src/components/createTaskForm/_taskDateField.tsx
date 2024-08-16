import { FC, ReactElement} from 'react';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from 'luxon';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { IDateField } from '../../interfaces/IDateField';


export const TaskDateField: FC<IDateField> = (props,): ReactElement => {
  
  const{value = DateTime.now(), disabled = false, onChange = (date: DateTime | null)=>{console.log(date)}} = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          disabled= {disabled}
          slots={{textField: (params) => (
            <TextField {...params} />
        )}}
        />
      </LocalizationProvider>
    </>
  );
};


import React, { FC, ReactElement, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';


export const TaskDateField: FC = (): ReactElement => {
  const [date, setDate] = useState<Date | null>(null);
  const defaultDate = new Date('2022-04-17');

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      ////<DatePicker label="Uncontrolled picker" defaultValue={defaultDate} />
        <DesktopDatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          slots={{textField: (params) => (
            <TextField {...params} />
        )}}
        />
      </LocalizationProvider>
    </>
  );
};

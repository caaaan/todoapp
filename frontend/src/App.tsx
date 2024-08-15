import React, {FC, ReactElement} from 'react';
import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/dashboard/dashboard';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools";


const queryClient = new QueryClient();;
const App:FC = (): ReactElement =>{
  return (
  <QueryClientProvider  client={queryClient}>
    <ThemeProvider theme= {customTheme}>
    <CssBaseline/>
      <Dashboard/>
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
  ); 
}

export default App;

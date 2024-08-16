import React, {FC, ReactElement} from 'react';
import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/dashboard/dashboard';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools";
import ComposeContext from './context/composeContext';
import { rootContext } from './context/rootContext';


const queryClient = new QueryClient();;
const App:FC = (): ReactElement =>{
  return (
  <QueryClientProvider  client={queryClient}>
    <ComposeContext components={rootContext}>
    <ThemeProvider theme= {customTheme}>
    <CssBaseline/>
      <Dashboard/>
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false}/>
    </ComposeContext>
  </QueryClientProvider>
  ); 
}

export default App;

import React, {FC, ReactElement} from 'react';
import { Grid } from '@mui/material';

export const Dashboard: FC = (): ReactElement =>{
 return (
    <Grid container minHeight="100vh" p={0} m={0}>
        <Grid item md={8} px={4}></Grid>
        <h2>Content Area</h2>
        <Grid item md={4} sx={{}}>
            <h2> Sidebar Area</h2>
        </Grid>
    </Grid>
 )
};
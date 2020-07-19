import React from 'react';
import Grid from '@material-ui/core/Grid';

import './style.css'

export default function uploadsuccessful(){
    return (
    <div>
        <div class="Upload">
            <Grid container spacing={2}>
                <Grid container item xs={12}>
                    <Grid item xs={1}></ Grid>
                    <Grid item xs={3} align-items-xs-center>
                        Upload Successful
                    </Grid>
                    <Grid item xs={6}></ Grid>
                    <Grid item xs={2} align-items-xs-right>
                        <button type="button" class="close" aria-label="Close"><span class="spantimes" aria-hidden="true">&times;</span></button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        <div class="Content">
            <Grid container spacing={2}>
                <Grid container item xs={12}>
                    <Grid item xs={2}></ Grid>
                    <Grid item xs={4} align-items-xs-center>
                        <br/>
                        <br/>
                        152PoolingMatrix.xls
                    </Grid>
                    <Grid item xs={2} align-items-xs-right>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid container item xs={12}>
                    <Grid item xs={6} align-items-xs-center>
                        <br/>
                        <br/>
                        <br/>
                        File uploaded successfully
                    </Grid>
                    <Grid item xs={4}></ Grid>
                    <Grid item xs={2} align-items-xs-right>
                        <br/>
                        <br/>
                        <br/>
                        <button class="endbuttons">Done</button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </div>
    )
}
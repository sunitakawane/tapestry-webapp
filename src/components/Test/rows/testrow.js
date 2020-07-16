import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


export default function TestIDRow(){
    return(
      <React.Fragment>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
          <br/>
          Test ID
          <br/>
          <br/>
          <br/>
          <br/>
  
          Test Conducted By
          <br/>
          <br/>
          <br/>
          <br/>
          Test Remarks
        </Grid>
        <Grid item xs={2}>
          <TextField id="outlined-basic" label="" variant="outlined" />
          <br/>
          <br/>
          <TextField id="outlined-basic" label="" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </React.Fragment>
    )
  }
  
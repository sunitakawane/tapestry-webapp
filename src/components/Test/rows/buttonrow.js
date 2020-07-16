import React from 'react';
import Grid from '@material-ui/core/Grid'
import Dropdown from '../dropdown/Dropdown';


export default function ButtonRow() {
    return (
      <React.Fragment>
        <Grid item xs={2}>
          <button class="normalbuttons">ADD Covid-19</button>
        </Grid>
        <Grid item xs={2}>
          <button class="normalbuttons">P12 BioTest</button>
        </Grid>
        <Grid item xs={2}>
          <button class="normalbuttons">ESP32CORO</button>
        </Grid>
        <Grid item xs={2}>
          <button class="normalbuttons">+ADD NEW KIT</button>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
          <Dropdown />
        </Grid>
      </React.Fragment>
    );
  }
  
  
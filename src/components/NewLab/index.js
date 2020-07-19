import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import './styles.css'
import Dropdown from './dropdown/Dropdown';

export default function NewLab(){
    return (
    <div>
        <div class="Parent">
            <Grid container spacing={4}>
                <Grid container item xs={12}>
                    <Grid item xs={1}></ Grid>
                    <Grid item xs={5} align-items-xs-center>
                        New Lab
                        <br/>
                    </Grid>
                    <Grid item xs={4}></ Grid>
                    <Grid item xs={2} align-items-xs-right>
                        <button type="button" class="close" aria-label="Close"><span class="spantimes" aria-hidden="true">&times;</span></button>
                        <br/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        <div class="Content">
            <Grid container spacing={4}>
                <Grid container item xs={12}>
                    <Grid item xs={1}></ Grid>
                    <Grid item xs={2} align-items-xs-center>
                        <br/>
                        Lab Name
                        <br/>
                        <br/>
                        <br/>
                        City
                    </Grid>
                    <Grid item xs={2}></ Grid>
                    <Grid item xs={6} align-items-xs-center>
                        <Dropdown/>
                        <br/>
                        <br/>
                        <TextField id="outlined-basic" label="" variant="outlined" />                     
                    </Grid>
                    <Grid item xs={1}></ Grid>
                </Grid>
                <Grid container item xs={12}>
                    <h4>Add Lab Members</h4>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={1}></ Grid>
                    <Grid item xs={2} align-items-xs-center>
                        <br/>
                        <br/>
                        <br/>
                        Name
                        <br/>
                        <br/>
                        <br/>
                        Designation
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Contact
                    </Grid>
                    <Grid item xs={1}></ Grid>
                    <Grid item xs={4} align-items-xs-center>
                        <br/>
                        <TextField id="outlined-basic" label="" variant="outlined" />                     
                        <br/>
                        <br/>
                        <TextField id="outlined-basic" label="" variant="outlined" />                 
                        <br/>
                        <br/>
                        <TextField id="outlined-basic" label="" variant="outlined" />                 
                    </Grid>
                    <Grid item xs={1}></ Grid>
                    <Grid item xs={3} align-items-xs-center>
                        <br/>
                        <button class="normalbuttons">+ADD </button>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <TextField id="outlined-basic" label="" variant="outlined" />                 
                    </Grid>
                </Grid> 
            </Grid>  
            <Grid container spacing={4}>
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <hr style={{color: '#F2F2F2', backgroundColor: '#F2F2F2',height: .01,borderColor : '#F2F2F2'}}/>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={3}>
                        <button class="endbuttons">Close</button>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3}>
                        <button class="endbuttons">ADD LAB</button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </div>
    )
}
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import './styles.scss'
import LabelRow from './rows/labelsrow';
import TestIDRow from './rows/testrow';
import ButtonRow from './rows/buttonrow';

function Test() {
  return (
    <div>
      <div class="RectangleParent">
        <Grid container spacing={1}>
          <Grid container item xs={12}>
            <Grid item xs={4} align-items-xs-right>
              <button type="button" class="close" aria-label="Close"><span class="spantimes" aria-hidden="true">&times;</span></button>
            </Grid>
            <Grid item xs={1}></ Grid>
            <Grid item xs={4} align-items-xs-center>Test Configuration</Grid>
            <Grid item xs={3}></ Grid>
          </Grid>
        </Grid>
      </div>
      <div class="Rectangle1">
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={2}>
            <LabelRow />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <ButtonRow />
          </Grid>
        </Grid>        
      </div>
      <div class="Rectangle2">
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={2}>
            <TestIDRow/>
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={4}>
            </ Grid>
            <Grid item xs={4}>
              <TextareaAutosize aria-label="minimum height" rowsMin={6} colMin={6} placeholder="Write remakrs here" />;
            </Grid>
            <Grid item xs={4}>
            </Grid>
          </Grid>
         <Grid container item xs={12} spacing={2}>
            <Grid item xs={5}>
            </ Grid>
            <Grid item xs={4}>
              <button class="downloadpoolingmatrix">Download Pooling matrix</button>
            </Grid>
            <Grid item xs={3}>
            </Grid>
          </Grid>
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
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2}>
              <button class="endbuttons">Close</button>
            </Grid>
            <Grid item xs={7}>
            </Grid>
            <Grid item xs={2}>
              <button class="endbuttons">Done</button>
            </Grid>
          </Grid>
        </Grid>
        
      </div>
    </div>
    );
}

export default Test;
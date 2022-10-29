import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const CommonLayout = () => {
  return <Grid container>
    <Grid item sm={12}>
      <Typography variant='h1'><Box textAlign="center">Digiappstore React Component List</Box></Typography>
    </Grid>
  </Grid>
}

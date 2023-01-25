import React from 'react'
import {CssBaseline, Container ,Grid, AppBar, Toolbar, Typography, Button, IconButton  } from '@material-ui/core/'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root : {
    flexGrow : 1,
  },
  menuButton : {
    marginRight : theme.spacing(2)
  },
  title:{
    flexGrow :1,
  },
  container : {
    marginTop : theme.spacing(3)
  }
})

const App = () => {
  const classes = useStyles();
  return 
 
(
<>
 <CssBaseline/>
 <Container maxWidth="lg"/>
 <Grid/>
 <AppBar position='static' color='inherit' elevation={0}/>
 <Toolbar>
 <IconButton edge="start" className={classes.container}/>
 <Toolbar/> 
 <Typography/>
 <Button/>
 <IconButton/>
</>
)  
};

export default App
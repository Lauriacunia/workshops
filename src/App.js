import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Animation from './components/Animation';
import './App.css';

const useStyles = makeStyles({
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff952",
    backgroudColor: "transparent",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#ff63b1",
    backgroudColor: "transparent",
  }
  
});


const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      
      <Container className= {classes.titleContainer}>
        <Typography variant="h3" gutterBottom>
          Workshops • Cursos
        </Typography>
        <Typography variant="h6" gutterBottom>
          Laura Acuña. Fullstack developer
        </Typography>
        <Animation />
      </Container>
      <Container className= {classes.listContainer}>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>

      </Container> 
    </div>
  );
}

export default App;

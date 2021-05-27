import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Animation from './components/Animation';
import './App.css';


const cursos = [
  `Curso de Programación en Java. Centro de Formación Profesional Nro 27 GCBA. Anual. Marzo 2019`,
  `Desarrollo Backend en ADA ITW. Bootcamp intensivo. Contenidos: Programación con Java 8, OOP, Bases de Datos SQL y noSQL, APIRest con SpringBoot, GIT, Deploy de Apps, Testing de Aplicaciones. Carga horaria: 400 hs. Febrero-Agosto 2020.`,
  `Desarrollo Frontend en ADA ITW. Bootcamp intensivo. Contenidos:  HTML5, CSS3, SASS, JavaScript (DOM, Ajax),  React, Responsive Design. Carga Horaria: 400 hs. Agosto 2020- Mayo 2021.`,
  `Curso de MongoDB Fundamentos. Educación IT. Carga Horaria: 9 hs. Noviembre 2020.`,
   `Kotlin y Android. Udemy. Julio 2020.`,
  `Curso de Inglés para desarrollo de softwares. Polotic. 12 hs. Julio 2020.`,
  `Curso Metodología ágil: SCRUM. 8 Hs. Polotic. Julio 2020`,
   `Curso Desarrollo Web Full-Stack con JAVA. 72 Hs. Polotic. Julio 2020..`,
  `NodeJs y MongoDB. Educación IT. Carga Horaria: 18 hs. Diciembre 2020.`,
  `Curso de MongoDB. Código Facilito Carga Horaria: 5 hs. Julio 2020.`,
  `Participación en la primera edición de la Adathon. Hackathon. Diciembre 2020.`,
  `Curso de ReactJs. Educación IT. Carga Horaria: 18 hs. Febrero 2021.`,
  `Curso Introducción a Bases de Datos SQL. Educación IT. Carga Horaria: 18 hs. Enero 2021.`,
  `Curso Introducción a la Seguridad Informática.  Educación IT. Carga Horaria: 18 hs. Enero 2021.`,
  `Curso Criptografía y Blockchain.  Educación IT. Carga Horaria: 18 hs. Enero 2021.`,
  `Curso Ethical Hacking.  Educación IT. Carga Horaria: 18 hs. Enero 2021.`,
  `Curso Introducción a Linux.  Educación IT. Carga Horaria: 18 hs. Enero 2021.`,
  ];

const useStyles = makeStyles({
  titleContainer: {
    display: "flex",  
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff952",
    marginBottom: 50,
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#ff63b1",
    backgroudColor: "transparent",
    marginBottom: 100,
  },
 
  
});


const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      
      <Container  maxWidth="xl"
                  className= {classes.titleContainer}>      
          <Animation />
          <Typography variant="h3" gutterBottom>
            Workshops • Cursos
          </Typography>
          <Typography variant="h6" gutterBottom>
            Laura Acuña. Fullstack developer
          </Typography>   
      </Container>
     
      <Container maxWidth="xl"
                 className= {classes.listContainer}>
        {
          cursos.map( curso => {
             return (
                 <React.Fragment key={curso}> 
                    <Typography variant="body1" gutterBottom>
                        {`• ${curso}`}
                    </Typography>   
                 </React.Fragment>
               )
              })
          }       
      </Container> 
    </div>
  );
}

export default App;

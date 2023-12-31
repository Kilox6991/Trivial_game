
import StartPage from "./js/StartPage.js";
import Preguntas from "./js/Preguntas.js";
import PantallaFin from "./js/PantallaFin.js";



class Game {
  constructor() {

    this.score = 0

    this.questions = []
  this.correctAnswers = ''
  this.incorrectAnswers =[]
  this.allAnswers= []
    this.container = document.createElement('div')
    document.body.append(this.container)
    this.currentPage = undefined;

    this.load(new StartPage(this));
  }


  start() {
    this.score = 0
    this.bringQuestions()
  }


  updateRightAnswer() {

    this.load(new PantallaFin(this))
  }

  load(page) {

    this.container.innerHTML = ""
    this.currentPage = page;
    this.container.innerHTML = "";
    page.render();

  }

  bringQuestions() {
    fetch('https://the-trivia-api.com/v2/questions')

    .then((res) => res.json())
    .then((data) => {
      for ( let i=0; i < data.length; i++){
       this.questions.push(data[i].question.text)
        this.incorrectAnswers.push(data[i].incorrectAnswers) 
        this.correctAnswers.push(data[i].correctAnswers)
 
    }this.allAnswers= this.incorrectAnswers.push(this.correctAnswers) 
   
   }
    ) 
     }
       
         }
 



}

export default Game

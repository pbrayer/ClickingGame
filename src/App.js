import React, { Component } from "react";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import pics from "./pics.json";
import Card from "./components/Card";

let chosen = [] //Kind of cheating by using this array

class App extends Component {
  // Setting this.state.pics to the pics json array, score and topScore to 0
  state = {
    pics,
    score: 0,
    topScore: 0,
  };

  handleScoreChange = () => {
    // Increments score
    this.setState({ score: this.state.score + 1})
  };

  handleTopScoreChange = () => { //Checks at end of game to see if score > topScore
    if(this.state.score >= this.state.topScore){
      this.setState({topScore: this.state.score})
    }
  }

  shuffle(a) { //I found this on Stack Overflow, what a fantastic site! :D es6 too...
    for (let i = this.state.pics.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  randomizePics = id => {

if (chosen.includes(id)){ //If statement here handles all the logic of the game
    alert("You lose!")
    chosen = []
    this.setState({
      score: 0
    })
    this.handleTopScoreChange()
}
else{
    chosen.push(id)
    this.handleScoreChange()
}

    const pics = this.shuffle(this.state.pics)
    console.log(pics)
    
    // Set this.state.friends equal to the new friends array
    this.setState({ pics });
  };

render() { //Probably more HTML than I need here but still getting used to components
  return (
      <div className = "container"> 
        <div className = "jumbotron">
        <h1>Best Clicky Game 2019</h1>
        <hr></hr>
        <h4>Click on an image below to get started</h4>
        <h4>Score: {this.state.score} | Top Score: {this.state.topScore}</h4>
        </div>
        <Wrapper>
        {this.state.pics.map(pic => ( //Similar function to what we had used from class
          <Card
            randomizePics={this.randomizePics}
            id={pic.id}
            image={pic.image}
          />
        ))}
        </Wrapper>
        <Footer />
      </div>
  );
}
}

export default App;

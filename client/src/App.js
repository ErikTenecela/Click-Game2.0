import React, { Component } from "react";
import Score from "./Component/Score";
import Thumbnail from "./Component/Thumbnail";

class App extends Component {
  state = {
    title: [
      "//miro.medium.com/max/3840/1*uyH-s_kUofX3jUegQEF2Eg.jpeg",
      "//miro.medium.com/max/6880/1*iJMamLWhc3Z_dnHgWa8qEA.png",
      "//cdn.dribbble.com/users/542205/screenshots/4423882/rick_and_morthy_colour.jpg",
      "//miro.medium.com/max/3840/1*wHA1s55Ac64idQsvo8okbA.jpeg",
      "//miro.medium.com/max/650/1*1zFpVtGXL84YYv74cAskmg.jpeg",
      "//miro.medium.com/max/3840/1*yQqQaFZsShv8WhQECUZZ1w.jpeg",
      "//fsmedia.imgix.net/f6/d0/44/ee/0f37/429e/a534/ef5ac2e50e13/rickmortycufeaturejpg.jpeg?rect=0%2C86%2C1801%2C900&auto=format%2Ccompress&dpr=2&w=650",
      "//cdn-images-1.medium.com/max/1600/1*UeOXKrCupfCW4HrUzvnJcA.jpeg",
      "//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RK4TqpqAeFTypydyOdoGMzX6j4UD1BIeXhthGBqt4Fn37Zo0ug&s",
      "//miro.medium.com/max/2242/1*A8DASIeuGPPhNhwBvSgxPw.png"
    ],
    score: 0,
    topScore: 0
  };

  // const newShuffle = this.state.title.sort(() => 0.5 - Math.random());

  clickedTitles = [];
  handleTitleClick = e => {
    //record click
    //test for match
    const clickedTile = e.target.src;

    if (this.clickedTitles.includes(clickedTile)) {
      this.clickedTitles.length = 0;
      this.setState({ score: 0 });

      return;
    }
    const newScore = this.state.score + 1;
    const topScore =
      newScore > this.state.topScore ? newScore : this.state.topScore;

    this.clickedTitles.push(clickedTile);

    const shuffled = this.state.title.sort(() => 0.5 - Math.random());
    this.setState({
      title: shuffled,
      score: newScore,
      topScore: topScore
    });
  };
  render() {
    return (
      <div className="App">
        <Score score={this.state.score} topScore={this.state.topScore} />
        {this.state.title.map((titles, index) => (
          <Thumbnail src={titles} key={index} onClick={this.handleTitleClick} />
        ))}
      </div>
    );
  }
}

export default App;

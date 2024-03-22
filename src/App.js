import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "123e12ed",
        },
        {
          name: "Frank",
          id: "2123wew12",
        },
        {
          name: "Jacky",
          id: "123e12ddas",
        },
        {
          name: "Andrei",
          id: "123e12dsasd",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>;
        })}
      </div>
    );
  }
}

export default App;

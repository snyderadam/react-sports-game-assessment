import React from 'react';
import Game from "./components/game/Game.js";
import "./index.css";

import './App.css';

function App(props) {
  
  const youngAmericans = {
    name: 'Young Americans',
    logo: 'https://whythebeatlesarestillrelevant.files.wordpress.com/2019/06/young-americans.jpg'
}
const dogs = {
    name: 'Diamond Dogs',
    logo: 'https://i.ytimg.com/vi/eHTj8jBZWo8/maxresdefault.jpg'
}
const star = {
    name: 'Star Men',
    logo: 'https://i2.wp.com/auralcrave.com/wp-content/uploads/2018/02/bowie.jpg?fit=915%2C515&ssl=1'
}
const hunky = {
    name: 'Hunky Dories',
    logo: 'https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/2015/01/02/cd601ca851418bfbccd35bea91496a8f.jpg?itok=GJHnPLz0'
}
  return (
    <div className="App">
            <Game
                homeTeam={youngAmericans}
                visitingTeam={dogs}
                venue='Outer Space' />
            <Game
                homeTeam={star}
                visitingTeam={hunky}
                venue='Subterranea' />
    </div>
  );
}

export default App;

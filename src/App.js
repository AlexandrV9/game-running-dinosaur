import './App.css';
import { useState } from "react";



function App() {

  const [isClick, setIsClick] = useState(false);

  // const dino = document.querySelector('.dino');
  // const cactus = document.querySelector('.cactus');

  document.addEventListener("keydown", (event) => {
      if(event.code === "Space") {
          setIsClick(true);
      }

      setTimeout(() => {
          setIsClick(false);
      }, 500);
  });

  let isAlive = setInterval(() => {
      let dinoTop = parseInt(window.getComputedStyle(document.querySelector('.dino')).getPropertyValue("bottom"));
      let cactusLeft = parseInt(window.getComputedStyle(document.querySelector('.cactus')).getPropertyValue("right"))
      if(cactusLeft < 50 && cactusLeft > 0 && dinoTop <= 50 ){
          alert("Игра окончена")
      }
  },20);


  return (
    <div className="App">

      <div className="game">
          <div className={`dino ${isClick ? 'jump': ''}`} />
          <div className="cactus" />
      </div>



    </div>
  );
}

export default App;

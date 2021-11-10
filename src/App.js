import './App.css';
import { useEffect, useRef, useState} from "react";

function App() {

  const [isClick, setIsClick] = useState(false);
  const [jumpSpeed, setJumpSpeed] = useState(2);
  const [cactusSpeed, setCactusSpeed] = useState(5);
  const [jumpSpeedClass, setJumpSpeedClass] = useState('jump2');
  const [timeOut, setTimeOut] = useState(2000);

  const dinoRef = useRef(null);
  const cactusRef = useRef(null);

  document.addEventListener("keydown", (event) => {
      if(event.code === "Space") {
          setIsClick(true);
      }

      setTimeout(() => {
          setIsClick(false);
      }, timeOut);
  });

  let isAlive = setInterval(() => {
      if(!dinoRef.current && !cactusRef.current) return;
      let dinoTop = parseInt(window.getComputedStyle(dinoRef.current).getPropertyValue("bottom"));
      let cactusLeft = parseInt(window.getComputedStyle(cactusRef.current).getPropertyValue("right"))
      if(cactusLeft < 50 && cactusLeft > 0 && dinoTop <= 50 ){
          alert("Игра окончена")
      }
  },20);

  const handleChangeJumpSpeed = (event) => {
      setJumpSpeed(event.target.value);
      // dinoRef.current.style.animationDuration = event.target.value + 's';
      switch (Number(event.target.value)){
          case 0.5:
              setJumpSpeedClass('jump1');
              break;
          case 1:
              setJumpSpeedClass('jump2');
              break;
          case 1.5:
              setJumpSpeedClass('jump3');
              break;
          case 2:
              setJumpSpeedClass('jump4');
              break;
          case 2.5:
              setJumpSpeedClass('jump5');
              break;
          case 3:
              setJumpSpeedClass('jump6');
              break;
      }
      console.log((event.target.value /2)*1000);
      setTimeOut((event.target.value /2)*1000);
  };

  const handleChangeCactusSpeed = (event) => {
      setCactusSpeed(event.target.value);
      cactusRef.current.style.animationDuration = event.target.value + 's';
  };

  useEffect(() => {
      setJumpSpeedClass('jump4');
  },[])

  return (
    <div className="App">

      <div className="game">
          <div className={`dino ${isClick ? jumpSpeedClass: ''}`} ref={dinoRef}/>
          <div className="cactus" ref={cactusRef}/>
      </div>

      <div className={'settings'}>
          <h2 className={'settings__text'}>Настройте свою игру</h2>
          <div className={'settings__wrapper'}>

              <p>Скорость прыжка динозавра: <span>{jumpSpeed}</span></p>
              <input
                  type={'range'}
                  className={'settings__input-jump-speed'}
                  onChange={handleChangeJumpSpeed}
                  value={jumpSpeed}
                  min={0.5}
                  max={4}
                  step={0.5}
              />


              <p>Скорость движения кактуса: <span>{cactusSpeed}</span></p>
              <input
                  type={'range'}
                  className={'settings__input-cactus-speed'}
                  onChange={handleChangeCactusSpeed}
                  value={cactusSpeed}
                  min={1}
                  max={10}
              />

          </div>

      </div>


    </div>
  );
}

export default App;

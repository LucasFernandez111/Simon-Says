import { useEffect, useState } from "react";
import ColorCard from "./ColorCard";

function SimonDice() {
  const colors = ["red", "green", "blue", "yellow"];

  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [colorCurrent, setColorCurrent] = useState(null);
  const [score, setScore] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const addNewColor = () => {
    const numberRandom = Math.floor(Math.random() * 4);
    const colorRandom = colors[numberRandom];
    const newSequence = [...sequence, colorRandom];

    setSequence(newSequence);
  };

  const handleStartGame = () => {
    setGameStart(true);

    addNewColor();
  };

  const showSequence = () => {
    let delay = 800;
    sequence.forEach((color, index) => {
      setTimeout(() => {
        setColorCurrent(color);
        setTimeout(() => {
          setColorCurrent(null);
        }, 400);
      }, delay);
      delay += 900;
    });
  };

  const handleClick = (color) => {
    setPlayerSequence([...playerSequence, color]);
  };

  const checkSequence = () => {
    let gameOver = false;

    playerSequence.forEach((item, i) => {
      if (item != sequence[i]) {
        gameOver = true;
        setGameStart(false);
        setScore(0);
        setGameOver(true);
        return;
      }
    });

    if (!gameOver) {
      if (playerSequence.length === sequence.length) {
        setScore(score + 1);
        setPlayerSequence([]);

        addNewColor();
      }
    }
  };

  useEffect(() => {
    if (playerSequence.length <= 0) return;
    checkSequence();
  }, [playerSequence, sequence]);

  useEffect(() => {
    showSequence(); //Muestra la secuencia ;
  }, [sequence]);

  return (
    <div className="flex justify-center items-center bg-neutral-900 w-screen h-screen ">
      <div className="relative flex flex-col justify-center items-center">
        <div>
          <ColorCard
            border="rounded-tl-full"
            color="red"
            colorCurrent={colorCurrent}
            handleClick={handleClick}
          />
          <ColorCard
            border="rounded-tr-full"
            color="green"
            colorCurrent={colorCurrent}
            handleClick={handleClick}
          />
        </div>
        <div>
          <ColorCard
            border="rounded-bl-full"
            color="blue"
            colorCurrent={colorCurrent}
            handleClick={handleClick}
          />
          <ColorCard
            border="rounded-br-full"
            color="yellow"
            colorCurrent={colorCurrent}
            handleClick={handleClick}
          />
        </div>
      </div>
      <button
        className="absolute bg-neutral-900 text-white text-xl  font-bold rounded-full w-[120px] h-[120px] duration-200 hover:scale-105"
        onClick={handleStartGame}
      >
        {gameStart ? score : "START"}
      </button>
    </div>
  );
}

export default SimonDice;

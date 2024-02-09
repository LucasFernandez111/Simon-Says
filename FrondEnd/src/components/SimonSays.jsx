import { useEffect, useState } from "react";
import ColorCard from "./ColorCard";
import { useNavigate } from "react-router-dom";

import React from "react";
import axios from "../api/axios";

const SimonSays = () => {
  const colors = ["red", "green", "blue", "yellow"];
  const navigate = useNavigate();
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [colorCurrent, setColorCurrent] = useState(null);
  const [score, setScore] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [scoreMax, setScoreMax] = useState(0);
  const [userData, setUserData] = useState({ username: "", score: "" });

  const logOut = async () => {
    try {
      const response = await axios.get("/logout");
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
      if (item == sequence[i]) {
        return;
      }
      gameOver = true;
      setGameStart(false);
      setPlayerSequence([]);
      setSequence([]);
      setScore(0);
      setGameOver(true);
      return;
    });

    if (!(!gameOver && playerSequence.length === sequence.length)) {
      return;
    }
    setScore(score + 1);
    setPlayerSequence([]);

    addNewColor();
  };

  const getData = async () => {
    try {
      const { data } = await axios.get("/datauser");
      setUserData(data.data);
      setScoreMax(data.data.score);
    } catch (error) {}
  };

  const updateProgress = async () => {
    try {
      const response = await axios.put("/updateScore", { score });
      console.log(response);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (score > scoreMax) updateProgress();
  }, [score]);
  useEffect(() => {
    if (playerSequence.length <= 0) return;
    checkSequence();
  }, [playerSequence, sequence]);

  useEffect(() => {
    if (gameStart) {
      showSequence();
    }
  }, [sequence]);

  useEffect(() => {
    getData();
  });

  return (
    <div className="flex justify-center items-center flex-col gap-2 bg-neutral-900 w-screen h-screen ">
      <h1 className="absolute left-6 top-6 font-semibold text-white  p-2 rounded-xl">
        Usuario: {userData.username}
      </h1>
      <button
        onClick={logOut}
        className="absolute right-6 top-6 font-semibold text-white bg-gradient-to-r from-yellow-500 via-red-500 to-emerald-500 p-2 rounded-xl"
      >
        Log Out
      </button>
      <div>
        <h1 className="font-semibold text-white ">SCORE MAX : {scoreMax}</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <div>
          <ColorCard
            bg="bg-red-500"
            border="rounded-tl-full"
            color="red"
            colorCurrent={colorCurrent}
            handleClick={handleClick}
          />
          <ColorCard
            bg="bg-green-500"
            border="rounded-tr-full"
            color="green"
            colorCurrent={colorCurrent}
            handleClick={handleClick}
          />
        </div>
        <div>
          <ColorCard
            bg="bg-blue-500"
            border="rounded-bl-full"
            color="blue"
            colorCurrent={colorCurrent}
            handleClick={handleClick}
          />
          <ColorCard
            bg="bg-yellow-500"
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
};

export default SimonSays;

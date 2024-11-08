import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";
import { getRandomItemsFromArray } from "./function/getRandomItem";
import Info from "./components/info";
import cardsData from "./data/cards";
import info from "./assets/light-bulb.png";

const copy = cardsData;

function App() {
  const [isActive, setIsActive] = useState(true);
  const [roundKey, setRoundKey] = useState(1);
  const [levelScore, setLevelScore] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [data, setData] = useState(copy);
  const [level, setLevel] = useState(4);
  const [currData, setCurrData] = useState([]);
  const [stage, setStage] = useState(1);
  const [show, setShow] = useState(false);

  const finalStage = 6;

  // useEffect(() => {
  //   async function fetchData() {
  //     const cardsData = await populateData();
  //     setData(cardsData);
  //   }
  //   fetchData();
  // }, []);

  // console.log(data);

  useEffect(() => {
    setRoundKey((prevKey) => prevKey + 1);
    const randomData = getRandomItemsFromArray(data, level);
    setCurrData(randomData);
  }, [level]);

  console.log(currData);

  function shuffle() {
    const copyArray = [...currData];
    for (let i = copyArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [copyArray[i], copyArray[randomIndex]] = [
        copyArray[randomIndex],
        copyArray[i],
      ];
    }
    setCurrData(copyArray);
  }

  function startNewRound() {
    setRoundKey((prevKey) => prevKey + 1);
    setScore(0);
    setLevel(4);
    setLevelScore(0);
    const randomData = getRandomItemsFromArray(data, level);
    setCurrData(randomData);
    setIsActive(true);
    setStage(1);
  }

  function gameOver() {
    score > bestScore && setBestScore(score);
    setCurrData([]);
    setIsActive(false);

    setTimeout(() => {
      startNewRound();
      alert("game over");
    }, 0);
  }

  function increaseScore() {
    setScore(score + 1);
    setLevelScore(levelScore + 1);
  }

  if (levelScore === level) {
    setLevel(level + 2);
    setLevelScore(0);
    setStage(stage + 1);
  }

  stage === finalStage && alert("ALL CLEAR");

  function showInfo() {
    show ? setShow(false) : setShow(true);
  }

  function closedInfo() {
    setShow(false);
  }

  return (
    <>
      <nav>
        <button id="Info" onClick={showInfo}>
          <img src={info} alt="" id="light" />
        </button>
      </nav>
      {show && <Info closedInfo={closedInfo} />}
      <header>
        <span>Cards </span>
        <span id="sec">Memo</span>
      </header>
      <div className="score-board">
        <h1>
          <u>SCORE: {score} </u>
        </h1>
        <hr />
        <h1>
          <u>BEST SCORE: {bestScore}</u>
        </h1>
        <hr />
        <h1>
          <u>
            LEVEL: {stage} / {6}
          </u>
        </h1>
      </div>
      <div className="cards-container">
        {currData.map((data) => {
          // console.log(data.id);
          return (
            <Card
              key={`${data.id}-${roundKey}`}
              name={data.name}
              image={data.image}
              shuffle={shuffle}
              gameOver={gameOver}
              increaseScore={increaseScore}
              isActive={isActive}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./card.css";

function Card(props) {
  const [isClicked, setIsClicked] = useState(false);
  const imgSrc = "../assets/" + props.image;

  useEffect(() => {
    setIsClicked(false);
  }, [props.key]);

  if (!props.isActive) return;

  function handleClick() {
    if (isClicked) {
      props.gameOver();
    } else {
      setIsClicked(true);
      props.increaseScore();
    }
    props.shuffle();
  }

  return (
    <button onClick={handleClick}>
      <img src={props.image} alt="" />
      <div className="block"></div>
      <p>{props.name}</p>
    </button>
  );
}

export default Card;

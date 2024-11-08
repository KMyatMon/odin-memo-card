import "./info.css";

function Info({ closedInfo }) {
  return (
    <div className="blur-background">
      <button onClick={closedInfo} id="how-to-play">
        <h1>How to Play?</h1>
        <p>
          In each level, the number of cards will increase by 2. You can only
          click on the same card once, and once you click it, the cards will
          randomly shuffle. Then, you will continue clicking the cards that you
          haven't picked before. Have fun!
        </p>
      </button>
    </div>
  );
}

export default Info;

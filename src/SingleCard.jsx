import React, { useState } from "react";

function SingleCard() {

    const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped(prev => !prev)
  };

  return (
    <div className={`card${flipped ? ' flipped':''}`} onClick={handleClick}>
      <img className="figure" src="/img/potion.png" alt="figure" />
      <img className="cover" src="/img/cover.png" alt="cover"  />
    </div>
  );
}

export default SingleCard;

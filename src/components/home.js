import React from "react";
import {
  Card,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
} from "./cardsPreview.js";

const Home = () => {
  
  return (
    <div>
      <div className="card-group">
        <Card
          id={card1.id}
          src={card1.src}
          title={card1.title}
          text={card1.text}
          link={"/Card1#AnchorTag"}
        />
        <Card
          id={card2.id}
          src={card2.src}
          title={card2.title}
          text={card2.text}
          link={"/Card2#AnchorTag"}
        />
        <Card
          id={card3.id}
          src={card3.src}
          title={card3.title}
          text={card3.text}
          link={"/Card3#AnchorTag"}
        />
        <Card
          id={card4.id}
          src={card4.src}
          title={card4.title}
          text={card4.text}
          link={"/Card4#AnchorTag"}
        />
      </div>
      <div className="card-group">
        <Card
          id={card5.id}
          src={card5.src}
          title={card5.title}
          text={card5.text}
          link={"/Card5#AnchorTag"}
        />
        <Card
          id={card6.id}
          src={card6.src}
          title={card6.title}
          text={card6.text}
          link={"/Card6#AnchorTag"}
        />
        <Card
          id={card7.id}
          src={card7.src}
          title={card7.title}
          text={card7.text}
          link={"/Card7#AnchorTag"}
        />
        <Card
          id={card8.id}
          src={card8.src}
          title={card8.title}
          text={card8.text}
          link={"/Card8#AnchorTag"}
        />
      </div>
    </div>
  );
};
export default Home;

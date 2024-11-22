import { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [cards, setCards] = useState([
    { id: 0, name: "Daenerys Targaryen", status: "", img: "/images/01.jpg" },
    { id: 0, name: "Daenerys Targaryen", status: "", img: "/images/01.jpg" },
    { id: 1, name: "Tyrion Lannister", status: "", img: "/images/02.jpg" },
    { id: 1, name: "Tyrion Lannister", status: "", img: "/images/02.jpg" },
    { id: 2, name: "Jon Snow", status: "", img: "/images/03.png" },
    { id: 2, name: "Jon Snow", status: "", img: "/images/03.png" },
    { id: 3, name: "Joffrey Baratheon", status: "", img: "/images/04.jpg" },
    { id: 3, name: "Joffrey Baratheon", status: "", img: "/images/04.jpg" },
    { id: 4, name: "Cersei Lannister", status: "", img: "/images/05.jpg" },
    { id: 4, name: "Cersei Lannister", status: "", img: "/images/05.jpg" },
    { id: 5, name: "Ed Stark", status: "", img: "/images/06.jpg" },
    { id: 5, name: "Ed Stark", status: "", img: "/images/06.jpg" },
    { id: 6, name: "Tywin Lannister", status: "", img: "/images/07.jpg" },
    { id: 6, name: "Tywin Lannister", status: "", img: "/images/07.jpg" },
    { id: 0, name: "Sandor Clegane", status: "", img: "/images/08.jpg" },
    { id: 0, name: "Sandor Clegane", status: "", img: "/images/08.jpg" },
  ]);

  const allCards = cards.map((card, index) => <Card key={index} {...card} />);

  return (

    <div className="container">
      {allCards}
    </div>
  );
};

export default Cards;

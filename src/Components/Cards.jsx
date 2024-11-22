import { useRef, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [cards, setCards] = useState(
    [
      {
        id: 0,
        name: "Daenerys Targaryen",
        status: "",
        img: "/images/01.jpg",
      },
      {
        id: 0,
        name: "Daenerys Targaryen",
        status: "",
        img: "/images/01.jpg",
      },
      {
        id: 1,
        name: "Tyrion Lannister",
        status: "",
        img: "/images/02.jpg",
      },
      {
        id: 1,
        name: "Tyrion Lannister",
        status: "",
        img: "/images/02.jpg",
      },
      {
        id: 2,
        name: "Jon Snow",
        status: "",
        img: "/images/03.png",
      },
      {
        id: 2,
        name: "Jon Snow",
        status: "",
        img: "/images/03.png",
      },
      {
        id: 3,
        name: "Joffrey Baratheon",
        status: "",
        img: "/images/04.jpg",
      },
      {
        id: 3,
        name: "Joffrey Baratheon",
        status: "",
        img: "/images/04.jpg",
      },
      {
        id: 4,
        name: "Cersei Lannister",
        status: "",
        img: "/images/05.jpg",
      },
      {
        id: 4,
        name: "Cersei Lannister",
        status: "",
        img: "/images/05.jpg",
      },
      {
        id: 5,
        name: "Ed Stark",
        status: "",
        img: "/images/06.jpg",
      },
      {
        id: 5,
        name: "Ed Stark",
        status: "",
        img: "/images/06.jpg",
      },
      {
        id: 6,
        name: "Tywin Lannister",
        status: "",
        img: "/images/07.jpg",
      },
      {
        id: 6,
        name: "Tywin Lannister",
        status: "",
        img: "/images/07.jpg",
      },
      {
        id: 7,
        name: "Sandor Clegane",
        status: "",
        img: "/images/08.jpg",
      },
      {
        id: 7,
        name: "Sandor Clegane",
        status: "",
        img: "/images/08.jpg",
      },
    ].sort(() => Math.random() - 0.5)
  );

  const [prevCard, setPrevCard] = useState(-1);
  const prevIndex = useRef(-1);

  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[prevCard].id) {
      cards[prevCard].status = "active matched";
      cards[currentCard].status = "active matched";
      setPrevCard(-1);
    } else {
      cards[currentCard].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        setPrevCard(-1);
        cards[currentCard].status = "unmatch";
        cards[prevCard].status = "unmatch";
        setCards([...cards]);
      }, 1000);
    }
  };

  const handleClick = (index) => {
    if (index !== prevIndex.current) {
      if (cards[index].status === "active matched") {
        alert("already matched");
      } else {
        if (prevCard === -1) {
          prevIndex.current = index;
          cards[index].status = "active";
          setCards([...cards]);
          setPrevCard(index);
        } else {
          matchCheck(index);
          prevIndex.current = -1;
        }
      }
    } else {
      alert("card currently selected");
    }
  };

  const allCards = cards.map((card, index) => (
    <Card key={index} {...card} index={index} handleClick={handleClick} />
  ));

  return <div className="container">{allCards}</div>;
};

export default Cards;

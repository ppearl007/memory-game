const Card = ({ id, name, status, img, index, handleClick }) => {

  return (
    <div className={`card ${status}`} onClick={() => handleClick(index)}>
      <img src={img} alt={name} />
    </div>
  );
};

export default Card;
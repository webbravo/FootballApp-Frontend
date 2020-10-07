import React from "react";

const BetButton = ({ value, index, label_name, onClickBtn }) => {
  const [isActive, setActive] = useState(false);

  const clicked = () => {
    isActive === true ? setActive(false) : setActive(true);
    onClickBtn(value.value);
  };

  const id = `${label_name}_${index}`;
  return (
    <div className="single-place-to-bet">
      {
        <Link
          id={id}
          value={value}
          type="button"
          onClick={clicked}
          className={isActive && "active"}
          to="#"
        >
          <span className="bet-price">{value.odd}</span>
          <span className="result-for-final">{value.value}</span>
        </Link>
      }
    </div>
  );
};

export default BetButton;

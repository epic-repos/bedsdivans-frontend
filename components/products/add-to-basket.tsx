import React from "react";
import css from "styles/product/page.module.scss";

interface AddToBasketProps {
  onChange: (value: number) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const AddToBasket = ({ onClick, onChange }: AddToBasketProps) => {
  const [count, setCount] = React.useState(1);

  const increaseCount = React.useCallback(() => {
    setCount((i) => i + 1);
  }, []);
  const decreaseCount = React.useCallback(() => {
    if (count > 0) {
      setCount((i) => i - 1);
    }
  }, [count]);

  React.useEffect(() => {
    onChange(count);
  }, [count]);

  return (
    <div>
      <div className={css["basket-row"]}>
        <div className={css["basket-count"]}>
          <button onClick={decreaseCount}>-</button>
          <div className={css["input"]}>
            <input
              type={"number"}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </div>
          <button onClick={increaseCount}>+</button>
          <button className={css["addToBasket"]} onClick={onClick}>
            ADD TO BASKET
          </button>
        </div>
        <button className={css["size-guide"]}>SIZE GUIDE</button>
      </div>
    </div>
  );
};

export default AddToBasket;

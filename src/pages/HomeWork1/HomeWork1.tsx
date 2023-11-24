import { useState } from 'react';
import styles from './HomeWork1.module.css';

interface DiseProps {
  faceNum: number;
}

export const HomeWork1 = () => {
  const [faceNum, setFaceNum] = useState(6);

  const handleClick = () => {
    setFaceNum(getRandom(1, 6));
  };

  return (
    <div className={styles.container}>
      <Dice faceNum={faceNum} />
      <button className={styles.roll} onClick={handleClick}>
        Roll the dice
      </button>
    </div>
  );
};

const Dice = ({ faceNum }: DiseProps) => {
  return (
    <img
      src={`/react-hometasks/assets/images/dice-six-faces-${faceNum}.png`}
      alt='dice'
      className={styles.dice}
    />
  );
};

const getRandom = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max + 1 - min));

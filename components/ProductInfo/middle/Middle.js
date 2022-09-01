import Title from "./Title";
import Price from "./Price";
import ShirtOptions from "./ShirtOptions";
import Details from "./Details";
import style from "../../../styles/Middle.module.css";

const Middle = () => {
  return (
    <div id={style.center}>
      <Title />
      <Price />
      <ShirtOptions />
      <Details />
    </div>
  );
};

export default Middle;

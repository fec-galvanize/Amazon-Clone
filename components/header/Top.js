
import amazonlogo from "../../public/images/amazon-logo-top.jpg";

export default function Top() {
  return (
    <div className="search">
      <img src={amazonlogo} alt="amazon logo" />
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

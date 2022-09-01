import Top from "./Top.js";
import Mid from "./Mid.js";
import AFash from "./AFash.js";
export default function Header() {
  return (
    <div>
      <Top />
      <Mid />
      <AFash />
    </div>
  );
}
//Top=> amazon logo and search bar
//Mid=> category list drop down and then spread select
//AFash=> Amazon fashion specific categories and drop down

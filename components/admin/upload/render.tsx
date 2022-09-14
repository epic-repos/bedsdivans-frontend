import Color from "./color";
import Feet from "./feet";
import General from "./general";
import HeadBoard from "./headBoard";
import Mattress from "./mattress";
import Storages from "./storage";

const TabsRender = ({ tabName }: any) => {
  switch (tabName) {
    case "General":
      return <General />;
    case "Color":
      return <Color />;
    case "HeadBoard":
      return <HeadBoard />;
    case "Storage":
      return <Storages />;
    case "Feet":
      return <Feet />;
    case "Mattress":
      return <Mattress />;
    default:
      return null;
  }
};

export default TabsRender;

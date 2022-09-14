import Color from "./color";
import Feet from "./feet";
import General from "./general";
import HeadBoard from "./headBoard";
import Mattress from "./mattress";
import Storages from "./storage";

const AccessoriesTabs = ({ tabName }: any) => {
    switch (tabName) {
        case "basic":
            return <General />;
        case "color":
            return <Color />;
        case "headboard":
            return <HeadBoard />;
        case "storage":
            return <Storages />;
        case "feet":
            return <Feet />;
        case "mattress":
            return <Mattress />;
        default:
            return null;
    }
};

export default AccessoriesTabs;

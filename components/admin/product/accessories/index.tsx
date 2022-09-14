// FOR COLOR
import AddColor from "./create/color";
import AddFeet from "./create/feet";
import AddHeadBoard from "./create/headBoard";
import AddMattress from "./create/mattress";
import AddSize from "./create/size";
import AddStorage from "./create/storage";
// FOR UPDATE
import UpdateColor from "./create/color";
import UpdateFeet from "./update/feet";
import UpdateHeadBoard from "./update/headBoard";
import UpdateMattress from "./update/mattress";
import UpdateSize from "./update/size";
import UpdateStorage from "./update/storage";

export const AddAccessoriesTabs = ({ tabName }: any) => {
  switch (tabName) {
    case "Color":
      return <AddColor />;
    case "Size":
      return <AddSize />;
    case "HeadBoard":
      return <AddHeadBoard />;
    case "Storage":
      return <AddStorage />;
    case "Feet":
      return <AddFeet />;
    case "Mattress":
      return <AddMattress />;
    default:
      return null;
  }
};
export const UpdateAccessoriesTabs = ({ tabName }: any) => {
  switch (tabName) {
    case "Color":
      return <UpdateColor />;
    case "Size":
      return <UpdateSize />;
    case "HeadBoard":
      return <UpdateHeadBoard />;
    case "Storage":
      return <UpdateStorage />;
    case "Feet":
      return <UpdateFeet />;
    case "Mattress":
      return <UpdateMattress />;
    default:
      return null;
  }
};

import { Menubar } from "primereact/menubar";
const items = [
  {
    label: "Home",
    icon: <div>🏠 &nbsp;</div>,
  },
];
const MenuBar = () => (
  <div style={{ paddingTop: "2rem" }}>
    <Menubar style={{ borderRadius: "10px" }} model={items} />
  </div>
);
export default MenuBar;

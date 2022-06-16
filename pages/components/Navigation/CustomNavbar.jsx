import { Button } from "primereact/button";

const CustomNavbar = () => (
  <div
    style={{
      height: "6rem",
      backgroundColor: "white",
      padding: "1rem",
      borderRadius: "0px 0px 10px 10px ",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Button
      style={{ marginRight: "1rem" }}
      label="Click"
      icon="pi pi-check"
      iconPos="right"
    />

    <Button
      style={{ marginRight: "1rem" }}
      label="Click"
      icon="pi pi-check"
      iconPos="right"
    />

    <Button
      style={{ marginRight: "1rem" }}
      label="Click"
      icon="pi pi-check"
      iconPos="right"
    />

    <Button
      style={{ marginRight: "1rem" }}
      label="Click"
      icon="pi pi-check"
      iconPos="right"
    />
  </div>
);

export default CustomNavbar;

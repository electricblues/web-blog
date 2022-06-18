import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import { Button } from "primereact/button";

// const ThemeOne = dynamic(() => import("./components/Themes/One"));
// const ThemeTwo = dynamic(() => import("./components/Themes/Two"));

// // DO NOT IMPORT THIS AT ALL
// export default function Home() {
//   const [tg, setTg] = useState();
//   const onClick = () => {
//     localStorage.setItem("theme", !tg);
//     console.log("on click  ", tg);
//     window.location.reload();
//   };

//   useEffect(() => {
//     const theme = localStorage.getItem("theme");
//     setTg(theme === "true");
//     console.log("on load  ", theme, theme === "true");
//   }, []);

//   return (
//     <div className={styles.container}>
//       {!!tg ? <ThemeOne /> : <ThemeTwo />}
//       <Button onClick={onClick}>omfg</Button>
//     </div>
//   );
// }

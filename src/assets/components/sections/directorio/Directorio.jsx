import { useState } from "react";
import NavbarDirectorio from "./NavbarDirectorio";
import TablaDirectorio from "./TablaDirectorio";

const Directorio = () => {
  const [section, setSection] = useState("dp_directorio");

  return (
    <>
      <NavbarDirectorio setSection={setSection} />
      <TablaDirectorio section={section} />
    </>
  );
};

export default Directorio;
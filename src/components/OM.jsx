import React, { useState } from 'react';
import DI from "../assets/DI.avif";
import FT from "../assets/FT.png";
import SD from "../assets/SD.png";

const OM = () => {
  const [activeOption, setActiveOption] = useState(1);
  const options = [
    { id: 1, title: "Digital Innovation", img: DI },
    { id: 2, title: "Future Tech", img: FT },
    { id: 3, title: "Smart Design", img: SD }
  ];

  return (
    <div>

    </div>
  );
};

export default OM;

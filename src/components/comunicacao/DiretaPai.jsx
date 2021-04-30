import React from "react";

import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
  return (
    <div>
      <DiretaFilho nome="Joalisson" idade={26} nerd={true} />
      <DiretaFilho nome="Viviane" idade={17} nerd={false} />
    </div>
  );
};

export default DiretaPai;

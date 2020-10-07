<<<<<<< HEAD
import React from "react";
=======
import React /*{ Component }*/ from "react";
>>>>>>> bd0adc953ee8320b33cfd896458091d4131c4f35
import "../../styles/ProjectInfoPage/ListedItems.css";
const ListedItems = (props) => {
  return (
    <div className="bulletinItems">
      <div>{props.title}</div>
    </div>
  );
};

export default ListedItems;

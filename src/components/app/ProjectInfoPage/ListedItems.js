import React /*{ Component }*/ from "react";
import "../../styles/ProjectInfoPage/ListedItems.css";
const ListedItems = (props) => {
  return (
    <div className="bulletinItems">
      <div>{props.title}</div>
    </div>
  );
};

export default ListedItems;

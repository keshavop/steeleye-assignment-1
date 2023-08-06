import React from "react";

const ListHeader = ({ children, currency }) => {
  return (
    <tr >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { currency });
      })}
    </tr>
  );
};

export default ListHeader;

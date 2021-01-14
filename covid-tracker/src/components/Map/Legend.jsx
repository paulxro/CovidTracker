import React from 'react';
import "./Legend.css";

const Legend = ({legendItems}) => {
  const reducedItems = [legendItems[0], legendItems[legendItems.length - 1]];
  return (
      <div style = {{
        display: "flex",
        alignItems: "stretch"
      }}
      >
      {legendItems.map((item) => (
        
        <div
          key={item.title}
          className = "show-large"
          style = {{
            backgroundColor: item.color,
            flex: 1,
            display: 'flex',
            alignItems: "center", 
            justifyContent: "center",
            color: item.textColor,
            height: "10vh",
            fontWeight: "bolder",
            fontSize: "1.5em",

          }}
        >
          <span>{item.title}</span>
        </div>
      ))}

      {/* {reducedItems.map((item) => (
        <div
        key={item.title}
        className = "show-small"
        style = {{
          backgroundColor: item.color,
          flex: 1,
          display: 'flex',
          alignItems: "center", 
          justifyContent: "center",
          color: item.textColor,
          height: "5vh",
          fontWeight: "bolder",
          fontSize: "1.5em",

        }}
        >
          <span>{item.title}</span>
          
        </div>
      ))} */}


      </div>
    );
}
 
export default Legend;
import React from 'react'

function BabyNames(props) {
  return (
    <ul className="list">
      {props.Data.sort((a, b) => a.name.localeCompare(b.name)).map(
        (element) => {
          return (
            <li
              onClick={() => props.handleNameClick(element.id)}
              className={element.sex === "m" ? "boys items" : "girls items"}
              key={element.id}
            >
              {element.name}
            </li>
          );
        }
      )}
    </ul>
  );
}

export default BabyNames
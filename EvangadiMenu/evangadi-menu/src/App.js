import React from 'react';
import "./commonResource/card.css";
import Data from "./Data/Data";
import Card from "./Card/Card";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <Header />
      {Data.map((menuData, i) => {
        return (
          <Card
            key={i}
            id={menuData.id}
            title={menuData.title}
            category={menuData.category}
            price={menuData.price}
            img={menuData.img}
            desc={menuData.desc}
          />
        );
      })}
    </div>
  );
};

export default App;

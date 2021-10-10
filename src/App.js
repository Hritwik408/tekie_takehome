import React, { useEffect, useState } from "react";
import "./styles.css";
import gql from "graphql-tag";
import request from "./utils/request";
import Header from "./myfiles/header";
import Searchbar from "./myfiles/Searchbar";
import results1 from "./myfiles/results1";

export default function App() {

  useEffect(() => {
    fetchShips();
  }, []);

  const [ships, setShips] = useState(null);
  const [showShips, setShowShips] = useState(null);

  const renderResults1 = () => {
    if (!showShips) {
      return null;
    }
    return showShips.map((ship, key) => {
      return <results1 key={key} ship={ship} />;
    });
  };

  const handleFiter = term => {
    setShowShips(
      ships.filter(ship => {
        return ship.name.toLowerCase().indexOf(term.toLowerCase()) !== -1;
      })
    );
  };

  const fetchShips = async () => {
    const response = await request(gql`
      {
        ships {
          name
          home_port
          image
          roles
        }
      }
    `);
    setShips(response.data.ships);
    setShowShips(response.data.ships);
  };

 
  return (
    <div className="App">
      <Header />
      <Searchbar
        total={!showShips ? 0 : showShips.length}
        handleFiter={handleFiter}
      />
      <div className="searchResults">{renderResults1()}</div>
    </div>
  );
}

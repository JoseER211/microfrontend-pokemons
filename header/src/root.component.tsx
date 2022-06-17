
import React, {useState } from "react";

const Root: React.FC = () => {

  const completeURL = "https://digimon-api.vercel.app/api/digimon"
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const response = await fetch(completeURL);
    const responseJSON = await response.json();
    setData(responseJSON)
  }

  return (
    <div>
      <button id="b" className="btn btn-outline-primary" onClick={fetchAPI} >Descubre personajes desde React</button>
          {
        data.map((character, index) => {
          return (
            <div
            className="card mb-3"
          >
            <div className="row no-gutters">
              <div className="col-md-2">
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Name: { character.name }</h5>
                  <p className="card-text">Level: { character.level }</p>
                </div>
              </div>
            </div>
          </div>
          )
        })
      }
      
    </div>
  );
}

export default Root;


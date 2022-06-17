
import React, { useEffect, useState } from "react";
import axios from "axios";
import md5 from "md5";

const baseURL = "http://gateway.marvel.com/v1/public/characters?";
const publicKey = "ec1a15cd526a91d47375a66e734bd307";
const privateKey = "996210e67854f8794836e95882798116f892622e";

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);





const Root: React.FC = () => {

  const completeURL = `${baseURL}ts=${time}&apikey=${publicKey}&hash=${hash}`
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const response = await fetch(completeURL);
    const responseJSON = await response.json();
    setData(responseJSON.data.results)
  }

  useEffect(() => {
    fetchAPI();
  }, [])

  // useEffect(() => {
  //   axios
  //   .get(`${baseURL}ts=${time}&apikey=${publicKey}&hash=${hash}`,

  //   )
  //   .then(response => console.log(response.data.data.results))
  //   .catch(error => console.log(error));
  // }, []);
  
  return (
    <div>
      Hola mundo
      <ul>
      {
        !data ? <h1>Cargando...</h1> :
        data.map((character, index) => {
          return <li key={index}>{character.name}</li>
        })
      }
      </ul>
     

    </div>
  );
}

export default Root;


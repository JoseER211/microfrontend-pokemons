
import React, { useEffect } from "react";
import axios from "axios";
import md5 from "md5";

// export default function Root(props) {
//   // return <button>The React Button</button>;
//   return <div>The React Button</div>;
// }

const baseUrl = "http://gateway.marvel.com/v1/public/characters";
const publicKey = "ec1a15cd526a91d47375a66e734bd307";
const privateKey = "996210e67854f8794836e95882798116f892622e";

const time = Number(new Date());

const hash = md5(time + privateKey + privateKey);


const Root: React.FC = () => {

  useEffect(() => {
    axios
    .get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey${publicKey}&hash=${hash}`,

    )
    .then(response => console.log(time, response.data.data))
    .catch(error => console.log(error));
  }, []);
  
  return <div>The React Button</div>;
};

export default Root;


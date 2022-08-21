import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import InputBox from "../../components/InputBox/InputBox";
import Posts from "../../components/Posts/Posts";
import Ad from "../../components/Ad/Ad";

function Test() {
  const [pokemon,setPokemon] = useState([])
  let offset = 10;

  const handleScroll = (e)=>{
  if(window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight){
    console.log("innerHeight : ",window.innerHeight)
    console.log("scrollTop : ",e.target.documentElement.scrollTop)
    console.log("scrollHeight : ",e.target.documentElement.scrollHeight)
    getPosts();
  }  
}

  const getPosts = async () => {
  console.log("get post called and skip ",offset)


  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
      .then((response) => {
        const newPokemon = response.data.results;
        setPokemon((oldpokemon) => [...oldpokemon,...newPokemon]);
        }
        );
  offset += 10;
  // exit = exit + 1
}

useEffect(() => {
      getPosts();
      window.addEventListener("scroll", handleScroll);
  }, []);
    
    

  
  return (
    <div className="row p-0 m-0">
      <div class="col-sm-8 col-xs-12 p-0 feedBody">
        <div class="container-fluid p-0 feedPage">
          <div class="container p-0 feed-container">
            
            {
              pokemon.map((p, i) => {return (<div className="p-5 border m-2" key={p.name} ><h2>{i+1}</h2>{p.name}</div>)})}
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Test;



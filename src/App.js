//import './App.css';
import axios from 'axios';
import {useState,useEffect } from 'react';
import Citysearch from './components/citySearch';
import History from './components/history';
import Result from './components/result';

function App() {
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState([])
  const [history, setHistory] = useState([]);
  
   // console.log("hello");
   
   
   
  const searchPressed = ()=>{
    if(search!==""){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fe4feefa8543e06d4f3c66d92c61b69c`).then((res)=>{
      
      console.log();
      setWeather(res.data); 
      if(history.indexOf(search)===-1){
        setHistory([...history, search])
        localStorage.setItem("list", JSON.stringify([...history, search]))
      }
      
    }).catch((err)=>{
      console.log(err);
    })
    }
    // if(history.indexOf(search)===-1){
    //   setHistory([...history, search])
    //   localStorage.setItem("list", JSON.stringify([...history, search]))
    // }
   
    
    
    
    // if(search!==""){
    //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`).then((res)=>{
      
    //   console.log(res);
    //   setWeather(res.data); 
      
    // }).catch((err)=>{
    //   console.log(err);
    // })
    // }
     
  } 
  let list = JSON.parse(localStorage.getItem("list"))
  const getHistory = ()=>{
    if(list!==null){
    
    setHistory(list);
    }
  }
  useEffect(()=>{
      
    getHistory();
  
},[])
const clearhistory = ()=>{
  localStorage.removeItem("list");
  setHistory([]);
}

  return (
    <div className='main m-5 p-3'>
      {/* <h1 className='text-[blue]'>Hello world</h1> */}
      <div className='text-center p-1'  >
      <Citysearch setSearch={setSearch} searchPressed={searchPressed} search={search}/>
      </div>
      <div className='d-flex justify-content-evenly mt-4 '>
      <div>
      <Result weatherdata= {weather} />
      </div>
      <div>
       <History  historydata = {history} />
       {!list ? <p>no history</p> : <button className='btn btn-dark' onClick={clearhistory}>clear history</button>}
      </div>
      </div>
      
    </div>
  );
}

export default App;

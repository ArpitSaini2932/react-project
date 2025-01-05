import { useState } from "react";
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="h-screen w-screen duration-600"
      style={{ backgroundColor: color }}
    >
      <div className="fixed p-5 justify-center flex flex-wrap rounded-lg bottom-24 inset-x-0">
    <div className="fixed justify-center flex flex-wrap gap-4 bg-white text-slate-950 rounded-lg px-2 py-1" >
      <button onClick={()=> setColor("red")} className="px-2 m-1 rounded-lg" style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=> setColor("blue")} className="px-2 m-1 rounded-lg" style={{backgroundColor:"Blue"}}>Blue</button>
      <button onClick={()=> setColor("yellow")} className="px-2 m-1 rounded-lg" style={{backgroundColor:"Yellow"}}>Yellow</button>
      <button onClick={()=> setColor("black")} className=" text-white px-2 m-1 rounded-lg" style={{backgroundColor:"black"}}>black</button>
      <button onClick={()=> setColor("grey")} className="px-2 m-1 rounded-lg" style={{backgroundColor:"grey"}}>grey</button>
      <button onClick={()=> setColor("pink")} className="px-2 m-1 rounded-lg" style={{backgroundColor:"pink"}}>pink</button>
      <button onClick={()=> setColor("purple")} className="px-2 m-1 rounded-lg" style={{backgroundColor:"purple"}}>purple</button>
      <button onClick={()=> setColor("teal")} className="px-2 m-1 rounded-lg" style={{backgroundColor:"teal"}}>teal</button>
      <button onClick={()=> setColor("lightskyblue")} className="px-2 m-1 rounded-lg" style={{backgroundColor:"lightskyblue"}}>lightskyblue</button>
    </div>
      </div>
    </div>
  );
}

export default App;

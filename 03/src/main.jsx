import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorld } from './HelloWorld';
 import  { Name } from './FirstApp';
 import './index.css'
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <Name title={123}  subtitulo={1+9}/> */}
        {/* <Name  subtitulo={1+9}/>
        <Name title subtitulo={1+9}/> */}
        {/* <Name  subtitulo={1+9}/> */}
        {/* <Name title />
        <HelloWorld/> */}
       <CounterApp value={100}/>
   
   {/* <Name title="titulo"/> */}
    </React.StrictMode>
) 

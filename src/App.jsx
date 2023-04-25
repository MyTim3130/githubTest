import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Custom from './components/Custom'



function App() {
     const obj = [
          {
               id: 1,
               name: 'Tim',
               age: 16,
               birthYear: 2006
          },
     
          {
               id: 2,
               name: 'Timo',
               age: 16,
               birthYear: 2006
          },
     
          {
               id: 3,
               name: 'Ali',
               age: 12,
               birthYear: 2010
          },
     ];
     
  return (<>
    <h1>HEADDING</h1>
    <Custom name={obj[0].name} age={obj[0].age} birthYear={obj[0].birthYear}></Custom>
    <Custom name={obj[1].name} age={obj[1].age} birthYear={obj[1].birthYear}></Custom>
    <Custom name={obj[2].name} age={obj[2].age} birthYear={obj[2].birthYear}></Custom>
    
  </>)
};




export default App

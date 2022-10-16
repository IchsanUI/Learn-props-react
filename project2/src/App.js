import React from 'react';
import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import DataJS from './separate'

function App() {
  const Data = DataJS.map((data)=>{
    return (
      <Card
        key ={data.id}
        data={data}
      />
    )
  })


  return (
    <div>
      <Header />
      {Data}
    </div>
  );
}

export default App;

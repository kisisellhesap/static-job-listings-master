
import './App.css';
import UserComponent from './components/UserComponent';
import dataJson from "./data.json"
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [data, setData] = useState(dataJson);


  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <div className="App">
      {data.map(item => {
        return <UserComponent key={item.id} logo={item.logo} company={item.company} neww={item.new} featured={item.featured} position={item.position} postedAt={item.postedAt} contract={item.contract} location={item.location} role={item.role} level={item.level} tools={item.tools} />
      })}
    </div>
  );
}

export default App;

import UserList from "./components/UserList";
import UserFilter from "./components/UserFilter";
import UserContext from "./context/UserContext";

import dataJson from "./data.json"
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState(dataJson);
  const [filterData, filterSetData] = useState([]);

  const onClick = (e) => {
    let filterName = e.target.textContent;
    if (!filterData.includes(filterName)) {
      filterSetData([...filterData, filterName]);
    }
  }





  return (

    <UserContext.Provider value={{ data, setData, filterData, filterSetData, onClick }}>
      <div className="App">
        <div className='userContainer'>
          <UserFilter />
          <UserList />
        </div>

      </div>
    </UserContext.Provider>

  );
}

export default App;

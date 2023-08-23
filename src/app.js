import React, { useState, useEffect } from 'react';
import JSONRenderer from './components/JSONRenderer';

const userURL = 'https://randomuser.me/api';
const botwURL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/all';

const App = () => {
  const [data, setData] = useState({});

  const fetchUser = () => {
    return fetch(userURL)
      .then(res => res.json())
      .then(data => { 
        setData(data.results[0]) 
      })
      .catch(err => console.error(err));
  }

  const fetchItems = () => {
    return fetch(botwURL)
      .then(res => res.json())
      .then(data => { 
        setData(data.data[0]) 
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    // fetchUser();
    fetchItems();
  }, [])

  return (
    <div className="app json-renderer">
      <h1>JSON Renderer</h1>
      <JSONRenderer key={0} name="json" value={data} level={0} />
    </div>
  );
}

export default App;

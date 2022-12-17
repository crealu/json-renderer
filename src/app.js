import React, { useState, useEffect } from 'react';
import JSONRenderer from './components/JSONRenderer';

const App = () => {
  const [data, setData] = useState({});

  const fetchUser = () => {
    return fetch('https://randomuser.me/api')
      .then(res => res.json())
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchUser().then(data => { setData(data.results[0]) })
  }, [])

  return (
    <div className="app json-renderer">
      <h1>JSON Renderer</h1>
      <JSONRenderer key={0} name="json" value={data} level={0} />
    </div>
  );
}

export default App;

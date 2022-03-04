import React from 'react';
import { useState, useEffect } from 'react';

const data = {};

function Button() {
  const toggleList = (e) => {
    const theChildren = [...e.target.parentNode.children];
    theChildren.forEach(child => {
      if (child.localName == 'div') {
        child.style.display = child.style.display == 'block' ? 'none' : 'block';
      }
    })
  }

  return (
    <button
      className="expand-btn"
      onClick={(event) => { toggleList(event)}}
    >
    </button>
  )
}

function PropertyComponent({ name, value, level }) {
  return (
    <div
			className={`prop-level-${level} prop-comp`}
      style={{left: `${level != '0' ? '15px' : '0px'}`}}
    >
			{typeof(value) == 'object' ? <Button /> : ''}
      {name}:
      {
				typeof(value) == 'object'
          ? Object.keys(value).map((v, idx) => (
              <PropertyComponent
                key={idx}
                name={v}
                value={value[v]}
                level={level + 1}
              />
            ))
          : ' ' + value
      }
    </div>
  )
}

function JSONRenderer({ data }) {
  return (
    <div>
      {
        Object.keys(data).map((name, idx) => (
          <PropertyComponent
            key={idx}
            name={name}
            value={data[name]}
            level={0}
          />
        ))
      }
    </div>
  );
}

function App() {
  const [stateData, setStateData] = useState(data);
  const fetchUser = () => {
    return fetch('https://randomuser.me/api')
      .then(res => res.json())
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchUser().then(data => {
      setStateData(data.results[0]);
    })
  }, [])

  return (
    <div className="app">
      <h1>JSON Renderer</h1>
      <JSONRenderer data={stateData} />
    </div>
  );
}

export default App;

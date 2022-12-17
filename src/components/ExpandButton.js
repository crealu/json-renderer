import React from 'react';

const ExpandButton = () => {
  const toggleList = (event) => {
    const theChildren = [
      ...event.target.parentNode.children
    ];

    theChildren.forEach(child => {
      if (child.localName == 'div') {
        child.style.display = child.style.display == 'block'
          ? 'none'
          : 'block';
      }
    })
  }

  return (
      <button className="expand-btn" onClick={(e) => { toggleList(e) }}>
      </button>
  )
}

export default ExpandButton;

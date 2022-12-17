import React, { useMemo, useCallback } from 'react';
import ExpandButton from './ExpandButton';

const JSONRenderer = ({ name, value, level }) => {
  const levelClass = useMemo(() => {
    return `prop-level-${level} prop-comp`;
  }, [level])

  const adjustedStyle = useMemo(() => {
    return { left: `${level != '0' ? '15px' : '0px'}` };
  }, [level]);

  const renderButton = useCallback(() => {
    return typeof(value) == 'object' && <ExpandButton />;
  }, [value]);

  const renderObject = useCallback(() => {
    return typeof(value) == 'object'
      ? Object.keys(value).map((v, idx) => (
          <JSONRenderer
            key={idx}
            name={v}
            value={value[v]}
            level={level + 1}
          />
        ))
      : ' ' + value
  }, [level, value]);

  return (
    <div className={levelClass} style={adjustedStyle}>
			{renderButton()}
      {name}:
      {renderObject()}
    </div>
  );
}

export default JSONRenderer;

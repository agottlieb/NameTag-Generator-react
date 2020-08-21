import React from 'react';
import NameTag from './NameTag.js';
import './styles.css';

var NameTagList = props => {
  var renderNameTag = (name, index) => (
    <NameTag
      name={name}
      key={name}
      removeName={props.removeName}
      index={index}
    />
  );
  var NameTagElements = props.names.map(renderNameTag);
  return <main>{NameTagElements}</main>;
};

export default NameTagList;

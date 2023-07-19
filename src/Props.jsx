import React from 'react';
function props(props) {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.tel}</p>
      <p>{props.email}</p>
      <img alt='img' src={props.img} />
    </>
  );
}
export default props;

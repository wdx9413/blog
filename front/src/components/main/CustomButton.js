import React from 'react';
export default ({children, onClick, history}) => (
   <span onClick={() => {
      onClick();
      // history.push('/');
   }}>{children}</span>
)
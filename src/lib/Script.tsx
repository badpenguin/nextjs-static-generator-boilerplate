import React from 'react';


// modules/Script.js
const Script = ({children}) => (
  <script dangerouslySetInnerHTML={{__html: `(${children.toString()})();` }}></script>
);


export default Script;

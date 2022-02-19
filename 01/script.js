const getEl = selector => document.querySelector(selector);

const crEl = selector => document.createElement(selector);

crEl('div', crEl('h1', 'Hello World'))

// и това да генерира 
// <div>
//   <h1>Hello World</h1>
// </div>

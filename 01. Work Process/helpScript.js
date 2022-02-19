const getEl = selector => document.querySelector(selector);

const crEl = selector => document.createElement(selector);

crEl('div', crEl('h1', 'Hello World'))


// <div>
//   <h1>Hello World</h1>
// </div>


// btnArchive.addEventListener('click', (e) => {
//     e.preventDefault();
//     let liElement = document.createElement('li');
//     liElement.textContent = title.textContent;
//     olArchrive.appendChild(liElement)

//     Array.from(olArchrive.getElementsByTagName("li"))
//        .sort((a, b) => a.textContent.localeCompare(b.textContent))
//        .forEach(li => olArchrive.appendChild(li));

//     e.currentTarget.parentNode.parentNode.remove();
//  })
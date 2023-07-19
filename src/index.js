import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import App from './App';
// import pi, { doublepi, triplepi } from './math';
// import { add, multiply, subtract, divide } from './calculator';

// custom stylesheet in css
// const customStyle = {
//   color: 'red',
//   boder: '2px solid black',
//   fontsize: '12px',
// };
// customStyle.color = 'blue';

// const img = 'https://picsum.photos/200';
// const fname = 'pappu';
// const lname = 'kumar';
// const num = 7;'
// const name = 'pappu';
// const currentDate = new Date();
// const year = currentDate.getFullYear();
// console.log(year);

//Bebel is a javascrit compiler
//jsx stands for javascript xml it allow the  write the html code.jsx makes easier to write the add html  in react js.
// ReactDOM.render(
//   <div>

//     {/* inline css   in jsx */}
//     <h1 style={customStyle}>Hello World!</h1>

//     {/* classname attributes used in Reactjs

//     contentEditable ="true" is a global attibutes*/}

//     <h1 className='heading'>This is My Nature</h1>
//     <img alt='random' src={img} />

//     {/* <h2>Hello {`${fname} ${lname}`}</h2> */}
//     {/* <ul>
//       <li>Hello </li>
//       <li>World</li>
//       <li>Hello</li>
//     </ul> */}

//     <img
//       className='nature-img'
//       alt='sunlightimage'
//       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJpQWDzS2-ApvcNvO7gPQjNBlsj0uRpTz5wytaTG2WPs9x1sn69VZ1w&s=0'
//     />
//     <img
//       className='nature-img'
//       alt='sunlightimage'
//       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJpQWDzS2-ApvcNvO7gPQjNBlsj0uRpTz5wytaTG2WPs9x1sn69VZ1w&s=0'
//     />
//     <img
//       className='nature-img'
//       alt='sunlightimage'
//       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJpQWDzS2-ApvcNvO7gPQjNBlsj0uRpTz5wytaTG2WPs9x1sn69VZ1w&s=0'
//     />

//     {/* <h2>Your lucky number is {num}</h2>
//     <p>Created by YOURNAME {name} </p>
//     <p>copyright CURRENTYEAR {year}</p> */}
//   </div>
// ,
//   document.getElementById('root')
// );

// const customStyle = {
//   color: '',
// };
// const date = new Date(2023, 1, 12,21 );
// const currentTime = date.getHours();
// let greeting;
// if (currentTime < 12) {
//   greeting = 'Good Morning';
//   customStyle.color = 'red';
// } else if (currentTime < 18) {
//   greeting = 'Good AfterNoon';
//   customStyle.color = 'green';
// } else {
//   greeting = 'Good Night';
//   customStyle.color = 'blue';
// }

// ReactDOM.render(
//   <h1 className='heading' style={customStyle}>
//     {greeting}
//   </h1>,

//   document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('root'));

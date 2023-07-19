import React from 'react';
import Card from './Card';
// import Heading from './Heading';
// import List from './List';
// import Header from './Header';
// import Para from './Para';

function App() {
  return (
    <div>
      {/* <Header />
      <Para /> */}
      <h1 className='heading'>Computer</h1>

      <Card
        name='pappu kumar'
        img='https://picsum.photos/id/0/367/267'
        tel='123+132243'
        email='pa@gmail.com'
      />

      <Card
        name='pappu kumar'
        img='https://picsum.photos/id/0/367/267'
        tel='123+132243'
        email='pa@gmail.com'
      />

      <Card
        name='pappu kumar'
        img='https://picsum.photos/id/0/367/267'
        tel='123+132243'
        email='pa@gmail.com'
      />
    </div>
  );
}
export default App;

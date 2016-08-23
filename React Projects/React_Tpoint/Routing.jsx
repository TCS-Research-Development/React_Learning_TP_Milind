import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <Link to={'home'}>Home</Link>
               <Link to={'about'}>About</Link>
               <Link to={'contact'}>Contact</Link>
            </ul>
            
           {this.props.children}
         </div>
      )
   }
}

export default App;

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}

export default Home;

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}

export default About;

class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}

export default Contact;
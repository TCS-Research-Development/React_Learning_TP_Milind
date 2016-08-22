import React from 'react';

class App extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         "header" : "Welcome to React JS World!!! ",
         "content": "Hey add deatils about react js here"
      }
   }
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <p>{this.state.content}</p>
            
         </div>
      );
   }
}


export default App;
import React from 'react';

class App extends React.Component {
   render() {
   		

      return (
         <div>
         <Header/>
         <Content/>
         </div>
      );
   }
}

class Header extends React.Component{
	render(){
	var myStyle = {
   			fontSize:100,
   			color:'#FF0000'
   		}
		return (
			<div>
            <h1 style={myStyle}> Welcome to React JS World!!! </h1>
         	</div>
		);
	}
}

class Content extends React.Component{
	render(){
		return (
			<div>
            <p> Hey add deatils about react js here </p>
         	</div>
		);
	}
}

export default App;
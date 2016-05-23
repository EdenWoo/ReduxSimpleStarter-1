import React, {Component} from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }
  
  render(){
    return (
      <div className="search-bar">
          <input
              value={this.state.term}
              onChange = {(event)=> this.onInputChange(event.target.value)}
          />
      </div>

    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

/*
class SearchBar extends Component{
  // state should be initialized in the class based components constructor class
  // by super() we call constructor of parent class
  constructor(props){
    super(props);
    this.state = {term:''};
  }

  render(){
    //when we write jsx and we use javaScript variable we use curley braces
    return(
      <div>
        <input
          value ={this.state.term}
          onChange={event => this.setState({term:event.target.value})}/>
      </div>
    );
    // arrow function is used to reduce the code
    // we can delete the brackets if there is only one parameter here
    // Like - return <input onChange={event => console.log(event.target.value)} />;

  }

// HANDLING EVENTS IN REACT HAS TWO STEPS 1. DECLARE AN EVENT HANDLER(A FUNCTION THAT SHOULD RUN WHEN AN EVENTS OCCUR)
// 2. PASS THE EVENT HANDLER TO ELEMENT INORDER TO MONITOR CHANGES IN THE EVENT
//  onInputChange(event){ // whenever we call event handler we pass as event object. this can be 'event'/'e'/ 'eventObject' whatever you  like
//    console.log(event.target.value);
//  }
}

*/

export default SearchBar;

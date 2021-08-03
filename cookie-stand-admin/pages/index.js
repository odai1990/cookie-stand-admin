
import React from 'react';
import Footer from './footer';
import Header from './header';
import Main from './main';
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
  };
  initialState = {
 

  };

    
   createHandler = (event) => {
    event.preventDefault();

this.setState({
location: event.target.location.value,
min: event.target.min.value,
max: event.target.max.value,
avg: event.target.avg.value,
})
};

 

render() {
  return (
    <div id="heightdiv" className="flex justify-between flex-col h-100v">
      <Header />
      <Main createHandler={this.createHandler} store={this.state} />

      <Footer />
    </div>
  )
}
}

export default Home;

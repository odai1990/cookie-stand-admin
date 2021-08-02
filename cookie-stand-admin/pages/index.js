// import Head from 'next/head'
// import React, { useState} from 'react';
// import Link from 'next/link'
// import Footer  from './footer';
// import Header  from './header';
// import Main  from './main';




// export default function Home() {
//   const [store , setStore] = useState(''); 

//   function createHandler(event){
//     event.preventDefault() ;
//     let store = {
//       location : event.target.location.value ,
//       min : event.target.min.value,
//       max : event.target.max.value,
//       avg : event.target.avg.value,
//     }
//     setStore(store)
//   }

//   return (
//     <div id="heightdiv" className="flex justify-between flex-col h-100v">

//         <Header/>
//       {/* <main className="grid  p-10 m-10  text-center  ">
//       <form  className="flex flex-col  bg-green-400 rounded-md" onSubmit={createHandler}>
//             <h1 className="p-2">Create Cookie Stand</h1>
//             <div className="grid grid-rows-1 grid-flow-col ">
//                 <label>Location</label>
//                 <input type="text" name="location" placeholder="Cookie Stand Location" />
//             </div>

// <div>
//                 <div className="flex m-10">
//                 <label>Minimum Customers per Hour</label>
//                 <input type="number" name="min"/>
//                 </div>
//                 <div>
//                 <label >Maximum Customers per Hour</label>
//                 <input  name='max' type="number"/>
//                 </div>
//                 <div>
//                 <label >Average Cookies per Sale</label>
//                 <input type="number" name="avg"/>
//                 </div>

//                 <button className="px-4 py-1 mx-2 bg-green-600  text-green-100" type="submit">Create</button>
//                 </div>
//         </form>
//         <section className="text=center p-10">
//         <p className='m-5 text-gray-600'>Report Table coming soon .....</p>
//           <p className="m-3">{JSON.stringify(store)}</p>
//           </section>
//       </main> */}
//   <Main createHandler={createHandler} store={store} />

//       <Footer/>
//     </div>
//   )
// }

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
    location: "",
    min: "",
    max: "",
    avg: ""

  };

    
   createHandler = (event) => {
    event.preventDefault();
  //  let store = {
  // location: event.target.location.value,
  //   min: event.target.min.value,
  //    max: event.target.max.value,
  //    avg: event.target.avg.value,
  //    }
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

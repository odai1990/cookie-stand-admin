




import Head2 from './head';
import Header from './header';
import Footer from './footer';
import Main from './main';
import { useState } from 'react';

export default function CookieStandAdmin() {





    const [store, setStore] = useState({
      info:[
    
    ],
      total_vertical:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    });


  function onCreate(event) {
    event.preventDefault();

    let temp_info= {
      location: event.target.location.value,
      min: event.target.min.value,
      max: event.target.max.value,
      avg: event.target.avg.value,
      totale:0,
      hourly_sales :[]}
    
    let location = {...store}
    const temp_horizantal=[]
    let temp_vertical=[...store.total_vertical]
    let total_horizantal=0


    for (let i=0 ; i<=13;i++)
    {
        let rand=getRandomInt(event.target.min.value,event.target.max.value)*event.target.avg.value
        temp_horizantal.push(rand)
        total_horizantal+=rand     
        temp_vertical[i]=temp_vertical[i]+rand
    }
    temp_vertical[14]=total_horizantal+temp_vertical[14]


    location.total_vertical=temp_vertical
    temp_info.totale=total_horizantal
    temp_info.hourly_sales=temp_horizantal
    location.info.push(temp_info)

    setStore(location);



  }


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


  return (
    <div id="heightdiv" className="flex justify-between flex-col h-100v">
     <Head2/>
      <Header />
      <Main onCreate={onCreate} store={store} total_vertical={store.total_vertical}/>

     

      <Footer count={store}/>
    </div>
  )
}
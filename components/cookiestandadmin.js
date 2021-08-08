




import Head2 from './head';
import Header from './header';
import Footer from './footer';
import Main from './main';
import { useState } from 'react';

export default function CookieStandAdmin() {
  const [store, setStore] = useState('');
  const [total_vertical, setTotal_vertical] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

  function onCreate(event) {
    event.preventDefault();

    const temp_horizantal=[]
    let temp_vertical=[...total_vertical]
    let total_horizantal=0
    console.log('gggggggg',temp_vertical)

    for (let i=0 ; i<=13;i++)
    {
        let rand=getRandomInt(event.target.min.value,event.target.max.value)*event.target.avg.value
        temp_horizantal.push(rand)
        total_horizantal+=rand

      
      
        temp_vertical[i]=temp_vertical[i]+rand
     

    }
    temp_vertical[14]=total_horizantal+temp_vertical[14]
    console.log('ggggggggdd',temp_vertical)

    let Location = {
      location: event.target.location.value,
      min: event.target.min.value,
      max: event.target.max.value,
      avg: event.target.avg.value,
      totale:total_horizantal,
      hourly_sales :temp_horizantal
    }
    setStore([...store, Location]);
    setTotal_vertical(temp_vertical)


  }


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  // const question = {
  //   question: event.target.question.value,
  //   reply: randomReply,
  //   id:answeredQuestions.length,
  // }

  // Push the new question to the previous state

  return (
    <div id="heightdiv" className="flex justify-between flex-col h-100v">
     <Head2/>
      <Header />
      <Main onCreate={onCreate} store={store} total_vertical={total_vertical}/>

     

      <Footer count={store}/>
    </div>
  )
}
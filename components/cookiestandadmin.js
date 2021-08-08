import Head1 from "./head";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { useState } from 'react'

export default function CookieStandAdmin(props){
    const [numberoflocaton,senumberoflocaton] = useState(0)
    return(
        <div className="bg-green-50">
      <Head1/>

      <Header/>

      <Main senumberoflocaton={senumberoflocaton} numberoflocaton={numberoflocaton}/>

      
      <Footer numberoflocaton={numberoflocaton}/>
    </div>
    );
  }
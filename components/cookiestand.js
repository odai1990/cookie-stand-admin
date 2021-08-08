import React from 'react'

import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'

import axios from 'axios'

import { useState } from 'react'
import { useEffect } from 'react'

function Cookiestand(props) {

    const [locations, setLocations] = useState([])
    const [sumOfSums, setSumOfSums] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

    useEffect(() => {
      if (props.token && sumOfSums[12] == 0){
        getDataFromAPI()
      }
    }, [locations])

    async function getDataFromAPI(){
      const config = {headers: {'Authorization': 'Bearer ' + props.token}};
      let shops = await axios.get(props.postsUrl, config)
      let arr = []
      console.log(shops.data)
      shops.data.forEach(shop=>{
        let temp = {}
        temp.location = shop.location
        temp.hourly_sales = sumTheArray(shop.hourly_sales)
        arr.push(temp)
      })
      setLocations(arr)
      sumOfSumsFirstSet()
    }

    function sumTheArray(array){
      let sum = 0
      if (array.length == 15){
        array.pop()
      }
      for (let i=0; i<array.length; i++){
        sum += array[i]
      }
      array.push(sum)
      return array
    }
    // call it inside the useEffect at the last row
    function sumOfSumsFirstSet(){
      let initial = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      for(let i =0; i<locations.length; i++){
        for (let j=0; j<=14; j++){
          initial[j]+= locations[i].hourly_sales[j]
        }
      }
      console.log(locations)
      console.log(initial)
      setSumOfSums(initial)
    }

      function submit_handler(event){
        event.preventDefault()
        let new_shop = {
          location: event.target.loc.value,
        }
        // get the values for the table
        let min = Math.ceil(event.target.min.value);
        let max = Math.floor(event.target.max.value);
        let avg = event.target.avg.value
        let salesPerHour = []
        let sum = 0
        for (let i=0; i<=13; i++){
          let val = Math.floor((Math.random() * (max - min + 1) + min)*avg)
          salesPerHour.push(val)
          sum+=val
        }
        salesPerHour.push(sum)
        new_shop['hourly_sales'] = salesPerHour
        console.log(new_shop)
        // reset the input fields
        document.querySelectorAll('input').forEach(element=>{
          element.value = ''
        })
        setLocations([...locations, new_shop])
        setSumOfSums(sumOfSums.map(function (num, idx) {
          return num + salesPerHour[idx];
        }))
      }
    return (
      <div className = 'flex-col flex bg-gray-100'>
        <Head>
          <title>Cookie Stand Admin</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
  
        <main className = 'min-h-screen'>
          <div id='big_container' className = 'bg-green-400 flex-col flex w-10/12 my-10 p-4  m-auto rounded-md '>
          <h2 className='text-center font-semibold text-2xl' >Create Cookie Stands</h2>
          <br></br>
  
          <CreateForm submit_handler={submit_handler} />
          
          </div>
  
  
          <ReportTable locations={locations} sumOfSums={sumOfSums} />
          <br></br>
          <br></br>
        </main>
        <Footer leng = {locations.length}/>
      </div>
    )
}

export default Cookiestand

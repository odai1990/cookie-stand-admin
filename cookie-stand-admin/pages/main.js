import Head from 'next/head'







export default function Main({ createHandler,store  }) {
  
    console.log(createHandler)
  return (
   
     
    
      <main className="grid  p-10 m-10  text-center  ">
      <form  className="flex flex-col  bg-green-400 rounded-md" onSubmit={createHandler}>
            <h1 className="p-2">Create Cookie Stand</h1>
            <div className="grid grid-rows-1 grid-flow-col ">
                <label>Location</label>
                <input type="text" name="location" placeholder="Cookie Stand Location" />
            </div>

<div className="flex flex-row">
                <div className="p-2">
                <label>Minimum Customers per Hour</label>
                <input type="number" name="min"/>
                </div>
                <div className="p-2">
                <label >Maximum Customers per Hour</label>
                <input  name='max' type="number"/>
                </div>
                <div className="p-2">
                <label >Average Cookies per Sale</label>
                <input type="number" name="avg"/>
                </div>

                <button className="px-4 py-1 mx-2 bg-green-600  text-green-100" type="submit">Create</button>
                </div>
        </form>
        <section className="text=center p-10">
        <p className='m-5 text-gray-600'>Report Table coming soon .....</p>
          <p className="m-3">{JSON.stringify(store)}</p>
          </section>
      </main>

     
   
   
  )
}
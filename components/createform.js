
export default function CreateForm(props) {
  

    return (
     
     
      <form className="flex flex-col  bg-green-400 rounded-md" onSubmit={props.onCreate}>
        <h1 className="p-2">Create Cookie Stand</h1>
        <div className="grid grid-rows-1 grid-flow-col m-3 ">
          <label>Location</label>
          <input type="text" name="location" placeholder="Cookie Stand Location" />
        </div>
  
        <div className="grid grid-rows-1 grid-flow-col ">
          <div className="flex flex-col p-2 bg-green-500 m-3">
            <label>Minimum Customers per Hour</label>
            <input type="number" name="min" />
          </div>
          <div className="flex flex-col p-2 bg-green-500 m-3">
            <label >Maximum Customers per Hour</label>
            <input name='max' type="number" />
          </div>
          <div className="flex flex-col p-2 bg-green-500 m-3">
            <label >Average Cookies per Sale</label>
            <input type="number" name="avg" />
          </div>
  
          <button className="px-4 py-1 mx-2 bg-green-600  text-green-100 m-3" type="submit">Create</button>
        </div>
      </form>
   
  
       
     
     
    )
  }
  
  
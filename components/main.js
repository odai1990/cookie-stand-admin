





import CreateForm from "./createform"
import ReportTable from "./reporttable"

export default function Main(props) {
  

  return (
   
    <main className="grid  p-10 m-10  text-center  ">
      <CreateForm onCreate={props.onCreate}/>
      <ReportTable store={props.store} total_vertical={props.total_vertical}/>

  </main>
     
   
   
  )
}



import { time } from "../data";
export default function ReportTable(props) {


    return (



        <section className="grid text-center p-10">


            

            {
                props.store == "" ? <p className="m-3">No Cookie Stands Available</p> :



                <table className="rounded-lg bg-green-400  border-gray-900 rounded-md">
                <thead className="rounded-lg">
                    <tr>
                    
            
                      {
                                time.map(data => {
                                    return (
                                            <th key={data} className="">{data}</th>

                                            )
                                        })
                                    }

                
                            </tr>

                </thead>
                <tbody className="border border-collapse border-gray-900">
                    {props.store.map((data,i) => {
                          
                        return (
                            <tr key={i} className={i%2==0?" border border-collapse border-gray-900":"bg-green-500 border border-collapse border-gray-900"}>
                                <td className="border border-collapse border-gray-900" >{data.location}</td>
                                {data.hourly_sales.map(data => {
                                  

                                    return (
                                        
                                        <td key={data} className="border border-collapse border-gray-900" >{data}</td>
                                    )
                                   

                                })}

                                <td className="border border-collapse border-gray-900" >{data.totale}</td>
                            </tr>


                        )

                    })}

                </tbody>
                <tfoot className="bg-green-500 border border-collapse border-gray-900">
                    <tr className="border border-collapse border-gray-900" >
                        <th className="border border-collapse border-gray-900">Totals</th>
                        {props.total_vertical.map(data => {
                            return (
                                <td key={data} className="border border-collapse border-gray-900">{data}</td>
                            )
                        })}
                       
                    </tr>
                </tfoot>
            </table>
}


        </section>




    )
}


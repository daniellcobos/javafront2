import { Link } from "react-router-dom"
import Classes from "./tables.module.css"
import React, { useState, useEffect } from 'react'; 
const Info = () => {

    const [info,setInfo] = useState([])
  
    useEffect(() => {
    fetch(`http://localhost:8080/api/infos`)
  .then(response => response.json())
  .then((data) => { 
    setInfo(data)
    console.log(data)
  } )
 }, []);

 

    return (
        
<div className={Classes.main}>

<table className={Classes.tables}>
      <thead>
        <tr>
            <th>infoid</th>
            <th>info</th>
            <th>userid</th>
        </tr>
      </thead>
       <tbody>
      
                 {info.map(
            (row) => {
                
                return(<tr key= {row.infoid} scope="row">
                    <td>{row.info}</td>
                    <td>{row.userid}</td>
                    <td><Link to={"../user/" + row.userid}>{row.userid}</Link></td>       
                    </tr>)
            }
            )}
                
       </tbody>
        </table>
</div>
   
    )
}
export default Info
/* eslint-disable jsx-a11y/alt-text */
import Header from './Header'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'

function Productlist() {
    const [data, setData] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {

        let result = await fetch('http://localhost:8000/api/list');
        result = await result.json();
        setData(result)


    }, []
    )
 async function deleteOperation(id){

let result= await fetch("https://abdulazizecom.herokuapp.com/api/delete/"+id,{

method: 'DELETE'


});
result=await result.json();
getData();
  }
 async function getData(){



      
  }
    return (

        <div >
            <Header></Header>

            <h1>Product List</h1>
            <div className="col-sm-8 offset-sm-3">
                <Table>

                    <tr>

                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Operations</td>
                    </tr>
                    {

                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.descrption}</td>
                                <td>{item.file_path}</td>
                                <td><img style={{ width: 100 }} src={"localhost:8000/" + item.file_path} /></td>
                                <td><span onClick={deleteOperation(item.id)} className="delete">Delete</span></td>
                                <td><span className="update">Update</span></td>
                            </tr>
                        )
                    }
                </Table>
            </div>
        </div>
    )
}

export default Productlist
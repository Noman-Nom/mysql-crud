import React from 'react'
import './Students.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Students = () => {

    const [students, setStudents] = useState([])

    useEffect(()=>{
            const fetchStudents = async ()=>{
                try {
                    const res = await axios.get("http://localhost:8800/students")
                    console.log(res)
                    setStudents(res.data)

                } catch (error) {
                    console.log(error)
                }
            }    
            fetchStudents()
    },[])

    const handleDelete= async (id)=>{

        try {
            await axios.delete("http://localhost:8800/students/"+id)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <>
    <Link to="/add"> <button>ADD+</button></Link>
   
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            
              
              
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((data,id) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                
          
          {/* {console.log(data.name)} */}
                <TableCell align="right">{data.ID}</TableCell>
                <TableCell align="right">{data.name}</TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">
                 <Link to={`update/${data.ID}`}><button className='btn'>Update</button></Link> 
                <button className='btn' onClick={()=>handleDelete(data.ID)} >Delete</button>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
  )
}

export default Students
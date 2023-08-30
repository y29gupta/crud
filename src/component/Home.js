import React,{useState,useEffect} from 'react'
import  { toast } from 'react-toastify';
import UserApi from '../API/UserApi';
import {Navigate, NavLink, useNavigate} from 'react-router-dom';

function Home() {
    const [users,setUsers]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        UserApi.getAll().then(result=>{
            console.log(`users:`,result);
            setUsers(result.data);
        }).catch(err=>toast.error(err.message));
    },[]);
    const delHandler=(id)=>{
        if( window.confirm(`Are you sure you want to delete this data ${id}`)){
            UserApi.delete(id).then(res=>{
            toast.success("data deleted sucessfully");
            navigate("/");            }
            ).catch(err=>toast.error(err.message));
        }else{
            toast.warning("deletion terminated");
        };

        
    }
  return (
        <>
        
            <div className="container">
                <div className="row">
                    <table className='table mt-3 table-bordered'>
                        <thead>
                            <th>#</th>
                            <th>name</th>
                            <th>email</th>
                            <th>address</th>
                            <th>mobile</th>
                            
                        </thead>
                        <tbody>
                       {
                        users.map((item,key)=>{
                           return(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.mobile}</td>
                                <td><NavLink to={`/update/${item.id}`} className="btn btn-success">Edit User</NavLink><button className="btn btn-danger" onClick={()=>delHandler(item.id)}>Delete</button></td>
                            </tr>
                           ) 
                        })
                       }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home
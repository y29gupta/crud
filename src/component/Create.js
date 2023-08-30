import React,{useState,useEffect} from 'react'
import {toast}  from 'react-toastify';
import UserApi from '../API/UserApi'

function Create() {
    const [user,setUser]=useState({
        name:"",
        email:"",
        mobile:"",
        address:""
    });
    const readonly=(e)=>{
        const{name,value}=e.target;
        setUser({...user,[name]:value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        try{
            console.log("new user=",user);
            UserApi.create(user).then(res=>{
                toast.success("data created successfully");
                window.location.href="/";
            }).catch(err=>toast.error(err.message))
        }catch(error){
            toast.error(error.message);
        }
    }
  return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3">Add user</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <form autoComplete='off' onSubmit={submitHandler}>
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="name" id="name" className="form-control" value={user.name} onChange={readonly}/>
                                <label htmlFor="email" className="form-label">email</label>
                                <input type="email" name="email" id="email" className="form-control"value={user.email}onChange={readonly} />
                                <label htmlFor="mobile" className="form-label">mobile</label>
                                <input type="text" name="mobile" id="mobile" className="form-control" value={user.mobile} onChange={readonly}/>
                                <label htmlFor="addresss" className="form-label">address</label>
                                <textarea name="address" id="address" cols="30" rows="5" className="form-control" value={user.address} onChange={readonly}></textarea>
                                <input type="submit" value="Create" className="btn btn-success mt-2" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create
import React,{useEffect,useState} from 'react'
import {toast} from 'react-toastify';
import {useParams,useNavigate} from 'react-router-dom';
import UserApi from '../API/UserApi'
function Update() {
    const params=useParams();
    let history=useNavigate();

    // console.log('useparams',params);
    const[user,setUser]=useState({
        name:"",
        email:"",
        mobile:"",
        address:""
    })
    useEffect(()=>{
            UserApi.getSingle(params.id).then(res=>{
                console.log(res.data);
                setUser(res.data);
            }).catch(err=>toast.error(err.message));
    },[])

    const submitHandler=(e)=>{
        e.preventDefault();

        try{
            UserApi.update(user,params.id).then(res=>{
             setUser(res.data);
             toast.success("data updates successfully");
            //  window.location.href="/";
            history("/");
            }).catch(err=>toast.error(err.message));
        
    
        }catch(error){
            toast.error(error.messgae);
        }
        
    }
    const readonly=(e)=>{
        const {name,value}=e.target; 
        setUser({...user,[name]:value})       
    }
  return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3">Edit user details</h3>
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
                                <input type="submit" value="Update" className="btn btn-success mt-2" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update
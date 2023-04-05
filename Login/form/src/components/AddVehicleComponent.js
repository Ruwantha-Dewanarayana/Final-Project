import React, { useEffect, useState } from 'react'
import VehicleService from '../VehicleService'
import { Link, useNavigate, useParams } from 'react-router-dom'

const AddVehicleComponent = () => {

const [vehicleType,setVehicleType] = useState('')
const [ownerName,setOwnerName] = useState('')
const [vehicleNumber,setVehicleNumber] = useState('')
const navigate = useNavigate();
const {id} = useParams();

const saveOrUpdateVehicle = (e)=>{
    e.preventDefault();

    const vehicle= {vehicleType,ownerName,vehicleNumber}
    if(id){
        VehicleService.updateVehicle(id, vehicle).then((response)=>{
            navigate('/userDetails');
        }).catch(error =>{
            console.log(error);
        })
    }else{
        VehicleService.createVehicle(vehicle).then((response) =>{
            console.log(response.data)
            navigate('/userDetails');
        }).catch(error => {
            console.log(error)
        })
    }
}

useEffect(()=>{
    VehicleService.getVehicleById(id).then((response)=>{
        setVehicleType(response.data.vehicleType)
        setOwnerName(response.data.ownerName)
        setVehicleNumber(response.data.vehicleNumber)
    }).catch(error => {
        console.log(error)
    })
    // eslint-disable-next-line 
},[])

const title = () =>{
    if(id){
        return <h2 className='text-center'>Update Vehicle</h2>
    }else{
        return <h2 className='text-center'>Add Vehicle</h2>
    }
}
  return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Vehicle Type:</label>
                                <input
                                type='text'
                                placeholder='Enter Vehicle Type'
                                name='vehicleType'
                                className='form-control'
                                value={vehicleType}
                                onChange={(e)=>setVehicleType(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Owner Name:</label>
                                <input
                                type='text'
                                placeholder='Enter Owner Name'
                                name='ownerName'
                                className='form-control'
                                value={ownerName}
                                onChange={(e)=>setOwnerName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Vehicle Number:</label>
                                <input
                                type='text'
                                placeholder='Enter Vehicle Number'
                                name='vehicleNumber'
                                className='form-control'
                                value={vehicleNumber}
                                onChange={(e)=>setVehicleNumber(e.target.value)}
                                >
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveOrUpdateVehicle(e)}>Submit</button>
                            <Link to="/userDetails" className='btn btn-danger'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddVehicleComponent
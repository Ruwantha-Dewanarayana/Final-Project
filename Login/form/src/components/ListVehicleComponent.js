import React, { useEffect, useState } from 'react'
import VehicleService from '../VehicleService'
import { Link } from 'react-router-dom'

const ListVehicleComponent = () => {

const[vehicles, setVehicles] = useState([])

useEffect(() =>{
    getAllVehicles();
}, [])

const getAllVehicles = () =>{
    VehicleService.getAllVehicles().then((response)=>{
        setVehicles(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
}

const deleteVehicle = (vehicleId) =>{
    VehicleService.deleteVehicle(vehicleId).then((response)=>{
        getAllVehicles();
    }).catch(error =>{
        console.log(error);
    })
}

  return (
    <div className='container'>
        <h2 className='text-center'>Vehicles List </h2>
        <Link to="/add-vehicle" className='btn btn-primary mb-2'>Add New Vehicle</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Vehicle Id</th>
                <th>Vehicle Type</th>
                <th>Owner Name</th>
                <th>Vehicle Number</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    vehicles.map(
                        vehicle=>
                        <tr key={vehicle.id}>
                            <td>{vehicle.id}</td>
                            <td>{vehicle.vehicleType}</td>
                            <td>{vehicle.ownerName}</td>
                            <td>{vehicle.vehicleNumber}</td>
                            <td>
                                <Link className='btn btn-info' to={`edit-vehicle/${vehicle.id}`}>Update</Link>
                                <button className='btn btn-danger' onClick={() => deleteVehicle(vehicle.id)}
                                style={{marginLeft:"10px"}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    
    </div>
  )
}

export default ListVehicleComponent
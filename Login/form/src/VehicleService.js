import axios from "axios";

const VEHICLE_BASE_REST_API_URL = "http://localhost:8080/api/v1/vehicles";

class VehicleService{
    getAllVehicles(){
        return axios.get(VEHICLE_BASE_REST_API_URL);
    }

    createVehicle(vehicle){
        return axios.post(VEHICLE_BASE_REST_API_URL, vehicle)
    }
    getVehicleById(vehicleId){
        return axios.get(VEHICLE_BASE_REST_API_URL + '/' + vehicleId);
    }
    updateVehicle(vehicleId, vehicle){
        return axios.put(VEHICLE_BASE_REST_API_URL + '/' + vehicleId, vehicle);
    }
    deleteVehicle(vehicleId){
        return axios.delete(VEHICLE_BASE_REST_API_URL + '/' + vehicleId);
    }
}
// eslint-disable-next-line
export default new VehicleService();
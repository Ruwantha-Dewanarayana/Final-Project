package net.ruwa.springbootbackend.controller;

import net.ruwa.springbootbackend.exception.ResourceNotFoundException;
import net.ruwa.springbootbackend.model.Vehicle;
import net.ruwa.springbootbackend.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/vehicles")
public class VehicleController {
    @Autowired
    private VehicleRepository vehicleRepository;

    @GetMapping
    public List<Vehicle> getAllVehicles(){
        return vehicleRepository.findAll();
    }
    //build create vehicle REST API
    @PostMapping
    public Vehicle createVehicle(@RequestBody Vehicle vehicle){
        return vehicleRepository.save(vehicle);
    }
    //build get vehicle by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long id){
        Vehicle vehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle not exist with id:" +id));
        return ResponseEntity.ok(vehicle);
    }
    //build update vehicle REST API
    @PutMapping("{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable long id,@RequestBody Vehicle vehicleDetails){
        Vehicle updateVehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle not exist with id:" +id));

        updateVehicle.setVehicleType(vehicleDetails.getVehicleType());
        updateVehicle.setOwnerName(vehicleDetails.getOwnerName());
        updateVehicle.setVehicleNumber(vehicleDetails.getVehicleNumber());

        vehicleRepository.save(updateVehicle);

        return ResponseEntity.ok(updateVehicle);
    }
    //build delete vehicle REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteVehicle(@PathVariable long id) {
        Vehicle vehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle not exist with id:" + id));

        vehicleRepository.delete(vehicle);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

package net.ruwa.springbootbackend;

import net.ruwa.springbootbackend.model.Vehicle;
import net.ruwa.springbootbackend.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
	@Autowired
	private VehicleRepository vehicleRepository;
	@Override
	public void run(String... args) throws Exception {
//		Vehicle vehicle = new Vehicle();
//		vehicle.setVehicleType("car");
//		vehicle.setOwnerName("Ruwantha");
//		vehicle.setVehicleNumber("KE-8968");
//		vehicleRepository.save(vehicle);
//
//		Vehicle vehicle1 = new Vehicle();
//		vehicle1.setVehicleType("bike");
//		vehicle1.setOwnerName("Ruwan");
//		vehicle1.setVehicleNumber("ABC-8968");
//		vehicleRepository.save(vehicle1);
	}
}

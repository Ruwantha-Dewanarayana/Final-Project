package net.ruwa.springbootbackend.repository;

import net.ruwa.springbootbackend.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}

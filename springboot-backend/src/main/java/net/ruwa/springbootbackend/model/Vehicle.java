package net.ruwa.springbootbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vehicles")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "vehicle_type")
    private String vehicleType;
    @Column(name = "owner_name")
    private String ownerName;
    @Column(name = "vehicle_number")
    private String vehicleNumber;
}

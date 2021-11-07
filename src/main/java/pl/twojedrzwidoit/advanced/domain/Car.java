package pl.twojedrzwidoit.advanced.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "car")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Car {

    @Id
    String id;
    String imageUrl;
    String model;
    String range;
    String petrol;
    Boolean available;

    public Car(String id, String imageUrl, String model, String range, String petrol, Boolean available) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.model = model;
        this.range = range;
        this.petrol = petrol;
        this.available = available;
    }
}

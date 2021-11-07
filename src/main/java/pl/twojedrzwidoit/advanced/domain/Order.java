package pl.twojedrzwidoit.advanced.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "order")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Order {

    String userId;

    public String getUserId() {
        return userId;
    }

    public String getId() {
        return id;
    }

    public String getFrom() {
        return from;
    }

    public String getTo() {
        return to;
    }

    public String getStatus() {
        return status;
    }

    public String getStatusMessage() {
        return statusMessage;
    }

    @Id
    String id;
    String from;
    String to;
    String status;
    String statusMessage;

    public Order(String userId, String id, String from, String to, String status, String statusMessage) {
        this.userId = userId;
        this.id = id;
        this.from = from;
        this.to = to;
        this.status = status;
        this.statusMessage = statusMessage;
    }
}

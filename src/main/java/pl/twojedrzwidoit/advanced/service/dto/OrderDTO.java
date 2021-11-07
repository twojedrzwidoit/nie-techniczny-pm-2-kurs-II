package pl.twojedrzwidoit.advanced.service.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Objects;

/**
 * A DTO representing a user, with his authorities.
 */
public class OrderDTO {

    @NotBlank
    @Size(max = 50)
    String userId;


    @NotBlank
    @Size(max = 50)
    String carId;

    String id;

    @NotBlank
    String from;

    @NotBlank
    String to;

    @NotBlank
    String status;


    String statusMessage;

    public String getCarId() {
        return carId;
    }

    public void setCarId(String carId) {
        this.carId = carId;
    }


    public void setId(String id) {
        this.id = id;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatusMessage() {
        return statusMessage;
    }

    public void setStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderDTO orderDTO = (OrderDTO) o;
        return Objects.equals(id, orderDTO.id) &&
            Objects.equals(userId, orderDTO.userId) &&
            Objects.equals(id, orderDTO.id) &&
            Objects.equals(from, orderDTO.from) &&
            Objects.equals(to, orderDTO.to) &&
            Objects.equals(status, orderDTO.status) &&
            Objects.equals(statusMessage, orderDTO.statusMessage);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, id, from, to, status, statusMessage);
    }

    @Override
    public String toString() {
        return "OrderDTO{" +
            "id=" + id +
            ", userId='" + userId + '\'' +
            ", id='" + id + '\'' +
            ", from='" + from + '\'' +
            ", to='" + to + '\'' +
            ", status='" + status + '\'' +
            ", statusMessage='" + statusMessage + '\'' +
            '}';
    }
}

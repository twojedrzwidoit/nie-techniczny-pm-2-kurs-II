package pl.twojedrzwidoit.advanced.web.rest.errors;

public class CarNotExistsException extends BadRequestAlertException {

    private static final long serialVersionUID = 1L;

    public CarNotExistsException() {
        super(ErrorConstants.CAR_NOT_EXISTS, "Car not exists", "userManagement", "carnotexists");
    }
}

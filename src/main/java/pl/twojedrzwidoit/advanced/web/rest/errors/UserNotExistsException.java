package pl.twojedrzwidoit.advanced.web.rest.errors;

public class UserNotExistsException extends BadRequestAlertException {

    private static final long serialVersionUID = 1L;

    public UserNotExistsException() {
        super(ErrorConstants.USER_NOT_EXISTS, "User Not Exists", "userManagement", "user not exists");
    }
}

class ApiRespnse {
    constructor(statusCode, data = null, message = "Operation successful", success = true, errors = []) {
        this.statusCode = statusCode; // HTTP status code for the response
        this.data = data; // Data to be returned in the response
        this.message = message; // Message describing the operation result
        this.success = statusCode < 400; // Indicates whether the operation was successful
    }
}
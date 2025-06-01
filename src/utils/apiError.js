class ApiError extends Error {

    constructor(statusCode, message = "Someting want worng", errors = [], statck = "") {
        super(message);
        this.statusCode = statusCode;
        this.data = null; // Additional data can be added if needed
        this.message = message;
        this.success = false; // Indicates that the operation was not successful
        this.errors = errors; // Array of error details, if any 

        if (statck )
        {
            this.stack = statck; // Stack trace for debugging purposes
        }
        else
        {
            Error.captureStackTrace(this, this.constructor); // Capture the stack trace
        }
    }
}
export {ApiError};
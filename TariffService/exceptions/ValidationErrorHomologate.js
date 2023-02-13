module.exports = class ValidationErrorHomologate extends Error{
    constructor(message, status){
        super(message)
        this.name = 'ValidationErrorHomologate';
        this.status = status;
    }
}
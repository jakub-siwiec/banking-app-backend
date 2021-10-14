class OperationalCustomError extends Error {
    constructor(status, name, code, type, message) {        
        super(message)

        this._name = name
        this._status = status
        this._code = code
        this._type = type
    }

    get name() {
        return this._name
    }

    get status() {
        return this._status
    }

    get code() {
        return this._code
    }

    get type() {
        return this._type
    }

    apiRequest(res) {
        res.status(this._status)
        res.send({
            "name": this._name,
            "message": this.message,
            "code": this._code,
            "type": this._type
        })
    }
}


module.exports = OperationalCustomError
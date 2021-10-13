class TokenError extends Error {
    constructor() {        
        super("No token received")

        this._name = "TokenError"
        this._status = 401
        this._code = "ERR_NO_TOKEN"
        this._type = "INVALID_REQUEST"
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

module.exports = TokenError
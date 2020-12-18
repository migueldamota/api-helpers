const errors = {
    200: "200: OK",
    201: "201: Created",
    202: "202: Accepted",
    204: "204: No Content",

    302: "302: Found",
    304: "304: Not Modified",

    400: "400: Bad Request",
    401: "401: Not Authorized",
    403: "403: Forbidden",
    404: "404: Not Found",
    405: "405: Method Not Allowed",

    500: "500: Internal Server Error",
}

const error = (res, error, code = 0) => {
    return res.status(error).json({
        message: errors[error],
        code,
    });
}

module.exports = error;
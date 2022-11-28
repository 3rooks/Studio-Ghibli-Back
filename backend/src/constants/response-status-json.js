/*
***1XX Information Responses***
100 Continue
101 Switching Protocols
102 Processing
103 Early Hints

***2XX Success***
200 OK
201 Created
202 Accepted
203 Non-Authoritative Information
204 No Content
205 Reset Content
206 Partial Content
207 Multi-Status
208 Already Reported
226 IM Used

***3XX Redirection***
300 Multiple Choices
301 Moved Permanently
302 Found
303 See Other
304 Not Modified
305 Use Proxy
306 Switch Proxy
307 Temporary Redirect
308 Permanent Redirect

***4XX Client errors***
400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout
409 Conflict
410 Gone
411 Length Required
412 Precondition Failed
413 Payload Too Large
414 URI Too Long
415 Unsupported Media Type
416 Range Not Satisfiable
417 Expectation Failed
418 I'm a teapot
420 Method Failure
421 Misdirected Request
422 Unprocessable Entity
423 Locked
424 Failed Dependency
426 Upgrade Required
428 Precondition Required
429 Too Many Requests
431 Request Header Fields Too Large
451 Unavailable For Legal Reasons

***5XX Server errors***
500 Internal Server error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 gateway Timeout
505 Http version not supported
506 Varient Also negotiate
507 Insufficient Storage
508 Loop Detected
510 Not Extended
511 Network Authentication Required
*/

export const USER_RESPONSE = {
    201: { results: 'user created' },
    202: { results: 'user acepted-updated' },
    400: { errors: 'user bad request' },
    401: { errors: 'user unauthorized' },
    409: { errors: 'user conflict' },
    503: { errors: 'user service unavailable' }
};

export const PRODUCT_RESPONSE = {
    201: { results: 'product created' },
    202: { results: 'product acepted-updated' },
    404: { errors: 'product not found' },
    409: { errors: 'product conflict' }
};

export const CART_RESPONSE = {
    202: { results: 'cart user updated' },
    404: { errors: 'cart user not found' }
};

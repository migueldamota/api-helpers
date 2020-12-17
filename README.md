## Express Error Codes for APIs
___

### How to use it
Install package with ``npm i @migueldamota/api-helpers --save``

### Usage:
Status Codes (error_status): https://httpstatuses.com

res: Response Object of Express

error_status: Error code (status code)

code: Code if need (default: 0)

``error(res, error_status, code)``
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify("Hello from Github and is updated test_js again up")
    }
    return response
}
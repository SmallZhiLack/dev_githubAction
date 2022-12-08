exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify("Hello from Github and is updated")
    }
    return response
}
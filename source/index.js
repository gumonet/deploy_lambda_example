exports.handler = async (event) => {
    // TODO implement
    //Comment from github
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!' + new Date() ),
    };
    console.log( 'Hello from Lambda!' + new Date());
    return response;
};

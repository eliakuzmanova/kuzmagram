const request = async (method,url, data) => {
    try {
        let headers = {};

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url)
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    // ...headers,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
                // body: data
            });
        }
      
       
        const response = await buildRequest;
       
        const result = await response.json();
      
        return result;
        
    } catch (err) {
 
            console.log(err);

    }
}

export const get = request.bind({}, "GET");
export const post = request.bind({}, "POST");
export const put = request.bind({}, "PUT");
export const del = request.bind({}, "DELETE");
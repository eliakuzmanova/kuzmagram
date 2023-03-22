const request = async (method, url, data) => {
    try {
        // const user = localStorage.getItem("auth");
        // const auth = JSON.parse(user || {});
   
        let headers = {};

        // if (auth.accessToken) {
        //     headers["X-Authorization"] = auth.accessToken
        // }
       
        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, { headers })
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
        console.log("Here one error");
            console.log(err);

    }
}

export const get = request.bind({}, "GET");
export const post = request.bind({}, "POST");
export const put = request.bind({}, "PUT");
export const del = request.bind({}, "DELETE");
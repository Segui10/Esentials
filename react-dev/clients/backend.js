const backend = {
    axios: {
      baseURL: 'http://localhost:8080',
      responseType: 'json',
    },
    //opt 
    options: {
      interceptors: {
        request: [
          (getState, config) => {
            if (getState().user.token) {
              config.headers['Authorization'] = 'Bearer ' + getState().user.token
            }
   
            return config
          }
        ],
        response: [
          (getState, response) => {
            return response
          }
        ]
      }
    }
  };
   
  export default backend;



export class HttpService {
    constructor(client) {
        this.client = client
    }
    async get(url, config = {}) {
        try{
    const {data} = await  this.client.get(
        url, config
);
   return data;
}catch(error) {
    console.log(error);
    throw error;
}
    }

 async post(url,body, config = {}) {
        try{
    const {data} = await  this.client.post(
        url,body, config
);
   return data;
}catch(error) {
    console.log(error);
    throw error;
}
    }
}
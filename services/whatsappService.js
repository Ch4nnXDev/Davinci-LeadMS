const axios = require('axios');

axios.get('https://graph.facebook.com/v25.0/1105445742659281', {
    headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
    },
}).then((response) => {
    console.log(response.data);
})
const axios = require('axios');

axios.get('https://graph.facebook.com/v25.0/1105445742659281', {
    headers: {
        Authorization: "Bearer EAAQUkMRB5cMBRmmhRBhuAI3yj9G12VZBywcJ16uPhxf7DzXT3lTuTtylpAmQypvEZB4uJjv4WWK7nX3E23fPFjAkjowzU4M5ttIQfNpb5OCESklwZAWEkrFjO7ZAwfAZBh2lOfz8h9P46lwLpZCAxHNgv0cz5pw7ZCxuU4d3EqEwbF7O2xmLYwK7BN09GPg4urY29QyDX0G3exVmgNk1mXr7BgWDvkNacnquzHtY37sJX7TZBQZBpmD283Okn6qjIt2sDjZBxnPlZB6iZAEW1ARh700j",
    },
}).then((response) => {
    console.log(response.data);
})
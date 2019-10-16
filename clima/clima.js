const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9872e7f0c10a22740dc15ce50a4ac788&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
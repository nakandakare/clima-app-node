const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener la clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const data = await lugar.getLugarLatLng(direccion)
        const temperatura = await clima.getClima(data.lat, data.lng)
        return `El clima de ${data.direccion} es de ${temperatura} grados`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.d)
    .then(console.log)
    .catch(console.log);
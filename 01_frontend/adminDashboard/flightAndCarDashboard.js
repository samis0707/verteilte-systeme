
function CarAdd() {

    const url = 'http://localhost:3003/add'
    let Form = document.forms.CarAddForm

    let data = {
        pricePerDay: Form.CarPreis.value,
        brand: Form.CarBrand.value,
        model: Form.CarModel.value,
        releaseDate: Form.CarDate.value,
        doorQuant: Form.CarTüren.value,
        seats: Form.CarSitze.value
    }


    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
}

function CarPut() {

    let id = document.getElementById("CarBearbeitenId").value

    const url = `http://localhost:3003/${id}`
    let Form = document.forms.CarPutForm

    let data = {
        pricePerDay: Form.CarBearbeitenPreis.value,
        brand: Form.CarBearbeitenBrand.value,
        model: Form.CarBearbeitenModel.value,
        releaseDate: Form.CarBearbeitenDate.value,
        doorQuant: Form.CarBearbeitenTüren.value,
        seats: Form.CarBearbeitenSitze.value
    }

   


    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
}

function CarDelete() {

    let id = document.getElementById("CarDeleteId").value

    const url = `http://localhost:3003/${id}`
   
    let options = {
        method: 'DELETE',
    }

    fetch(url, options)
}


/* --------------------------------------------------------------------------------------------------------------- */

function FlightAdd() {

    const url = 'http://localhost:3002/add'
    let Form = document.forms.FlightAddForm

    let data = {
        pricePerSeat: Form.FlugPreis.value,
        start: Form.FlugStart.value,
        destination: Form.FlugZiel.value,
        flightTime: Form.FlugZeit.value,
        flightClass: Form.FlugDatum.value,
        departureTime: Form.FlugAbflugszeit.value,
        departureDate: Form.FlugAbflugDatum.value,
        arrivalTime: Form.FlugAnkunftszeit.value,
        arrivalDate: Form.FlugAnkunftsdatum.value
    }


    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
}


function FlightPut() {

    let id = document.getElementById("FlugBearbeitenId").value

    const url = `http://localhost:3002/${id}`
    let Form = document.forms.FlightPutForm

    let data = {
        pricePerSeat: Form.FlugBearbeitenPreis.value,
        start: Form.FlugBearbeitenStart.value,
        destination: Form.FlugBearbeitenZiel.value,
        flightTime: Form.FlugBearbeitenZeit.value,
        flightClass: Form.FlugBearbeitenDatum.value,
        departureTime: Form.FlugBearbeitenAbflugszeit.value,
        departureDate: Form.FlugBearbeitenAbflugDatum.value,
        arrivalTime: Form.FlugBearbeitenAnkunftszeit.value,
        arrivalDate: Form.FlugBearbeitenAnkunftsdatum.value
    }

   


    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
}

function FlightDelete() {

    let id = document.getElementById("FlightDeleteId").value

    const url = `http://localhost:3002/${id}`
   
    let options = {
        method: 'DELETE',
    }

    fetch(url, options)
}







document.getElementById("CarAddBtn").addEventListener('click', CarAdd)
document.getElementById("CarPutBtn").addEventListener('click', CarPut)
document.getElementById("CarDeleteBtn").addEventListener('click', CarDelete)

document.getElementById("FlightAddBtn").addEventListener('click', FlightAdd)
document.getElementById("FlightPutBtn").addEventListener('click', FlightPut)
document.getElementById("FlightDeleteBtn").addEventListener('click', FlightDelete)
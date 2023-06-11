
function HotelAdd() {

    const url = 'http://localhost:3001/add'
    let Form = document.forms.hotelAddForm

    let data = {
        price: Form.hotelPreis.value,
        price_category: Form.hotelPreisKategorie.value,
        beds: Form.hotelBetten.value,
        title: Form.hotelTitel.value,
        description: Form.hotelBeschreibung.value,
        country: Form.hotelLand.value,
        city: Form.hotelStadt.value
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

function HotelPut() {

    let id = document.getElementById("hotelBearbeitenId").value

    const url = `http://localhost:3001/${id}`
    let Form = document.forms.hotelPutForm

    let data = {
        price: Form.hotelBearbeitenPreis.value,
        price_category: Form.hotelBearbeitenPreisKategorie.value,
        beds: Form.hotelBearbeitenBetten.value,
        title: Form.hotelBearbeitenTitel.value,
        description: Form.hotelBearbeitenBeschreibung.value,
        country: Form.hotelBearbeitenLand.value,
        city: Form.hotelBearbeitenStadt.value
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

function HotelDelete() {

    let id = document.getElementById("hotelLöschenId").value

    const url = `http://localhost:3001/${id}`
   
    let options = {
        method: 'DELETE',
    }

    fetch(url, options)
}

/* --------------------------------------------------------------------------------------------------------------- */

function HotelRatingAdd() {

    const url = 'http://localhost:3000/add'
    let Form = hotelRatingAddForm

    let data = {
        category: Form.hotelRatingKategorie.value,
        rating: Form.hotelRatingRating.value,
        title: Form.hotelRatingTitel.value,
        description: Form.hotelRatingBeschreibung.value,
        country: Form.hotelRatingLand.value,
        city: Form.hotelRatingStadt.value
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


function HotelRatingPut() {

    let id = document.getElementById("hotelRatingBearbeitenId").value

    const url = `http://localhost:3000/${id}`
    let Form = document.forms.hotelRatingBearbeitenForm

    let data = {
        category: Form.hotelRatingBearbeitenKategorie.value,
        rating: Form.hotelRatingBearbeitenRating.value,
        title: Form.hotelRatingBearbeitenTitel.value,
        description: Form.hotelRatingBearbeitenBeschreibung.value,
        country: Form.hotelRatingBearbeitenLand.value,
        city: Form.hotelRatingBearbeitenStadt.value
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

function HotelRatingDelete() {

    let id = document.getElementById("hotelRatingLöschenId").value

    const url = `http://localhost:3000/${id}`
   
    let options = {
        method: 'DELETE',
    }

    fetch(url, options)
}







document.getElementById("hotelAddBtn").addEventListener('click', HotelAdd)
document.getElementById("hotelBearbeitenBtn").addEventListener('click', HotelPut)
document.getElementById("hotelLöschenBtn").addEventListener('click', HotelDelete)

document.getElementById("hotelRatingAddBtn").addEventListener('click', HotelRatingAdd)
document.getElementById("hotelRatingBearbeitenBtn").addEventListener('click', HotelRatingPut)
document.getElementById("hotelRatingLöschenBtn").addEventListener('click', HotelRatingDelete)
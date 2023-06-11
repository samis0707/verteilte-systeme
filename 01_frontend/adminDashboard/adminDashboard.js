



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

    let id = 'idMussHierHin'

    const url = `http://localhost:3001/${id}`
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







document.getElementById("hotelAddBtn").addEventListener('click', HotelAdd)




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
    let Form = document.forms.hotelAddForm

    let dataAll = {
        price: Form.hotelBearbeitenPreis.value,
        price_category: Form.hotelBearbeitenPreisKategorie.value,
        beds: Form.hotelBearbeitenBetten.value,
        title: Form.hotelBearbeitenTitel.value,
        description: Form.hotelBearbeitenBeschreibung.value,
        country: Form.hotelBearbeitenLand.value,
        city: Form.hotelBearbeitenStadt.value
    }

    let dataWithoutEmpty = {}

    for (const [key, value] of Object.entries(dataAll)) {

        if(typeof value != "undefined") {
            dataWithoutEmpty[key] = value
        }
      }

      console.log(dataWithoutEmpty)


    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataWithoutEmpty)
    }

    fetch(url, options)
}







document.getElementById("hotelAddBtn").addEventListener('click', HotelAdd)
document.getElementById("hotelBearbeitenBtn").addEventListener('click', HotelPut)
// Karten erstellen für Autovermietung
function createCardsByCRental() {

    let cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

        fetch('http://localhost:3003/all')
        .then(responseURLRequest => responseURLRequest.json())
        .then(cRentals => {

            for(var i = 0; i < cRentals.length; i++) { 

                var rental = cRentals[i];

                let colDiv = document.createElement("div");
                colDiv.setAttribute("class", "col");

                let outerDiv = document.createElement("div");
                outerDiv.setAttribute("class", "card shadow-sm");

                let innerDiv = document.createElement("div");
                innerDiv.setAttribute("class", "card-body");

                let captionCaption = document.createElement("h4");
                captionCaption.innerHTML = rental.brand + " " + rental.model;
                captionCaption.setAttribute("class", "card-title fw-bold");

                let cardDoorQuant = document.createElement("p");
                cardDoorQuant.innerHTML = "Anzahl der Türen " + rental.doorQuant;

                let cardSeats = document.createElement("p");
                cardSeats.innerHTML = "Anzahl der Sitze: " + rental.seats

                let cardReleaseDate = document.createElement("p");
                cardReleaseDate.innerHTML = "Jahr der Erstzulassung: " + rental.releaseDate

                let cardPrice = document.createElement("h5");
                cardPrice.innerHTML = "Kosten pro Tag: " + rental.pricePerDay + "€";
                //cardPrice.setAttribute("class", "fw-bold");

                innerDiv.appendChild(captionCaption);
                innerDiv.appendChild(cardSeats);
                innerDiv.appendChild(cardReleaseDate);
                innerDiv.appendChild(cardPrice);
                innerDiv.appendChild(cardDoorQuant);

                outerDiv.appendChild(innerDiv);;

                colDiv.appendChild(outerDiv);

                let resultDiv = document.getElementById("cardContainer");

                resultDiv.appendChild(colDiv);
            }
        })   
}
// Karten erstellen für Hotels
function createCardsByHotel() {

    let cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

        fetch('http://localhost:3001/all')
        .then(responseURLRequest => responseURLRequest.json())
        .then(hotels => {

            for(var i = 0; i < hotels.length; i++) { 

                var hotel = hotels[i];

                let colDiv = document.createElement("div");
                colDiv.setAttribute("class", "col");

                let outerDiv = document.createElement("div");
                outerDiv.setAttribute("class", "card shadow-sm");

                let innerDiv = document.createElement("div");
                innerDiv.setAttribute("class", "card-body");

                let captionCaption = document.createElement("h4");
                captionCaption.innerHTML = hotel.title;
                captionCaption.setAttribute("class", "card-title fw-bold");

                let cardpriceCategory = document.createElement("p");
                cardpriceCategory.innerHTML = "Preiskategorie: " + hotel.price_category;

                let cardBeds = document.createElement("p");
                cardBeds.innerHTML = "Anzahl der Betten: " + hotel.beds

                let cardDescription = document.createElement("p");
                cardDescription.innerHTML = hotel.description

                let cardCountry = document.createElement("p");
                cardCountry.innerHTML = "Land: " + hotel.country

                let cardCity = document.createElement("p");
                cardCity.innerHTML = "Stadt: " + hotel.city

                let cardPrice = document.createElement("h5");
                cardPrice.innerHTML = "Kosten pro Tag: " + hotel.price + "€";
                //cardPrice.setAttribute("class", "fw-bold");

                innerDiv.appendChild(captionCaption);
                innerDiv.appendChild(cardDescription);
                innerDiv.appendChild(cardBeds);
                innerDiv.appendChild(cardCountry);
                innerDiv.appendChild(cardCity);
                innerDiv.appendChild(cardPrice);
                innerDiv.appendChild(cardpriceCategory);

                outerDiv.appendChild(innerDiv);;

                colDiv.appendChild(outerDiv);

                let resultDiv = document.getElementById("cardContainer");

                resultDiv.appendChild(colDiv);
            }
        })   
}
// Karten erstellen für Flüge
function createCardsByFlug() {

    let cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

        fetch('http://localhost:3002/all')
        .then(responseURLRequest => responseURLRequest.json())
        .then(fluege => {

            for(var i = 0; i < fluege.length; i++) { 

                var flug = fluege[i];

                let colDiv = document.createElement("div");
                colDiv.setAttribute("class", "col");

                let outerDiv = document.createElement("div");
                outerDiv.setAttribute("class", "card shadow-sm");

                let innerDiv = document.createElement("div");
                innerDiv.setAttribute("class", "card-body");

                let captionCaption = document.createElement("h4");
                captionCaption.innerHTML = "Von: " + flug.start + " Nach: " + flug.destination;
                captionCaption.setAttribute("class", "card-title fw-bold");

                let cardFlightTime = document.createElement("p");
                cardFlightTime.innerHTML = "Flugzeit: " + flug.flightTime + " Stunden";

                let cardDeparture = document.createElement("p");
                cardDeparture.innerHTML = "Abflugszeit: " + flug.departureTime + "/Ablugsdatum: " + flug.departureDate;

                let cardarrival = document.createElement("p");
                cardarrival.innerHTML = "Ankunftszeit: " + flug.arrivalTime + "/Ankunftsdatum: " + flug.arrivalDate;

                let cardFlightClass = document.createElement("p");
                cardFlightClass.innerHTML = "Klasse: " + flug.flightClass;

                let cardPrice = document.createElement("h5");
                cardPrice.innerHTML = "Kosten pro Sitzplatz: " + flug.pricePerSeat + "€";
                //cardPrice.setAttribute("class", "fw-bold");

                innerDiv.appendChild(captionCaption);
                innerDiv.appendChild(cardFlightTime);
                innerDiv.appendChild(cardDeparture);
                innerDiv.appendChild(cardarrival);
                innerDiv.appendChild(cardFlightClass);
                innerDiv.appendChild(cardPrice);

                outerDiv.appendChild(innerDiv);;

                colDiv.appendChild(outerDiv);

                let resultDiv = document.getElementById("cardContainer");

                resultDiv.appendChild(colDiv);
            }
        })   
}
// Karten erstellen für Ratings
function createCardsByRating() {

    let cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

        fetch('http://localhost:3000/all')
        .then(responseURLRequest => responseURLRequest.json())
        .then(ratings => {

            for(var i = 0; i < ratings.length; i++) { 

                var rating = ratings[i];

                let colDiv = document.createElement("div");
                colDiv.setAttribute("class", "col");

                let outerDiv = document.createElement("div");
                outerDiv.setAttribute("class", "card shadow-sm");

                let innerDiv = document.createElement("div");
                innerDiv.setAttribute("class", "card-body");

                let captionCaption = document.createElement("h4");
                captionCaption.innerHTML = rating.title;
                captionCaption.setAttribute("class", "card-title fw-bold");

                let cardCategory = document.createElement("p");
                cardCategory.innerHTML = "Kategorie: " + rating.category;

                let cardDescription = document.createElement("p");
                cardDescription.innerHTML = rating.description;

                let cardCountry = document.createElement("p");
                cardCountry.innerHTML = "Aus dem Land: " + rating.country;

                let cardCity = document.createElement("p");
                cardCity.innerHTML = "Aus der Stadt: "+ rating.city;

                let cardRating = document.createElement("h5");
                cardRating.innerHTML = rating.rating + " von 10 Sternen";
                //cardPrice.setAttribute("class", "fw-bold");

                innerDiv.appendChild(captionCaption);
                innerDiv.appendChild(cardCategory);
                innerDiv.appendChild(cardDescription);
                innerDiv.appendChild(cardCountry);
                innerDiv.appendChild(cardCity);
                innerDiv.appendChild(cardRating);

                outerDiv.appendChild(innerDiv);;

                colDiv.appendChild(outerDiv);

                let resultDiv = document.getElementById("cardContainer");

                resultDiv.appendChild(colDiv);
            }
        })   
}
# API Endpoints: CRUD

- GET:
  - `/all` gibt alle flights zurück
  Parameters:
  - `/id/:id` gibt das flight mit einer bestimmten Datenbank-ID zurück
  - `/priceperseat/:priceperseat` gibt preis eines platzes von Flug zurück
  - `/start/:start` gibt den Starpunkt eines flights zurück
  - `/destination/:destination` gibt flights mit einer bestimmten destination (Flughafen) zurück
  - `/flightClass/:flightClass` gibt die Sitzklasse eines platzes eines flights zurück
  - `/departureTime/:departureTime` gibt flights mit einem bestimmten abflugzeitpuntk zurück
  - `/departureDate/:departureDate` gibt flights mit einem bestimmten abflugsdatum zurück
  - `/arrivalTime/:arrivalTime` gibt flights mit einem bestimmten ankunftszeitpunkt zurück
  - `/arrivalDate/:arrivalDate` gibt flights mit einem bestimmten ankunftsdatumzurück
---
- POST:
    - `/add` erwartet ein JSON mit {priceperseat, start, destination, flightClass, departureTime, departureDate, arrivalTime, arrivalDate}
---
- PUT:
  - `/:id` {priceperseat, start, destination, flightClass, departureTime, departureDate, arrivalTime, arrivalDate}
---
- PATCH:
---
- DELETE:
  - `/:id`
---


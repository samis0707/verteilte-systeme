# API Endpoints: CRUD

- GET:
  - `/all` gibt alle flights zurück
  Parameters:
  - `/id/:id` gibt das flight mit einer bestimmten Datenbank-ID zurück
  - `/priceperday/:priceperday` gibt car rentals mit einem bestimmten täglichen Preis zurück
  - `/brand/:brand` gibt car rentals mit bestimmter Automarke zurück
  - `/model/:model` gibt car rentals eines bestimmten automodells zurück
  - `/releasedate/:releasedate` gibt car rentals mit einem bestimmten auto baujahr zurück
  - `/doorquant/:doorquant` gibt car rentals mit einer bestimmten türzahl zurück
  - `/seats/:seats` gibt car rentals mit einer bestimmten anzahl an sitzen zurück
---
- POST:
    - `/add` erwartet ein JSON mit {priceperday, brand, model, releasedate, doorquant, seats}
---
- PUT:
  - `/:id` {priceperday, brand, model, releasedate, doorquant, seats}
---
- PATCH:
---
- DELETE:
  - `/:id`
---


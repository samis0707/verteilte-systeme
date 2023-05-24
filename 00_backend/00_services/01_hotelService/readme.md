# API Endpoints: CRUD

- GET:
  - `/all` gibt alle hotels zurück
  Parameters:
  - `/id/:id` gibt das hotel mit einer bestimmten Datenbank-ID zurück
  - `/price/:price` Gibt Preis pro Nacht eines Hotels zurück
  - `/price_category/:price_category` (Erlaubte Inputs: günstig, ok, teuer) gibt hotels nach einer Kategorie zurück
  - `/beds/:beds` gibt hotels mit einer bestimmten anzahl an betten zurück
  - `/title/:title` gibt hotels mit einem bestimmten titel zurück
  - `/description/:description` gibt hotels mit *wildcard* begriff zurück der iwie in beschreibung vorkommt
  - `/country/:country` gibt hotels eines bestimmten Landes zurück
  - `/city/:city` gibt hotels einer bestimmten Stadt zurück
---
- POST:
    - `/add` erwartet ein JSON mit {price, price_category, beds, title, description, country, city}
---
- PUT:
  - `/:id`{price, price_category, beds, title, description, country, city}
---
- PATCH:
---
- DELETE:
  - `/:id`
---

Zusätzliche Features:
- Input Validation -> category
- wildcard suche -> bei beschreibung
  
**Was krank wäre:** Wenn wir hier auch hotel ratings mit einführen könnten, ist glaube ich aber eher Frontend arbeit

# API Endpoints: CRUD

- GET:

*HIER STIMMT WAS NICHT WIE KANN ICH DAS MACHEN DASS MAN DAS CONCATINATEN KANN?*

  - `/all` gibt alle ratings zurück
  Parameters:
  - `/id/:id` gibt das rating mit einer bestimmten Datenbank-ID zurück
  - `/category/:category` (Erlaubte Inputs: country, city, activity, carrental, restaurant) gibt ratings nach einer Kategorie zurück
  - `/rating/:rating` gibt ratings mit einer bestimmten Bewertung zurück
  - `/title/:title` gibt ratings mit einem bestimmten titel zurück
  - `/description/:description` gibt ratings mit *wildcard* begriff zurück der iwie in beschreibung vorkommt
  - `/country/:country` gibt ratings eines bestimmten Landes zurück
  - `/city/:city` gibt ratings einer bestimmten Stadt zurück
---
- POST:
    - `/add` erwartet ein JSON mit {category, rating 1-10, beschreibung, country, city}
---
- PUT:
  - `/:id` {category, rating 1-10, beschreibung, country, city}
---
- PATCH:
---
- DELETE:
  - `/:id`
---

Zusätzliche Features:
- Input Validation -> category
- wildcard suche -> bei beschreibung
- 

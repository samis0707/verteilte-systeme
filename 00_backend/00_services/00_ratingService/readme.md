# API Endpoints: CRUD

- POST:
    - `/add` erwartet ein JSON mit {category, rating 1-10, beschreibung, country, city, category}
---
- GET:

*HIER STIMMT WAS NICHT WIE KANN ICH DAS MACHEN DASS MAN DAS CONCATINATEN KANN?*

- `/all` gibt alle ratings zurück
- `/:id` gibt das rating mit einer bestimmten Datenbank-ID zurück
- `/:category` (Erlaubte Inputs: country, city, activity, carrental, restaurant) gibt ratings nach einer Kategorie zurück
- `/:country` gibt ratings eines bestimmten Landes zurück
- `/:city` gibt ratings einer bestimmten Stadt zurück
---
- PUT:

- `/:id` {category, rating 1-10, beschreibung, country, city, category}
---
- DELETE:

- `/:id`
---


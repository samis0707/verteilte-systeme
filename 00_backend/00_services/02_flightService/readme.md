# API Endpoints: CRUD

- GET:
  - `/all` gibt alle flights zurück
  Parameters:
  - `/id/:id` gibt das flight mit einer bestimmten Datenbank-ID zurück
  - `/category/:category` gibt flights nach einer Kategorie zurück (muss noch definieren welche) 
  - `/destination/:destination` gibt flights mit einer bestimmten destination (Flughafen) zurück
  - `/departure/:departure` gibt flights mit einem bestimmten titel zurück
  - `/price/:seat_category` gibt Preise zu flights nach bestimmter Sitz Kategorie zurück (Economy, Business Class) (**Hier fehlt noch der Identifier**) eventuell id#seat_category als param
  - `/airline/:airline` gibt flights einer bestimmten airline zurück
---
- POST:
    - `/add` erwartet ein JSON mit {id, category, destination, departure, price, airline}
---
- PUT:
  - `/:id` {id, category, destination, departure, price, airline}
---
- PATCH:
---
- DELETE:
  - `/:id`
---


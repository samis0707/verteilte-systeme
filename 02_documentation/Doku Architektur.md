Das vorliegende verteilte System besteht aus einem Admin-Webfrontend für CRUD-Operationen (Create, Read, Update, Delete) und einem User-Webfrontend, das auf vier APIs zugreift. 
Die APIs sind der Bewertungsserver, der Hotel-Server, der Flugverbindungsserver und der Mietwagenserver. 
Das System ermöglicht es den Benutzern, Bewertungen abzugeben, Hotels zu suchen, Flugverbindungen abzurufen und Mietwagen zu buchen. Im Folgenden wird die Architektur des Systems näher erläutert.

Das verteilte System besteht aus zwei Hauptkomponenten: den Webfrontends und den verschiedenen Servern. 
Die Webfrontends dienen als Benutzeroberflächen, über die Benutzer mit dem System interagieren können. 
Die Server stellen die Funktionalität zur Verfügung, um die erforderlichen Aufgaben auszuführen. Die Kommunikation zwischen den Webfrontends und den Servern erfolgt über RESTful APIs.

Admin-Webfrontend:
Das Admin-Webfrontend ermöglicht es Administratoren, CRUD-Operationen auf verschiedenen Entitäten des Systems durchzuführen. 
Dazu gehören beispielsweise die Verwaltung von Bewertungen, Hotels, Flugverbindungen und Mietwagen. 
Das Admin-Webfrontend stellt eine Benutzeroberfläche bereit, über die Administratoren neue Entitäten erstellen, bestehende aktualisieren oder löschen können. Es kommuniziert mit den entsprechenden Servern über die definierten APIs.

User-Webfrontend:
Das User-Webfrontend richtet sich an normale Benutzer, die das System nutzen möchten. 
Es bietet eine Benutzeroberfläche, über die Benutzer Hotels suchen, Flugverbindungen abrufen, Mietwagen buchen und Bewertungen abgeben können. 
Das User-Webfrontend kommuniziert ebenfalls über die RESTful APIs mit den entsprechenden Servern.

Bewertungsserver:
Der Bewertungsserver ist verantwortlich für die Verwaltung und Speicherung von Bewertungen. 
Er bietet eine API an, über die das Admin-Webfrontend neue Bewertungen erstellen, bestehende aktualisieren oder löschen kann. 
Das User-Webfrontend kann über die API Bewertungen abrufen und neue Bewertungen abgeben.

Hotel-Server:
Der Hotel-Server verwaltet die Hotels im System. 
Er bietet eine API an, über die das Admin-Webfrontend neue Hotels erstellen, bestehende aktualisieren oder löschen kann. Das User-Webfrontend kann über die API nach Hotels suchen und Informationen zu einzelnen Hotels abrufen.

Flugverbindungsserver:
Der Flugverbindungsserver stellt Informationen zu Flugverbindungen bereit. 
Er bietet eine API an, über die das User-Webfrontend Flugverbindungen abrufen kann. Das Admin-Webfrontend interagiert nicht direkt mit diesem Server.

Flugverbindungsserver:
Der Flugverbindungsserver stellt Informationen zu Flugverbindungen bereit. 
Er bietet eine API an, über die das User-Webfrontend Flugverbindungen abrufen kann. Das Admin-Webfrontend interagiert nicht direkt mit diesem Server.




Das vorliegende verteilte System besteht aus einem Admin-Webfrontend und einem User-Webfrontend, die auf vier verschiedenen Servern über RESTful APIs zugreifen. Das System ermöglicht es Administratoren, verschiedene Entitäten zu verwalten und Benutzern die Suche nach Hotels, das Abrufen von Flugverbindungen, das Buchen von Mietwagen und das Abgeben von Bewertungen zu ermöglichen. Die klare Trennung der Komponenten und die Nutzung von standardisierten Kommunikationsprotokollen erleichtern die Skalierbarkeit und Wartung des Systems.

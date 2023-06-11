# Wahl eines Hostinganbieters
Im folgenden Abschnitt werden 4 HostingAnbieter betracht, die für die Bereitstellung eines verteileten Systems geignet sein können.


## Amazon Web Services (AWS)

### Funktionalität

AWS bietet eine breite Palette von Services, darunter Elastic Compute Cloud (EC2) für die Bereitstellung von virtuellen Maschinen, Elastic Load Balancer für die Verteilung des Netzwerkverkehrs, Simple Storage Service (S3) für die Speicherung von Dateien, und viele weitere Dienste, die für die Skalierung und Verwaltung von verteilten Systemen geeignet sind.

Für das verteilte System können folgedne AWS-Services genutzt werden:

- EC2 (Elastic Compute Cloud) für das Bereitstellen und Verwalten der virtuellen Server, auf denen Ihre Web-Frontends und Server laufen können.
- API Gateway zum Erstellen, Verwalten und Absichern von APIs für die Kommunikation zwischen den Web-Frontends und den Servern.
- RDS (Relational Database Service) für die Speicherung der Daten in den Backend-Servern.
- Elastic Load Balancer für die Lastverteilung zwischen den Web-Frontends und den Servern

### Kosten

**EC2:** Die Kosten für EC2 hängen von der Anzahl und Art der verwendeten Instanzen ab. Für ein Webfrontend und vier Backend-Server könnte dies zwischen 50$ und 200$ pro Monat liegen.

**API Gateway:** Die Kosten variieren je nach Anzahl der API-Aufrufe und Datenübertragung. Eine grobe Schätzung könnte bei 10$ bis 50$ pro Monat liegen.

**RDS:** Die Kosten hängen von der Größe und dem Speicherbedarf der Datenbank ab. Eine Schätzung könnte zwischen 20$ und 100$ pro Monat liegen.

**Elastic Load Balancer:** Die Kosten variieren je nach Anzahl der Anfragen und dem Datenverkehr. Eine grobe Schätzung könnte bei 10$ bis 50$ pro Monat liegen.

**Gesamtkosten:** Die Gesmatkosten würden ca. 100$ bis 300$ betragen. 

## Google Cloud Platform (GCP)

### Funktionalität

GCP bietet ähnliche Services wie AWS, darunter Compute Engine für virtuelle Maschinen, Load Balancer für die Verteilung des Netzwerkverkehrs und Cloud Storage für die Dateispeicherung. GCP bietet auch spezifische Dienste wie App Engine und Kubernetes Engine für die Bereitstellung und Verwaltung von skalierbaren Anwendungen.

Für das verteilte System können folgedne GCP-Services genutzt werden:

- Compute Engine für die Bereitstellung und Verwaltung von virtuellen Maschinen.
- Cloud Functions für die Erstellung serverloser Funktionen, die als Backend für Ihre APIs dienen können.
- Cloud SQL für die Speicherung der Daten in den Backend-Servern.
- Load Balancer für die Lastverteilung zwischen den Web-Frontends und den Servern. 

### Kosten

**Compute Engine:** Die Kosten variieren je nach Größe und Anzahl der verwendeten virtuellen Maschinen. Eine grobe Schätzung könnte zwischen 50$ und 200$ pro Monat liegen.

**Cloud Functions:** Die Kosten hängen von der Anzahl und Dauer der Funktionen ab. Eine grobe Schätzung könnte bei 10$ bis 50$ pro Monat liegen.

**Cloud SQL:** Die Kosten richten sich nach der Größe der Datenbank und dem Speicherbedarf. Eine Schätzung könnte zwischen 20$ und 100$ pro Monat liegen.

**Load Balancer:** Die Kosten variieren je nach Datenverkehr und Anzahl der Anfragen. Eine grobe Schätzung könnte bei 10$ bis 50$ pro Monat liegen.


## Microsoft Azure 

### Funktionalität

Azure bietet verschiedene Dienste zur Bereitstellung und Verwaltung von verteilten Systemen, darunter Virtual Machines für die Ausführung von Anwendungen, Load Balancer für die Lastverteilung, und Blob Storage für die Dateispeicherung. Azure bietet auch spezifische Dienste wie Azure Functions und Azure Kubernetes Service (AKS) für serverlose und containerisierte Anwendungen.

Für das verteilte System können folgedne Azure-Services genutzt werden:

- Virtual Machines für die Bereitstellung und Verwaltung von virtuellen Servern.
- API Management zum Erstellen, Verwalten und Sichern von APIs.
- Azure SQL Database für die Speicherung der Daten in den Backend-Servern.
- Load Balancer für die Lastverteilung zwischen den Web-Frontends und den Servern.
### Kosten 

**Virtuelle Maschine:** Die Kosten variieren nach Größe und Anzahl der Verwendung

**API Management:** Das Developerangebot beträgt ca. 50$ pro Monat und das BAsicanegbot beträgt ca. 190$ pro Monat für eine maximale Anzahl von 1 Millionen API Vorgängen.

**Azure SQL Database:** Die Kosten für einen GB betragen 0,28$ pro Monat.

**Load Balancer:** Die ersten 5 Regeln betragen 0,025$ pro Stunde und für jede weitere Regele zahlt man 0,01$ pro Stunde. 

## Heroku 
Heroku ist eine Platform-as-a-Service (PaaS)-Lösung, die speziell für die schnelle Bereitstellung und Skalierung von Webanwendungen entwickelt wurde. Im Gegensatz zu den zuvor genannten Cloud-Providern bietet Heroku eine vereinfachte Entwicklungs- und Bereitstellungserfahrung, bei der sich Entwickler weniger um die Infrastruktur kümmern müssen.

### Kosten
Für den Anfang könnten wir das Standrdpaket von Heroku nutzen. Dies würde sich auf max. 50$ im Monat beschränken. Wenn dies nicht ausreichend wäre könnte man auf das Performance Paket in Höhe von 250$ erweiteren.  

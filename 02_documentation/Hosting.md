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

**API Gateway:** Die Kosten variieren je nach Anzahl der API-Aufrufe und Datenübertragung. Eine grobe Schätzung könnte bei 50$ pro Monat liegen.

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

**Gesamtkosten:** Die Gesmatkosten würden ca. 100$ bis 300$ betragen. 

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

## Vergleich der Anbieter in Bezug auf die Skalierbarkeit 

### AWS (Amazon Web Services)

AWS bietet eine breite Palette von Skalierungsoptionen für verschiedene Dienste. Sie können Auto Scaling verwenden, um Ihre Anwendungen basierend auf vordefinierten Metriken automatisch zu skalieren. AWS bietet auch Elastic Load Balancing, um den Verkehr auf mehrere Instanzen zu verteilen und so eine skalierbare Infrastruktur zu schaffen.
AWS bietet auch Dienste wie Amazon Aurora (eine skalierbare relationale Datenbank) und Amazon DynamoDB (ein vollständig verwalteter NoSQL-Datenbankdienst), die eine automatische Skalierung ermöglichen, um mit wachsenden Workloads umzugehen.

### GCP (Google Cloud Platform)

GCP bietet ähnliche Skalierungsoptionen wie AWS. Sie können beispielsweise mit der Auto Scaling-Funktion von Google Cloud Compute Engine Ihre VM-Instanzen automatisch skalieren, um die Nachfrage zu bewältigen.
GCP bietet auch Load Balancing-Dienste wie den HTTP(S) Load Balancer und den Network Load Balancer, um den Verkehr auf skalierbare Gruppen von Instanzen zu verteilen.

### Microsoft Azure

Azure bietet verschiedene Skalierungsoptionen, darunter die automatische Skalierung von virtuellen Maschinen, App Services und Funktionen. Sie können auch den Azure Load Balancer verwenden, um den Verkehr auf skalierbare Gruppen von Instanzen zu verteilen.
Azure bietet auch Dienste wie den Azure Cosmos DB (eine globale verteilte Datenbank) und den Azure SQL Database Hyperscale, die eine automatische Skalierung für wachsende Workloads ermöglichen.

### Heroku

Heroku bietet eine automatische Skalierung. Die Ressourcen können basierend auf der Anzahl der eingehenden Anfragen automatisch skaliert werden. Heroku übernimmt das Ressourcenmanagement und erleichtert die Skalierung der Anwendungen.



## Gründe für die Wahl von Heroku 

### Einfache Bereitstellung

Heroku bietet eine einfache Bereitstellung von Anwendungen. Mit wenigen Schritten kann die Anwendung auf der Plattform bereitgestellt werden, ohne sich um die Konfiguration und das Management der zugrunde liegenden Infrastruktur kümmern zu müssen. Dies erleichtert die Einrichtung und den Betrieb der Anwendung erheblich.

### Automatische Skalierung

Heroku bietet automatische Skalierungsfunktionen, mit dem die Anwendung basierend auf dem eingehenden Verkehr automatisch hoch- oder herunterskaliert werden kann. Dies ermöglicht es die Anwendung, effizient mit sich ändernden Workloads umzugehen und eine optimale Leistung zu gewährleisten.

### Verwaltete Dienste

Heroku bietet eine Vielzahl von verwalteten Diensten wie PostgreSQL-Datenbanken, Caching, Protokollierung und mehr. Diese Dienste erleichtern die Integration wichtiger Funktionen in der Anwendung und entlasten die Verwaltung und Wartung dieser Komponenten.

### Plattformunabhängigkeit

Heroku unterstützt verschiedene Programmiersprachen und Frameworks, darunter Node.js, Ruby, Python, Java und mehr. Dadurch hat man die Flexibilität, seine Anwendung in der Sprache seiner Wahl zu entwickeln und auf Heroku zu hosten.

### Entwicklerfreundlichkeit 

Heroku hat sich einen Ruf als benutzerfreundliche Plattform erworben. Es bietet eine intuitive Benutzeroberfläche, eine umfangreiche Dokumentation und ein unterstützendes Entwickler-Ökosystem. Dies erleichtert die Entwicklung, Bereitstellung und Skalierung von Anwendungen für Entwickler.

# Personal Dashboard Library
Door deze library toe te voegen aan je website, wordt er een persoonlijke dashboard op je pagina weergegeven die in een oogopslag je naam, tijd en huidige datum weergeeft.

## Wat het doet
Hieronder een opsomming van de functionaliteiten van deze library
* Geeft dagdeel weer in een begroeting.
* Geeft constant de juiste tijd weer, wordt live bijgewerkt.
* Geeft huidige datum weer.
* Inspirerende achtergrondafbeelding op full screen
* Kies een van de voorgeselecteerde achtergrondafbeelding uit de img map.

## Demo
URL naar [demo](http://i334115.iris.fhict.nl/library).

## Installatie
De library kan als volgt geinstalleerd worden in je website. 

###Mogelijkheid 1: GitHub clone

```
 $ git clone https://github.com/paolo-pg/library
 ```


###Mogelijkheid 2: Handmatig
Download de library (zip) en pak het zip bestand uit. Plaats de css, img en js map in je root. 
Voeg de onderstaande HTML code toe aan je body tag in je HTML file:

```html
	<div id="wrapper">
		<div id="name"></div>
		<div id="time"></div>
		<div id="date"></div>
	</div>
<script>Library.play();</script>
<script>Library.backgroundImage("img/bg3.jpg");</script>
```

Voeg de volgende twee regels toe aan je header tag:

```html
<script src="js/library.js"></script>
<link rel="stylesheet" href="css/style.css">
```

###Achtergrondafbeelding wijzigen
Wil je liever een andere achtergrondafbeelding? Kies dan een foto uit de img map en verander het onderstaande pad naar de afbeelding:

```html
<script>Library.backgroundImage("img/bg3.jpg");</script>
```

## Updates
De volgende functionaliteiten staan op de planning om in een volgende versie van de library toe te voegen: 
* Dynamische achtergrondafbeeldingen.
* Live weerbericht.
* Inspirerende/motiverende quotes. 

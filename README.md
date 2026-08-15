# Portfolio

De bronbestanden van [davidvanc.github.io](https://davidvanc.github.io/).

Eén pagina, met de hand geschreven. Geen framework, geen build-stap, geen
dependencies: wat hier staat is wat de bezoeker krijgt.

```
index.html          de pagina
assets/style.css    opmaak, licht en donker apart gekozen
assets/app.js       enkel de licht/donker-knop
assets/img/         schermafbeeldingen
```

## Lokaal bekijken

Open `index.html` in een browser. Meer is er niet aan.

## Publiceren

Push naar `main`. GitHub Pages serveert de map zoals hij is.

Vervang je een afbeelding zonder de bestandsnaam te wijzigen, hang er dan een
hoger versienummer aan in `index.html`:

```html
<img src="assets/img/netclean-logboek.png?v=3" ...>
```

Zonder dat blijven browsers tien minuten lang — en na een eerder bezoek vaak
veel langer — de oude afbeelding tonen.

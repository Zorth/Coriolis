---
tags:
  - Location
type: Planet
parent:
  - "[[Olympus]]"
cssclasses:
  - cards
  - cards-1-1
---
# Characteristics
Saet is one of the planets in the [[Olympus]] system. Together with [[Boubinia]] and [[Madia]] they contain 95% of the population of [[Olympus]].
# Map
```leaflet
id: Location-map
image: img.png
defaultZoom: 8
```
# Sub locations
```dataview
TABLE type, image
from #Location
where parent = this.file.link
```
---
tags:
  - Location
type: Planet
parent: "[[Olympus]]"
cssclasses:
  - cards
  - cards-1-1
---
# Characteristics
Location is a place in ... where ...
# Map
```leaflet
id: Location-map
image: img.png
defaultZoom: 8
unit: Mm
```
# Sub locations
```dataview
TABLE type, image
from #Location
where parent = this.file.link
```
---
tags:
  - Location
type: 
parent: "[[TRE]]"
cssclasses:
  - cards
  - cards-1-1
---
# Characteristics
[[Daru]] is a large town in [[TRE]]
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
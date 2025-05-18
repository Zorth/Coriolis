---
tags:
  - Location
type: 
parent: "[[Location]]"
cssclasses:
  - cards
  - cards-1-1
---
# Characteristics
[[<% tp.file.title %>]] is a place in ... where ...
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
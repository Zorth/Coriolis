---
tags:
  - Location
type: 
parent: Location
---
# Characteristics
Location is a place in ... where ...
# Map
```leaflet
id: Location-map
image: Madia.png
defaultZoom: 8
unit: Mm
```
# Sub locations
```dataview
TABLE file.name AS "File", type as "Type", parent AS "Parent"
from #location
where parent = this.file.link
```
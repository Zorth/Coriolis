---
aliases:
  - Jdae
tags:
  - Location
type: Star System
parent: 
cssclasses:
  - cards
  - cards-1-1
---
# Characteristics
Olympus is the [[Arcstar]] where the old star Sol used to be. It is often considered the center of the living galaxy.
# Map
```leaflet
id: Olympus-map
image: galMap.png
defaultZoom: 8
unit: Mm
marker: Static,-1.7608642578125,2.0966796875,[[Madia]]
marker: Static,-0.746612548828125,3.095703125,[[Saet]]
marker: Static,-0.361572265625,2.5625,[[Boubinia]]
marker: Static,-1.047119140625,1.884765625,[[Arcstar]]
```
# Sub locations
```dataview
TABLE type, image
from #Location
where contains(parent, this.file.link)
```
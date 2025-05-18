---
tags:
  - Location
type: Ship
parent: 
cssclasses:
  - cards
  - cards-1-1
---
# Characteristics
[[Platinum Dragon]] is a mothership helmed by [[Bahamut Levy|Bahamut]]. It is the flagship of [[Lost Syndicate|The Lost]].
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
---
tags:
  - Location
type: Village
parent: "[[ARGUS]]"
cssclasses:
  - cards
  - cards-1-1
---
# Characteristics
A village located in north-west [[ARGUS]] featuring the [[Odindome]].
# Map
```leaflet
id: fjord-map
image: Fjord_map.png
defaultZoom: 10
minZoom: 0.5
marker: default,-0.5125274658203125,0.41552734375,,Shopping District,,
marker: Static,-0.5380859375,0.4384765625,Odindome,,,
marker: TRE,-0.4793243408203125,0.48974609375,,Halifax Medical Center,,
marker: ARGUS,-0.55859375,0.48046875,,International Airport,,
marker: Sylvaray,-0.5203399658203125,0.4982950904566047,,Aeronautical University,,
```
# Sub locations
```dataview
TABLE type, image
from #Location
where parent = this.file.link
```
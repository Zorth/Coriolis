---
tags:
  - Location
  - Organization
type: Geocorp
parent:
  - "[[Madia]]"
cssclasses:
  - cards
  - cards-1-1
leader: "[[Adrius Silvershade]]"
image: "![[Sylvaray.png]]"
---
# Map
```leaflet
id: Sylvaray-map
image: [[Sylvaray_map.jpeg]]
defaultZoom: 8
unit: Km
```
# Sub locations
```dataview
TABLE type, image
from #Location
where contains(parent, this.file.link)
```
# Geopolitical

# History

```timeline-labeled
[line-2, body-2]
date: 1486
title: Geocorp
content: Geopolitical independence.

date: 1487
title: [[Comets of 87]]
content: Capturing of 2 comets. One impacted on own territory, one on [[Voxhos]] territory.

```
# Sub Organizations
```dataview
TABLE type as "Type", parent AS "Parent"
from #Organization
where parent = this.file.link
```

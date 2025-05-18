---
tags:
  - Organization
  - Location
type: Geocorp
leader: "[[Governor-General Juno]]"
parent: "[[Madia]]"
cssclasses:
  - cards
  - cards-1-1
image: "![[ARGUS.png]]"
---
![[ARGUS.png|right wmed]]The Augmented Residence Gear and Universal Systems, or [[ARGUS]], is a company that makes home appliance systems. Their expertise in smart home and surveillance has made them the major name in the sector. You probably have an [[ARGUS]] system in your home, if not your entire home.
# Geopolitical

# History

```timeline-labeled
[line-2, body-2]
date: 1518
title: [[Event]]
content: Start of this organization

```
# Sub Organizations
```dataview
TABLE type as "Type", parent AS "Parent"
where contains(parent, this.file.link)
```

# Sub locations
```dataview
TABLE type, image
from #Location
where parent = this.file.link
```

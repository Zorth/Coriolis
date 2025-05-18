---
tags:
  - Location
type: Metropolis
parent:
  - "[[Sylvaray]]"
cssclasses: []
aliases:
  - BM
---
# Characteristics
Black Moonlight is the capital of [[Sylvaray]]. It is a large Metropolis centered around their main operations.
# Map
```leaflet
id: BlackMoonlight
image:
 - [[BlackMoonlight_map.png|Streets]]
 - [[BlackMoonlight_Territories.jpg|Territories]]
 - [[BlackMoonlight_Areas.jpg|Areas]]
defaultZoom: 8
height: 800px
lat: 50
long: 50
minZoom: 5
maxZoom: 8
defaultZoom: 5
unit: meters
scale: 651
marker: Sylvaray, -11, 11, [[Star Park]]
marker: Bar, -1, 4, [[Svides Bar]]
marker: Housing,-1.30908203125,3.57421875, [[Boxes Yard]]
marker: Housing,-1.19891357421875,4.1484375, [[Northstar hotel]]
marker: Bar,-1.23931884765625,4.61328125, [[Amp Spark]]
marker: Affection, -1.6478, 3.8485, [[Norton Antivirus]]
marker: Bar,-1.36651611328125,3.954134439753002, [[Midnight Whispers]]
marker: Hideout,-0.81744384765625,4.44140625, [[Reiker Studio]]
marker: Hideout,-1.49713134765625,4.26953125, [[J3N]]'s Warehouse
marker: Continental,-5.7890625,5.390625, [[BM North Continental]]
marker: Venue,-2.54296875,4.06640625, [[CircuitCrafters]]
marker: Housing,-1.26666259765625,5.046875, [[NeonCubix]]
marker: Venue,-1.8779, 3.2969, [[CipherTech]]
marker: Housing,-8.79437255859375,10.932999067164179, [[Orbital Towers]]
marker: Hideout,-16.1278076171875,15.348737427290354,,Imp Venue,,
marker: Hideout,-11.1417236328125,17.142578125,[[Checkpoint Wernar]],Eldar Checkpoint,,
```
# Sub locations
## CBM
Central [[Black Moonlight]] functions as a gated city within greater [[Black Moonlight]]. Getting into [[#CBM]] is possible through one of the gates. It features a protected military airspace, enforced by large turrets mounted on the wall and atop most of the megastructures.
### Gates
Gates are mandated checkpoints operated by [[Madian Parliament|MP]] Soldiers. 3 x [[Novice]] and 1 x [[MP-BG]] Mech. Shift changes happen every 3 hours.
## Harbortown
- Big metal Fish
## Table
```dataview
TABLE type
from #Location
where contains(parent, this.file.link)
```
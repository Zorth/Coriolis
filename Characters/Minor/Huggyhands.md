---
aliases:
  - Frenlor
  - Frenlor Ricard
tags:
  - Character
  - "#Race/Arzen"
title: 
fc-date: 1431-4-13
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Huggyhands.png]]"
---
> [!infobox]
> ![[Huggyhands.png]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
Huggyhands is a child traficker that has affiliations with [[Maelstrom]].
## Cyberware
- Fashionware
- Neuralware x
	- Braindance recorder
- Cyberoptics
- Cyberaudio
- Internal
- External
- Cyberlimbs
	- Cyberarm (x2)
		- Big knucks
	- Cyberleg (x2)
		- Jump Booster
- Borgware
	- Implanted Linear Frame ß (Beta)
	- MultiOptic Mount


```statblock
name: Huggyhands
layout: Red Grunt
forceColumns: 2
INT: 6
REF: 8
DEX: 4
TECH: 8
COOL: 4
WILL: 5
LUCK: 
MOVE: 6
BODY: 8
EMP: 
Weapons:
  - name: Big Knucks
    desc: +8, 10 (3d6) damage, 2 ROF
HeadArmor: 11
BodyArmor: 13
```
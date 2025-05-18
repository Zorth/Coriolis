---
aliases: 
tags:
  - Pet
title: 
fc-date: 1516-6-4
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Vix.jpg]]"
---
> [!infobox]
> ![[Vix.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.file.name` 
Vix is [[Silverlight]]'s pet kemer fox.
### <center>HP 35/35</center>


```statblock
Name: Vix
image: [[Vix.jpg]]
layout: Red Grunt
INT: 1
REF: 4
DEX: 6
TECH: 0
COOL: 6
WILL: 4
LUCK: 0
MOVE: 7
BODY: 5
EMP: 3
Weapons:
  - name: 
    desc:
Armor: 
HeadArmor: 
BodyArmor: 
SKILL:
  - name: 
    desc:
Equipment:
  - name: 
    desc:
```
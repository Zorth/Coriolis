---
aliases:
  - Ember
  - Ember Phoenix
tags:
  - Character
  - "#Race/Kami"
title: 
fc-date: 1506-2-2
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Ember_Kid.png]]"
---
> [!infobox]
> ![[Ember_Kid.png]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox

# `= this.aliases[1]`
Ember is the last child of the [[Phoenix]] bloodline. She is venerated by the [[Eldar]] religion as the next [[Phoenix]].

---
aliases:
  - Diesel
  - Diesel Johnson
tags:
  - Character
  - "#Race/Arzen"
  - "#Role/Fixer"
fc-date: 1403-4-16
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Str1ker.jpg]]"
---
> [!infobox]
> ![[Str1ker.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= dv.page("Dashboard").year - String(dv.current()["fc-date"]).slice(0,4);` years old|
> | Accent | Southern USA |
^infobox
# `= this.aliases[1]`
Str1ker is a fixer of the [[Moonwheels]]. He's in charge of smuggling and transport operations in [[Black Moonlight]].
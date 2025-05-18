---
aliases:
  - Chance
tags:
  - Character
  - "#Race/Catfolk"
  - "#Class/Rogue"
fc-date: 1458-3-2
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Chance.jpg]]"
sessions:
---
> [!infobox]
> ![[Chance.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
*Short descriptor of character*

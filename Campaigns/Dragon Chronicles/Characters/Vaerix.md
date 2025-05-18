---
aliases:
  - Vaerix
tags:
  - Character
  - "#Race/Lizardfolk"
  - "#Class/Cleric"
fc-date: 1427-6-19
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Vaerix.jpg]]"
sessions:
---
> [!infobox]
> ![[Vaerix.jpg]]
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

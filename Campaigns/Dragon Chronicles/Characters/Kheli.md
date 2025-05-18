---
aliases:
  - Kheli
tags:
  - Character
  - "#Race/Dwarf"
  - "#Class/Barbarian"
fc-date: 1440-3-9
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Kheli.jpg]]"
sessions:
---
> [!infobox]
> ![[Kheli.jpg]]
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

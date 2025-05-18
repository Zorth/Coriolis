---
aliases:
  - Olga
  - Olga Revlon
tags:
  - Character
  - "#Race/Arzen"
  - "#Role/Fixer"
fc-date: 1374-5-3
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Olga Revlon.jpg]]"
---
> [!infobox]
> `= this.image`
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
Contact person/fixer for [[Vitalis Corps]] in Western [[ARGUS]].

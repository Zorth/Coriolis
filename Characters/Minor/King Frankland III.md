---
aliases:
  - Frankland
  - Frankland Urlandier
tags:
  - Character
  - "#Race/Arzen"
fc-date: 1243-4-17
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[King Frankland III.jpg]]"
---
> [!infobox]
> ![[King Frankland III.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
Ruling king of [[TRE]]. Representative in the [[Madian Parliament]].

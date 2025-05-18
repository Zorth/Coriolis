---
aliases:
  - Brent
  - Brent Williams
tags:
  - Character
  - "#Race/Arzen"
fc-date: 1452-4-22
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Brent Williams.jpg]]"
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
Leader of 8 [[Pearl of Power]] goons.
Goal: to become a [[Great Eldar]]
Worships [[Iris Levy]]

> [!Quote] [[Brent Williams]]
> "All Stories have 2 sides, no?"
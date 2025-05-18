---
aliases:
  - Dommianne
  - Dommianne Stolhem
tags:
  - Character
  - "#Race/Arzen"
fc-date: 1416-2-16
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Dommianne.jpg]]"
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
Taken over by [[The Mask]]. The old proprietress of [[Valhalla]]
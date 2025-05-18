---
aliases:
  - Barrie
  - Barrie Lerken
tags:
  - Character
  - "#Race/Arzen"
  - "#Role/Media"
fc-date: 1453-3-16
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Barrie.jpg]]"
---
> [!infobox]
> ![[Barrie.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
## wants:
- vengeance on [[Red Vix]]
- safety of self
- money/recognition
## Residence
protected by [[ARGUS]]

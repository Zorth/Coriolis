---
aliases:
  - Cassian
  - Cassian Vale
tags:
  - Character
  - "#Race/Arzen"
fc-date: 1401-4-2
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Cassian Vale.jpeg]]"
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
Manager for [[BIINJOOS]], supervisor of [[N0rt0n|Rakesh]].

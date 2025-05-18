---
aliases:
  - Meiko
  - Meiko Fumi
tags:
  - Character
  - "#Race/Android"
fc-date: 1383-3-19
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Meiko Fumi.jpg]]"
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
Friend of [[D0LL]], whom she served alongside with.
Entertainment girl at [[BM North Continental]]
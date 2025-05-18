---
aliases:
  - FirstName
  - Full Name
tags:
  - Character
  - "#Role/Fixer"
  - "#Race/Android"
  - Player
fc-date: 1361-5-8
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[D0LL.png]]"
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
[[D0LL]] is an independent fixer that used to work for the [[BM North Continental]].

## Connections:
- Friend: [[Meiko Fumi]]
- Friend: [[Svide]]
- old Geisha *Friend* [[Geisha Ayako]]

![[Doll_Charactersheet.xlsx]]

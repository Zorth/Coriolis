---
aliases:
  - Katara
  - Katara Levy
tags:
  - Character
  - "#Race/Faean"
title: 
fc-date: 0011-1-15
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Katara Levy.jpg]]"
---
> [!infobox]
> ![[Katara Levy.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
[[Katara Levy|Katara]] is the second child of [[Lena]]. She is the progenitor of [[Arcan]] technologies since [[Lena]] stopped publicly developing them.

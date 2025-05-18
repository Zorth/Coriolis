---
aliases:
  - Breeze
  - Breeze Levy
tags:
  - Character
  - "#Race/Android"
title: 
fc-date: 0430-3-20
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Breeze Levy.jpg]]"
---
> [!infobox]
> ![[Breeze Levy.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
[[Breeze Levy|Breeze]] is the leader and founder of the [[Arcane Veil]]. He is the eldest [[Android]] son of [[Lena]].

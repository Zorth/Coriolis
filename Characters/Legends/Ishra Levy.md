---
aliases:
  - Ishra
  - Ishra Levy
tags:
  - Character
  - "#Race/Faean"
title: 
fc-date: 0014-6-3
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Ishra Levy.jpg]]"
---
> [!infobox]
> ![[Ishra Levy.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
[[Ishra Levy|Ishra]] is the 3rd child and youngest [[Faean]] child of [[Lena]]. 

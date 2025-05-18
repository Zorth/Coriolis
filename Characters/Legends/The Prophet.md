---
aliases:
  - Walter
  - Walter Levy
tags:
  - Character
  - "#Race/Faean"
title: 
fc-date: 1476-3-23
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Walter Levy.jpg]]"
---
> [!infobox]
> ![[Walter Levy.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
Descendant of [[Katara Levy]], leader of [[The Black Robes]]

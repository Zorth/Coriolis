---
aliases:
  - Rune
  - Rune Westström
tags:
  - Character
  - "#Race/Arzen"
title: 
fc-date: 1464-1-15
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Rune Westström.jpg]]"
---
> [!infobox]
> ![[Rune Westström.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
Brother of [[V-King]].

Imprisoned in/by [[Sylvaray]].
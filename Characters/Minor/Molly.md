---
aliases:
  - Molly
  - Molly Dabin
tags:
  - Character
  - "#Race/Arzen"
title: 
fc-date: 1472-6-21
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Molly.jpg]]"
---
> [!infobox]
> ![[Molly.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
[[Lock|John Dabin]]'s younger sister.

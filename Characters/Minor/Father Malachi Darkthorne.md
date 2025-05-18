---
aliases:
  - Malachi
  - Malachi Darkthorne
tags:
  - Character
  - "#Race/Arzen"
title: Father
fc-date: 1312-2-3
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Father Malachi Darkthorne.webp]]"
---
> [!infobox]
> ![[Father Malachi Darkthorne.webp]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
[[Father Malachi Darkthorne|Malachi Darkthorne]] is a servant of [[The Black Robes]] and their primary contact in [[Black Moonlight]].

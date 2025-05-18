---
aliases:
  - Axel
  - Axel Blackwolf
tags:
  - Character
  - "#Race/Arzen"
title: 
fc-date: 1318-5-12
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Steelfist.jpg]]"
---
> [!infobox]
> ![[Steelfist.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
Current leader of [[Moonwheels]].

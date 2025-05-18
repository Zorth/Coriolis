---
aliases:
  - Bren
tags:
  - Character
  - "#Race/Arzen"
title: Great
fc-date: 1440-3-17
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Great Bren.jpg]]"
---
> [!infobox]
> ![[Great Bren.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
The old [[Fixer]] of the [[Eldar]] before [[Lora's Takeover]] (during which he died).
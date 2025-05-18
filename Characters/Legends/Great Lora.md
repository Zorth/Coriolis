---
aliases:
  - Lora
  - Lora Levy
tags:
  - Character
  - "#Race/Faean"
  - Role/Fixer
title: "[[Great Eldar]]"
fc-date: 1462-5-23
fc-category: Birthday
fc-calendar: Coriolis
species:
  - "[[Faean]]"
statblock: inline
image: "![[Great Lora.jpg]]"
---
> [!infobox]
> ![[Great Lora.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= dv.page("Dashboard").year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
*Short descriptor of character*

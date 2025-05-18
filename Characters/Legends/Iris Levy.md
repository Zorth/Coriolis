---
aliases:
  - Iris
  - Iris Levy
  - Lilith
  - Xiphion
tags:
  - Character
  - "#Race/Android"
title: 
fc-date: 0282-2-10
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Iris.jpg]]"
---
> [!infobox]
>  `= this.image`
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
[[Iris Levy]] is the leader and the founder of the [[Pearl of Power]]. She is the youngest "daughter"/construct of [[Lena]].

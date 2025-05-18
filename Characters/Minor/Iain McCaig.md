---
aliases:
  - Iain
  - Iain McCaig
tags:
  - Character
  - "#Race/Android"
title: Partner
fc-date: 1440-3-13
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Iain McCaig.jpg]]"
---
> [!infobox]
> ![[Iain McCaig.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
[[Iain McCaig]] is a partner lawyer for [[ARGUS]]

## Work
He works at [[ARGUS]] legal in 213B5 [[Orbital Towers]]


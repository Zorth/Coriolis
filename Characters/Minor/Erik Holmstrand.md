---
aliases:
  - Erik Holmstrand
tags:
  - Character
  - "#Race/Arzen"
fc-date: 1425-1-22
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Erik Holmstrand.jpg]]"
---
> [!infobox]
> `= this.image`
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= dv.page("Dashboard").year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
[[Erik Holmstrand]] is a low-level [[ARGUS]] employee.

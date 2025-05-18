---
aliases:
  - Alexander
  - Alexander Faro
tags:
  - Character
  - "#Race/Arzen"
  - "#Role/Solo"
fc-date: 1420-3-19
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[TechnoBlade.jpg]]"
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
A [[Lost Syndicate]] Solo wielding [[Sharpness V]] (before it got stolen)

---
aliases:
  - Jimmy
  - Jimmy Skyword
tags:
  - Character
  - "#Race/Arzen"
fc-date: 1500-2-5
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Jimmy Skyword.jpg]]"
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
> | Accent | Squeeky |
^infobox
# `= this.aliases[1]`
Squeeky voice.

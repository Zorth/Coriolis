---
aliases:
tags:
  - Character
  - "#Race/Arzen"
fc-date: 1485-4-8
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[S1mp.jpg]]"
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
# [[S1mp]]
Fake person used by the AI, [[Wintermute]], as a front. Targeting [[8-Bit]] for their connection to her parents.

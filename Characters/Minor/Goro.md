---
aliases:
  - Goro
  - Goro Takemura
tags:
  - Character
  - "#Race/Arzen"
fc-date: 1419-2-5
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Goro.jpg]]"
---
> [!infobox]
> `= this.image`
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox

Japanese Accent, quiet & stealthy, often gets forgotten he's there
# `= this.aliases[1]`
covert ops Assistant of [[N0rt0n]]
see cyberpunk 2077
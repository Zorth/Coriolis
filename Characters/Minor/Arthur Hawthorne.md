---
aliases:
  - Arthur
  - Arthur Hawthorne
tags:
  - Character
  - "#Race/Arzen"
  - "#Role/Exec"
fc-date: 1399-3-20
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Arthur Hawthorne.jpg]]"
---
> [!infobox]
> ![[Arthur Hawthorne.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
Arthur Hawthorne is an older male corporate lawyer at [[TRE]], recognized for his distinguished appearance with white hair and a perpetually pristine suit.
### Residence
[[Orbital Towers]]
160 office
189 home
35 mall with slot machine
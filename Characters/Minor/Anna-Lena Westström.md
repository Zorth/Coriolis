---
aliases:
  - Anna-Lena
  - Anna-Lena Westström
tags:
  - Character
  - "#Race/Arzen"
fc-date: 1416-5-22
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Anna-Lena Westström.jpg]]"
---
> [!infobox]
> ![[Anna-Lena Westström.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
Mother of [[V-King]].

After the raid of on the [[Odindome]] she was put to trial and eventually exempted of all charges due to a lawyer hired by [[ARGUS]] stepping in. Now she works as a informant for them.

---
aliases:
  - Louis
  - Louis Delanouvelle
tags:
  - Character
  - "#Race/Terran"
  - "#Player"
  - "#Role/Solo"
fc-date: 1381-3-13
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[M0NSIEUR.jpg]]"
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
# `= this.aliases[1]`
Raised on [[Boubinia]] by his parents into the [[Aegis Vanguard]]. After being discovered and hunted by [[ARGUS]], forced to go into hiding and await further orders.
# Connections
## Friends
- [[Edric Rogerton]], subordinate
- [[Hugo Zacco]], equal
- [[Kage]], Fixer
## Enemies
- [[Uncle Delanouvelle]], believes [[M0NSIEUR]] betrayed the family.
# Values
- A weapon
- A friend
- Knowledge (sees Potential in all People)
- Wants to master [[Arcane|Magic]].
![[Sheet_M0NSIEUR.pdf]]
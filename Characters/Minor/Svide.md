---
aliases:
  - Svide
  - Svide 133.N24
tags:
  - Character
  - "#Race/Android"
title: 
fc-date: 1393-2-6
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[Svide.webp]]"
---
> [!infobox]
> ![[Svide.webp]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
[[Svide]] is the retainer of [[Svides Bar]]. He's an [[Android]] bartender known for being kind and a welcome sight in the community.
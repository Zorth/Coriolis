---
aliases:
  - Arvid
  - Arvid Westström
tags:
  - Character
  - "#Race/Arzen"
title: 
fc-date: 1426-4-14
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Arvid Westström.jpg]]"
---
> [!infobox]
> ![[Arvid Westström.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
Father of [[V-King]].

Killed by [[Sylvaray]] (Skyword company, [[Eleanor Skyword]]).
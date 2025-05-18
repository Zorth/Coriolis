---
aliases:
  - Kurogane
  - Kurogane Ryu
tags:
  - Character
  - "#Race/Arzen"
title: 
fc-date: 1429-1-21
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Yugen.jpg]]"
---
> [!infobox]
> ![[Yugen.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
[[Yugen]], a figure of authority in the [[Kuro]] gang, is a composed individual with a keen eye for strategy and influence. Frequenting [[Midnight Whispers]], [[Yugen]] exudes an air of sophistication while navigating the delicate intricacies of the underworld. They have an interest for the mysterious, the unknown, the things most people won't believe exist.

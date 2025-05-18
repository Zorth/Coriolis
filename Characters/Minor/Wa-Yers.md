---
aliases:
  - Chris
  - Chris Renkton
tags:
  - Character
  - "#Race/Arzen"
title: 
fc-date: 1443-1-7
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Wa-Yers.webp]]"
---
> [!infobox]
> ![[Wa-Yers.webp]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
Wa-Yers is an old ganger from the [[Maelstrom]] gang. He's mostly stopped with gang work as he's gained enough respect, but as there's not much old people in [[Maelstrom]], his time may come to an end soon. He's looking for a way out.
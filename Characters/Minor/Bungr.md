---
aliases:
  - Bungr
  - Bungr Dara
tags:
  - Character
  - "#Race/Arzen"
title: 
fc-date: 1333-2-22
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Bungr.png]]"
---
> [!infobox]
> ![[Bungr.png]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
Bungr, a mysterious presence in [[Black Moonlight]], is a [[Daru]] man with distinctive, long, silvery hair and high-tech cyber-ears resembling headphones, highlighting his connection to the world of sound. His most eye-catching feature is a metallic plate running centrally along his head, giving the appearance of an almost mohawk-like design, hinting at a concealed past. Behind an enigmatic façade, Bungr harbors undisclosed motives, all while keeping his role in the [[Dara]] family's [[Dara Disappearance|disappearance]] hidden from the prying eyes of the city's dystopian underworld, leaving observers to speculate about his true intentions.
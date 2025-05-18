---
aliases:
  - Kaito
  - Kaito Takumi
tags:
  - Character
  - "#Race/Arzen"
title: 
fc-date: 1455-6-7
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Takumi.webp]]"
---
> [!infobox]
> ![[Takumi.webp]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
[[Takumi]] is an inside [[ARGUS]] agent that went on an operation in [[Eldar]] but got caught. He's bound for *interrogation* in [[Eldar]] [[Base Omeaga]].
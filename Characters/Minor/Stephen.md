---
aliases:
  - Stephen
  - Stephen Argive
tags:
  - Character
  - "#Race/Arzen"
title: "[[Lieutenant]] Prince"
fc-date: 1409-5-22
fc-category: Birthday
fc-calendar: Coriolis

statblock: inline
image: "![[Stephen.jpg]]"
---
> [!infobox]
> ![[Stephen.jpg]]
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= Calendarium.getAPI("Coriolis").getCurrentDate().year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.title` `= this.aliases[1]`
[[ARGUS]] official hunting [[Vultures]]. He wields a small [[MaxTac]] force with high importance hit jobs.

[[Stephen]] is in charge of the *[[ARGUS]] [[Arcan]] Research*, offensive division.
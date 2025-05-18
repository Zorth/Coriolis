---
aliases:
  - FirstName
  - Full Name
tags:
  - Character
  - "#Race/Arzen"
fc-date: <% app.metadataCache.getFileCache(tp.file.find_tfile("Dashboard")).frontmatter.year - Math.ceil(Math.random() * 150 + 18) %>-<% Math.ceil(Math.random() * 6) %>-<% Math.ceil(Math.random() * 24) %>
fc-category: Birthday
fc-calendar: Coriolis
statblock: inline
image: "![[<% tp.file.title %>.jpg]]"
---
> [!infobox]
> `= this.image`
> # `= this.file.name`
> | Species | `$= dv.current().tags.find((t) => t.includes("Race"))` |
> | ---- | ---- |
> | Role | `$= dv.current().tags.find((t) => t.includes("Role"))` |
> | Birthday | `$= String(dv.current()["fc-date"])` |
> | Full name | `= this.aliases[1]`|
> | Age | `$= dv.page("Dashboard").year - String(dv.current()["fc-date"]).slice(0,4);` years old|
^infobox
# `= this.aliases[1]`
*Short descriptor of character*

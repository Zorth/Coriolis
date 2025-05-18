---
tags:
  - Session
number: <% tp.user.getThisGameNum("Starchild") %>
realdate: <% tp.date.now() %>
Campaign: "[[Starchild]]"
cssclasses:
  - cards
players: []
---
```meta-bind
INPUT[multiSelect(
	option([[N0rt0n]], N0rt0n),
	option([[8-Bit]], 8-Bit),
	option([[BluЯ]], BluЯ),
	option([[D0LL]], D0LL)
): players]
```
# Characters
```dataview
TABLE image, aliases[1], fc-date as BDay
FROM outgoing([[]]) and #Player
WHERE icontains(this.players, file.link )
SORT file.name
```
# Recap
![[Session_<% tp.user.getThisGameNum("Starchild")-1 %>#Summary]]
# NOTES
# Summary
<% await tp.file.rename("Session_" + tp.user.getThisGameNum("Starchild")) %>
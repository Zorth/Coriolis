---
tags:
  - Session
number: 25
realdate: 2025-05-18
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
![[The mind freed from passion_Breeze]]
![[Session_24#Summary]]
# NOTES
# Summary

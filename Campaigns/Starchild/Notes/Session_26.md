---
tags:
  - Session
number: 26
realdate: 2025-06-08
Campaign: "[[Starchild]]"
cssclasses:
  - cards
players:
  - "[[N0rt0n]]"
  - "[[8-Bit]]"
  - "[[BluЯ]]"
  - "[[D0LL]]"
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
![[Arca Energy]]
![[Session_25#Summary]]
# Plans
- Make way down (Hidden wall to staircase)
- Greeted by [[Herbert Deralen]] of the [[Elysian Order]]
# NOTES
# Summary

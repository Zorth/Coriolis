---
tags:
  - Session
number: 25
realdate: 2025-05-18
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
![[The mind freed from passion_Breeze]]
![[Session_24#Summary]]
# Plans
- They have to get up to floor 25, they only have a badge to floor 23-24 for 1 person.
- Security patrols in the hallways of every floor.
- Bio Lock on [[Sharpness V]]
# NOTES
# Summary

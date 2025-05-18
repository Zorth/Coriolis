---
tags:
  - Session
number: 22
realdate: 2025-02-23
Campaign: "[[Starchild]]"
cssclasses:
  - cards
players:
  - "[[N0rt0n]]"
  - "[[8-Bit]]"
  - "[[BluЯ]]"
  - "[[D0LL]]"
  - "[[Gunnot]]"
---
```meta-bind
INPUT[multiSelect(
	option([[N0rt0n]], N0rt0n),
	option([[8-Bit]], 8-Bit),
	option([[BluЯ]], BluЯ),
	option([[D0LL]], D0LL),
	option([[Gunnot]], Gunnot)
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
![[WatersEmperor]]
![[Session_21#Summary]]
# NOTES
Session starts Oldhim 10 Kata 1519.
- [[8-Bit]]'s Birthday is on 11
- [[Hubble Con]] is on 14
## In session
- Meeting [[Gunnot]] and [[BluЯ]] for the next job in [[Svides Bar]]
- [[The Continental]] meeting with [[TechnoBlade]] and [[BinaryBard]] for info on the [[Sharpness V]] job
- Met with [[Erik Holmstrand]] for [[ARGUS R&D lab 616B]] info
	- supervisor is [[Wolfhard Tomomi]]
	- escort [[Erik Holmstrand]] outside of [[Black Moonlight|BM]], the morning of the 16th in transfer for the access card
	- Access to [[ARGUS]] territory in [[Black Moonlight#CBM|CBM]], 1 person *maybe* in the building
# Summary
Last episode, our edgerunners planned out their next gig adopting a new netrunner [[BluЯ]] for the job, and scouting [[Gunnot]]. After their fixer, [[D0LL]] arrived they headed for [[The Continental]] where they met with [[TechnoBlade]] and [[BinaryBard]] to plan for the quest for [[Sharpness V]]. They met with [[Erik Holmstrand]]. And devised a plan, but first on the schedule is [[Hubble Con]]. 
---
tags:
  - Session
number: 24
realdate: 2025-04-27
Campaign: "[[Starchild]]"
cssclasses:
  - cards
players:
  - "[[N0rt0n]]"
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
![[Giants_Breeze]]
![[Session_23#Summary]]
# Plans
- [[Sharpness V raid]]
# NOTES
- Rethought the heist
- Rented car in [[N0rt0n|Rakesh Dara]]'s name, [[D0LL]] drove.
- Visiting [[ARGUS R&D lab 616B]]
	- [[D0LL]] "no last name" name given at checkpoint
	- business deal, waiting in bar. Met with [[Dai Ten]]. (20 ppl in bar)
		- referred by misses [[Gertrud Rhetta]]
		- [[Ayvee]] talk
	- transfer of the artifact ([[The Mask]]) outside city borders, in 2 days (1519/4/17).
	- [[Asa Ebimar]], met with him in the bar, [[ARGUS]] employee. Friendly.
		- Went for drinks in [[BMC Continental]]
- Getaway driver from [[Tyrling]] nomad family. 800 §
- 2 [[ARGUS]] suits borrowed from [[Harold McLear]] (Irish).
- 2 cabs (40 § a piece) -> [[ARGUS R&D lab 616B]]
- Walk in [[ARGUS R&D lab 616B]]
	- receptionist, [[Farrah Song]]
	- [[BluЯ]] failed netrunning
	- 3 bots and security officer walk into security closet
	- [[BluЯ]] abandoned, but not resisted arrest.
# Summary
Last episode, our edgerunners made the final preparations for the heist on [[ARGUS R&D lab 616B]]. After scouting the outside, the heist begun. Using the badge of [[Erik Holmstrand]] (whom was dropped off with [[Moonwheels]]) they managed to enter the facility and make their way to the correct building. There the plan continued to have [[BluЯ]] hack the elevator to the correct floor. Unfortunately he managed to trip the alarm
---
tags:
  - Session
fc-date: 1519-03-27
fc-end: 1519-04-07
fc-category: Session
number: 18
realdate: 2024-11-10
Campaign: "[[Starchild]]"
fc-calendar: Coriolis
cssclasses:
  - cards
players:
  - "[[N0rt0n]]"
  - "[[8-Bit]]"
  - "[[M0NSIEUR]]"
  - "[[D0LL]]"
  - "[[Sug4r]]"
---
```meta-bind
INPUT[multiSelect(
	option([[N0rt0n]], N0rt0n),
	option([[8-Bit]], 8-Bit),
	option([[M0NSIEUR]], M0nsieur),
	option([[D0LL]], D0LL),
	option([[Sug4r]], Sug4r)
): players]
```
# Characters
```dataview
TABLE image, aliases[1], fc-date as BDay
FROM outgoing([[]]) and #Player
WHERE icontains(this.players, file.link )
```
# Recap
![[Perversion_Prophet]]
![[Session_17#Summary]]
# TODO
- [x] Save [[Kabutar]]
- [x] Setup leads to [[Sterling]]
- [x] Setup [[ARGUS]] counterpoint
- Week of downtime
# Summary
Last episode, our edgerunners rushed their way to the location they had previously gathered and they saved [[Kabutar]]. Destroying the followers of [[Ebros]]' church. After which, they took their time recovering, upgrading and completing side jobs. After this downtime

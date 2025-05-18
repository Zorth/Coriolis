---
tags:
  - Location
type: Hideout
parent:
  - "[[Black Moonlight]]"
cssclasses:
  - cards
  - cards-1-1
---
# Characteristics
[[Checkpoint Wernar]] is an [[Eldar]] owned checkpoint where data is stored and meetings happen. It stores Combi-style SUV's in the back.

## Layout
![[Checkpoint_Wernar.png]]

There's a reception area where 2 [[Scum]] guards the deeper entrance and have a basic camera terminal to observe the entrances. Once the alarms are rung, 8 [[Novice]] guards will pour in from the back and call for support which will arrive in 30s (10 rounds).

Taking a minute, the transport documents can also directly be downloaded from the server room in the east.
The staff entrance, gate and entrance to the back are locked and require an id card to open. In the back armored SUVs are stored.
## Net Architecture
```mermaid
flowchart TB
W[/Wisp/] --- 2
S[/Sabertooth/] --- 4
S[/Sabertooth/] --- 7
A[/Asp/] --- 8
1["1: File DV6\nPersonel list (40§)"] --> 2
2 --> 3
2 --> 3B
3B["3B:Password DV8"] --> 4B["4B: Control Node DV8\nCameras"]
3 --> 4
4["4: File DV8\nRoute Protocol (80§)"] --> 5
5["5: Password DV8"] --> 6
6["6: File DV8\nTransport Route"] --> 7
7 --> 8
8 --> 9
9["9: Control Node DV8\nDoors"] --> 10
10["10: Password DV8"] --> 11
11["11: Control Node DV11\nGates"] --> 12["12: File DV8\nPrisoner Logs (80§)"]

class W,S,A internal-link;
```
### Black ICE
![[Wisp]]
![[Sabertooth]]
![[Asp]]

```
1. The circuit that is Up is either low power, or the third circuit.
2. The first and the high circuit are either horizontal directions.
3. Between mid and high, one should be flipped to the right, the other should be second.
4. Up must be exactly one power level lower than Right.
5. Make sure there are no repeated circuit states when rerouting power.
```

| a-d | Low-Max | 1-4 |
| --- | ------- | --- |
| R   | mid     | 1   |
| L   | High    | 2   |
| U   | low     | 4   |
| D   | Max     | 3   |

| x    | U   | L   | R   | D   | 1   | 2   | 3   | 4   |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- |
| low  | X   |     |     |     |     |     |     | X   |
| mid  |     |     | X   |     | X   |     |     |     |
| high |     | X   |     |     |     | X   |     |     |
| Max  |     |     |     | X   |     |     | X   |     |
| 1    |     |     | X   |     |     |     |     |     |
| 2    |     | X   |     |     |     |     |     |     |
| 3    |     |     |     | X   |     |     |     |     |
| 4    | X   |     |     |     |     |     |     |     |
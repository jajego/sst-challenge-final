# How to start

`npm install` →
`npm start`

# How to run tests (Jest)

`npm run test`

## Rationale

#### Method 1 
When first approaching this problem, I sorted the events using nested `for` loops. For every event, it iterated through each existing level until it found a match (or not). However, this did not scale well.

#### Interval tree
To try and improve the algorithm, I used interval trees to represent each level to leverage `O(n*log n)` insertion and intersection query time. In the end, this did not result in improved algorithmic complexity or real world performance.

#### Method 2 (Better)
Method 1 scaled poorly because for each event it searched each level for a fit in a growing pool of levels. Instead, the algorithm could fill a base level with as many events as possible and create and fill new levels until each event was sorted. This approach outperformed the first method.

#### Method 3 (Best)
The final method and fastest method utilizes Method 2's approach, but also sorts the inputs by `endTime`, increasing the odds that a given event in the list can fit next to its left neighbor. It then compares the first event in the list’s `endTime` to the next event’s `startTime`. If the next event starts before the first event ends, it pushes it to the level, and otherwise stores it for later. It cycles through each event making this comparison, resulting in fewer queries overall and significantly better scaling.

![Chart of all 3 methods](https://i.imgur.com/3ilmdbP.png)

*All 3 methods compared*

#### Conclusion
I chose Method 3 because it has the same or better algorithmic complexity as the other two solutions, but showed 35% improved real performance.




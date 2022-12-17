# How to start

`npm install` →
`npm start`

# How to run tests (Jest)

`npm run test`

## Rationale

#### Method 1
When first approaching this problem, I sorted the events using nested `for` loops. For every event, it iterated through each existing level until it found a match (or not). However, this did not scale well.

![Method 1 chart](https://i.imgur.com/5IJ6yt0.png)

*Method 1 performance*

#### Interval tree
To try and improve the algorithm, I used interval trees to represent each level to leverage `O(n*log n)` insertion and intersection query time. In the end, this did not result in improved algorithmic complexity or real world performance.

#### Method 2
Method 1 scaled poorly because for each event it searched each level for a fit in a growing pool of levels. Instead, the algorithm could fill a base level with as many events as possible and create and fill new levels until each event was sorted. This approach outperformed the first method.

![Method 2 chart](https://i.imgur.com/qvjF2Dx.png)

*Method 2 performance*

#### Method 3
The final method and fastest method utilizes Method 2's approach, but also sorts the inputs by `endTime`. It then compares the first event in the list’s `endTime` to the next event’s `startTime`. If the next event starts before the first event ends, it pushes it to the level. It cycles through each event making this comparison, resulting in significantly better scaling.

![Method 3 chart](https://i.imgur.com/2YF9kem.png)

*Method 3 performance*

![Chart of all 3 methods](https://i.imgur.com/3ilmdbP.png)

*All 3 methods compared*


#### Conclusion
Because of its speed, I chose Method 3 for this challenge. This was a fun and interesting technical problem to analyze, and it’s easy to see how it’s relevant to Surgical Safety Technology’s products. I look forward to discussing this challenge with your team, and learning more ways to approach it.





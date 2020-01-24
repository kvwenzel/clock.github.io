# Abstract Clock
Application for COMS-W4995 Intro to Data Visualization

* The angle/position of the sun (blue circle) represents the hour. (leftside &rarr; 00 o'clock) (rightside &rarr; 24 o'clock)
* The level of the water (perlin noise) represents the minute. (top &rarr; 00 minutes) (bottom &rarr; 59 minutes)
* The number of stars present represent the number of seconds. (0 stars &rarr; 0 seconds) (59 stars &rarr; 59 seconds)

# Idea Process and Credit
I had an idea to represent time by water levels. In my first iteration I made an "ocean" where the number of bubbles at the bottom represented seconds, the location of a fish represented minutes, and the water level represented the hour. When I finished, I was dissatisfied with the sophistication of the clock- its aesthetic reminded me of a children's game or TV show. 

I began thinking about other associations I had with the ocean and thought of the sunset. I searched for p5 gradient guides online and found [this tutorial](https://codeburst.io/sunsets-and-shooting-stars-in-p5-js-92244d238e2b) which gave me sunset sky color inspiration. I took the gradient and colors from there to make the background of my new clock.

For an ocean sunset, besides a pretty sky gradient I needed (1) a sun and (2) an ocean. It seemed natural to make the sun represent the hour, as that is what its location seems to represent in real life. I then made the ocean water level represent minutes. I based my ocean waves off of this [perlin noise example](https://p5js.org/examples/math-noise-wave.html) from the p5 website. I made the ocean color fill transparent as I thought it  more dreamy and liquid. For seconds, I decided I could make my bubble idea more elegant by changing its representation to another visually small object- stars. I looked at p5's [array of objects example](https://p5js.org/examples/objects-array-of-objects.html) to get an idea of how to make the star class and array.
user = User.create(name: "olci", password: "123123")
mercury = Planet.create(name: "Mercury", position: "-4,0,1.2", description: 
    "Zipping around the sun in only 88 days, Mercury is the closest planet to the sun, and
     it's also the smallest, only a little bit larger than Earth's moon. 
     Because its so close to the sun (about two-fifths the distance between Earth and the sun),
      Mercury experiences dramatic changes in its day and night temperatures: Day temperatures 
      can reach a scorching 840  F (450 C), which is hot enough to melt lead. Meanwhile on the 
      night side, temperatures drop to minus 290 F (minus 180 C). Mercury has a very thin 
      atmosphere of oxygen, sodium, hydrogen, helium and potassium and can't break-up incoming 
      meteors, so its surface is pockmarked with craters, just like the moon. Over its four-year
       mission, NASA's MESSENGER spacecraft revealed incredible new discoveries that challenged 
       astronomers' expectations. Among those findings was the discovery of water ice and frozen
        organic compounds at Mercury's north pole and that volcanism played a major role in
         shaping the planet's surface. Discovery: Known to the ancient Greeks and visible to the naked eye
         Named for the messenger of the Roman gods
         Diameter: 3,031 miles (4,878 km)
         Orbit: 88 Earth days
         Day: 58.6 Earth days")
venus = Planet.create(name: "Venus", position: "-2,0,1.6", description: "The second planet from the sun, Venus is Earth's twin in size. Radar images beneath its atmosphere reveal that its surface has various mountains and volcanoes. But beyond that, the two planets couldn't be more different. Because of its thick, toxic atmosphere that's made of sulfuric acid clouds, Venus is an extreme example of the greenhouse effect. It's scorching-hot, even hotter than Mercury. The average temperature on Venus' surface is 900 F (465 C). At 92 bar, the pressure at the surface would crush and kill you. And oddly, Venus spins slowly from east to west, the opposite direction of most of the other planets.

The Greeks believed Venus was two different objects — one in the morning sky and another in the evening. Because it is often brighter than any other object in the sky, Venus has generated many UFO reports.

Discovery: Known to the ancient Greeks and visible to the naked eye
Named for the Roman goddess of love and beauty
Diameter: 7,521 miles (12,104 km)
Orbit: 225 Earth days
Day: 241 Earth days")
earth = Planet.create(name: "Earth", position: "-0.2,0,2.3", description: "The third planet from the sun, Earth is a waterworld, with two-thirds of the planet covered by ocean. It's the only world known to harbor life. Earth's atmosphere is rich in nitrogen and oxygen. Earth's surface rotates about its axis at 1,532 feet per second (467 meters per second) — slightly more than 1,000 mph (1,600 kph) — at the equator. The planet zips around the sun at more than 18 miles per second (29 km per second).

Name originates from 'Die Erde', the German word for 'the ground'.
Diameter: 7,926 miles (12,760 km)
Orbit: 365.24 days
Day: 23 hours, 56 minutes
")
mars = Planet.create(name: "Mars", position: "4,0,1", description: "The fourth planet from the sun is Mars, and it's a cold, desert-like place covered in dust. This dust is made of iron oxides, giving the planet its iconic red hue. Mars shares similarities with Earth: It is rocky, has mountains, valleys and canyons, and storm systems ranging from localized tornado-like dust devils to planet-engulfing dust storms. 

    Substantial scientific evidence suggests that Mars at one point billions of years ago was a much warmer, wetter world. Rivers and maybe even oceans existed. Although Mars' atmosphere is too thin for liquid water to exist on the surface for any length of time, remnants of that wetter Mars still exist today. Sheets of water ice the size of California lie beneath Mars' surface, and at both poles are ice caps made in part of frozen water. In July 2018, scientists revealed that they had found evidence of a liquid lake beneath the surface of the southern pole's ice cap. It's the first example of a persistent body of water on the Red Planet. 
    
    Scientists also think ancient Mars would have had the conditions to support life like bacteria and other microbes. Hope that signs of this past life — and the possibility of even current lifeforms — may exist on the Red Planet has driven numerous space exploration missions and Mars is now one of the most explored planets in the solar system.
    
    Discovery: Known to the ancient Greeks and visible to the naked eye
    Named for the Roman god of war
    Diameter: 4,217 miles (6,787 km)
    Orbit: 687 Earth days
    Day: Just more than one Earth day (24 hours, 37 minutes)")
jupiter = Planet.create(name: "Jupiter", position: "13,0,12", description: "The fifth planet from the sun, Jupiter is a giant gas world that is the most massive planet in our solar system — more than twice as massive as all the other planets combined, according to NASA. Its swirling clouds are colorful due to different types of trace gases. 

    And a major feature in its swirling clouds is the Great Red Spot, a giant storm more than 10,000 miles wide. It has raged at more than 400 mph for the last 150 years, at least. Jupiter has a strong magnetic field, and with 75 moons, it looks a bit like a miniature solar system.
    
    Discovery: Known to the ancient Greeks and visible to the naked eye
    Named for the ruler of the Roman gods
    Diameter: 86,881 miles (139,822 km)
    Orbit: 11.9 Earth years
    Day: 9.8 Earth hours")
saturn = Planet.create(name: "Saturn", position: "26,0,7.5", description: "The sixth planet from the sun, Saturn is known most for its rings. When polymath Galileo Galilei first studied Saturn in the early 1600s, he thought it was an object with three parts: a planet and two large moons on either side. 

    Not knowing he was seeing a planet with rings, the stumped astronomer entered a small drawing — a symbol with one large circle and two smaller ones — in his notebook, as a noun in a sentence describing his discovery. More than 40 years later, Christiaan Huygens proposed that they were rings. 
    
    The rings are made of ice and rock and scientists are not yet sure how they formed. The gaseous planet is mostly hydrogen and helium and has numerous moons.
    
    Discovery: Known to the ancient Greeks and visible to the naked eye
    Named for Roman god of agriculture
    Diameter: 74,900 miles (120,500 km)
    Orbit: 29.5 Earth years
    Day: About 10.5 Earth hours")
uranus = Planet.create(name: "Uranus", position: "35,0,5", description: "The seventh planet from the sun, Uranus is an oddball. It has clouds made of hydrogen sulfide, the same chemical that makes rotten eggs smell so foul. It rotates from east to west like Venus. But unlike Venus or any other planet, its equator is nearly at right angles to its orbit — it basically orbits on its side. Astronomers believe an object twice the size of Earth collided with Uranus roughly 4 billion years ago, causing Uranus to tilt. That tilt causes extreme seasons that last 20-plus years, and the sun beats down on one pole or the other for 84 Earth-years at a time. 

    The collision is also thought to have knocked rock and ice into Uranus' orbit. These later became some of the planet's 27 moons. Methane in the atmosphere gives Uranus its blue-green tint. It also has 13 sets of faint rings.
    
    Discovery: 1781 by William Herschel (was originally thought to be a star)
    Named for the personification of heaven in ancient myth
    Diameter: 31,763 miles (51,120 km)
    Orbit: 84 Earth years
    Day: 18 Earth hours")
neptune = Planet.create(name: "Neptune", position: "43,0,5.5", description: "The eighth planet from the sun, Neptune is about the size of Uranus and is known for supersonic strong winds. Neptune is far out and cold. The planet is more than 30 times as far from the sun as Earth. Neptune was the first planet predicted to exist by using math, before it was visually detected. Irregularities in the orbit of Uranus led French astronomer Alexis Bouvard to suggest some other planet might be exerting a gravitational tug. German astronomer Johann Galle used calculations to help find Neptune in a telescope. Neptune is about 17 times as massive as Earth and has a rocky core.

    Discovery: 1846
    Named for the Roman god of water
    Diameter: 30,775 miles (49,530 km)
    Orbit: 165 Earth years
    Day: 19 Earth hours")
pluto = Planet.create(name: "Pluto", position: "52,0,1.2", description: "Once the ninth planet from the sun, Pluto is unlike other planets in many respects. It is smaller than Earth's moon; its orbit is highly elliptical, falling inside Neptune's orbit at some points and far beyond it at others; and Pluto's orbit doesn't fall on the same plane as all the other planets —  instead, it orbits 17.1 degrees above or below. 

    From 1979 until early 1999, Pluto had actually been the eighth planet from the sun. Then, on Feb. 11, 1999, it crossed Neptune's path and once again became the solar system's most distant planet — until it was redefined as a dwarf planet. It's a cold, rocky world with a tenuous atmosphere. Scientists thought it might be nothing more than a hunk of rock on the outskirts of the solar system. But when NASA's New Horizons mission performed history's first flyby of the Pluto system on July 14, 2015, it transformed scientists' view of Pluto. 

    Pluto is a very active ice world that's covered in glaciers, mountains of ice water, icy dunes and possibly even cryovolcanoes that erupt icy lava made of water, methane or ammonia. Discovery: 1930 by Clyde Tombaugh
    Named for the Roman god of the underworld, Hades
    Diameter: 1,430 miles (2,301 km)
    Orbit: 248 Earth years
    Day: 6.4 Earth day")
trip = user.trips.create(departure: "20 Oct 2022")
trip.planets = [earth, mars]
trip.save
ticket = trip.create_ticket(passcode: "111")

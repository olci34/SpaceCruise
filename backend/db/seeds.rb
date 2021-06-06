user = User.create(name: 'olci', password: '123123')
earth = Planet.create(name:'Earth', position: '-0.2,0,2.3')
mars = Planet.create(name:'Mars', position: '4,0,1')
neptune = Planet.create(name:'Neptune', position: '43,0,5.5') 
jupiter= Planet.create(name:'Jupiter', position: '13,0,12')
mercury= Planet.create(name:'Mercury', position: '-4,0,0.7')
pluto = Planet.create(name: 'Pluto', position: '52,0,1.2')
saturn = Planet.create(name:'Saturn', position: '26,0,7.5') 
uranus = Planet.create(name:'Uranus', position: '35,0,5') 
venus = Planet.create(name:'Venus', position: '-2,0,1.6')  
trip = user.trips.create(departure: '20 Oct 2022')
trip.planets = [earth, mars]
trip.save
ticket = trip.create_ticket(passcode: '111')
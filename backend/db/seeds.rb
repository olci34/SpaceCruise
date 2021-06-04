user = User.create(name: 'olci', password: '123123')
planet = Planet.create(name:'Earth')
planet2 = Planet.create(name:'Mars')
trip = user.trips.create(departure: '20 Oct 2022')
trip.planets = [planet, planet2]
trip.save
ticket = trip.create_ticket(passcode: '111')
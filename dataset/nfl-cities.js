const nflTeams = [
  {
    "name": "Arizona Cardinals",
    "state": "Arizona",
    "city": "Glendale",
    "division": "NFC West"
  },
  {
    "name": "Atlanta Falcons",
    "state": "Georgia",
    "city": "Atlanta",
    "division": "NFC South"
  },
  {
    "name": "Baltimore Ravens",
    "state": "Maryland",
    "city": "Baltimore",
    "division": "AFC North"
  },
  {
    "name": "Buffalo Bills",
    "state": "New York",
    "city": "Orchard Park",
    "division": "AFC East"
  },
  {
    "name": "Carolina Panthers",
    "state": "North Carolina",
    "city": "Charlotte",
    "division": "NFC South"
  },
  {
    "name": "Chicago Bears",
    "state": "Illinois",
    "city": "Chicago",
    "division": "NFC North"
  },
  {
    "name": "Cincinnati Bengals",
    "state": "Ohio",
    "city": "Cincinnati",
    "division": "AFC North"
  },
  {
    "name": "Cleveland Browns",
    "state": "Ohio",
    "city": "Cleveland",
    "division": "AFC North"
  },
  {
    "name": "Dallas Cowboys",
    "state": "Texas",
    "city": "Frisco",
    "division": "NFC East"
  },
  {
    "name": "Denver Broncos",
    "state": "Colorado",
    "city": "Denver",
    "division": "AFC West"
  },
  {
    "name": "Detroit Lions",
    "state": "Michigan",
    "city": "Detroit",
    "division": "NFC North"
  },
  {
    "name": "Green Bay Packers",
    "state": "Wisconsin",
    "city": "Green Bay",
    "division": "NFC North"
  },
  {
    "name": "Houston Texans",
    "state": "Texas",
    "city": "Houston",
    "division": "AFC South"
  },
  {
    "name": "Indianapolis Colts",
    "state": "Indiana",
    "city": "Indianapolis",
    "division": "AFC South"
  },
  {
    "name": "Jacksonville Jaguars",
    "state": "Florida",
    "city": "Jacksonville",
    "division": "AFC South"
  },
  {
    "name": "Kansas City Chiefs",
    "state": "Kansas",
    "city": "Kansas City",
    "division": "AFC West"
  },
  {
    "name": "Miami Dolphins",
    "state": "Florida",
    "city": "Miami",
    "division": "AFC East"
  },
  {
    "name": "Minnesota Vikings",
    "state": "Minnesota",
    "city": "Minneapolis",
    "division": "NFC North"
  },
  {
    "name": "New England Patriots",
    "state": "Massachusetts",
    "city": "Foxborough",
    "division": "AFC East"
  },
  {
    "name": "New Orleans Saints",
    "state": "Louisiana",
    "city": "New Orleans",
    "division": "NFC South"
  },
  {
    "name": "New York Giants",
    "state": "New York",
    "city": "East Rutherford",
    "division": "NFC East"
  },
  {
    "name": "New York Jets",
    "state": "New York",
    "city": "East Rutherford",
    "division": "AFC East"
  },
  {
    "name": "Oakland Raiders",
    "state": "California",
    "city": "Oakland",
    "division": "AFC West"
  },
  {
    "name": "Philadelphia Eagles",
    "state": "Pennsylvania",
    "city": "Philadelphia",
    "division": "NFC East"
  },
  {
    "name": "Pittsburgh Steelers",
    "state": "Pennsylvania",
    "city": "Pittsburgh",
    "division": "AFC North"
  },
  {
    "name": "St. Louis Rams",
    "state": "Missouri",
    "city": "St. Louis",
    "division": "NFC West"
  },
  {
    "name": "San Diego Chargers",
    "state": "California",
    "city": "San Diego",
    "division": "AFC West"
  },
  {
    "name": "San Francisco 49ers",
    "state": "California",
    "city": "San Francisco",
    "division": "NFC West"
  },
  {
    "name": "Seattle Seahawks",
    "state": "Washington",
    "city": "Seattle",
    "division": "NFC West"
  },
  {
    "name": "Tampa Bay Buccaneers",
    "state": "Florida",
    "city": "Tampa",
    "division": "NFC South"
  },
  {
    "name": "Tennessee Titans",
    "state": "Tennessee",
    "city": "Nashville",
    "division": "AFC South"
  },
  {
    "name": "Washington Redskins",
    "state": "Maryland",
    "city": "Ashburn",
    "division": "NFC East"
  }
]

const cities = [
  {
    "name": "Glendale",
    "state": "Arizona",
    "population": 226721,
    "attractions": ["Wildlife World Zoo", "White Tank Mountain Regional Park", "Westgate Arena", "Thunderbird Conservation Park"]
  },
  {
    "name": "Atlanta",
    "state": "Georgia",
    "population": 486290,
    "attractions": ["Georgia Aquarium", "World of Coca-Cola", "Centennial Olympic Park", "Atlanta Botanic Gardens"]
  },
  {
    "name": "Baltimore",
    "state": "Maryland",
    "population": 611648,
    "attractions": ["Inner Harbor", "National Aquarium", "Fort McHenry", "B&O Railroad Museum"]
  },
  {
    "name": "Orchard Park",
    "state": "New York",
    "population": 29054,
    "attractions": ["Eternal Flame Falls", "Chestnut Ridge Park", "Bob-O-Link Golf Club", "Spa at Falling Waters"]
  },
  {
    "name": "Charlotte",
    "state": "North Carolina",
    "population": 2474314,
    "attractions": ["Carowinds", "NASCAR Hall of Fame", "Discovery Place Science", "U.S. National Whitewater Center"]
  },
  {
    "name": "Chicago",
    "state": "Illinois",
    "population": 2716450,
    "attractions": ["Willis Tower", "Millennium Park", "Cloud Gate", "Navy Pier"]
  },
  {
    "name": "Cincinnati",
    "state": "Ohio",
    "population": 2172191,
    "attractions": ["Cincinnati Zoo", "Ohio River", "Newport Aquarium", "Cincinnati Museum Center"]
  },
  {
    "name": "Cleveland",
    "state": "Ohio",
    "population": 388072,
    "attractions": ["Rock and Roll Hall of Fame", "Cleveland Museum of Art", "Cleveland Metroparks Zoo"]
  },
  {
    "name": "Frisco",
    "state": "Texas",
    "population": 116989,
    "attractions": ["Arbor Hills Nature Preserve", "Frisco Commons Park", "Hope Park", "Karya Siddhi Hanuman Temple"]
  },
  {
    "name": "Denver",
    "state": "Colorado",
    "population": 704621,
    "attractions": ["LoDo", "Denver Botanic Gardens", "Red Rocks Amphitheatre", "Denver Zoo"]
  },
  {
    "name": "Detroit",
    "state": "Michigan",
    "population": 673104,
    "attractions": ["The Henry Ford Museum", "Belle Isle Park", "Renaissance Center", "Detroit Institute of Art"]
  },
  {
    "name": "Green Bay",
    "state": "Wisconsin",
    "population": 104057,
    "attractions": ["Bay Beach Amusement Park", "Green Bay Botanical Garden", "National Railroad Museum", "NEW Zoo and Adventure Park"]
  },
  {
    "name": "Houston",
    "state": "Texas",
    "population": 2312717,
    "attractions": ["Space Center Houston", "Houston Zoo", "Johnson Space Center", "Houston Museum District"]
  },
  {
    "name": "Indianapolis",
    "state": "Indiana",
    "population": 2411086,
    "attractions": ["The Children's Museum of Indianapolis", "White River State Park", "Indianapolis Motor Speedway", "Indianapolis Zoo"]
  },
  {
    "name": "Jacksonville",
    "state": "Florida",
    "population": 892062,
    "attractions": ["Amelia Island", "Jacksonville Zoo and Gardens", "Kathryn Abbey Hanna Park", "Kingsley Plantation"]
  },
  {
    "name": "Kansas City",
    "state": "Kansas",
    "population": 145786,
    "attractions": ["Schlitterbahn Waterpark", "Shawnee Mission Park", "Harrah's North Kansas City", "Loose Park Rose Garden"]
  },
  {
    "name": "Miami",
    "state": "Florida",
    "population": 463347,
    "attractions": ["South Beach", "Ocean Drive", "Bayside Marketplace", "Miami Seaquarium"]
  },
  {
    "name": "Minneapolis",
    "state": "Minnesota",
    "population": 422331,
    "attractions": ["Minnehaha Park", "Walker Art Center", "Minneapolis Sculpture Garden", "Mill City Museum"]
  },
  {
    "name": "Foxborough",
    "state": "Massachusetts",
    "population": 16693,
    "attractions": ["Patriots Place", "F. Gilbert Hills State Forest", "Borderland State Park", "The Nature Trail and Cranberry Bog"]
  },
  {
    "name": "New Orleans",
    "state": "Louisiana",
    "population": 393292,
    "attractions": ["French Quarter", "Bourbon Street", "Garden District", "Jackson Square"]
  },
  {
    "name": "East Rutherford",
    "state": "New Jersey",
    "population": 9856,
    "attractions": ["MetLife Stadium", "Meadowlands Sports Complex", "Meadowlands Museum", "Carlstadt Historical Society Museum"]
  },
  {
    "name": "Oakland",
    "state": "California",
    "population": 425195,
    "attractions": ["Angel Island", "Tilden Regional Park", "Lake Merritt", "Redwood Regional Park"]
  },
  {
    "name": "Philadelphia",
    "state": "Pennsylvania",
    "population": 1580863,
    "attractions": ["Independence Hall", "Liberty Bell", "Philadelphia Museum of Art", "Independence National Historical Park"]
  },
  {
    "name": "Pittsburgh",
    "state": "Pennsylvania",
    "population": 2353045,
    "attractions": ["Downtown Pittsburgh", "Phipps Conservatory", "Pittsburgh Zoo", "The Andy Warhol Museum"]
  },
  {
    "name": "St. Louis",
    "state": "Missouri",
    "population": 308626,
    "attractions": ["Gateway Arch", "Gateway Arch Museum", "Missouri Botannical Gardens", "City Museum"]
  },
  {
    "name": "San Diego",
    "state": "California",
    "population": 1419516,
    "attractions": ["Balboa Park", "SeaWorld", "San Diego Zoo", "USS Midway Museum"]
  },
  {
    "name": "San Francisco",
    "state": "California",
    "population": 884363,
    "attractions": ["Golden Gate Bridge", "Fisherman's Wharf", "Alcatraz Island", "Golden Gate Park"]
  },
  {
    "name": "Seattle",
    "state": "Washington",
    "population": 730410,
    "attractions": ["Space Needle", "Pike Place Market", "Chihuly Garden and Glass", "Museum of Pop Culture"]
  },
  {
    "name": "Tampa",
    "state": "Florida",
    "population": 385430,
    "attractions": ["Busch Gardens", "Ybor City", "The Florida Museum", "ZooTampa at Lowry Park"]
  },
  {
    "name": "Nashville",
    "state": "Tennessee",
    "population": 691243,
    "attractions": ["Grand Ole Opry", "The Parthenon", "Ryman Auditorium", "Country Music Hall of Fame"]
  },
  {
    "name": "Landover",
    "state": "Maryland",
    "population": 23078,
    "attractions": ["United States National Arboretum", "Kenilworth Park and Aquatic Gardens", "United States Capitol", "Greenbelt Park"]
  }
]


module.exports = {
  nflTeams,
  cities
}
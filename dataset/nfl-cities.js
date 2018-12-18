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
    "name": "Los Angeles Rams",
    "state": "California",
    "city": "Los Angeles",
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
    "city-image": "http://res.cloudinary.com/simpleview/image/upload/v1529338630/clients/phoenix/58468198_2b66_4f1e_8687_e26d986f678a_10c75a12-fe18-44d2-ab79-ed92fdb8ff6f.jpg",
    "population": 226721,
    "attractions": ["Wildlife World Zoo", "White Tank Mountain Regional Park", "Westgate Arena", "Thunderbird Conservation Park"]
  },
  {
    "name": "Atlanta",
    "state": "Georgia",
    "city-image": "https://cdnassets.hw.net/69/b9/f26e63b54c1eb27d9c588c729983/98-fourteenth-street-perkinswill-6.jpg",
    "population": 486290,
    "attractions": ["Georgia Aquarium", "World of Coca-Cola", "Centennial Olympic Park", "Atlanta Botanic Gardens"]
  },
  {
    "name": "Baltimore",
    "state": "Maryland",
    "city-image": "https://d2mpqlmtgl1znu.cloudfront.net/AcuCustom/Sitename/DAM/014/Baltimore_Adobe.jpg",
    "population": 611648,
    "attractions": ["Inner Harbor", "National Aquarium", "Fort McHenry", "B&O Railroad Museum"]
  },
  {
    "name": "Orchard Park",
    "state": "New York",
    "city-image": "https://blog.opentable.com/wp-content/uploads/sites/108/2016/11/BK-Bridge-and-Skyline.jpeg",
    "population": 29054,
    "attractions": ["Eternal Flame Falls", "Chestnut Ridge Park", "Bob-O-Link Golf Club", "Spa at Falling Waters"]
  },
  {
    "name": "Charlotte",
    "state": "North Carolina",
    "city-image": "http://chrisaustin.net/wp-content/uploads/ngg_featured/ChrisAustin-QCSunset.jpg",
    "population": 2474314,
    "attractions": ["Carowinds", "NASCAR Hall of Fame", "Discovery Place Science", "U.S. National Whitewater Center"]
  },
  {
    "name": "Chicago",
    "state": "Illinois",
    "city-image": "https://cdn.vox-cdn.com/thumbor/KsjxXh4n_AZMsA7qv5Zt6e6uN-k=/0x0:8256x5504/1200x800/filters:focal(3468x2092:4788x3412)/cdn.vox-cdn.com/uploads/chorus_image/image/61705603/shutterstock_1094135579.0.jpg",
    "population": 2716450,
    "attractions": ["Willis Tower", "Millennium Park", "Cloud Gate", "Navy Pier"]
  },
  {
    "name": "Cincinnati",
    "state": "Ohio",
    "city-image": "https://pbs.twimg.com/media/DSf1S1uXcAEmK--.jpg",
    "population": 2172191,
    "attractions": ["Cincinnati Zoo", "Ohio River", "Newport Aquarium", "Cincinnati Museum Center"]
  },
  {
    "name": "Cleveland",
    "state": "Ohio",
    "city-image": "https://d3u03kk87rjfaq.cloudfront.net/wp-content/uploads/2017/05/clevelandskyline.jpg",
    "population": 388072,
    "attractions": ["Rock and Roll Hall of Fame", "Cleveland Museum of Art", "Cleveland Metroparks Zoo"]
  },
  {
    "name": "Frisco",
    "state": "Texas",
    "city-image": "https://www.nexthome.com/wp-content/uploads/2017/06/dallas_texas.jpg",
    "population": 116989,
    "attractions": ["Arbor Hills Nature Preserve", "Frisco Commons Park", "Hope Park", "Karya Siddhi Hanuman Temple"]
  },
  {
    "name": "Denver",
    "state": "Colorado",
    "city-image": "http://blog.cpanel.com/wp-content/uploads/2014/11/denverSkyline-1200x800.jpg",
    "population": 704621,
    "attractions": ["LoDo", "Denver Botanic Gardens", "Red Rocks Amphitheatre", "Denver Zoo"]
  },
  {
    "name": "Detroit",
    "state": "Michigan",
    "city-image": "https://www.bridgemi.com/sites/default/files/hero_images/detroit_1.jpg",
    "population": 673104,
    "attractions": ["The Henry Ford Museum", "Belle Isle Park", "Renaissance Center", "Detroit Institute of Art"]
  },
  {
    "name": "Green Bay",
    "state": "Wisconsin",
    "city-image": "https://i.pinimg.com/originals/1f/5a/be/1f5abe4b73fdad94ef307ecb90cd8c2f.jpg",
    "population": 104057,
    "attractions": ["Bay Beach Amusement Park", "Green Bay Botanical Garden", "National Railroad Museum", "NEW Zoo and Adventure Park"]
  },
  {
    "name": "Houston",
    "state": "Texas",
    "city-image": "https://www.areavibes.com/photos/places/houston-tx-1200.jpg",
    "population": 2312717,
    "attractions": ["Space Center Houston", "Houston Zoo", "Johnson Space Center", "Houston Museum District"]
  },
  {
    "name": "Indianapolis",
    "state": "Indiana",
    "city-image": "https://assets.nydailynews.com/polopoly_fs/1.3926523.1523393231!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/indiana-indianapolis.jpg",
    "population": 2411086,
    "attractions": ["The Children's Museum of Indianapolis", "White River State Park", "Indianapolis Motor Speedway", "Indianapolis Zoo"]
  },
  {
    "name": "Jacksonville",
    "state": "Florida",
    "city-image": "http://cruisewoot.com/images/ports/620/shutterstock_647907712-Jacksonville-Florida-cityscape-downtown.jpg",
    "population": 892062,
    "attractions": ["Amelia Island", "Jacksonville Zoo and Gardens", "Kathryn Abbey Hanna Park", "Kingsley Plantation"]
  },
  {
    "name": "Kansas City",
    "state": "Kansas",
    "city-image": "https://cdn.vox-cdn.com/thumbor/u2f2FtZyjvt1OD38DFf2szxs18k=/0x0:1600x1067/1200x800/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/60391261/Kansas_City_Scout_overlooking_KCMO_opt.0.jpg",
    "population": 145786,
    "attractions": ["Schlitterbahn Waterpark", "Shawnee Mission Park", "Harrah's North Kansas City", "Loose Park Rose Garden"]
  },
  {
    "name": "Miami",
    "state": "Florida",
    "city-image": "https://cdnassets.hw.net/45/04/aafe39d2425b8df14a256cfb3bdb/thetowers.gif",
    "population": 463347,
    "attractions": ["South Beach", "Ocean Drive", "Bayside Marketplace", "Miami Seaquarium"]
  },
  {
    "name": "Minneapolis",
    "state": "Minnesota",
    "city-image": "https://i.pinimg.com/originals/1a/ea/be/1aeabed015a2be8b5858e82db2c9d090.jpg",
    "population": 422331,
    "attractions": ["Minnehaha Park", "Walker Art Center", "Minneapolis Sculpture Garden", "Mill City Museum"]
  },
  {
    "name": "Foxborough",
    "state": "Massachusetts",
    "city-image": "http://ilijaveselica.com/Uploads/Photos/647.jpg",
    "population": 16693,
    "attractions": ["Patriots Place", "F. Gilbert Hills State Forest", "Borderland State Park", "The Nature Trail and Cranberry Bog"]
  },
  {
    "name": "New Orleans",
    "state": "Louisiana",
    "city-image": "https://c.stocksy.com/a/x1b500/z9/1333989.jpg",
    "population": 393292,
    "attractions": ["French Quarter", "Bourbon Street", "Garden District", "Jackson Square"]
  },
  {
    "name": "East Rutherford",
    "state": "New Jersey",
    "city-image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/New_York_Skyline_Manhattan.jpg/1200px-New_York_Skyline_Manhattan.jpg",
    "population": 9856,
    "attractions": ["MetLife Stadium", "Meadowlands Sports Complex", "Meadowlands Museum", "Carlstadt Historical Society Museum"]
  },
  {
    "name": "Oakland",
    "state": "California",
    "city-image": "https://dc51b5587d91a36df531-8880ed1a63c3e6388703e88e0de5d4df.ssl.cf1.rackcdn.com/properties/photos/40743380_1_1497291257.jpg",
    "population": 425195,
    "attractions": ["Angel Island", "Tilden Regional Park", "Lake Merritt", "Redwood Regional Park"]
  },
  {
    "name": "Philadelphia",
    "state": "Pennsylvania",
    "city-image": "https://www.neh.gov/sites/default/files/styles/featured_image_page/public/2018-06/panoramic-3342920_960_720.jpg?h=5581e289&itok=ID-n76AB",
    "population": 1580863,
    "attractions": ["Independence Hall", "Liberty Bell", "Philadelphia Museum of Art", "Independence National Historical Park"]
  },
  {
    "name": "Pittsburgh",
    "state": "Pennsylvania",
    "city-image": "http://blog.jorgesantiagophoto.com/wp-content/uploads/2013/05/pittsburgh_skyline_2013-color.jpg",
    "population": 2353045,
    "attractions": ["Downtown Pittsburgh", "Phipps Conservatory", "Pittsburgh Zoo", "The Andy Warhol Museum"]
  },
  {
    "name": "Los Angeles",
    "state": "California",
    "city-image": "https://cdn.trolleytours.com/wp-content/uploads/2016/06/san-diego-skyline-dusk.jpg",
    "population": 1419516,
    "attractions": ["Universal Studios Hollywood", "Disneyland", "Hollywood Walk of Fame", "Hollywood sign"]
  },
  {
    "name": "San Francisco",
    "state": "California",
    "city-image": "http://farm3.static.flickr.com/2532/4212548996_e7d9872b3e_o.jpg",
    "population": 884363,
    "attractions": ["Golden Gate Bridge", "Fisherman's Wharf", "Alcatraz Island", "Golden Gate Park"]
  },
  {
    "name": "Seattle",
    "state": "Washington",
    "city-image": "https://cdn.vox-cdn.com/uploads/chorus_asset/file/8684847/Webp.net_gifmaker.gif",
    "population": 730410,
    "attractions": ["Space Needle", "Pike Place Market", "Chihuly Garden and Glass", "Museum of Pop Culture"]
  },
  {
    "name": "Tampa",
    "state": "Florida",
    "city-image": "https://www.uniteus.com/wp-content/uploads/2016/06/Tampa-Skyline.jpg",
    "population": 385430,
    "attractions": ["Busch Gardens", "Ybor City", "The Florida Museum", "ZooTampa at Lowry Park"]
  },
  {
    "name": "Nashville",
    "state": "Tennessee",
    "city-image": "https://www.nydailynews.com/resizer/6_luwP6nbAsrW4aL4n5UIKhfSVA=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/K4AGGYJMIGTXDM7SCLK5NXH64U.jpg",
    "population": 691243,
    "attractions": ["Grand Ole Opry", "The Parthenon", "Ryman Auditorium", "Country Music Hall of Fame"]
  },
  {
    "name": "Landover",
    "state": "Maryland",
    "city-image": "http://cdn.lightgalleries.net/511d5ec04f4b0/images/aer_20110317_5206p-1.jpg",
    "population": 23078,
    "attractions": ["United States National Arboretum", "Kenilworth Park and Aquatic Gardens", "United States Capitol", "Greenbelt Park"]
  }
]


module.exports = {
  nflTeams,
  cities
}

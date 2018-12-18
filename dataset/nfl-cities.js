const nflTeams = [
  {
    "name": "Arizona Cardinals",
    "state": "Arizona",
    "city": "Glendale",
    "division": "NFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/M5Gx-DCa9eRAqw_aqIyuG6I2wDo=/0x0:4777x3021/1200x800/filters:focal(2094x550:2858x1314)/cdn.vox-cdn.com/uploads/chorus_image/image/62274919/usa_today_11648254.0.jpg"
  },
  {
    "name": "Atlanta Falcons",
    "state": "Georgia",
    "city": "Atlanta",
    "division": "NFC South",
    "team-img": "https://i1.wp.com/atlsportshq.com/wp-content/uploads/2018/09/Atlanta-Falcons.jpg?fit=1200%252C800&ssl=1"
  },
  {
    "name": "Baltimore Ravens",
    "state": "Maryland",
    "city": "Baltimore",
    "division": "AFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/o1P7MUtp_TXde4tiyo2VRjtmzTw=/0x0:3292x2195/1200x0/filters:focal(0x0:3292x2195):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13453589/usa_today_11692672.jpg"
  },
  {
    "name": "Buffalo Bills",
    "state": "New York",
    "city": "Orchard Park",
    "division": "AFC East",
    "team-img": "https://cdn.vox-cdn.com/thumbor/DyCzl4myyYqLQMSSUUcZLlfnnj0=/0x0:3000x2001/1200x800/filters:focal(1270x441:1750x921)/cdn.vox-cdn.com/uploads/chorus_image/image/62278687/1066286570.jpg.0.jpg"
  },
  {
    "name": "Carolina Panthers",
    "state": "North Carolina",
    "city": "Charlotte",
    "division": "NFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/k0_dfoinJT7NfQwHe_38sT1KIBI=/0x391:3406x2662/1200x800/filters:focal(0x391:3406x2662)/cdn.vox-cdn.com/uploads/chorus_image/image/22721837/20130922_bsd_sd2_380.0.jpg"
  },
  {
    "name": "Chicago Bears",
    "state": "Illinois",
    "city": "Chicago",
    "division": "NFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/ACoZo11grrnn0BWy8WGtGnOCpbA=/0x0:2812x2612/1200x800/filters:focal(1178x356:1626x804)/cdn.vox-cdn.com/uploads/chorus_image/image/62317433/1060356782.jpg.0.jpg"
  },
  {
    "name": "Cincinnati Bengals",
    "state": "Ohio",
    "city": "Cincinnati",
    "division": "AFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/2lzWVUHP9ZCb0IncJRlZVEkItgc=/211x0:2620x1955/1200x800/filters:focal(1232x744:1700x1212)/cdn.vox-cdn.com/uploads/chorus_image/image/56499423/usa_today_10246990.0.jpg"
  },
  {
    "name": "Cleveland Browns",
    "state": "Ohio",
    "city": "Cleveland",
    "division": "AFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/YeKPQrGq5KrgfPzMkgsPDD1bWis=/0x0:3623x2762/1200x800/filters:focal(904x862:1482x1440)/cdn.vox-cdn.com/uploads/chorus_image/image/61486643/usa_today_11288126.0.jpg"
  },
  {
    "name": "Dallas Cowboys",
    "state": "Texas",
    "city": "Frisco",
    "division": "NFC East",
    "team-img": "https://cdn.vox-cdn.com/thumbor/v0QI1GglDXrzN1XjE4doNTCfjW8=/0x0:3597x2558/1200x800/filters:focal(1434x383:2008x957)/cdn.vox-cdn.com/uploads/chorus_image/image/61464705/usa_today_11265196.0.jpg"
  },
  {
    "name": "Denver Broncos",
    "state": "Colorado",
    "city": "Denver",
    "division": "AFC West",
    "team-img": "https://i.sportsbookreview.com/59dcf4bbfe64d406800a32c6/original-Denver-Broncos.jpg"
  },
  {
    "name": "Detroit Lions",
    "state": "Michigan",
    "city": "Detroit",
    "division": "NFC North",
    "team-img": "https://lionslowdown.files.wordpress.com/2018/12/5-reasons-lost-1202.jpg?w=1200"
  },
  {
    "name": "Green Bay Packers",
    "state": "Wisconsin",
    "city": "Green Bay",
    "division": "NFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/5s1uFNiRLN26GQ1ICqnrTzuvfOQ=/0x0:4750x3044/1200x800/filters:focal(2247x518:3007x1278)/cdn.vox-cdn.com/uploads/chorus_image/image/61136225/usa_today_11092166.0.jpg"
  },
  {
    "name": "Houston Texans",
    "state": "Texas",
    "city": "Houston",
    "division": "AFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/wlFl83FmeTTNLwcbT_jMYFiSTOo=/0x0:3829x2679/1200x800/filters:focal(1629x213:2241x825)/cdn.vox-cdn.com/uploads/chorus_image/image/56937273/856340452.0.jpg"
  },
  {
    "name": "Indianapolis Colts",
    "state": "Indiana",
    "city": "Indianapolis",
    "division": "AFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/J1lYtPIyOWInq4J60DqoXwtPxjU=/0x0:5184x3456/1200x800/filters:focal(3285x656:4113x1484)/cdn.vox-cdn.com/uploads/chorus_image/image/61903043/usa_today_11491843.0.jpg"
  },
  {
    "name": "Jacksonville Jaguars",
    "state": "Florida",
    "city": "Jacksonville",
    "division": "AFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/0_pyTPst04YYzU_rjQvJ0TBDWzA=/0x0:2991x2005/1200x800/filters:focal(1193x652:1671x1130)/cdn.vox-cdn.com/uploads/chorus_image/image/57050131/usa_today_10272195.0.jpg"
  },
  {
    "name": "Kansas City Chiefs",
    "state": "Kansas",
    "city": "Kansas City",
    "division": "AFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/HhBnv5wwV5t48gEXub-lf0Wz4gk=/0x0:2380x1718/1200x800/filters:focal(1194x512:1574x892)/cdn.vox-cdn.com/uploads/chorus_image/image/62343671/usa_today_11647974.0.jpg"
  },
  {
    "name": "Miami Dolphins",
    "state": "Florida",
    "city": "Miami",
    "division": "AFC East",
    "team-img": "https://cdn.vox-cdn.com/thumbor/Ip7Un-1xDPw3ff58FCIfLSTsIZc=/0x0:3524x2378/1200x800/filters:focal(1288x728:1850x1290)/cdn.vox-cdn.com/uploads/chorus_image/image/61512871/1038614112.jpg.0.jpg"
  },
  {
    "name": "Minnesota Vikings",
    "state": "Minnesota",
    "city": "Minneapolis",
    "division": "NFC North",
    "team-img": "https://i1.wp.com/fullpresscoverage.com/wp-content/uploads/2018/10/USATSI_11547401-e1541004272507.jpg?fit=1200%2C800&ssl=1"
  },
  {
    "name": "New England Patriots",
    "state": "Massachusetts",
    "city": "Foxborough",
    "division": "AFC East",
    "team-img": "https://i2.wp.com/arrowheadsabroad.com/wp-content/uploads/2018/05/Pats-1.jpg?fit=1200%2C800&ssl=1"
  },
  {
    "name": "New Orleans Saints",
    "state": "Louisiana",
    "city": "New Orleans",
    "division": "NFC South",
    "team-img": "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/4/42/442887f0-dfb8-5da5-8765-89d03791084f/5c0d538ea5bae.image.jpg?resize=1200%2C800"
  },
  {
    "name": "New York Giants",
    "state": "New York",
    "city": "East Rutherford",
    "division": "NFC East",
    "team-img": "https://s3media.247sports.com/Uploads/Assets/158/953/4953158.jpg"
  },
  {
    "name": "New York Jets",
    "state": "New York",
    "city": "East Rutherford",
    "division": "AFC East",
    "team-img": "https://cdn.vox-cdn.com/thumbor/YFMeIlXpZ_HPW5jLLBZHaP1Un5Q=/0x0:3489x2326/1200x800/filters:focal(1590x941:2148x1499)/cdn.vox-cdn.com/uploads/chorus_image/image/62320017/usa_today_11647518.0.jpg"
  },
  {
    "name": "Oakland Raiders",
    "state": "California",
    "city": "Oakland",
    "division": "AFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/AaD8tuGQfPtwoSYLYKcCLR8IcbE=/0x0:4602x3068/1200x800/filters:focal(2674x13:3410x749)/cdn.vox-cdn.com/uploads/chorus_image/image/61667629/usa_today_11355933.0.jpg"
  },
  {
    "name": "Philadelphia Eagles",
    "state": "Pennsylvania",
    "city": "Philadelphia",
    "division": "NFC East",
    "team-img": "https://goldmedalimpressions.com/wp-content/uploads/2018/01/1-Philadelphia-Eagles-quarterback-NICK-FOLES-throws-touchdown-pass-to-Alshon-Jeffery.jpg"
  },
  {
    "name": "Pittsburgh Steelers",
    "state": "Pennsylvania",
    "city": "Pittsburgh",
    "division": "AFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/SrFs0qGLSRcUGY8p_XzYhbzevjg=/0x0:3584x2264/1200x800/filters:focal(1506x846:2078x1418)/cdn.vox-cdn.com/uploads/chorus_image/image/57131945/usa_today_10342627.0.jpg"
  },
  {
    "name": "St. Louis Rams",
    "state": "Missouri",
    "city": "St. Louis",
    "division": "NFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/lXBG0W-yw0baA-edaTFvZGV6Oq0=/0x0:2949x2199/1200x800/filters:focal(1553x440:2023x910)/cdn.vox-cdn.com/uploads/chorus_image/image/58250889/894379402.jpg.0.jpg"
  },
  {
    "name": "San Diego Chargers",
    "state": "California",
    "city": "San Diego",
    "division": "AFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/wh2AKZa3minPgXTXx0JhLecXhV8=/0x0:3435x2290/1200x800/filters:focal(1576x661:2124x1209)/cdn.vox-cdn.com/uploads/chorus_image/image/61134183/usa_today_10458932.0.jpg"
  },
  {
    "name": "San Francisco 49ers",
    "state": "California",
    "city": "San Francisco",
    "division": "NFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/VWUKNAq8EMgqCAZoYt3ZcJIm3NA=/0x0:2701x1800/1200x800/filters:focal(1135x684:1567x1116)/cdn.vox-cdn.com/uploads/chorus_image/image/62340472/1056151072.jpg.0.jpg"
  },
  {
    "name": "Seattle Seahawks",
    "state": "Washington",
    "city": "Seattle",
    "division": "NFC West",
    "team-img": "https://pbs.twimg.com/media/Db4_f9mVAAAK7TV.jpg"
  },
  {
    "name": "Tampa Bay Buccaneers",
    "state": "Florida",
    "city": "Tampa",
    "division": "NFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/3U1ejfwQSuQ4nzyNLvD5XoS449w=/0x0:2529x1683/1200x800/filters:focal(291x1:695x405)/cdn.vox-cdn.com/uploads/chorus_image/image/60368791/usa_today_10486761.0.jpg"
  },
  {
    "name": "Tennessee Titans",
    "state": "Tennessee",
    "city": "Nashville",
    "division": "AFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/yUZaopk9iMXI1WggQTGvtySGS-k=/0x0:4567x3455/1200x800/filters:focal(2553x1284:3283x2014)/cdn.vox-cdn.com/uploads/chorus_image/image/62338246/1060255600.jpg.0.jpg"
  },
  {
    "name": "Washington Redskins",
    "state": "Maryland",
    "city": "Ashburn",
    "division": "NFC East",
    "team-img": "https://cdn.vox-cdn.com/thumbor/j2fypx-LxDTM3yCAWRWJolpWiX8=/0x0:4245x2830/1200x800/filters:focal(1603x293:2281x971)/cdn.vox-cdn.com/uploads/chorus_image/image/58177585/624781162.jpg.0.jpg"
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
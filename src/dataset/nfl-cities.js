const nflTeams = [
  {
    "name": "Arizona Cardinals",
    "state": "Arizona",
    "city": "Glendale",
    "team_icon": "http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2aff.png",
    "division": "NFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/M5Gx-DCa9eRAqw_aqIyuG6I2wDo=/0x0:4777x3021/1200x800/filters:focal(2094x550:2858x1314)/cdn.vox-cdn.com/uploads/chorus_image/image/62274919/usa_today_11648254.0.jpg"
  },
  {
    "name": "Atlanta Falcons",
    "state": "Georgia",
    "city": "Atlanta",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/12/atlanta-falcons-logo-vector.png",
    "division": "NFC South",
    "team-img": "https://i1.wp.com/atlsportshq.com/wp-content/uploads/2018/09/Atlanta-Falcons.jpg?fit=1200%252C800&ssl=1"
  },
  {
    "name": "Baltimore Ravens",
    "state": "Maryland",
    "city": "Baltimore",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/05/baltimore-ravens-logo-vector-01.png",
    "division": "AFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/o1P7MUtp_TXde4tiyo2VRjtmzTw=/0x0:3292x2195/1200x0/filters:focal(0x0:3292x2195):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13453589/usa_today_11692672.jpg"
  },
  {
    "name": "Buffalo Bills",
    "state": "New York",
    "city": "Orchard Park",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/05/buffalo-bills-logo-vector-01.png",
    "division": "AFC East",
    "team-img": "https://cdn.vox-cdn.com/thumbor/DyCzl4myyYqLQMSSUUcZLlfnnj0=/0x0:3000x2001/1200x800/filters:focal(1270x441:1750x921)/cdn.vox-cdn.com/uploads/chorus_image/image/62278687/1066286570.jpg.0.jpg"
  },
  {
    "name": "Carolina Panthers",
    "state": "North Carolina",
    "city": "Charlotte",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/11/carolina-panthers-logo-vector.png",
    "division": "NFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/k0_dfoinJT7NfQwHe_38sT1KIBI=/0x391:3406x2662/1200x800/filters:focal(0x391:3406x2662)/cdn.vox-cdn.com/uploads/chorus_image/image/22721837/20130922_bsd_sd2_380.0.jpg"
  },
  {
    "name": "Chicago Bears",
    "state": "Illinois",
    "city": "Chicago",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2011/05/chicago-bears-logo-vector.png",
    "division": "NFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/ACoZo11grrnn0BWy8WGtGnOCpbA=/0x0:2812x2612/1200x800/filters:focal(1178x356:1626x804)/cdn.vox-cdn.com/uploads/chorus_image/image/62317433/1060356782.jpg.0.jpg"
  },
  {
    "name": "Cincinnati Bengals",
    "state": "Ohio",
    "city": "Cincinnati",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/05/cincinnati-bengals-logo-vector-01.png",
    "division": "AFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/2lzWVUHP9ZCb0IncJRlZVEkItgc=/211x0:2620x1955/1200x800/filters:focal(1232x744:1700x1212)/cdn.vox-cdn.com/uploads/chorus_image/image/56499423/usa_today_10246990.0.jpg"
  },
  {
    "name": "Cleveland Browns",
    "state": "Ohio",
    "city": "Cleveland",
    "team_icon": "https://img.ksl.com/slc/logos/nfl/browns.png",
    "division": "AFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/YeKPQrGq5KrgfPzMkgsPDD1bWis=/0x0:3623x2762/1200x800/filters:focal(904x862:1482x1440)/cdn.vox-cdn.com/uploads/chorus_image/image/61486643/usa_today_11288126.0.jpg"
  },
  {
    "name": "Dallas Cowboys",
    "state": "Texas",
    "city": "Frisco",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2011/05/dallas-cowboys-logo-vector.png",
    "division": "NFC East",
    "team-img": "https://cdn.vox-cdn.com/thumbor/v0QI1GglDXrzN1XjE4doNTCfjW8=/0x0:3597x2558/1200x800/filters:focal(1434x383:2008x957)/cdn.vox-cdn.com/uploads/chorus_image/image/61464705/usa_today_11265196.0.jpg"
  },
  {
    "name": "Denver Broncos",
    "state": "Colorado",
    "city": "Denver",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/10/denver-broncos-logo-vector.png",
    "division": "AFC West",
    "team-img": "https://i.sportsbookreview.com/59dcf4bbfe64d406800a32c6/original-Denver-Broncos.jpg"
  },
  {
    "name": "Detroit Lions",
    "state": "Michigan",
    "city": "Detroit",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/09/detroit-lions-logo-vector-01.png",
    "division": "NFC North",
    "team-img": "https://lionslowdown.files.wordpress.com/2018/12/5-reasons-lost-1202.jpg?w=1200"
  },
  {
    "name": "Green Bay Packers",
    "state": "Wisconsin",
    "city": "Green Bay",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/12/green-bay-packers-logo-vector.png",
    "division": "NFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/5s1uFNiRLN26GQ1ICqnrTzuvfOQ=/0x0:4750x3044/1200x800/filters:focal(2247x518:3007x1278)/cdn.vox-cdn.com/uploads/chorus_image/image/61136225/usa_today_11092166.0.jpg"
  },
  {
    "name": "Houston Texans",
    "state": "Texas",
    "city": "Houston",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/11/houston-texans-logo-vector.png",
    "division": "AFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/wlFl83FmeTTNLwcbT_jMYFiSTOo=/0x0:3829x2679/1200x800/filters:focal(1629x213:2241x825)/cdn.vox-cdn.com/uploads/chorus_image/image/56937273/856340452.0.jpg"
  },
  {
    "name": "Indianapolis Colts",
    "state": "Indiana",
    "city": "Indianapolis",
    "team_icon": "http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2b2c.png",
    "division": "AFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/J1lYtPIyOWInq4J60DqoXwtPxjU=/0x0:5184x3456/1200x800/filters:focal(3285x656:4113x1484)/cdn.vox-cdn.com/uploads/chorus_image/image/61903043/usa_today_11491843.0.jpg"
  },
  {
    "name": "Jacksonville Jaguars",
    "state": "Florida",
    "city": "Jacksonville",
    "team_icon": "http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2b2f.png",
    "division": "AFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/0_pyTPst04YYzU_rjQvJ0TBDWzA=/0x0:2991x2005/1200x800/filters:focal(1193x652:1671x1130)/cdn.vox-cdn.com/uploads/chorus_image/image/57050131/usa_today_10272195.0.jpg"
  },
  {
    "name": "Kansas City Chiefs",
    "state": "Kansas",
    "city": "Kansas City",
    "team_icon": "https://bloximages.newyork1.vip.townnews.com/derbyinformer.com/content/tncms/assets/v3/editorial/c/45/c45aa900-4859-11e4-bbe5-001a4bcf6878/542a30d3b4627.image.png?resize=400%2C400",
    "division": "AFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/HhBnv5wwV5t48gEXub-lf0Wz4gk=/0x0:2380x1718/1200x800/filters:focal(1194x512:1574x892)/cdn.vox-cdn.com/uploads/chorus_image/image/62343671/usa_today_11647974.0.jpg"
  },
  {
    "name": "Miami Dolphins",
    "state": "Florida",
    "city": "Miami",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2015/08/miami-dolphins-vector-logo.png",
    "division": "AFC East",
    "team-img": "https://cdn.vox-cdn.com/thumbor/Ip7Un-1xDPw3ff58FCIfLSTsIZc=/0x0:3524x2378/1200x800/filters:focal(1288x728:1850x1290)/cdn.vox-cdn.com/uploads/chorus_image/image/61512871/1038614112.jpg.0.jpg"
  },
  {
    "name": "Minnesota Vikings",
    "state": "Minnesota",
    "city": "Minneapolis",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/10/minnesota-vikings-logo-vector.png",
    "division": "NFC North",
    "team-img": "https://i1.wp.com/fullpresscoverage.com/wp-content/uploads/2018/10/USATSI_11547401-e1541004272507.jpg?fit=1200%2C800&ssl=1"
  },
  {
    "name": "New England Patriots",
    "state": "Massachusetts",
    "city": "Foxborough",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2014/10/new-england-patriots-logo-preview.png",
    "division": "AFC East",
    "team-img": "https://i2.wp.com/arrowheadsabroad.com/wp-content/uploads/2018/05/Pats-1.jpg?fit=1200%2C800&ssl=1"
  },
  {
    "name": "New Orleans Saints",
    "state": "Louisiana",
    "city": "New Orleans",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/12/new-orleans-saints-logo-vector.png",
    "division": "NFC South",
    "team-img": "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/4/42/442887f0-dfb8-5da5-8765-89d03791084f/5c0d538ea5bae.image.jpg?resize=1200%2C800"
  },
  {
    "name": "New York Giants",
    "state": "New York",
    "city": "East Rutherford",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2011/05/new-york-giants-logo-vector.png",
    "division": "NFC East",
    "team-img": "https://s3media.247sports.com/Uploads/Assets/158/953/4953158.jpg"
  },
  {
    "name": "New York Jets",
    "state": "New York",
    "city": "East Rutherford",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2011/05/new-york-jets-logo-vector-01.png",
    "division": "AFC East",
    "team-img": "https://cdn.vox-cdn.com/thumbor/YFMeIlXpZ_HPW5jLLBZHaP1Un5Q=/0x0:3489x2326/1200x800/filters:focal(1590x941:2148x1499)/cdn.vox-cdn.com/uploads/chorus_image/image/62320017/usa_today_11647518.0.jpg"
  },
  {
    "name": "Oakland Raiders",
    "state": "California",
    "city": "Oakland",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/10/oakland-raiders-logo-vector.png",
    "division": "AFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/AaD8tuGQfPtwoSYLYKcCLR8IcbE=/0x0:4602x3068/1200x800/filters:focal(2674x13:3410x749)/cdn.vox-cdn.com/uploads/chorus_image/image/61667629/usa_today_11355933.0.jpg"
  },
  {
    "name": "Philadelphia Eagles",
    "state": "Pennsylvania",
    "city": "Philadelphia",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2014/10/philadelphia-eagles-logo.png",
    "division": "NFC East",
    "team-img": "https://goldmedalimpressions.com/wp-content/uploads/2018/01/1-Philadelphia-Eagles-quarterback-NICK-FOLES-throws-touchdown-pass-to-Alshon-Jeffery.jpg"
  },
  {
    "name": "Pittsburgh Steelers",
    "state": "Pennsylvania",
    "city": "Pittsburgh",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2011/05/pittsburgh-steelers-logo-vector-01.png",
    "division": "AFC North",
    "team-img": "https://cdn.vox-cdn.com/thumbor/SrFs0qGLSRcUGY8p_XzYhbzevjg=/0x0:3584x2264/1200x800/filters:focal(1506x846:2078x1418)/cdn.vox-cdn.com/uploads/chorus_image/image/57131945/usa_today_10342627.0.jpg"
  },
  {
    "name": "Los Angeles Rams",
    "state": "California",
    "city": "Los Angeles",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2015/08/st-louis-rams-vector-logo.png",
    "division": "NFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/lXBG0W-yw0baA-edaTFvZGV6Oq0=/0x0:2949x2199/1200x800/filters:focal(1553x440:2023x910)/cdn.vox-cdn.com/uploads/chorus_image/image/58250889/894379402.jpg.0.jpg"
  },
  {
    "name": "Los Angeles Chargers",
    "state": "California",
    "city": "San Diego",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/10/san-diego-chargers-logo-vector.png",
    "division": "AFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/wh2AKZa3minPgXTXx0JhLecXhV8=/0x0:3435x2290/1200x800/filters:focal(1576x661:2124x1209)/cdn.vox-cdn.com/uploads/chorus_image/image/61134183/usa_today_10458932.0.jpg"
  },
  {
    "name": "San Francisco 49ers",
    "state": "California",
    "city": "San Francisco",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2011/06/san-francisco-49ers-logo-vector.png",
    "division": "NFC West",
    "team-img": "https://cdn.vox-cdn.com/thumbor/VWUKNAq8EMgqCAZoYt3ZcJIm3NA=/0x0:2701x1800/1200x800/filters:focal(1135x684:1567x1116)/cdn.vox-cdn.com/uploads/chorus_image/image/62340472/1056151072.jpg.0.jpg"
  },
  {
    "name": "Seattle Seahawks",
    "state": "Washington",
    "city": "Seattle",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/10/seattle-seahawks-logo-vector.png",
    "division": "NFC West",
    "team-img": "https://pbs.twimg.com/media/Db4_f9mVAAAK7TV.jpg"
  },
  {
    "name": "Tampa Bay Buccaneers",
    "state": "Florida",
    "city": "Tampa",
    "team_icon": "https://seeklogo.net/wp-content/uploads/2012/12/tampa-bay-buccaneers-logo-vector.png",
    "division": "NFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/3U1ejfwQSuQ4nzyNLvD5XoS449w=/0x0:2529x1683/1200x800/filters:focal(291x1:695x405)/cdn.vox-cdn.com/uploads/chorus_image/image/60368791/usa_today_10486761.0.jpg"
  },
  {
    "name": "Tennessee Titans",
    "state": "Tennessee",
    "city": "Nashville",
    "team_icon": "http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2b61.png",
    "division": "AFC South",
    "team-img": "https://cdn.vox-cdn.com/thumbor/yUZaopk9iMXI1WggQTGvtySGS-k=/0x0:4567x3455/1200x800/filters:focal(2553x1284:3283x2014)/cdn.vox-cdn.com/uploads/chorus_image/image/62338246/1060255600.jpg.0.jpg"
  },
  {
    "name": "Washington Redskins",
    "state": "Maryland",
    "city": "Ashburn",
   "team_icon": "https://seeklogo.net/wp-content/uploads/2011/05/washington-redskins-logo-vector.png",
    "division": "NFC East",
    "team-img": "https://cdn.vox-cdn.com/thumbor/j2fypx-LxDTM3yCAWRWJolpWiX8=/0x0:4245x2830/1200x800/filters:focal(1603x293:2281x971)/cdn.vox-cdn.com/uploads/chorus_image/image/58177585/624781162.jpg.0.jpg"
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

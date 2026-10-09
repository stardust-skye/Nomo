
const R=[
["Nonna Fornace","Italian","Downtown","$$",4.7,"🍕",[["Margherita Pizza",14],["Cacio e Pepe",16],["Tiramisu",8]]],
["Tiffin Trails","Indian","Glenwood South","$$",4.8,"🍛",[["Butter Chicken Thali",15],["Masala Dosa",11],["Mango Lassi",5]]],
["Casa Marigold","Mexican","Five Points","$",4.5,"🌮",[["Al Pastor Tacos",12],["Mole Poblano",17],["Churros",7]]],
["Ramen Kaze","Japanese","Warehouse District","$$",4.6,"🍜",[["Tonkotsu Ramen",15],["Gyoza",8],["Matcha Mochi",6]]],
["Habesha Feast","Ethiopian","Cameron Village","$$",4.9,"🫓",[["Doro Wat with Injera",16],["Kitfo",18],["Veggie Combo",14]]],
["Bangkok Alley","Thai","North Hills","$$",4.4,"🍲",[["Pad Kra Pao",14],["Green Curry",15],["Mango Sticky Rice",8]]],
["Seoul Kitchen","Korean","Midtown","$$",4.6,"🥘",[["Bibimbap",14],["Korean Fried Chicken",17],["Kimchi Jjigae",13]]],
["Olive & Ember","Mediterranean","Oakwood","$$",4.5,"🥙",[["Lamb Shawarma",16],["Mezze Board",19],["Baklava",6]]],
["Smoke & Sweet","Southern BBQ","Boylan Heights","$$",4.7,"🍖",[["Pulled Pork Plate",15],["Mac & Cheese",6],["Banana Pudding",6]]],
["Dragon Steam","Chinese","Cary Town","$",4.3,"🥟",[["Soup Dumplings",12],["Dan Dan Noodles",13],["Mapo Tofu",14]]]
].map((r,i)=>({id:i,n:r[0],c:r[1],a:r[2],p:r[3],s:r[4],e:r[5],m:r[6]}));
const AD=["212 Fayetteville St","408 Glenwood Ave","1120 Bagwell Ave","301 S Blount St","2010 Clark Ave","4209 Lassiter Mill Rd","1500 Hillsborough St","615 E Davie St","118 S West St","905 Preston Rd","710 W Main St","916 Broad St","1423 S Tryon St","401 W 9th St","905 W Main St","705 Willard St","112 E 36th St","1515 S Tryon St"];
/* one visual theme per restaurant menu: bg, ink, card, accent, accent2, button text, heading font, pattern */
/* calm menu palettes: page, ink, soft shape, accent, button text, heading font */
const T=[
{bg:"#f4ede1",ink:"#3a2e26",soft:"#e6d7c0",acc:"#9c5b3f",bt:"#fff",font:"Cormorant Garamond"},
{bg:"#f4e3dc",ink:"#43272a",soft:"#ebcfc6",acc:"#a34a4f",bt:"#fff",font:"DM Serif Display"},
{bg:"#f1efe0",ink:"#2f3b2c",soft:"#dfe3c8",acc:"#c0673a",bt:"#fff",font:"Lora"},
{bg:"#f1f1ee",ink:"#222222",soft:"#e0e0da",acc:"#b23a3a",bt:"#fff",font:"Jost"},
{bg:"#efe3d0",ink:"#3b2a1a",soft:"#ddcbab",acc:"#7d6224",bt:"#fff",font:"Lora"},
{bg:"#e9f0eb",ink:"#1f3a33",soft:"#cfe0d6",acc:"#3f7a68",bt:"#fff",font:"DM Serif Display"},
{bg:"#f5f1ee",ink:"#2b2a2a",soft:"#e6dcd6",acc:"#c2564b",bt:"#fff",font:"Jost"},
{bg:"#eaf1f4",ink:"#1f3444",soft:"#d3e2ea",acc:"#3f7c9b",bt:"#fff",font:"Cormorant Garamond"},
{bg:"#24201d",ink:"#efe3d3",soft:"#3a322c",acc:"#d68a4c",bt:"#24201d",font:"DM Serif Display"},
{bg:"#2a2229",ink:"#f0e4dd",soft:"#3b303a",acc:"#d9a77c",bt:"#2a2229",font:"Cormorant Garamond"}];
const DS=[["San Marzano tomato, buffalo mozzarella and fresh basil","Pecorino Romano, black pepper and hand-cut tonnarelli","Espresso-soaked ladyfingers, mascarpone and cocoa"],
["Slow-cooked chicken in tomato butter gravy with basmati rice","Crisp rice crepe with spiced potato, sambar and chutneys","Chilled yogurt drink blended with ripe mango"],
["Marinated pork, pineapple and cilantro on corn tortillas","Chicken in a dark chile and chocolate sauce with rice","Cinnamon sugar churros with warm chocolate"],
["Rich pork broth, chashu, soft egg and scallion","Pan-seared pork dumplings with ponzu","Soft rice cake filled with sweet matcha cream"],
["Spiced chicken stew with a boiled egg, served with injera","Minced beef with mitmita and spiced butter","Lentils, greens and split peas on injera"],
["Stir-fried basil, chili and garlic with a fried egg","Coconut curry with Thai basil and bamboo shoots","Sweet coconut sticky rice with ripe mango"],
["Rice, seasoned vegetables, egg and gochujang","Twice-fried chicken glazed in sweet chili","Aged kimchi stew with tofu and pork"],
["Spiced lamb, garlic sauce and pickles in warm pita","Hummus, baba ganoush, tabbouleh and olives","Layers of filo, pistachio and honey syrup"],
["Twelve-hour smoked pork with slaw and pickles","Sharp cheddar and toasted breadcrumbs","Vanilla wafers, bananas and custard"],
["Delicate dumplings filled with pork and rich broth","Wheat noodles, chili oil, sesame and minced pork","Silken tofu in a spicy fermented bean sauce"]];
const VEG=new Set(["Margherita Pizza","Cacio e Pepe","Tiramisu","Masala Dosa","Mango Lassi","Churros","Matcha Mochi","Veggie Combo","Mango Sticky Rice","Bibimbap","Mezze Board","Baklava","Mac & Cheese","Banana Pudding","Mapo Tofu"]);
const SIDES=[
 ["Seasonal House Salad",9,"Market greens, cucumber, tomato and house vinaigrette",true],
 ["Crispy Potatoes",7,"Golden potatoes with herbs and a house dipping sauce",true],
 ["Chocolate Cake",8,"Rich chocolate cake with a silky cocoa finish",true]
];
const MENU_ADDONS=[
 [["Burrata & Tomato",13,"Creamy burrata, ripe tomatoes, basil and grilled bread",true],["Beef Ragù Pappardelle",21,"Slow-braised beef ragù with wide ribbons of fresh pasta",false],["Chicken Parmigiana",19,"Crisp chicken, tomato sugo and melted mozzarella",false],["Sausage & Peppers Pizza",18,"Roasted peppers, fennel sausage and mozzarella",false]],
 [["Paneer Tikka",15,"Tandoor-charred paneer with peppers and mint chutney",true],["Chicken Biryani",18,"Fragrant basmati rice layered with spiced chicken",false],["Lamb Rogan Josh",21,"Slow-braised lamb in a Kashmiri chile sauce",false],["Tandoori Chicken",19,"Yogurt-marinated chicken roasted with warming spices",false]],
 [["Roasted Poblano Quesadilla",13,"Roasted peppers, Oaxaca cheese and salsa verde",true],["Carne Asada Burrito",17,"Grilled steak, black beans, rice and charred salsa",false],["Chicken Tinga Tostadas",15,"Chipotle-braised chicken on crisp corn tostadas",false],["Camarones a la Diabla",20,"Shrimp in a smoky chile sauce with lime",false]],
 [["Edamame with Sea Salt",7,"Steamed young soybeans with flaky sea salt",true],["Chicken Karaage",12,"Japanese-style fried chicken with lemon",false],["Salmon Teriyaki Don",19,"Glazed salmon over rice with pickled vegetables",false],["Shrimp Tempura",14,"Lightly battered shrimp with tentsuyu dipping sauce",false]],
 [["Shiro Wat",15,"Mild chickpea stew with berbere and aromatic herbs",true],["Tibs",20,"Sautéed beef with onions, rosemary and warm spices",false],["Key Wat",19,"Slow-cooked beef stew in a deep berbere sauce",false],["Awaze Chicken",18,"Spiced chicken sautéed with onions and awaze",false]],
 [["Tofu Pad Thai",16,"Rice noodles, tofu, tamarind and crushed peanuts",true],["Chicken Satay",13,"Grilled chicken skewers with peanut sauce",false],["Pad See Ew with Beef",18,"Wide rice noodles, greens and seared beef",false],["Thai Basil Shrimp",20,"Wok-tossed shrimp with holy basil and chile",false]],
 [["Japchae",15,"Sweet-potato noodles, mushrooms and seasonal vegetables",true],["Bulgogi Beef",21,"Thin-sliced beef marinated in pear and soy",false],["Pork Belly Bossam",22,"Slow-braised pork belly with ssam and pickles",false],["Spicy Pork Bulgogi",19,"Gochujang-marinated pork with scallions",false]],
 [["Falafel Pita",14,"Herb falafel, pickled turnip and tahini",true],["Chicken Shawarma Plate",19,"Spiced chicken, saffron rice and garlic toum",false],["Lamb Kofta",21,"Grilled lamb skewers with yogurt and sumac",false],["Garlic Shrimp Mezze",20,"Sizzling shrimp with lemon, herbs and warm pita",false]],
 [["Smoked Cauliflower",13,"Pit-smoked cauliflower with pepper vinegar",true],["Texas-Style Brisket",23,"Oak-smoked brisket with a peppery bark",false],["Smoked Chicken Quarter",18,"Hickory-smoked chicken with house barbecue sauce",false],["St. Louis Pork Ribs",24,"Slow-smoked pork ribs finished over the coals",false]],
 [["Garlic Bok Choy",12,"Wok-seared greens with garlic and sesame",true],["Char Siu Pork",18,"Cantonese roast pork glazed with honey and five-spice",false],["Beef Chow Fun",19,"Wok-tossed rice noodles with tender beef",false],["Chicken & Shiitake Bao",15,"Steamed buns filled with chicken and shiitake",false]],
 [["Smoked Cauliflower",13,"Pit-smoked cauliflower with pepper vinegar",true],["Texas-Style Brisket",23,"Oak-smoked brisket with a peppery bark",false],["Smoked Chicken Quarter",18,"Hickory-smoked chicken with house barbecue sauce",false],["St. Louis Pork Ribs",24,"Slow-smoked pork ribs finished over the coals",false]],
 [["Lemongrass Tofu Vermicelli",15,"Rice vermicelli, crisp tofu, herbs and pickled vegetables",true],["Bún Bò Huế",19,"Spicy beef and pork broth with thick rice noodles",false],["Shaking Beef",22,"Wok-seared beef with watercress and lime",false],["Grilled Pork Bánh Mì",15,"Lemongrass pork, pickles and cilantro on a crisp baguette",false]],
 [["Avocado & Black Bean Arepa",14,"Griddled corn cake with avocado and seasoned black beans",true],["Pabellón Criollo",19,"Shredded beef, black beans, rice and sweet plantain",false],["Chicken Guasacaca Arepa",16,"Pulled chicken with avocado-herb guasacaca",false],["Carne Mechada Arepa",18,"Slow-braised shredded beef in a corn cake",false]],
 [["Mushroom & Poblano Tacos",14,"Roasted mushrooms, poblano and salsa verde",true],["Barbacoa Quesadilla",18,"Slow-braised beef, Oaxaca cheese and consommé",false],["Pollo Asado Tacos",16,"Citrus-marinated grilled chicken with charred salsa",false],["Baja Fish Tacos",19,"Crisp white fish, cabbage and lime crema",false]],
 [["Tofu & Vegetable Curry",17,"Seasonal vegetables and tofu in coconut green curry",true],["Chicken Pad See Ew",19,"Wide rice noodles, chicken, Chinese broccoli and sweet soy",false],["Thai Basil Beef",21,"Wok-seared beef, holy basil and fresh chile",false],["Shrimp Pad Thai",20,"Rice noodles, shrimp, tamarind and crushed peanuts",false]],
 [["Grilled Corn & Greens",12,"Charred corn, greens and a bright pepper-vinegar dressing",true],["Brisket Burnt Ends",16,"Smoky brisket bites glazed with house barbecue sauce",false],["Pulled Pork Plate",18,"Slow-smoked pork shoulder with two sides",false],["Smoked Turkey Breast",19,"Hickory-smoked turkey with pepper gravy",false]],
 [["Margherita Pizza",17,"San Marzano tomato, mozzarella and fresh basil",true],["Pepperoni & Hot Honey",20,"Crisp pepperoni, mozzarella and local hot honey",false],["White Pie with Spinach",19,"Garlic cream, ricotta, spinach and mozzarella",true],["Calabrian Salami Pizza",20,"Spicy salami, roasted peppers and whipped ricotta",false]],
 [["Kimchi Fried Rice",16,"Wok-fried rice, vegetables and house kimchi",true],["Bulgogi Beef Bowl",21,"Marinated beef, rice, sesame greens and scallions",false],["Dakgalbi",20,"Spicy stir-fried chicken with cabbage and rice cakes",false],["Pork Belly Bossam",22,"Slow-braised pork belly with ssam and pickles",false]],
 [["Crispy Tofu Bánh Mì",14,"Crisp tofu, pickled daikon, cucumber and cilantro",true],["Lemongrass Pork Chops",19,"Grilled pork with scallion oil, rice and pickled vegetables",false],["Caramelized Fish Clay Pot",21,"Vietnamese caramel-braised fish with jasmine rice",false],["Chicken Phở",17,"Rice noodles, chicken, herbs and clear ginger broth",false]]
];
const CITY_MENU_ADDONS=[...MENU_ADDONS.slice(0,10),MENU_ADDONS[18]];
const MORE=[
 {n:"Bull City Kitchen",c:"Southern",a:"Downtown",p:"$$",s:4.7,e:"🍗",city:"Durham",m:[
  ["Smoked Chicken Plate",17,"Smoked chicken, seasonal sides and house sauce",false],
  ["Carolina Pulled Pork",16,"Slow-smoked pork with slaw and tangy vinegar sauce",false],
  ["Pimento Cheese Toast",11,"Sharp pimento cheese on toasted sourdough",true]
 ]},
 {n:"Ninth Street Noodle Co.",c:"Vietnamese",a:"Ninth Street",p:"$",s:4.8,e:"🍜",city:"Durham",m:[
  ["Beef Pho",16,"Rice noodles in slow-simmered beef broth with herbs",false],
  ["Lemongrass Tofu Bowl",14,"Crisp tofu, vermicelli, greens and lemongrass sauce",true],
  ["Fresh Summer Rolls",9,"Rice-paper rolls with herbs, vegetables and peanut dip",true]
 ]},
 {n:"Queen City Arepas",c:"Venezuelan",a:"South End",p:"$",s:4.8,e:"🫓",city:"Charlotte",m:[
  ["Reina Pepiada Arepa",14,"Corn cake filled with chicken, avocado and lime",false],
  ["Black Bean & Plantain Arepa",13,"Sweet plantain, black beans and avocado crema",true],
  ["Yuca Fries",7,"Crisp cassava fries with cilantro-lime sauce",true]
 ]},
 {n:"Rail Trail Tacos",c:"Mexican",a:"South End",p:"$",s:4.6,e:"🌮",city:"Charlotte",m:[
  ["Carne Asada Tacos",15,"Grilled steak, salsa verde and warm corn tortillas",false],
  ["Mushroom Tinga Tacos",13,"Smoky mushrooms, cabbage and avocado",true],
  ["Street Corn",7,"Grilled corn with lime, cotija and chile",true]
 ]},
 {n:"Lemongrass & Lime",c:"Thai",a:"Brightleaf District",p:"$$",s:4.7,e:"🍲",city:"Durham",m:[
  ["Green Papaya Salad",13,"Green papaya, lime, peanuts and fresh herbs",true],
  ["Chicken Panang Curry",19,"Chicken simmered in creamy red curry with kaffir lime",false],
  ["Crispy Pork Basil",20,"Crisp pork, holy basil and garlic chile sauce",false]
 ]},
 {n:"Bull City Smokehouse",c:"Southern BBQ",a:"American Tobacco Campus",p:"$$",s:4.6,e:"🍖",city:"Durham",m:[
  ["Smoked Mushroom Sandwich",15,"Pit-smoked mushrooms, slaw and Carolina sauce",true],
  ["Beef Brisket Plate",24,"Oak-smoked brisket with two house sides",false],
  ["Pulled Chicken Sandwich",17,"Smoked chicken, pickles and pepper vinegar",false]
 ]},
 {n:"Queen City Pizzeria",c:"Italian",a:"NoDa",p:"$$",s:4.8,e:"🍕",city:"Charlotte",m:[
  ["Roasted Mushroom Pizza",18,"Wild mushrooms, fontina and thyme on a blistered crust",true],
  ["Sausage & Fennel Pizza",20,"House sausage, fennel and San Marzano tomato",false],
  ["Chicken Pesto Pizza",19,"Roasted chicken, basil pesto and mozzarella",false]
 ]},
 {n:"South End Seoul",c:"Korean",a:"South End",p:"$$",s:4.7,e:"🥘",city:"Charlotte",m:[
  ["Crispy Tofu Bibimbap",16,"Crisp tofu, seasoned vegetables and gochujang",true],
  ["Bulgogi Rice Bowl",20,"Marinated beef, warm rice and sesame greens",false],
  ["Korean Fried Chicken",19,"Crispy chicken glazed with gochujang honey",false]
 ]}
];
const CITY_ADDITIONS=[
 ["Juniper Table","Italian","Downtown","$$",4.7,"🍝","Durham",0,[["Lemon Ricotta Bucatini",18,"Silky ricotta, lemon zest and toasted breadcrumbs",true],["Braised Short Rib Gnocchi",24,"Potato gnocchi with red-wine short rib ragù",false],["Olive Oil Cake",9,"Tender citrus cake with macerated berries",true]]],
 ["Spice Route Kitchen","Indian","Brightleaf","$$",4.8,"🍛","Durham",1,[["Chana Saag",16,"Chickpeas and spinach simmered with ginger and garam masala",true],["Goan Coconut Fish Curry",22,"Local fish in a bright coconut and kokum curry",false],["Tandoori Chicken Wings",15,"Yogurt-marinated wings charred in the tandoor",false]]],
 ["Tortilla & Timber","Mexican","Downtown","$",4.6,"🌮","Durham",2,[["Sweet Potato Mole Enchiladas",17,"Roasted sweet potato, mole negro and sesame",true],["Carnitas Street Tacos",15,"Slow-braised pork, onion and cilantro on corn tortillas",false],["Chile Relleno",16,"Roasted poblano filled with queso and tomato salsa",true]]],
 ["Pit & Pine BBQ","Southern BBQ","Old North Durham","$$",4.7,"🍖","Durham",8,[["Smoked Jackfruit Plate",17,"Pepper-smoked jackfruit, slaw and vinegar sauce",true],["Carolina Pulled Pork",18,"Hickory pork shoulder with hushpuppies and slaw",false],["Burnt-End Mac Bowl",19,"Smoky brisket ends over creamy cheddar macaroni",false]]],
 ["Miso House","Japanese","Ninth Street","$$",4.8,"🍜","Durham",3,[["Miso Butter Corn Ramen",17,"Creamy miso broth, sweet corn and scallion oil",true],["Chicken Katsu Curry",19,"Crisp chicken cutlet with Japanese curry and rice",false],["Salmon Ochazuke",20,"Seared salmon over rice with warm green tea broth",false]]],
 ["Olive Branch Kitchen","Mediterranean","American Tobacco Campus","$$",4.6,"🥙","Durham",7,[["Sumac Roasted Carrots",13,"Whipped labneh, pistachio and fresh dill",true],["Lamb Kefta Plate",22,"Charcoal-grilled lamb, herbed rice and toum",false],["Chicken Souvlaki",19,"Lemon-oregano chicken with warm pita and tzatziki",false]]],
 ["Saffron Spoon","Thai","NoDa","$$",4.7,"🍲","Charlotte",5,[["Green Curry Eggplant",17,"Thai eggplant, basil and coconut green curry",true],["Crispy Duck Panang",24,"Tender duck in rich Panang curry with kaffir lime",false],["Grilled Pork Skewers",16,"Charred marinated pork with sticky rice",false]]],
 ["NoDa Forno","Italian","NoDa","$$",4.8,"🍕","Charlotte",0,[["Roasted Garlic Cavatelli",19,"House pasta, roasted garlic, pecorino and parsley",true],["Sunday Sausage Ragu",22,"Fennel sausage slowly braised in tomato and wine",false],["Chicken Milanese",21,"Crisp chicken cutlet with lemon and arugula",false]]],
 ["Calle Sol Taqueria","Mexican","Plaza Midwood","$",4.6,"🌮","Charlotte",2,[["Crispy Cauliflower Tacos",14,"Chile-roasted cauliflower, salsa macha and lime",true],["Birria Quesatacos",17,"Slow-braised beef, melted cheese and consommé",false],["Chicken Tinga Bowl",16,"Chipotle chicken, black beans, rice and avocado",false]]],
 ["Carolina Coalhouse","Southern BBQ","South End","$$",4.7,"🍗","Charlotte",8,[["Pit-Roasted Sweet Potato",13,"Smoked sweet potato with whipped sorghum butter",true],["Pulled Pork Sandwich",17,"Vinegar-sauced pork, pickles and soft brioche",false],["Smoked Turkey Platter",20,"Oak-smoked turkey, cornbread and two sides",false]]],
 ["Pho & Basil","Vietnamese","Dilworth","$",4.8,"🍜","Charlotte",10,[["Lemongrass Tofu Phở",16,"Rice noodles, tofu, herbs and fragrant vegetable broth",true],["Bún Bò Huế",19,"Spicy beef and pork noodle soup with lemongrass",false],["Grilled Pork Vermicelli",17,"Vermicelli, charred pork, herbs and nước chấm",false]]],
 ["Cardamom Courtyard","Indian","Uptown","$$",4.7,"🍛","Charlotte",1,[["Paneer Makhani",18,"Tandoor-seared paneer in a buttery tomato sauce",true],["Hyderabadi Lamb Biryani",23,"Fragrant basmati layered with spiced lamb",false],["Chicken Chettinad",20,"Peppery South Indian chicken curry with curry leaves",false]]],
 ["Tamarind & Thyme","Indian","Waverly","$$",4.8,"🍛","Cary",1,[["Aloo Gobi",16,"Cauliflower and potatoes with cumin and fresh ginger",true],["Chicken Korma",20,"Tender chicken in a cashew and cardamom sauce",false],["Lamb Seekh Kebab",22,"Charred spiced lamb with mint chutney",false]]],
 ["Seoul Garden","Korean","Park West","$$",4.7,"🥘","Cary",6,[["Crispy Mushroom Japchae",16,"Glass noodles, shiitake and seasonal vegetables",true],["Galbi Short Ribs",25,"Grilled marinated beef short ribs with rice",false],["Spicy Chicken Bibimbap",19,"Gochujang chicken, vegetables and a sunny egg",false]]],
 ["Jade Lantern","Chinese","Downtown Cary","$",4.6,"🥟","Cary",9,[["Mapo Eggplant",16,"Silky eggplant in a fragrant Sichuan pepper sauce",true],["Five-Spice Roast Duck",24,"Crisp-skinned duck with pancakes and plum sauce",false],["Pork Soup Dumplings",14,"Steamed dumplings filled with seasoned pork broth",false]]],
 ["Bangkok Basil","Thai","Parkside","$$",4.7,"🍲","Cary",5,[["Crispy Tofu Larb",15,"Herbed tofu, toasted rice and lime in lettuce cups",true],["Massaman Beef Curry",21,"Slow-braised beef, potatoes and roasted peanuts",false],["Garlic Pepper Shrimp",20,"Wok-seared shrimp with garlic, pepper and jasmine rice",false]]],
 ["Kumo Kitchen","Japanese","Preston","$$",4.8,"🍣","Cary",3,[["Mushroom Tempura Udon",17,"Chewy udon, crisp mushrooms and kombu broth",true],["Chicken Teriyaki Donburi",19,"Grilled chicken, glossy teriyaki and steamed rice",false],["Salmon Avocado Roll",18,"Fresh salmon, avocado and seasoned sushi rice",false]]],
 ["Olive Grove Table","Mediterranean","Waverly Place","$$",4.6,"🥗","Cary",7,[["Crispy Halloumi Plate",16,"Grilled halloumi, tomato, cucumber and mint",true],["Beef Kofta Pita",19,"Spiced beef, pickled onion and garlic yogurt",false],["Lemon Chicken Orzo",20,"Roasted chicken, orzo, herbs and crumbled feta",false]]],
 ["Pasta & Pine","Italian","Crossroads","$$",4.7,"🍝","Cary",0,[["Wild Mushroom Risotto",20,"Creamy arborio rice, roasted mushrooms and thyme",true],["Spicy Calabrian Rigatoni",19,"Tomato, Calabrian chile and aged pecorino",true],["Braised Pork Ragù",22,"Slow-cooked pork shoulder over fresh pappardelle",false]]],
 ["Masa Verde","Mexican","Cary Towne Center","$",4.6,"🌮","Cary",2,[["Black Bean Tamales",15,"House masa, black beans and salsa roja",true],["Carne Asada Plate",21,"Grilled steak, charred scallions and rice",false],["Cochinita Pibil",19,"Achiote-marinated pork with pickled red onion",false]]],
 ["Oak & Ember Smokehouse","Southern BBQ","Fenton","$$",4.8,"🍖","Cary",8,[["Smoked Portobello Plate",16,"Oak-smoked mushrooms, slaw and Carolina pepper sauce",true],["Beef Brisket Sandwich",21,"Sliced brisket, pickles and house barbecue sauce",false],["Smoked Chicken Thighs",19,"Hickory chicken with cornbread and collard greens",false]]],
 ["Saigon Street Pho","Vietnamese","Downtown Cary","$",4.7,"🍜","Cary",10,[["Tofu Summer Noodle Bowl",15,"Rice noodles, crispy tofu, mint and peanut-lime dressing",true],["Rare Steak Phở",18,"Thin-sliced steak, rice noodles and aromatic broth",false],["Crispy Pork Bánh Mì",16,"Roast pork, pickled vegetables and cilantro",false]]],
 ["Luna Pasta House","Italian","Franklin Street","$$",4.7,"🍝","Chapel Hill",0,[["Brown Butter Sage Ravioli",19,"Ricotta ravioli with brown butter and crisp sage",true],["Beef Braciole",24,"Rolled beef braised in tomato with parmesan",false],["Chicken Piccata",21,"Pan-seared chicken, capers and lemon butter",false]]],
 ["Salsa Roja Cantina","Mexican","Carrboro","$",4.6,"🌮","Chapel Hill",2,[["Poblano Corn Enchiladas",16,"Roasted poblano, sweet corn and tomatillo salsa",true],["Barbacoa Burrito",18,"Slow-braised beef, rice, beans and salsa roja",false],["Cochinita Pibil Torta",17,"Achiote-braised pork, pickled onion and black beans on a toasted roll",false]]],
 ["Lotus Wok","Thai","Eastgate","$$",4.7,"🍲","Chapel Hill",5,[["Basil Tofu Stir-Fry",16,"Crisp tofu, holy basil and seasonal vegetables",true],["Northern Thai Khao Soi",20,"Curry broth, egg noodles and tender chicken",false],["Grilled Beef Crying Tiger",22,"Charred steak with spicy lime dipping sauce",false]]],
 ["Umami Ramen","Japanese","University Place","$$",4.8,"🍜","Chapel Hill",3,[["Sesame Shoyu Ramen",17,"Soy broth, roasted sesame, greens and bamboo shoots",true],["Tonkotsu Chashu Ramen",19,"Pork-bone broth, braised pork and soft egg",false],["Chicken Nanban",18,"Crisp chicken with tangy tartar and rice",false]]],
 ["Blue Oak Barbecue","Southern BBQ","Carrboro","$$",4.8,"🍗","Chapel Hill",8,[["Smoked Acorn Squash",15,"Pit-roasted squash with maple chile glaze",true],["Texas Brisket Plate",24,"Pepper-crusted brisket with slaw and two sides",false],["Pulled Pork Nachos",18,"Smoked pork, queso, pickled jalapeño and chips",false]]],
 ["Olive & Feta","Mediterranean","Franklin Street","$$",4.6,"🥙","Chapel Hill",7,[["Roasted Cauliflower Shawarma",16,"Warm spices, tahini, herbs and toasted pita",true],["Chicken Souvlaki Platter",21,"Grilled chicken, lemon potatoes and tzatziki",false],["Lamb Moussaka",23,"Layered eggplant, lamb ragù and béchamel",false]]],
 ["Masala Yard","Indian","Carrboro","$$",4.7,"🍛","Chapel Hill",1,[["Baingan Bharta",16,"Fire-roasted eggplant, tomato and fresh cilantro",true],["Chicken Tikka Masala",20,"Charcoal-grilled chicken in creamy tomato curry",false],["Lamb Saag",22,"Tender lamb simmered with spinach and warming spices",false]]],
 ["Seoulful Bowl","Korean","University Mall","$$",4.7,"🥘","Chapel Hill",6,[["Crispy Tofu Kimbap",15,"Seasoned rice, vegetables and crisp tofu in seaweed",true],["Bulgogi Lettuce Wraps",21,"Sweet-savory beef, rice and fresh lettuce cups",false],["Soy Garlic Chicken",19,"Crispy chicken glazed with soy, garlic and sesame",false]]],
 ["Wok & Willow","Chinese","Meadowmont","$",4.6,"🥟","Chapel Hill",9,[["Sichuan Dry-Fried Green Beans",14,"Crisp green beans, garlic and toasted Sichuan pepper",true],["Beef and Broccoli",19,"Wok-seared beef, broccoli and ginger soy glaze",false],["Peking Duck Bao",20,"Roast duck, scallion and hoisin in steamed buns",false]]],
 ["Little Saigon Table","Vietnamese","Carrboro","$",4.8,"🥢","Chapel Hill",10,[["Crispy Tofu Bún",15,"Rice vermicelli, tofu, herbs and pickled carrot",true],["Bò Kho Beef Stew",19,"Slow-braised beef, star anise and warm baguette",false],["Grilled Lemongrass Chicken",18,"Charred chicken, broken rice and nước chấm",false]]]
].map(([n,c,a,p,s,e,city,menuKey,m])=>({n,c,a,p,s,e,city,menuKey,m}));
MORE.push(...CITY_ADDITIONS);
MORE.forEach((r,i)=>{r.id=10+i;R.push(r)});
R.forEach((r,i)=>{
 r.city=r.city||"Raleigh";
 const addons=r.menuKey===undefined?MENU_ADDONS[i]||[]:CITY_MENU_ADDONS[r.menuKey]||[];
 r.m=[...r.m.map(m=>[m[0],m[1],m[2]||DS[i]?.[r.m.indexOf(m)]||"A house favorite made with fresh ingredients",m[3]??VEG.has(m[0])]),...addons,...SIDES];
});
const RESTAURANT_PHOTOS=[
 "photo-1550966871-3ed3cdb5ed0c",
 "photo-1517248135467-4c7edcad34c4",
 "photo-1559339352-11d035aa65de",
 "photo-1555396273-367ea4eb4db5",
 "photo-1414235077428-338989a2e8c0",
 "photo-1540189549336-e6e99c3679fe",
 "photo-1563245372-f21724e3856d",
 "photo-1512621776951-a57141f2eefd",
 "photo-1529692236671-f1f6cf9683ba",
 "photo-1574071318508-1cdbab80d002",
 "photo-1544025162-d76694265947",
 "photo-1547592180-85f173990554",
 "photo-1565299507177-b0ac66763828",
 "photo-1593560708920-61dd98c46a4e",
 "photo-1551183053-bf91a1d81141",
 "photo-1546549032-9571cd6b27df",
 "photo-1603894584373-5ac82b2ae398",
 "photo-1567337710282-00832b415979",
 "photo-1585937421612-70a008356fbe",
 "photo-1555126634-323283e090fa",
 "photo-1569718212165-3a8278d5f624",
 "photo-1601050690597-df0568f70950",
 "photo-1578985545062-69928b1d9587",
 "photo-1488477181946-6428a0291777",
 "photo-1544145945-f90425340c7e",
 "photo-1555939594-58d7cb561ad1",
 "photo-1546069901-ba9599a7e63c",
 "photo-1513104890138-7c749659a591",
 "photo-1604382355076-af4b0eb60143",
 "photo-1565299624946-b28f40a0ae38",
 "photo-1529042410759-befb1204b468",
 "photo-1515377905703-c4788e51af15",
 "photo-1504674900247-0877df9cc836",
 "photo-1515003197210-e0cd71810b5f",
 "photo-1521017432531-fbd92d768814",
 "photo-1504754524776-8f4f37790ca0",
 "photo-1473093295043-cdd812d0e601",
 "photo-1432139555190-58524dae6a55",
 "photo-1466978913421-dad2ebd01d17",
 "photo-1498654896293-37aacf113fd9",
 "photo-1511690743698-d9d85f2fbf38",
 "photo-1528605248644-14dd04022da1",
 "photo-1552566626-52f8b828add9",
 "photo-1495474472287-4d71bcdd2085",
 "photo-1500530855697-b586d89ba3ee",
 "photo-1528712306091-ed0763094c98",
 "photo-1464346303505-28f6684d7f0b",
 "photo-1506464519650-86ab6e89b0e7",
 "photo-1496377263444-052d30527f3d"
];
const restaurantPhotoForIndex=index=>RESTAURANT_PHOTOS[(index*7+3)%RESTAURANT_PHOTOS.length];
const SCENES=[
 ["wood-fired pizzeria","A little Italy, right around the corner.","Hand-stretched dough, blistered crusts and long-table evenings."],
 ["Indian supper club","Big-hearted Indian cooking.","Slow-simmered favorites, fragrant spices and a little something sweet."],
 ["neighborhood taqueria","A bright, lively taqueria.","Smoky chiles, fresh tortillas and the best kind of messy lunch."],
 ["late-night ramen bar","A bowl worth slowing down for.","Long-simmered broth, springy noodles and a seat at the counter."],
 ["Ethiopian sharing table","Gather close. Pass the injera.","A generous spread of slow-cooked stews, lentils and warm spice."],
 ["Bangkok street-food kitchen","A little heat, a lot of flavor.","Fresh herbs, wok-fired favorites and sweet mango to finish."],
 ["Korean comfort kitchen","Comfort food with a Korean kick.","Sizzling rice bowls, deep savory flavor and a little crunch."],
 ["Mediterranean mezze house","Make room for one more plate.","Olive oil, bright herbs, warm bread and a table made for sharing."],
 ["Carolina smokehouse","Low and slow, Carolina style.","Smoky favorites, familiar sides and something sweet after."],
 ["Chinese dumpling house","Folded by hand. Made to share.","Steamy baskets, silky noodles and the comfort of a familiar table."],
 ["Durham smokehouse","Bull City barbecue, low and slow.","Smoked favorites, Carolina sides and room to stay a while."],
 ["Ninth Street noodle shop","A warm bowl on Ninth Street.","Bright herbs, fragrant broth and noodles made for a long lunch."],
 ["Queen City arepera","Venezuelan comfort, made by hand.","Golden corn cakes, slow-cooked fillings and a little taste of home."],
 ["South End taco room","Tacos, salsa and one more round.","Fresh tortillas, smoky fillings and bright, punchy salsas."]
].map(([type,headline,story], index)=>({type,headline,story,photo:restaurantPhotoForIndex(index)}));
SCENES.push(
 {...SCENES[5],type:"Durham Thai kitchen",headline:"A little heat, a lot of heart.",story:"Fresh herbs, wok-fired favorites and bright, fragrant curries.",photo:restaurantPhotoForIndex(18)},
 {...SCENES[8],type:"Bull City smokehouse",headline:"Smoke, slow time and Carolina sides.",story:"Fire-kissed comfort with a little Durham character.",photo:restaurantPhotoForIndex(19)},
 {...SCENES[0],type:"NoDa neighborhood pizzeria",headline:"A Charlotte table, straight from the oven.",story:"Blistered crusts, local ingredients and easygoing Italian favorites.",photo:restaurantPhotoForIndex(20)},
 {...SCENES[6],type:"Korean comfort kitchen",headline:"A little Seoul in South End.",story:"Savory rice bowls, crisp bites and the pleasure of sharing.",photo:restaurantPhotoForIndex(21)}
);
const FOOD_PHOTOS={
 chinese:["photo-1563245372-f21724e3856d","photo-1569718212165-3a8278d5f624","photo-1555126634-323283e090fa"],
 pizza:["photo-1574071318508-1cdbab80d002","photo-1604382355076-af4b0eb60143","photo-1593560708920-61dd98c46a4e"],
 pasta:["photo-1551183053-bf91a1d81141","photo-1546549032-9571cd6b27df","photo-1513104890138-7c749659a591"],
 curry:["photo-1603894584373-5ac82b2ae398","photo-1567337710282-00832b415979","photo-1585937421612-70a008356fbe"],
 taco:["photo-1565299507177-b0ac66763828","photo-1593560708920-61dd98c46a4e","photo-1565299624946-b28f40a0ae38"],
 noodle:["photo-1555126634-323283e090fa","photo-1569718212165-3a8278d5f624","photo-1547592180-85f173990554"],
 dumpling:["photo-1563245372-f21724e3856d","photo-1601050690597-df0568f70950","photo-1555126634-323283e090fa"],
 greens:["photo-1512621776951-a57141f2eefd","photo-1540189549336-e6e99c3679fe","photo-1546069901-ba9599a7e63c"],
 bbq:["photo-1544025162-d76694265947","photo-1555939594-58d7cb561ad1","photo-1529692236671-f1f6cf9683ba"],
 dessert:["photo-1578985545062-69928b1d9587","photo-1488477181946-6428a0291777","photo-1565958011703-44f9829ba187"],
 drink:["photo-1544145945-f90425340c7e","photo-1488477181946-6428a0291777","photo-1565958011703-44f9829ba187"]
};
const RESTAURANT_PHOTOS_BY_CUISINE={
 "Italian":[...FOOD_PHOTOS.pizza,...FOOD_PHOTOS.pasta,...FOOD_PHOTOS.dessert],
 "Indian":[...FOOD_PHOTOS.curry,"photo-1728910156510-77488f19b152"],
 "Mexican":[...FOOD_PHOTOS.taco,"photo-1599974579688-8dbdd335c77f","photo-1565299585323-38d6b0865b47"],
 "Japanese":[...FOOD_PHOTOS.noodle,...FOOD_PHOTOS.dumpling],
 "Ethiopian":[],
 "Thai":["photo-1569718212165-3a8278d5f624","photo-1574484284002-952d92456975","photo-1540189549336-e6e99c3679fe","photo-1585937421612-70a008356fbe"],
 "Korean":["photo-1553163147-622ab57be1c7","photo-1590301157890-4810ed352733","photo-1600289031464-74d374b64991"],
 "Mediterranean":[...FOOD_PHOTOS.greens],
 "Southern BBQ":[...FOOD_PHOTOS.bbq,"photo-1555939594-58d7cb561ad1","photo-1508615263227-c5d58c1e5821"],
 "Southern":[...FOOD_PHOTOS.bbq,"photo-1555939594-58d7cb561ad1","photo-1508615263227-c5d58c1e5821"],
 "Chinese":[...FOOD_PHOTOS.chinese,...FOOD_PHOTOS.dumpling],
 "Vietnamese":[...FOOD_PHOTOS.noodle],
 "Venezuelan":[]
};
const PREMIUM_RESTAURANT_PHOTOS=[
 "photo-1550966871-3ed3cdb5ed0c",
 "photo-1517248135467-4c7edcad34c4",
 "photo-1559339352-11d035aa65de",
 "photo-1555396273-367ea4eb4db5",
 "photo-1414235077428-338989a2e8c0",
 "photo-1552566626-52f8b828add9",
 "photo-1521017432531-fbd92d768814",
 "photo-1528605248644-14dd04022da1",
 "photo-1535938995-b63df88b6c18",
 "photo-1578474846511-04ba529f0b88",
 "photo-1590846406792-0adc7f938f1d",
 "photo-1652195960911-c9f55224bd89",
 "photo-1549488344-1f9b8d2bd1f3",
 "photo-1695094411862-0e047fbddcb1",
 "photo-1469234496837-d0101f54be3e",
 "photo-1525193612562-0ec53b0e5d7c",
 "photo-1666032119084-82351976a922",
 "photo-1727352037068-9091d4789738",
 "photo-1723744910051-da35a92321af",
 "photo-1782983595134-13e7b069545d",
 "photo-1756397481872-ed981ef72a51",
 "photo-1776993298456-98c71c0e177e",
 "photo-1782983595342-5c4c2f36d108",
 "photo-1535938995-b63df88b6c18",
 "photo-1590660105340-840e6929412e"
];
const assignedRestaurantPhotos=new Set();
function restaurantPhotoFor(r){
 const candidates=[
  ...(RESTAURANT_PHOTOS_BY_CUISINE[r.c]||[]),
  ...PREMIUM_RESTAURANT_PHOTOS
 ];
 const photo=candidates.find(id=>!assignedRestaurantPhotos.has(id));
 if(!photo)throw new Error(`No unique restaurant image is available for ${r.n}.`);
 assignedRestaurantPhotos.add(photo);
 return photo;
}
const FOOD_STYLE=["pizza","curry","taco","noodle","greens","noodle","dumpling","greens","bbq","dumpling","bbq","noodle","taco","taco","curry","bbq","pizza","dumpling"];
const STYLE_BY_MENU=["pizza","curry","taco","noodle","greens","curry","dumpling","greens","bbq","dumpling","noodle"];
R.forEach((r,i)=>{
 const menuKey=r.menuKey??i,sceneTemplate=SCENES[menuKey===10?11:menuKey]||SCENES[0];
 const photo=restaurantPhotoFor(r);
 r.scene={...(SCENES[i]||sceneTemplate),type:(SCENES[i]||sceneTemplate).type||`${r.c} neighborhood kitchen`,headline:(SCENES[i]||sceneTemplate).headline||`A neighborhood table in ${r.city}.`,story:(SCENES[i]||sceneTemplate).story||`Locally loved ${r.c.toLowerCase()} favorites, made for sharing.`,photo};
 r.foodStyle=FOOD_STYLE[i]||STYLE_BY_MENU[menuKey]||"greens";
});
function imageUrl(id,width){return`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`}
function dishPhoto(r,dish,index){
 const n=dish.toLowerCase(),group=/cake|tiramisu|churro|baklava|pudding|mochi|dessert|chocolate|sweet|sticky rice/.test(n)?"dessert":/lassi|lemonade|drink|smoothie/.test(n)?"drink":/pizza|margherita/.test(n)?"pizza":/pasta|cacio|tonnarelli/.test(n)?"pasta":/taco|arepa|plantain|corn cake/.test(n)?"taco":/noodle|pho|ramen|vermicelli/.test(n)?"noodle":/curry|thali|dosa|lentil|injera|stew|masala|pad kra pao/.test(n)?"curry":/dumpling|gyoza|roll|wonton|mapo tofu/.test(n)?"dumpling":/salad|vegetable|veggie|greens|mezze|hummus|falafel|tofu|rice|potato|soup|toast|cheese/.test(n)?"greens":/pork|chicken|beef|lamb|steak|meat|smoked|pulled|carne|kitfo|doro/.test(n)?"bbq":r.foodStyle;
 const cuisineGroup=r.c==="Chinese"?"chinese":null;
 const photos=FOOD_PHOTOS[cuisineGroup||group]||FOOD_PHOTOS[r.foodStyle];
 return imageUrl(photos[(index+(r.id%photos.length))%photos.length],520)
}
const LV=[["Beginner",1],["Novice",5],["Explorer",10],["Gourmet",15],["Connoisseur",20],["Legend",25]];
const $=id=>document.getElementById(id),esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
/* Prototype storage only. Replace with FastAPI auth (hashed passwords, JWT) + MongoDB in production. */
let users=ld("nomo_users",{}),rests=ld("nomo_rests",{}),res=ld("nomo_res",[]),cart=ld("nomo_cart",{rid:null,items:{}}),me=ld("nomo_me",null),rme=ld("nomo_rme",null),cuisine="All",city="All",cur=null,mode="in",tt;
let posts=ld("nomo_posts",[
{id:1,u:"Priya S.",r:"Tiffin Trails",d:"Masala Dosa",t:"Crackly edges and the chutneys are unreal.",by:[],b:14,re:[{u:"Marcus",t:"Adding this to my roadmap."}]},
{id:2,u:"Marcus T.",r:"Habesha Feast",d:"Kitfo",t:"Ask for it mild first. Worth the detour.",by:[],b:9,re:[]},
{id:3,u:"Jules A.",r:"Ramen Kaze",d:"Tonkotsu Ramen",t:"Broth tastes like it simmered for days.",by:[],b:21,re:[]}]);
const U=()=>me&&users[me],toast=m=>{const t=$("ts");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),2600)};
const lvl=n=>LV.reduce((a,l,k)=>n>=l[1]?k:a,-1);
async function hash(s){try{const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}catch(e){return btoa(s)}}

/* theme */
function theme(t){document.documentElement.dataset.theme=t;$("th").textContent=t==="dark"?"☀️":"🌙";sv("nomo_theme",t)}
$("th").onclick=()=>{theme(document.documentElement.dataset.theme==="dark"?"light":"dark");if($("v-menu")?.firstElementChild)menuPage();if($("v-explore"))explore()};
theme(ld("nomo_theme",matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));

/* account menu */
function menu(){
 const u=U(),r=rests[rme];
 const badge=(name)=>String(name||"N").split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase();
 $("um").innerHTML=r?`<div class="account-card"><span class="account-avatar">${esc(badge(r.n))}</span><div><b>${esc(r.n)}</b><small>PARTNER ACCOUNT · ${esc(r.code)}</small></div></div><span class="account-divider"></span><button data-a="dash"><span>Restaurant dashboard</span><i aria-hidden="true">↗</i></button><button data-a="out" class="account-signout"><span>Sign out</span><i aria-hidden="true">→</i></button>`:u?`<div class="account-card"><span class="account-avatar">${esc(badge(u.fn+" "+u.ln))}</span><div><b>${esc(u.fn)} ${esc(u.ln)}</b><small>${esc(u.email)}</small></div></div><span class="account-divider"></span><button data-a="set"><span>Settings</span><i aria-hidden="true">↗</i></button><button data-a="out" class="account-signout"><span>Sign out</span><i aria-hidden="true">→</i></button>`:`<div class="account-card account-guest"><span class="account-avatar">N</span><div><b>Your nomo account</b><small>Not signed in</small></div></div><span class="account-divider"></span><button data-a="in"><span>Log in</span><i aria-hidden="true">→</i></button><button data-a="up"><span>Create an account</span><i aria-hidden="true">→</i></button>`}
$("ub").onclick=e=>{e.stopPropagation();menu();$("um").classList.toggle("open")};
addEventListener("click",()=>$("um").classList.remove("open"));
$("um").onclick=e=>{const a=e.target.dataset.a;if(!a)return;if(a==="set")location.href="profile.html";else if(a==="dash")location.href="dash.html";else if(a==="out"){me=null;rme=null;sv("nomo_me",null);sv("nomo_rme",null);location.reload()}else auth(a,"c")};

/* auth: customer or restaurant */
let role="c";
function auth(m,r){if(r)role=r;mode=m;if(!$("ad"))return;const dialog=$("ad");dialog.classList.add("auth-dialog");$("ae").textContent="";
 let head=$("auth-heading");
 if(!head){head=document.createElement("header");head.className="auth-heading";head.innerHTML='<span class="auth-mark" aria-hidden="true">n.</span><span class="auth-kicker"></span><h2></h2><p></p>';head.id="auth-heading";dialog.insertBefore(head,dialog.firstChild)}
 const title=role==="r"?(m==="in"?"Welcome back.":"Bring your table to nomo."):(m==="in"?"Welcome back.":"Come hungry.");
 head.querySelector(".auth-kicker").textContent=role==="r"?"FOR RESTAURANT PARTNERS":"A PLACE AT THE TABLE";
 head.querySelector("h2").textContent=title;
 head.querySelector("p").textContent=role==="r"?(m==="in"?"Sign in to manage your restaurant profile and reservations.":"Create your restaurant partner account to join our local dining guide."):(m==="in"?"Sign in to keep your food passport and favorite finds close.":"Create an account to collect stamps and share your favorite finds.");
 document.querySelectorAll("#rl .chip").forEach(c=>{c.classList.toggle("on",c.dataset.role===role);c.textContent=c.dataset.role==="c"?"DINERS":"RESTAURANT PARTNERS"});
 document.querySelectorAll("#mt .chip").forEach(c=>{c.classList.toggle("on",c.dataset.m===m);c.textContent=c.dataset.m==="in"?"LOG IN":"CREATE ACCOUNT"});
 $("as").textContent=m==="in"?"Log in":"Create account";
 const f=(id,l,t="text",x="")=>`<div class="${x}"><label for="${id}">${l}</label><input id="${id}" type="${t}" autocomplete="off"></div>`,pw=f("pw","Password (6+ characters)","password","full");let h;
 if(role==="c")h=(m==="up"?f("fn","First name")+f("ln","Last name")+f("ag","Age","number")+`<div><label for="gn">Gender</label><select id="gn"><option>Female</option><option>Male</option><option>Non-binary</option><option>Prefer not to say</option></select></div>`+f("co","Country of residence","text","full"):"")+f("em","Email","email","full")+pw;
 else h=m==="up"?f("rn","Restaurant name","text","full")+f("rc","Restaurant code (your unique ID)")+`<div><label for="rcu">Cuisine type</label><select id="rcu">${[...new Set(R.map(r=>r.c))].map(c=>`<option>${c}</option>`).join("")}<option>Other</option></select></div>`+f("ra","Address","text","full")+f("rp","Phone","tel")+f("ro","Owner or manager")+f("em","Business email","email","full")+pw:f("rc","Restaurant code","text","full")+pw;
 $("af").innerHTML=h;if(!$("ad").open)$("ad").showModal()}
document.querySelectorAll("#rl .chip").forEach(c=>c.onclick=()=>auth(mode,c.dataset.role));
document.querySelectorAll("#mt .chip").forEach(c=>c.onclick=()=>auth(c.dataset.m));$("ax").onclick=()=>$("ad").close();
$("as").onclick=async()=>{const v=id=>($(id)?.value||"").trim(),e=$("ae");
 if($("pw").value.length<6)return e.textContent="Password needs at least 6 characters.";
 const h=await hash($("pw").value),ok=/^\S+@\S+\.\S+$/;
 if(role==="r"){const c=v("rc").toUpperCase();if(!c)return e.textContent="Enter your restaurant code.";
  if(mode==="in"){if(!rests[c]||rests[c].h!==h)return e.textContent="Restaurant code or password is incorrect."}
  else{const em=v("em").toLowerCase();if(rests[c])return e.textContent="That restaurant code is already registered.";
   if(!v("rn")||!v("ra")||!v("ro")||!ok.test(em))return e.textContent="Fill in name, address, owner and a valid email.";
   rests[c]={code:c,n:v("rn"),cu:$("rcu").value,ad:v("ra"),ph:v("rp"),ow:v("ro"),email:em,h};sv("nomo_rests",rests)}
  rme=c;me=null;sv("nomo_rme",c);sv("nomo_me",null);sv("nomo_welcome",rests[c].n+"!");location.href="dash.html";return}
 const em=v("em").toLowerCase();if(!ok.test(em))return e.textContent="Enter a valid email address.";
 if(mode==="in"){if(!users[em]||users[em].h!==h)return e.textContent="Email or password is incorrect."}
 else{if(users[em])return e.textContent="That email already has an account. Log in instead.";
  if(!v("fn")||!v("ln")||!v("co")||!(+v("ag")>0))return e.textContent="Fill in your name, age and country.";
  users[em]={fn:v("fn"),ln:v("ln"),ag:+v("ag"),gn:$("gn").value,co:v("co"),email:em,h,st:[],no:"NM"+Math.floor(1e6+Math.random()*9e6),iss:new Date().toLocaleDateString()};sv("nomo_users",users)}
 me=em;rme=null;sv("nomo_me",em);sv("nomo_rme",null);$("ad").close();location.reload()};
$("cta")?.addEventListener("click",()=>U()?location.href="explore.html":auth("up","c"));

/* explore */
function setupCityPicker(){
 const picker=$("city-picker");
 if(!picker||picker.dataset.ready)return;
 picker.dataset.ready="1";
 const trigger=$("city-trigger"),options=$("city-options");
 const cities=["All","Raleigh","Durham","Charlotte","Cary","Chapel Hill"];
 const labels=["All cities",...cities.slice(1).map(name=>`${name}, NC`)];
 const close=focusTrigger=>{
  picker.classList.remove("open");
  trigger.setAttribute("aria-expanded","false");
  if(focusTrigger)trigger.focus();
 };
 const open=()=>{
  picker.classList.add("open");
  trigger.setAttribute("aria-expanded","true");
  options.querySelector(`[data-city="${cities.indexOf(city)}"]`)?.focus();
 };
 const render=()=>{
  const selected=cities.indexOf(city);
  $("city-label").textContent=labels[selected<0?0:selected];
  options.innerHTML=cities.map((name,index)=>`<button class="city-option ${index===selected?"selected":""}" type="button" role="option" id="city-option-${index}" data-city="${index}" aria-selected="${index===selected}"><span>${esc(labels[index])}</span><i aria-hidden="true">${index===selected?"✓":""}</i></button>`).join("");
 };
 const select=index=>{
  city=cities[index];
  close(false);
  explore();
  trigger.focus();
 };
 trigger.addEventListener("click",()=>picker.classList.contains("open")?close(false):open());
 trigger.addEventListener("keydown",e=>{
  if(e.key==="ArrowDown"||e.key==="ArrowUp"){
   e.preventDefault();
   open();
  }else if(e.key==="Escape")close(false);
 });
 options.addEventListener("click",e=>{
  const option=e.target.closest("[data-city]");
  if(option)select(+option.dataset.city);
 });
 options.addEventListener("keydown",e=>{
  const option=e.target.closest("[data-city]");
  if(!option)return;
  const index=+option.dataset.city;
  if(e.key==="ArrowDown"||e.key==="ArrowUp"){
   e.preventDefault();
   const step=e.key==="ArrowDown"?1:-1;
   options.querySelector(`[data-city="${(index+step+cities.length)%cities.length}"]`)?.focus();
  }else if(e.key==="Home"||e.key==="End"){
   e.preventDefault();
   options.querySelector(`[data-city="${e.key==="Home"?0:cities.length-1}"]`)?.focus();
  }else if(e.key==="Enter"||e.key===" "){
   e.preventDefault();
   select(index);
  }else if(e.key==="Escape"){
   e.preventDefault();
   close(true);
  }
 });
 document.addEventListener("click",e=>{if(!picker.contains(e.target))close(false)});
 render();
}
function explore(){const cs=["All",...new Set(R.map(r=>r.c))],q=$("q").value.toLowerCase(),seen=new Set((U()?.st||[]).map(s=>s.id));
 setupCityPicker();
 if($("city-options")){
  const label=$("city-label"),idx=["All","Raleigh","Durham","Charlotte","Cary","Chapel Hill"].indexOf(city);
  if(label)label.textContent=["All cities","Raleigh, NC","Durham, NC","Charlotte, NC","Cary, NC","Chapel Hill, NC"][Math.max(0,idx)];
  $("city-options").querySelectorAll("[data-city]").forEach((option,i)=>{option.classList.toggle("selected",i===idx);option.setAttribute("aria-selected",String(i===idx))});
  $("city-options").querySelectorAll("[data-city] i").forEach((icon,i)=>{icon.textContent=i===idx?"✓":""});
 }
 $("chips").innerHTML=cs.map(c=>`<button class="chip ${c===cuisine?"on":""}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
const f=R.filter(r=>(city==="All"||r.city===city)&&(cuisine==="All"||r.c===cuisine)&&(r.n+r.c+r.a+r.city+r.m.map(m=>m[0]).join()).toLowerCase().includes(q));
$("rg").innerHTML=f.length?f.map(r=>`<button class="card rest" data-id="${r.id}"><div class="rest-cover"><img class="restaurant-thumb" src="${imageUrl(r.scene.photo,960)}" alt="" loading="lazy"><span class="rest-location">${esc(r.city)}, NC</span><span class="rest-cover-shade"></span><span class="rest-cuisine">${esc(r.c)}</span></div><div class="rest-details"><h3>${esc(r.n)}</h3><p class="rest-meta">${esc(r.a)} · ${r.p} · ★ ${r.s}</p>${seen.has(r.id)?'<span class="tag g">Visited</span>':""}<p class="menu-link">Explore menu <span aria-hidden="true">→</span></p></div></button>`).join(""):'<p class="sub">Nothing matches yet. Try another city, cuisine or search.</p>';
 $("rg").querySelectorAll(".restaurant-thumb").forEach(img=>img.addEventListener("error",()=>img.closest(".rest-cover").classList.add("image-missing"),{once:true}));
$("chips").onclick=e=>{const b=e.target.closest("[data-c]");if(b){cuisine=b.dataset.c;explore()}};
$("q").oninput=explore;
$("rg").onclick=e=>{const b=e.target.closest(".rest");if(b)location.href="menu.html?id="+b.dataset.id};
}

/* menu page: opens as its own page with a theme per restaurant */
let rsv={open:false,d:0,sz:2,t:null},menuVegOnly=new URLSearchParams(location.search).get("veg")==="1";
const days=()=>[0,1,2].map(d=>{const x=new Date();x.setDate(x.getDate()+d);return x.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})});
const slotsFor=(id,d)=>Array.from({length:10},(_,i)=>{const m=1020+i*30,h=Math.floor(m/60);return{t:`${h>12?h-12:h}:${m%60?"30":"00"} PM`,full:(id*7+d*3+i*5)%4===0}});
function menuPage(){const id=+new URLSearchParams(location.search).get("id"),r=R[id],v=$("v-menu");if(!r){location.href="explore.html";return}
 if(cur!==r){cur=r;rsv={open:false,d:0,sz:2,t:null}}
 const base=T[id%T.length],dark=document.documentElement.dataset.theme==="dark",t=dark?{...base,bg:"#171514",ink:"#f0e9e2",soft:"#29211f",bt:"#211b19",acc:"#d28d70"}:{...base,bg:"#f5f1e9",ink:"#302620",soft:"#e9e0d4",bt:"#fffdf8"},it=cart.rid===id?cart.items:{},ds=days(),sl=slotsFor(id,rsv.d),has=Object.keys(cart.items).length,scene=r.scene;
 v.innerHTML=`<div class="mp" data-scene="${r.foodStyle}" style="--mbg:${t.bg};--mi:${t.ink};--ma:${t.acc};--soft:${t.soft};--bt:${t.bt};--mf:'${t.font}',Georgia,serif;background:radial-gradient(circle at 10% 100%,${t.soft},transparent 42%),${t.bg}">
 <section class="restaurant-hero" id="restaurant-hero" tabindex="0" role="region" aria-label="Interactive ${esc(r.c)} restaurant photo. Move your pointer across the image to pan or use the left and right arrow keys.">
  <img class="restaurant-photo" src="${imageUrl(scene.photo,1800)}" alt="${esc(r.c)} food and restaurant atmosphere at ${esc(r.n)}" fetchpriority="high">
  <div class="restaurant-shade"></div>
  <span class="scene-pan-hint" aria-hidden="true"><span>↔</span> HOVER TO EXPLORE</span>
  <div class="restaurant-hero-copy"><a class="hero-back" href="explore.html">← All restaurants</a><span class="restaurant-type">${esc(scene.type)}</span><h1>${esc(r.n)}</h1><p class="restaurant-story">${esc(scene.headline)}</p><p class="restaurant-intro">${esc(scene.story)}</p>
   <div class="mm"><span>${esc(AD[id]||r.a)}, ${AD[id]?`${esc(r.a)}, `:""}${esc(r.city)}, NC</span><span>${esc(r.c)}</span><span>${esc(r.p)}</span><span>★ ${r.s}</span></div>
   <div class="restaurant-actions"><button class="mb" id="rb">${rsv.open?"Hide time slots":"Reserve a table"}</button>${has?' <a class="mb o" href="cart.html">View cart</a>':""}</div>
  </div>
 </section>
 ${rsv.open?`<div class="mr"><h2 style="font-size:2rem">Reserve a table</h2><div class="rowc">${ds.map((d,i)=>`<button class="mchip ${i===rsv.d?"on":""}" data-d="${i}">${d}</button>`).join("")}</div>
 <label>Party size <select id="rz">${[1,2,3,4,5,6,8].map(n=>`<option ${n===rsv.sz?"selected":""}>${n}</option>`).join("")}</select></label>
 <h3 style="margin-top:18px;font-size:1.5rem">Available time slots</h3><div class="rowc">${sl.map(s=>`<button class="mchip ${s.t===rsv.t?"on":""}" ${s.full?"disabled":""} data-t="${s.t}">${s.t}${s.full?" (full)":""}</button>`).join("")}</div><button class="mb" id="rc">Confirm reservation</button></div>`:""}
 <section class="mg"><div class="menu-heading"><div><span class="section-kicker">FROM THE KITCHEN</span><h2>Made for your kind of craving <span class="menu-count">${r.m.length} dishes</span></h2><p class="menu-subtitle">${esc(scene.story)}</p></div><label class="veg-toggle"><input type="checkbox" id="veg-menu" ${menuVegOnly?"checked":""}> <span>Vegetarian dishes only</span></label></div><div class="ml">${r.m.map((m,k)=>({m,k})).filter(({m})=>!menuVegOnly||m[3]).map(({m,k})=>{const q=it[m[0]]?.q||0,kind=m[3]?"veg":"nonveg",label=m[3]?"Vegetarian":"Non-vegetarian";return`<article class="mi"><div class="food-photo">${r.e}<img src="${dishPhoto(r,m[0],k)}" alt="${esc(m[0])}" loading="lazy"></div><div class="dish-copy"><div class="dish-title"><h3>${esc(m[0])}</h3><span class="diet-symbol ${kind}" role="img" aria-label="${label}" title="${label}"><i aria-hidden="true"></i></span></div><p>${esc(m[2])}</p></div><span class="pr">$${m[1]}</span><div class="act">${q?`<div class="qs"><button data-q="${k}|-1" aria-label="Remove one ${esc(m[0])}">−</button><b>${q}</b><button data-q="${k}|1" aria-label="Add one ${esc(m[0])}">+</button></div>`:`<button class="add" data-add="${k}">Add to cart</button>`}</div></article>`}).join("")}</div></section></div>`;
 v.querySelectorAll("img").forEach(img=>img.addEventListener("error",()=>{img.parentElement.classList.add("image-missing");img.remove()},{once:true}));
 initScenePan(v.querySelector("#restaurant-hero"));
}
function initScenePan(hero){
 if(!hero)return;
 const image=hero.querySelector(".restaurant-photo");
 if(!image)return;
 let pan=0;
 const setPan=value=>{
  pan=Math.max(-8,Math.min(8,value));
  image.style.setProperty("--scene-pan-x",`${pan}%`);
 };
 hero.addEventListener("pointermove",e=>{
  if(e.pointerType!=="mouse")return;
  const bounds=hero.getBoundingClientRect();
  const ratio=Math.max(0,Math.min(1,(e.clientX-bounds.left)/bounds.width));
  const position=ratio*2-1;
  setPan(position*8);
 });
 hero.addEventListener("pointerleave",()=>{
  setPan(0);
 });
 hero.addEventListener("keydown",e=>{
  if(e.key==="ArrowLeft"||e.key==="ArrowRight"){
   e.preventDefault();
   setPan(pan+(e.key==="ArrowRight"?4:-4));
  }else if(e.key==="Home"){
   e.preventDefault();
   setPan(0);
  }
 });
}
function book(){const u=U();if(!u)return rme?toast("Log in as a customer to reserve a table"):auth("in","c");if(!rsv.t)return toast("Pick a time slot first");
 res.unshift({id:Date.now(),rn:cur.n,user:me,name:u.fn+" "+u.ln,date:days()[rsv.d],t:rsv.t,sz:rsv.sz});sv("nomo_res",res);toast(`Table for ${rsv.sz} at ${cur.n}, ${rsv.t}`);rsv.t=null;menuPage()}

/* cart */
const TAX=.0725,FEE=1.99;let tip=.1,done=null;
const money=n=>"$"+n.toFixed(2);
const bill=()=>{const sub=Object.values(cart.items).reduce((a,x)=>a+x.p*x.q,0),tax=sub*TAX,tp=sub*tip;return{sub,tax,tp,total:sub+tax+FEE+tp}};
const cSave=()=>{sv("nomo_cart",cart);const n=Object.values(cart.items).reduce((a,x)=>a+x.q,0),b=$("cn");b.style.display=n?"grid":"none";b.textContent=n};
function chg(k,d){const m=cur.m[k];if(cart.rid!==cur.id){if(Object.keys(cart.items).length&&!confirm("Your cart has dishes from another restaurant. Start a new cart?"))return;cart={rid:cur.id,items:{}}}
 const x=cart.items[m[0]]||(cart.items[m[0]]={p:m[1],q:0});x.q+=d;if(x.q<=0)delete cart.items[m[0]];cSave();menuPage()}
function cq(n,d){const x=cart.items[n];if(!x)return;x.q+=d;if(x.q<=0)delete cart.items[n];if(!Object.keys(cart.items).length)cart.rid=null;cSave();cartPage()}
function cartPage(){const v=$("v-cart"),it=Object.entries(cart.items);
 if(done){const d=done;v.innerHTML=`<div class="cart-page"><div class="cart-success card"><span class="cart-kicker">A GOOD MEAL IS ON ITS WAY</span><div class="order-check" aria-hidden="true">✓</div><h2 class="t">Order placed</h2><p class="sub">Order <b>#${d.no}</b> from <b>${esc(d.r)}</b> is being prepared and will be ready in about 25 minutes.${d.stamped?" A new stamp was added to your passport.":""}</p>
 ${d.items.map(i=>`<div class="sl"><span>${i[1]} × ${esc(i[0])}</span><span>${money(i[1]*i[2])}</span></div>`).join("")}<div class="sl t"><span>Total paid</span><span>${money(d.total)}</span></div>
 <p class="cart-success-actions"><a class="btn" href="passport.html">View my passport</a> <a class="btn o" href="explore.html">Keep exploring</a></p></div></div>`;return}
 if(!it.length){v.innerHTML=`<div class="cart-page"><header class="cart-heading"><span class="cart-kicker">A TABLE FOR YOUR CRAVINGS</span><h2 class="t">Your cart</h2></header><section class="cart-empty"><span class="empty-plate" aria-hidden="true">✳</span><span class="cart-kicker">NOTHING ON THE TABLE YET</span><h3>Something delicious is waiting.</h3><p>Explore the neighborhood, find a new favorite and bring a little something back.</p><a class="btn" href="explore.html">Explore restaurants <span aria-hidden="true">→</span></a></section></div>`;return}
 const r=R[cart.rid],b=bill();
 v.innerHTML=`<div class="cart-page"><header class="cart-heading"><span class="cart-kicker">YOUR ORDER, THOUGHTFULLY GATHERED</span><h2 class="t">Your cart</h2><p>From <b>${esc(r.n)}</b><span class="cart-dot">·</span>${esc(r.a)}, ${esc(r.city)}</p></header><div class="cg"><section class="cart-items">
 <div class="cart-section-heading"><span>ON THE TABLE</span><b>${it.reduce((total,[,item])=>total+item.q,0)} items</b></div>
 ${it.map(([n,x])=>{const dishIndex=r.m.findIndex(m=>m[0]===n);return`<article class="ci"><div class="cie"><img src="${dishPhoto(r,n,Math.max(0,dishIndex))}" alt="${esc(n)}" loading="lazy"></div><div class="cart-item-copy"><h3>${esc(n)}</h3><small>${money(x.p)} each</small></div><div class="cq"><button data-cq="${esc(n)}|-1" aria-label="Remove one ${esc(n)}">−</button><b>${x.q}</b><button data-cq="${esc(n)}|1" aria-label="Add one ${esc(n)}">+</button></div><b class="lp">${money(x.p*x.q)}</b></article>`}).join("")}
 <p class="cart-add-more"><a href="menu.html?id=${r.id}"><span aria-hidden="true">＋</span> Add another dish from ${esc(r.n)}</a></p></section>
 <aside class="card sum"><span class="cart-kicker">AT A GLANCE</span><h3>Order summary</h3>
 ${it.map(([n,x])=>`<div class="sl"><span>${x.q} × ${esc(n)}</span><span>${money(x.p*x.q)}</span></div>`).join("")}
 <div class="sl cart-subtotal"><span>Subtotal</span><span>${money(b.sub)}</span></div>
 <div class="sl"><span>Sales tax (7.25%)</span><span>${money(b.tax)}</span></div><div class="sl"><span>Service fee</span><span>${money(FEE)}</span></div>
 <div class="sl"><span>Tip</span><span>${money(b.tp)}</span></div>
 <div class="tip-heading"><span>Leave a little extra?</span><small>Choose a tip</small></div><div class="rowc tip-options">${[0,.1,.15,.2].map(p=>`<button class="chip ${p===tip?"on":""}" data-tip="${p}">${p?p*100+"%":"No tip"}</button>`).join("")}</div>
 <div class="sl t"><span>Total</span><span>${money(b.total)}</span></div>
 <button class="btn" id="po">Place order <span aria-hidden="true">→</span></button><p class="cart-demo-note">Demo checkout · no payment will be taken</p></aside></div></div>`}
function order(){const u=U();if(!u)return rme?toast("Log in as a customer to order"):auth("in","c");
 const r=R[cart.rid],b=bill(),stamped=u.st.length<25,bf=lvl(u.st.length);
 done={no:"NM-"+Math.floor(1e4+Math.random()*9e4),r:r.n,items:Object.entries(cart.items).map(([n,x])=>[n,x.q,x.p]),total:b.total,stamped};
 if(stamped){u.st.push({id:r.id,n:r.n,e:r.e,d:new Date().toLocaleDateString(),ts:Date.now()});sv("nomo_users",users);const a=lvl(u.st.length);if(a>bf)toast("Level up: "+LV[a][0]+"!")}
 cart={rid:null,items:{}};cSave();cartPage();scrollTo(0,0)}
document.addEventListener("click",e=>{const t=e.target.closest("button");if(!t)return;
 if(t.id==="rb"){rsv.open=!rsv.open;menuPage()}
 else if(t.dataset.d!==undefined){rsv.d=+t.dataset.d;rsv.t=null;menuPage()}
 else if(t.dataset.t){rsv.t=t.dataset.t;menuPage()}
 else if(t.id==="rc")book();
 else if(t.dataset.add!==undefined)chg(+t.dataset.add,1);
 else if(t.dataset.q){const[k,d]=t.dataset.q.split("|");chg(+k,+d)}
 else if(t.dataset.cq){const i=t.dataset.cq.lastIndexOf("|");cq(t.dataset.cq.slice(0,i),+t.dataset.cq.slice(i+1))}
 else if(t.dataset.tip!==undefined){tip=+t.dataset.tip;cartPage()}
 else if(t.id==="po")order();
 else if(t.dataset.bk)flipBook(+t.dataset.bk);
 else if(t.dataset.f)t.dataset.f==="rest"?auth("up","r"):auth("in","c")});
document.addEventListener("change",e=>{
 if(e.target.id==="rz")rsv.sz=+e.target.value;
 else if(e.target.id==="veg-menu"){
  menuVegOnly=e.target.checked;
  const url=new URL(location.href);
  if(menuVegOnly)url.searchParams.set("veg","1");else url.searchParams.delete("veg");
  history.replaceState(null,"",url);
  menuPage();
 }
});

/* restaurant dashboard */
function dash(){const r=rests[rme],v=$("v-dash");
 if(!r){v.innerHTML=`<h2 class="t">Restaurant dashboard</h2><p class="sub">Log in with your restaurant code to see your details and reservations.</p><button class="btn" onclick="auth('in','r')">Restaurant log in</button>`;return}
 const f=(id,l,val)=>`<div><label for="d${id}">${l}</label><input id="d${id}" value="${esc(val)}"></div>`,rs=res.filter(x=>x.rn.toLowerCase()===r.n.toLowerCase());
 v.innerHTML=`<h2 class="t">${esc(r.n)}</h2><p class="sub">Restaurant code ${esc(r.code)} · ${esc(r.email)}. Menu management is coming in a future update.</p>
 <div class="card"><div class="f2">${f("n","Restaurant name",r.n)}${f("cu","Cuisine type",r.cu)}${f("ad","Address",r.ad)}${f("ph","Phone",r.ph)}${f("ow","Owner or manager",r.ow)}</div><p style="margin:16px 0 0"><button class="btn" id="ds">Save changes</button></p></div>
 <h2 class="t" style="font-size:2.2rem;margin-top:40px">Reservations</h2>${rs.length?rs.map(x=>`<div class="rv"><b>${esc(x.name)}</b><span>${esc(x.date)}, ${esc(x.t)} · party of ${x.sz}</span></div>`).join(""):'<p class="sub">No reservations yet. Bookings made under your restaurant name appear here.</p>'}`;
 $("ds").onclick=()=>{const g=id=>$("d"+id).value.trim();if(!g("n")||!g("ad"))return toast("Name and address are required");Object.assign(r,{n:g("n"),cu:g("cu"),ad:g("ad"),ph:g("ph"),ow:g("ow")});sv("nomo_rests",rests);toast("Changes saved");dash()}}

/* passport stamps: one hand-inked design per restaurant */
const MON=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
const fd=s=>{const d=new Date(s.ts||s.d);return isNaN(d)?"2026":String(d.getDate()).padStart(2,"0")+" "+MON[d.getMonth()]+" "+d.getFullYear()};
const INK=["#1d3d9c","#c62828","#1f8a4c","#c62828","#6a2fa0","#1f8a4c","#1d3d9c","#0f7b8c","#8b2a14","#c62828"];
const KIND=["c","c","n","q","o","h","c","a","r","c"],VAR=["double","dash","","","","","band","","","coin"];
const EMB=['<path d="M-22-18Q0-30 22-18L0 26Z"/><circle cx="-6" cy="-8" r="3.5" fill="currentColor"/><circle cx="8" cy="-3" r="3.5" fill="currentColor"/><circle cy="10" r="3" fill="currentColor"/>',
'<path d="M0 22C-14 10-14-8 0-22C14-8 14 10 0 22Z"/><path d="M-4 22C-26 16-30-6-20-16C-14-6-10 8-4 22ZM4 22C26 16 30-6 20-16C14-6 10 8 4 22Z"/>',
'<circle r="9"/>'+[...Array(8)].map((_,i)=>`<path d="M0-15V-24" transform="rotate(${i*45})"/>`).join(""),
'<circle cy="-6" r="13" fill="currentColor"/><path d="M-26 18q6.5-8 13 0t13 0t13 0"/><path d="M-26 27q6.5-8 13 0t13 0t13 0"/>',
'<circle r="24"/><circle r="15"/><circle r="6" fill="currentColor"/><path d="M-24 0H-15M15 0H24M0-24V-15M0 15V24"/>',
'<path d="M0-26L9-8H-9ZM-14-6H14L19 8H-19ZM-22 10H22V24H-22Z"/>',
'<circle r="22"/><path d="M0-22A11 11 0 0 1 0 0A11 11 0 0 0 0 22"/><circle cy="-11" r="3" fill="currentColor"/>',
'<path d="M-20 24V-4A20 20 0 0 1 20-4V24Z"/><path d="M-10 24V0A10 10 0 0 1 10 0V24"/>',
'<path d="M0-26C10-10 22-4 18 10C14 24-14 24-18 10C-20 0-8-6 0-26Z"/><path d="M0 22C-6 16-4 8 0 4C4 8 6 16 0 22Z"/>',
'<path d="M-24 8Q0-30 24 8Q0 24-24 8Z"/><path d="M-12 0l4 8M0-4v12M12 0l-4 8"/>'];
function stamp(id,ds,u){const r=R[id],si=id%INK.length,c=INK[si],k=KIND[si],v=VAR[si],x=t=>t.replace(/&/g,"&amp;"),nm=x(r.n.toUpperCase()),cu=x(r.c.toUpperCase()),ar=cu+" · "+r.city.toUpperCase(),
 em=(a,b,s)=>`<g transform="translate(${a} ${b}) scale(${s})" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${EMB[si]}</g>`,
 tx=(a,b,fs,t,w=700)=>`<text x="${a}" y="${b}" text-anchor="middle" font-size="${fs}" font-weight="${w}" letter-spacing="1">${t}</text>`,
 dt=(b,fs,a=100)=>`<text x="${a}" y="${b}" text-anchor="middle" font-family="'Courier New',monospace" font-size="${fs}" font-weight="700">${ds}</text>`,
 ln=(w,extra="")=>`fill="none" stroke="currentColor" stroke-width="${w}" ${extra}`;let b="";
 if(k==="c")b=`<circle cx="100" cy="100" r="92" ${ln(v==="coin"?7:4,v==="dash"?'stroke-dasharray="3 5"':v==="coin"?'stroke-dasharray="9 5"':"")}/><circle cx="100" cy="100" r="84" ${ln(1.5)}/><circle cx="100" cy="100" r="55" ${ln(1.5,v==="dash"?'stroke-dasharray="2 4"':"")}/>
 <path id="${u}t" d="M38 100A62 62 0 0 1 162 100" fill="none"/><path id="${u}b" d="M22 100A78 78 0 0 0 178 100" fill="none"/>
 <text font-size="14" font-weight="800" letter-spacing="1.5" text-anchor="middle"><textPath href="#${u}t" startOffset="50%">${nm}</textPath></text><text font-size="10.5" font-weight="700" letter-spacing="1" text-anchor="middle"><textPath href="#${u}b" startOffset="50%">${ar}</textPath></text>
 ${v==="band"?`${em(100,74,.55)}<rect x="46" y="94" width="108" height="26" ${ln(2.5)}/>${dt(112,14)}`:`${em(100,82,.8)}${dt(126,13)}`}`;
 else if(k==="o")b=`<ellipse cx="100" cy="100" rx="94" ry="70" ${ln(4)}/><ellipse cx="100" cy="100" rx="86" ry="62" ${ln(1.5)}/>${tx(100,58,12,nm,800)}${em(100,88,.5)}${dt(122,15)}${tx(100,146,10,cu)}`;
 else if(k==="n")b=`<path d="M24 40H176A10 10 0 0 0 186 50V150A10 10 0 0 0 176 160H24A10 10 0 0 0 14 150V50A10 10 0 0 0 24 40Z" ${ln(4)}/>${tx(100,66,15,nm,800)}<path d="M28 76H172" ${ln(1.5,'stroke-dasharray="3 3"')}/>${em(52,110,.6)}${dt(108,14,122)}${tx(58,148,10,cu)}<rect x="128" y="133" width="46" height="18" ${ln(2,'stroke-dasharray="3 2"')}/>${tx(151,146,10,"N° "+String(id+1).padStart(3,"0"))}`;
 else if(k==="q")b=`<rect x="16" y="16" width="168" height="168" rx="8" ${ln(5)}/><rect x="26" y="26" width="148" height="148" ${ln(1.5)}/>${tx(100,56,16,nm,800)}${em(100,100,.85)}${dt(146,14)}${tx(100,166,10,r.city.toUpperCase()+" · N.C.")}`;
 else if(k==="h")b=`<polygon points="60,8 140,8 192,60 192,140 140,192 60,192 8,140 8,60" ${ln(4)}/><polygon points="66,21 134,21 179,66 179,134 134,179 66,179 21,134 21,66" ${ln(1.5)}/>${tx(100,56,13,nm,800)}${em(100,97,.65)}${dt(140,14)}${tx(100,160,10,cu)}`;
 else if(k==="a")b=`<path d="M22 190V92A78 78 0 0 1 178 92V190Z" ${ln(4)}/><path d="M32 180V92A68 68 0 0 1 168 92V180Z" ${ln(1.5)}/>${em(100,80,.6)}${tx(100,124,13,nm,800)}${dt(148,14)}${tx(100,168,10,cu)}`;
 else b=`<rect x="8" y="46" width="184" height="108" rx="8" ${ln(6)}/><rect x="17" y="55" width="166" height="90" rx="4" ${ln(1.5)}/>${tx(100,82,17,nm,800)}<text x="100" y="99" text-anchor="middle" font-size="10">★ ★ ★ ★ ★</text>${em(42,124,.4)}${dt(129,14,122)}`;
 return `<svg class="stm" viewBox="0 0 200 200" style="color:${c}" role="img" aria-label="${r.n} stamp, ${ds}"><g filter="url(#ink)" fill="currentColor" font-family="Nunito,system-ui,sans-serif">${b}</g></svg>`}

/* passport book with page flip */
let bs=0,flipping=false;const PER=4,POS=[[5,12,44],[51,8,42],[7,52,42],[50,50,45]];
function pageHtml(u,p){const st=u.st.slice(p*PER,p*PER+PER);
 return `<div class="pgc"><small class="pgh">VISAS</small>${st.map((s,i)=>{const k=p*PER+i,q=POS[i];return`<div class="bs" style="left:${q[0]}%;top:${q[1]}%;width:${q[2]}%;transform:rotate(${k*47%36-18}deg)">${stamp(s.id,fd(s),"b"+k)}</div>`}).join("")}${!u.st.length&&p===0?'<p class="pge">Your first stamp will land here. Place an order to get started.</p>':""}<small class="pgn">${p+1}</small></div>`}
const pgs=u=>{const P=Math.max(2,Math.ceil(u.st.length/PER));return Math.ceil(P/2)};
function bookHtml(u,first){const S=pgs(u);bs=Math.min(bs,S-1);
 return `<div class="bkw ${first?"in":""}"><div class="spread"><div class="pg l">${pageHtml(u,bs*2)}</div><div class="pg r">${pageHtml(u,bs*2+1)}</div></div>
 <div class="bkc"><button class="btn o" data-bk="-1" ${bs===0?"disabled":""}>← Previous</button><span>Pages ${bs*2+1}–${bs*2+2} of ${S*2}</span><button class="btn o" data-bk="1" ${bs>=S-1?"disabled":""}>Next →</button></div></div>`}
const renderBook=first=>{const u=U();if(u&&$("bkroot"))$("bkroot").innerHTML=bookHtml(u,first)};
function flipBook(d){const u=U();if(!u||flipping)return;const ns=bs+d;if(ns<0||ns>=pgs(u))return;
 if(matchMedia("(prefers-reduced-motion:reduce)").matches){bs=ns;renderBook();return}
 flipping=true;const sp=document.querySelector(".spread");
 sp.innerHTML=d>0?`<div class="pg l">${pageHtml(u,bs*2)}</div><div class="pg r">${pageHtml(u,ns*2+1)}</div><div class="leaf next"><div class="pg front r">${pageHtml(u,bs*2+1)}</div><div class="pg back l">${pageHtml(u,ns*2)}</div></div>`
 :`<div class="pg l">${pageHtml(u,ns*2)}</div><div class="pg r">${pageHtml(u,bs*2+1)}</div><div class="leaf prev"><div class="pg front l">${pageHtml(u,bs*2)}</div><div class="pg back r">${pageHtml(u,ns*2+1)}</div></div>`;
 const lf=sp.querySelector(".leaf");lf.getBoundingClientRect();lf.classList.add("go");
 setTimeout(()=>{bs=ns;flipping=false;renderBook()},980)}

/* passport */
function passport(){const u=U(),v=$("v-passport");
 if(!u){v.innerHTML=`<div class="passport-page"><header class="passport-heading"><span class="passport-kicker">YOUR TABLE, YOUR TRAIL</span><h1>Your Food<br><em>Passport.</em></h1><p>A little record of everywhere delicious has taken you. Sign in to collect your stamps and keep exploring.</p><button class="btn" onclick="auth('up','c')">Start your passport <span aria-hidden="true">→</span></button></header><div class="passport-guest-card"><span class="passport-medallion" aria-hidden="true">✳</span><span class="passport-kicker">A KEEPSAKE OF GOOD TASTE</span><h2>Every visit leaves a mark.</h2><p>Collect a unique stamp each time you order. Your next favorite place is only a page away.</p></div></div>`;return}
 const n=u.st.length,tried=new Set(u.st.map(s=>s.id)).size,i=lvl(n),nx=LV[i+1],nm=s=>s.toUpperCase().replace(/[^A-Z]/g,""),my=res.filter(x=>x.user===me);
 v.innerHTML=`<div class="passport-page"><header class="passport-heading"><span class="passport-kicker">YOUR TABLE, YOUR TRAIL</span><h1>Your Food<br><em>Passport.</em></h1><p>Your personal record of good meals, new places and the flavors worth remembering.</p><div class="passport-stats"><div><b>${n}</b><span>STAMP${n===1?"":"S"} COLLECTED</span></div><div><b>${tried}</b><span>PLACES VISITED</span></div><div><b>${i<0?"Newcomer":LV[i][0]}</b><span>CURRENT RANK</span></div></div></header>
 <div class="book"><div class="cover"><div><span class="cm">🍴</span><br><small>NOMO</small><h3>WORLD<br>FOOD<br>PASSPORT</h3><small>✦ ✦ ✦</small></div></div>
 <div class="page"><div class="ph2"><b>NOMO WORLD PASSPORT</b><span>Type P · Code NMO</span></div>
 <div class="pb"><div class="pic">${esc(u.fn[0])}${esc(u.ln[0])}</div><div class="pf">
 <div><small>SURNAME</small><b>${esc(u.ln)}</b></div><div><small>GIVEN NAMES</small><b>${esc(u.fn)}</b></div><div><small>AGE</small><b>${u.ag}</b></div><div><small>SEX</small><b>${esc(u.gn)}</b></div>
 <div><small>COUNTRY OF RESIDENCE</small><b>${esc(u.co)}</b></div><div><small>RESTAURANTS TRIED</small><b>${tried}</b></div><div><small>PASSPORT NO.</small><b>${u.no}</b></div><div><small>DATE OF ISSUE</small><b>${esc(u.iss||"2026")}</b></div><div><small>LEVEL</small><b>${i<0?"Newcomer":LV[i][0]}</b></div></div></div>
 <div class="mrz2">P&lt;NMO${nm(u.ln)}&lt;&lt;${nm(u.fn)}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br>${u.no}&lt;NMO${String(u.ag).padStart(3,"0")}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div><div class="seal">VALID</div></div></div>
 <section class="passport-section"><div class="passport-section-heading"><span class="passport-kicker">LITTLE MEMENTOS</span><h2>Stamps collected</h2><p>Every order earns its own mark. Each restaurant leaves a different impression.</p></div>
 <div class="visa"><div class="stamps">${Array.from({length:25},(_,k)=>{const s=u.st[k];return s?`<div class="sst ${k===n-1?"new":""}" title="${esc(s.n)}, ${fd(s)}" style="transform:rotate(${k*53%30-15}deg)">${stamp(s.id,fd(s),"g"+k)}</div>`:`<div class="slot">${k+1}</div>`}).join("")}</div></div>
 </section><section class="passport-section"><div class="passport-section-heading"><span class="passport-kicker">BETWEEN THE COVERS</span><h2>Your passport book</h2><p>Flip through the pages to see your stamps gathered in one place.</p></div>
 <div id="bkroot">${bookHtml(u,true)}</div>
 </section><section class="passport-section"><div class="passport-section-heading"><span class="passport-kicker">YOUR NEXT MILESTONE</span><h2>Food roadmap</h2><p>${nx?`${nx[1]-n} more stamp${nx[1]-n>1?"s":""} to reach ${nx[0]}.`:"You completed the expedition."}</p></div>
 <div class="prog"><i style="width:${n/25*100}%"></i></div><div class="lv">${LV.map((l,k)=>`<div class="${k<i?"done":k===i?"now":""}"><b>${l[0]}</b><br><small>${l[1]} stamps</small></div>`).join("")}</div></section>
 <section class="passport-section"><div class="passport-section-heading"><span class="passport-kicker">THE NEXT TABLE</span><h2>Reservations</h2><p>Your upcoming and recent plans.</p></div>${my.length?my.map(x=>`<div class="rv"><b>${esc(x.rn)}</b><span>${esc(x.date)}, ${esc(x.t)} · party of ${x.sz}</span></div>`).join(""):'<p class="sub">No reservations yet. Open a restaurant menu and tap Reserve a table.</p>'}</section></div>`}

/* community */
function community(){const u=U();
 $("comp").innerHTML=u?`<div class="compose-heading"><span class="community-kicker">YOUR TASTE, YOUR WORDS</span><h2>Leave a little love note.</h2><p>Tell the next food explorer what made the meal memorable.</p></div><div class="compose-fields"><div><label for="pr">The place</label><select id="pr">${R.map(r=>`<option>${esc(r.n)}</option>`).join("")}</select></div><div><label for="pd">The dish</label><input id="pd" placeholder="What did you order?"></div><div class="compose-note"><label for="pt">The reason to go</label><textarea id="pt" rows="3" placeholder="A flavor, a moment, a detail you still think about…"></textarea></div></div><div class="compose-footer"><span>GOOD RECOMMENDATIONS DESERVE TO BE SHARED.</span><button class="btn" id="pb">Share your note <span aria-hidden="true">→</span></button></div>`:`<div class="compose-heading"><span class="community-kicker">PULL UP A CHAIR</span><h2>Good finds are better shared.</h2><p>Join the table to leave a recommendation, reply to a fellow explorer or save a favorite with a like.</p><button class="btn" onclick="auth('in')">Log in to join the table <span aria-hidden="true">→</span></button></div>`;
 $("pg").innerHTML=posts.map((p,index)=>{const on=me&&p.by.includes(me),r=R.find(x=>x.n===p.r),dishIndex=r?r.m.findIndex(m=>m[0]===p.d):0,photo=r?dishPhoto(r,p.d,Math.max(0,dishIndex)):imageUrl(FOOD_PHOTOS.greens[0],900),initials=p.u.split(/\s+/).map(x=>x[0]).slice(0,2).join("");return`<article class="community-post ${index===0?"featured":""}"><div class="community-post-photo"><img src="${photo}" alt="${esc(p.d)} at ${esc(p.r)}" loading="lazy"><span>FIELD NOTE · ${String(index+1).padStart(2,"0")}</span></div><div class="community-post-content"><div class="community-author"><span class="community-avatar" aria-hidden="true">${esc(initials)}</span><div><b>${esc(p.u)}</b><small>RECOMMENDS</small></div></div><h3>${esc(p.d)}</h3><p class="community-place">${esc(p.r)}</p><blockquote>${esc(p.t)}</blockquote>${p.re.map(r=>`<div class="rep"><b>${esc(r.u)}:</b> ${esc(r.t)}</div>`).join("")}<div class="acts"><button class="sm ${on?"on":""}" data-l="${p.id}" aria-pressed="${!!on}" aria-label="Like ${esc(p.d)} recommendation">♥ <span>${p.b+p.by.length}</span></button><button class="sm" data-r="${p.id}" aria-label="Reply to ${esc(p.u)}">Reply <span aria-hidden="true">↗</span></button></div></div></article>`}).join("");
 $("pg").querySelectorAll(".community-post-photo img").forEach(img=>img.addEventListener("error",()=>{img.closest(".community-post-photo").classList.add("image-missing");img.remove()},{once:true}))}
document.addEventListener("click",e=>{const t=e.target;
 if(t.id==="pb"){const d=$("pd").value.trim(),x=$("pt").value.trim();if(!d||!x)return toast("Add a dish and a short reason");const u=U();posts.unshift({id:Date.now(),u:u.fn+" "+u.ln[0]+".",r:$("pr").value,d,t:x,by:[],b:0,re:[]});sv("nomo_posts",posts);community();toast("Posted")}
 if(t.dataset.l){if(!me)return auth("in");const p=posts.find(p=>p.id==t.dataset.l),i=p.by.indexOf(me);i<0?p.by.push(me):p.by.splice(i,1);sv("nomo_posts",posts);community()}
 if(t.dataset.r){if(!me)return auth("in");const x=prompt("Your reply");if(x&&x.trim()){posts.find(p=>p.id==t.dataset.r).re.push({u:U().fn,t:x.trim()});sv("nomo_posts",posts);community()}}});

/* settings */
function settings(){const u=U(),v=$("v-settings");if(!u){v.innerHTML=`<div class="settings-page"><header class="settings-heading"><span class="settings-kicker">YOUR NOMO ACCOUNT</span><h1>Make yourself<br><em>at home.</em></h1><p>Sign in to review and update the details on your food passport.</p><button class="btn" onclick="auth('in')">Log in <span aria-hidden="true">→</span></button></header></div>`;return}
 const f=(id,l,val,t="text")=>`<div><label for="s${id}">${l}</label><input id="s${id}" type="${t}" value="${esc(val)}"></div>`;
 v.innerHTML=`<div class="settings-page"><header class="settings-heading"><span class="settings-kicker">YOUR NOMO ACCOUNT</span><h1>Make yourself<br><em>at home.</em></h1><p>Keep the details on your food passport up to date.</p></header><div class="settings-layout"><aside class="settings-profile"><span class="settings-avatar">${esc(u.fn[0])}${esc(u.ln[0])}</span><span class="settings-kicker">FOOD EXPLORER</span><h2>${esc(u.fn)} ${esc(u.ln)}</h2><p>${esc(u.email)}</p><a href="passport.html">View your passport <span aria-hidden="true">↗</span></a></aside><section class="settings-form"><div class="settings-form-heading"><div><span class="settings-kicker">PERSONAL DETAILS</span><h2>Your information</h2></div><span class="settings-edit-note">Changes appear on your passport</span></div><div class="f2">${f("fn","First name",u.fn)}${f("ln","Last name",u.ln)}${f("ag","Age",u.ag,"number")}<div><label for="sgn">Gender</label><select id="sgn">${["Female","Male","Non-binary","Prefer not to say"].map(g=>`<option ${g===u.gn?"selected":""}>${g}</option>`).join("")}</select></div>${f("co","Country of residence",u.co)}<div class="full"><label for="sem">Email used to sign up</label><input id="sem" value="${esc(u.email)}" readonly></div></div><p class="settings-save"><button class="btn" id="ss">Save changes <span aria-hidden="true">→</span></button></p></section></div></div>`;
 $("ss").onclick=()=>{const g=id=>$("s"+id).value.trim();if(!g("fn")||!g("ln")||!g("co")||!(+g("ag")>0))return toast("Fill in every field");Object.assign(u,{fn:g("fn"),ln:g("ln"),ag:+g("ag"),gn:$("sgn").value,co:g("co")});sv("nomo_users",users);toast("Changes saved")}}

/* scroll-driven food ring */
const ring=$("ring");
if(ring){
 const dishes=["photo-1574071318508-1cdbab80d002","photo-1563245372-f21724e3856d","photo-1603894584373-5ac82b2ae398","photo-1565299507177-b0ac66763828","photo-1512621776951-a57141f2eefd","photo-1544025162-d76694265947","photo-1540189549336-e6e99c3679fe","photo-1555126634-323283e090fa"];
 dishes.forEach((photo,i)=>{const s=document.createElement("span"),img=document.createElement("img");s.style.transform=`rotate(${i*360/dishes.length}deg) translateY(-${window.innerWidth<500?132:190}px)`;img.src=`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=240&q=78`;img.alt="";img.loading="lazy";s.appendChild(img);ring.appendChild(s)});
 let k=0;addEventListener("scroll",()=>{if(!k){k=1;requestAnimationFrame(()=>{ring.style.transform=`rotate(${scrollY*.25}deg)`;k=0})}},{passive:true});
}

const worldDestinations={
 mexico:["Oaxaca · Mexico","Oaxaca","Mole negro","A deep, slow-built sauce layered with chiles, toasted spices and a little chocolate."],
 "new-york":["New York · United States","New York","New York–style pizza","A wide, foldable slice with a crisp base, bright tomato and bubbling cheese."],
 "new-orleans":["Louisiana · United States","New Orleans","Gumbo","A slow-simmered roux with layered spice, local seafood and Creole tradition."],
 peru:["Lima · Peru","Lima","Ceviche","Fresh fish cured in citrus with ají, red onion and a bright leche de tigre."],
 senegal:["Dakar · Senegal","Dakar","Thieboudienne","Senegal's celebrated rice and fish, cooked with tomato and vegetables."],
 morocco:["Marrakech · Morocco","Marrakech","Chicken tagine","Tender chicken, preserved lemon and olives gently cooked with warm spices."],
 italy:["Campania · Italy","Naples","Pizza Margherita","A blistered Neapolitan crust, sweet tomato, milky mozzarella and basil."],
 lebanon:["Beirut · Lebanon","Beirut","Mezze & hummus","Velvety chickpea hummus, olive oil and a table made for sharing."],
 india:["Delhi · India","Delhi","Butter chicken","Tandoor-kissed chicken in a gently spiced tomato and butter sauce."],
 thailand:["Bangkok · Thailand","Bangkok","Pad Thai","Tamarind-bright noodles wok-tossed with peanuts, lime and fresh herbs."],
 "south-korea":["Seoul · South Korea","Seoul","Bibimbap","A colorful bowl of rice, seasonal vegetables, gochujang and a sizzling finish."],
 japan:["Tokyo · Japan","Tokyo","Edomae sushi","Seasoned rice and carefully prepared seafood, shaped by craft and season."],
 france:["Île-de-France · France","Paris","Butter croissant","Laminated pastry with delicate crisp layers and a tender, buttery center."]
};
const mapTrack=$("world-map-track"),mapTemplate=mapTrack?.querySelector(".world-map"),worldDetail=$("world-detail");
if(mapTrack&&mapTemplate){
 const repeat=mapTemplate.cloneNode(true);
 repeat.setAttribute("aria-hidden","true");
 repeat.querySelectorAll("button").forEach(button=>{
  const marker=document.createElement("span");
  marker.className=button.className;marker.dataset.destination=button.dataset.destination;
  marker.dataset.code=button.dataset.code;marker.style.cssText=button.style.cssText;
  marker.setAttribute("aria-hidden","true");button.replaceWith(marker);
 });
 mapTrack.appendChild(repeat);
}
const hideWorldDestination=()=>{
 if(worldDetail)worldDetail.hidden=true;
 document.querySelectorAll(".world-marker").forEach(marker=>{
  if(marker instanceof HTMLButtonElement)marker.setAttribute("aria-pressed","false");
  marker.classList.remove("is-active");
 });
};
const showWorldDestination=(button,select=false)=>{
 const place=worldDestinations[button.dataset.destination];
 if(!place)return;
 if(select)document.querySelectorAll(".world-marker").forEach(marker=>{
  const active=marker.dataset.destination===button.dataset.destination;
  if(marker instanceof HTMLButtonElement)marker.setAttribute("aria-pressed",String(active));
  marker.classList.toggle("is-active",active);
 });
 $("world-region").textContent=place[0];$("world-city").textContent=place[1];$("world-food").textContent=place[2];$("world-description").textContent=place[3];
 if(worldDetail)worldDetail.hidden=false;
};
const worldExperience=worldDetail?.closest(".world-experience");
const nearestWorldMarker=(x,y)=>{
 const globe=worldExperience?.querySelector(".world-globe"),bounds=globe?.getBoundingClientRect();
 if(!bounds)return null;
 let nearest=null,nearestDistance=Infinity;
 mapTrack?.querySelectorAll(".world-marker").forEach(marker=>{
  const rect=marker.getBoundingClientRect(),centerX=rect.left+rect.width/2,centerY=rect.top+rect.height/2;
  if(centerX<bounds.left||centerX>bounds.right||centerY<bounds.top||centerY>bounds.bottom)return;
  const distance=(centerX-x)**2+(centerY-y)**2;
  if(distance<nearestDistance){nearest=marker;nearestDistance=distance}
 });
 return nearest;
};
worldExperience?.addEventListener("pointermove",event=>{
 if(event.pointerType!=="mouse")return;
 const marker=event.target.closest(".world-marker");
 if(marker){showWorldDestination(nearestWorldMarker(event.clientX,event.clientY)||marker,true);return}
 if(event.target.closest("#world-detail")||document.activeElement?.matches(".world-marker"))return;
 hideWorldDestination();
});
worldExperience?.addEventListener("pointerleave",event=>{
 if(event.pointerType==="mouse"&&!worldExperience.contains(document.activeElement))hideWorldDestination();
});
worldExperience?.addEventListener("focusin",event=>{
 const marker=event.target.closest(".world-marker");
 if(marker)showWorldDestination(marker,true);
});
worldExperience?.addEventListener("focusout",event=>{
 if(!worldExperience.contains(event.relatedTarget))hideWorldDestination();
});
mapTrack?.addEventListener("click",event=>{
 const marker=event.target.closest(".world-marker");
 if(marker)showWorldDestination(nearestWorldMarker(event.clientX,event.clientY)||marker,true);
 else hideWorldDestination();
});

/* cart badge on load + a one-time welcome toast after a redirecting login */
cSave();
const _w=ld("nomo_welcome",null);
if(_w){sv("nomo_welcome",null);setTimeout(()=>toast("Welcome, "+_w),250)}

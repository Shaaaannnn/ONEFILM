// ONEFILM - Curated Movie Database & Storage Engine
// 220 Verified Movies across Netflix, Amazon Prime, Disney+ Hotstar, and Apple TV+

const movieDatabase = [
    // ==========================================
    // NETFLIX (55 Movies, IDs: 1 - 55)
    // ==========================================
    {
        id: 1,
        title: "Roma",
        platform: "netflix",
        genre: "drama",
        tags: ["historical", "black-and-white", "masterpiece", "emotional", "family"],
        description: "A vivid, deeply personal portrait of domestic strife and social hierarchy amidst political turmoil in 1970s Mexico City.",
        year: 2018,
        imdbRating: 7.7
    },
    {
        id: 2,
        title: "The Irishman",
        platform: "netflix",
        genre: "crime",
        tags: ["drama", "historical", "epic", "mob", "suspense"],
        description: "Hitman Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family and his role in Jimmy Hoffa's disappearance.",
        year: 2019,
        imdbRating: 7.8
    },
    {
        id: 3,
        title: "Marriage Story",
        platform: "netflix",
        genre: "drama",
        tags: ["romance", "emotional", "realistic", "bittersweet", "dialogue-driven"],
        description: "A compassionate, incisive dissection of a marriage breaking up and a family staying together across coast-to-coast custody battles.",
        year: 2019,
        imdbRating: 7.9
    },
    {
        id: 4,
        title: "Glass Onion: A Knives Out Mystery",
        platform: "netflix",
        genre: "mystery",
        tags: ["comedy", "thriller", "crime", "detective", "satire"],
        description: "World-famous detective Benoit Blanc travels to a private Greek island to peel back the layers of a murder mystery orchestrated by a tech mogul.",
        year: 2022,
        imdbRating: 7.1
    },
    {
        id: 5,
        title: "Guillermo del Toro's Pinocchio",
        platform: "netflix",
        genre: "animation",
        tags: ["fantasy", "dark", "emotional", "stop-motion", "adventure"],
        description: "A wooden puppet comes to life in 1930s fascist Italy in a stunningly reimagined, tearjerking tale of love, grief, and disobedience.",
        year: 2022,
        imdbRating: 7.6
    },
    {
        id: 6,
        title: "All Quiet on the Western Front",
        platform: "netflix",
        genre: "war",
        tags: ["historical", "action", "gritty", "survival", "anti-war"],
        description: "A young German soldier's initial romantic illusions about combat are brutally shattered by the grim realities of life in the trenches of WWI.",
        year: 2022,
        imdbRating: 7.8
    },
    {
        id: 7,
        title: "Society of the Snow",
        platform: "netflix",
        genre: "survival",
        tags: ["drama", "historical", "thriller", "inspirational", "true-story"],
        description: "In 1972, a Uruguayan rugby team's chartered flight crashes deep in the frozen Andes, forcing survivors to depend on one another against impossible odds.",
        year: 2023,
        imdbRating: 7.8
    },
    {
        id: 8,
        title: "The Power of the Dog",
        platform: "netflix",
        genre: "drama",
        tags: ["western", "psychological", "suspense", "atmospheric", "tension"],
        description: "A charismatic, menacing rancher wages psychological warfare on his brother's new wife and her teenage son in 1920s Montana.",
        year: 2021,
        imdbRating: 6.8
    },
    {
        id: 9,
        title: "Uncut Gems",
        platform: "netflix",
        genre: "thriller",
        tags: ["crime", "suspense", "hectic", "dark comedy", "intense"],
        description: "A charismatic New York jeweler makes a high-stakes bet that could lead to the windfall of a lifetime while evading relentless loan sharks.",
        year: 2019,
        imdbRating: 7.4
    },
    {
        id: 10,
        title: "The Trial of the Chicago 7",
        platform: "netflix",
        genre: "historical",
        tags: ["drama", "courtroom", "political", "true-story", "witty"],
        description: "What was intended to be a peaceful protest at the 1968 DNC turned into a violent clash with police, sparking one of history's most infamous trials.",
        year: 2020,
        imdbRating: 7.7
    },
    {
        id: 11,
        title: "Klaus",
        platform: "netflix",
        genre: "animation",
        tags: ["family", "comedy", "adventure", "heartwarming", "holiday"],
        description: "A selfish postman stationed in a frozen northern town strikes up an unlikely friendship with a reclusive toymaker, bringing joy to a bitter feud.",
        year: 2019,
        imdbRating: 8.2
    },
    {
        id: 12,
        title: "Beasts of No Nation",
        platform: "netflix",
        genre: "war",
        tags: ["drama", "gritty", "survival", "intense", "psychological"],
        description: "A young boy in an unnamed West African country is torn away from his family and forced into a fierce rebel faction led by a warlord.",
        year: 2015,
        imdbRating: 7.7
    },
    {
        id: 13,
        title: "Mank",
        platform: "netflix",
        genre: "historical",
        tags: ["drama", "biography", "black-and-white", "hollywood", "witty"],
        description: "1930s Hollywood is re-evaluated through the eyes of scathing social critic and alcoholic screenwriter Herman J. Mankiewicz as he finishes Citizen Kane.",
        year: 2020,
        imdbRating: 6.8
    },
    {
        id: 14,
        title: "The Mitchells vs. the Machines",
        platform: "netflix",
        genre: "animation",
        tags: ["sci-fi", "comedy", "family", "adventure", "quirky"],
        description: "A quirky, dysfunctional family's cross-country road trip is interrupted when the world's automated technology stages a global uprising.",
        year: 2021,
        imdbRating: 7.6
    },
    {
        id: 15,
        title: "Tick, Tick... Boom!",
        platform: "netflix",
        genre: "drama",
        tags: ["musical", "biography", "inspirational", "passionate", "artistic"],
        description: "On the cusp of turning 30, a promising theater composer navigates love, friendship, and the mounting pressure to create something extraordinary.",
        year: 2021,
        imdbRating: 7.5
    },
    {
        id: 16,
        title: "The Platform",
        platform: "netflix",
        genre: "sci-fi",
        tags: ["thriller", "horror", "psychological", "dystopian", "survival"],
        description: "Inside a vertical prison where food is lowered level by level, inmates on upper floors feast while those below are left to starve and despair.",
        year: 2019,
        imdbRating: 7.0
    },
    {
        id: 17,
        title: "His House",
        platform: "netflix",
        genre: "horror",
        tags: ["supernatural", "thriller", "psychological", "haunting", "social"],
        description: "A refugee couple makes a harrowing escape from war-torn South Sudan, only to discover a sinister presence lurking inside their assigned English home.",
        year: 2020,
        imdbRating: 6.5
    },
    {
        id: 18,
        title: "I'm Thinking of Ending Things",
        platform: "netflix",
        genre: "psychological thriller",
        tags: ["mystery", "surreal", "mind-bending", "drama", "unsettling"],
        description: "A woman travels with her new boyfriend to his parents' secluded farm, where reality, memory, and personal identity begin to unravel.",
        year: 2020,
        imdbRating: 6.6
    },
    {
        id: 19,
        title: "Okja",
        platform: "netflix",
        genre: "sci-fi",
        tags: ["adventure", "drama", "satire", "heartfelt", "action"],
        description: "A young girl risks everything to prevent a powerful multinational corporation from kidnapping her genetically engineered best friend, a gentle beast.",
        year: 2017,
        imdbRating: 7.3
    },
    {
        id: 20,
        title: "The Killer",
        platform: "netflix",
        genre: "thriller",
        tags: ["action", "crime", "neo-noir", "assassin", "suspense"],
        description: "After a fateful near-miss, an exacting assassin battles his employers and himself on an international manhunt he insists isn't personal.",
        year: 2023,
        imdbRating: 6.7
    },
    {
        id: 21,
        title: "Extraction",
        platform: "netflix",
        genre: "action",
        tags: ["thriller", "explosive", "mercenary", "gritty", "combat"],
        description: "A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord in Dhaka.",
        year: 2020,
        imdbRating: 6.8
    },
    {
        id: 22,
        title: "Extraction 2",
        platform: "netflix",
        genre: "action",
        tags: ["thriller", "combat", "intense", "rescue", "explosive"],
        description: "Back from the brink of death, commando Tyler Rake embarks on another deadly assignment to break a battered family out of a brutal Georgian prison.",
        year: 2023,
        imdbRating: 7.0
    },
    {
        id: 23,
        title: "The Meyerowitz Stories",
        platform: "netflix",
        genre: "comedy",
        tags: ["drama", "family", "witty", "indie", "dialogue-driven"],
        description: "An estranged family gathers in New York for an event celebrating the artistic retrospective of their prickly, aging sculptor patriarch.",
        year: 2017,
        imdbRating: 6.9
    },
    {
        id: 24,
        title: "Hustle",
        platform: "netflix",
        genre: "drama",
        tags: ["sports", "inspirational", "comedy", "basketball", "heartfelt"],
        description: "A down-on-his-luck basketball scout discovers an extraordinary streetball talent in Spain and sees him as his golden ticket back to the NBA.",
        year: 2022,
        imdbRating: 7.3
    },
    {
        id: 25,
        title: "Enola Holmes",
        platform: "netflix",
        genre: "mystery",
        tags: ["adventure", "comedy", "detective", "victorian", "clever"],
        description: "Sherlock Holmes' rebellious teen sister discovers her mother has vanished and uses her keen sleuthing skills to outwit both brothers and a dangerous conspiracy.",
        year: 2020,
        imdbRating: 6.7
    },
    {
        id: 26,
        title: "Dolemite Is My Name",
        platform: "netflix",
        genre: "comedy",
        tags: ["biography", "drama", "inspirational", "showbiz", "70s"],
        description: "In 1970s Los Angeles, struggling performer Rudy Ray Moore creates an outrageous kung-fu comedy alter ego that becomes an unexpected movie sensation.",
        year: 2019,
        imdbRating: 7.2
    },
    {
        id: 27,
        title: "The Disciple",
        platform: "netflix",
        genre: "drama",
        tags: ["music", "introspective", "artistic", "meditative", "cultural"],
        description: "A devoted vocalist in Mumbai dedicates his life to mastering Indian classical music, grappling with tradition, artistic compromise, and growing doubts.",
        year: 2020,
        imdbRating: 7.1
    },
    {
        id: 28,
        title: "RRR",
        platform: "netflix",
        genre: "action",
        tags: ["adventure", "historical", "epic", "friendship", "blockbuster"],
        description: "Two legendary Indian revolutionaries forge an unbreakable bond before fighting against tyrannical British colonial rule in 1920s India.",
        year: 2022,
        imdbRating: 7.8
    },
    {
        id: 29,
        title: "Ludo",
        platform: "netflix",
        genre: "dark comedy",
        tags: ["crime", "anthology", "quirky", "intertwined", "fast-paced"],
        description: "Four wildly different stories collide in unpredictable fashion around an eccentric eccentric gangster, stolen loot, and a fateful roll of the dice.",
        year: 2020,
        imdbRating: 7.6
    },
    {
        id: 30,
        title: "Minnal Murali",
        platform: "netflix",
        genre: "action",
        tags: ["superhero", "comedy", "adventure", "fantasy", "heartwarming"],
        description: "A small-town tailor gains supernatural abilities after being struck by lightning, but must protect his village when an aggrieved rival gains equal power.",
        year: 2021,
        imdbRating: 7.8
    },
    {
        id: 31,
        title: "The Wonder",
        platform: "netflix",
        genre: "mystery",
        tags: ["drama", "historical", "atmospheric", "suspense", "psychological"],
        description: "In 1862 Ireland, an English nurse is summoned to examine an 11-year-old girl who claims not to have eaten for four months yet remains healthy.",
        year: 2022,
        imdbRating: 6.6
    },
    {
        id: 32,
        title: "The Pale Blue Eye",
        platform: "netflix",
        genre: "mystery",
        tags: ["gothic", "crime", "historical", "detective", "suspense"],
        description: "A seasoned veteran detective investigates a grotesque murder at West Point in 1830 with the clandestine assistance of cadet Edgar Allan Poe.",
        year: 2022,
        imdbRating: 6.6
    },
    {
        id: 33,
        title: "Calibre",
        platform: "netflix",
        genre: "thriller",
        tags: ["suspense", "moral-dilemma", "tense", "isolated", "gritty"],
        description: "Two lifelong friends on a hunting trip in the Scottish Highlands commit a horrific, tragic accident and must navigate the paranoid local community.",
        year: 2018,
        imdbRating: 6.8
    },
    {
        id: 34,
        title: "The Stranger",
        platform: "netflix",
        genre: "crime",
        tags: ["thriller", "undercover", "dark", "tense", "psychological"],
        description: "An undercover Australian police officer forms an intense, deceptive bond with a murder suspect in hopes of eliciting a crucial confession.",
        year: 2022,
        imdbRating: 6.6
    },
    {
        id: 35,
        title: "Apollo 10½: A Space Age Childhood",
        platform: "netflix",
        genre: "animation",
        tags: ["sci-fi", "nostalgia", "coming-of-age", "historical", "whimsical"],
        description: "A man narrates his fantastical memories of growing up in 1969 Houston during the height of the Apollo space program.",
        year: 2022,
        imdbRating: 7.2
    },
    {
        id: 36,
        title: "Nimona",
        platform: "netflix",
        genre: "animation",
        tags: ["fantasy", "comedy", "adventure", "sci-fi", "rebellious"],
        description: "A knight framed for a crime he didn't commit teams up with a mischievous, shapeshifting teen to clear his name in a techno-medieval kingdom.",
        year: 2023,
        imdbRating: 7.5
    },
    {
        id: 37,
        title: "Leave the World Behind",
        platform: "netflix",
        genre: "psychological thriller",
        tags: ["mystery", "apocalyptic", "suspense", "cyber", "tense"],
        description: "A family vacation on Long Island is disrupted by two strangers bringing news of a mysterious blackout, as ominous societal collapses escalate.",
        year: 2023,
        imdbRating: 6.5
    },
    {
        id: 38,
        title: "Fair Play",
        platform: "netflix",
        genre: "thriller",
        tags: ["drama", "psychological", "finance", "workplace", "relationship"],
        description: "An unexpected promotion at a cutthroat hedge fund pushes a young, covertly engaged couple's relationship toward destructive paranoia.",
        year: 2023,
        imdbRating: 6.4
    },
    {
        id: 39,
        title: "Hit Man",
        platform: "netflix",
        genre: "comedy",
        tags: ["crime", "romance", "thriller", "clever", "neo-noir"],
        description: "A mild-mannered philosophy professor poses as an undercover hitman for police, but breaks protocol to protect a desperate client he falls for.",
        year: 2023,
        imdbRating: 7.1
    },
    {
        id: 40,
        title: "Rebel Ridge",
        platform: "netflix",
        genre: "thriller",
        tags: ["action", "crime", "justice", "suspense", "tactical"],
        description: "An ex-Marine confronts systemic corruption in a small American town after local cops unjustifiably seize the bail money meant for his cousin.",
        year: 2024,
        imdbRating: 6.9
    },
    {
        id: 41,
        title: "May December",
        platform: "netflix",
        genre: "drama",
        tags: ["psychological", "dark comedy", "candid", "provocative", "taboo"],
        description: "Twenty years after their notorious tabloid romance gripped the nation, a married couple buckles under pressure when an actress arrives to study them.",
        year: 2023,
        imdbRating: 6.8
    },
    {
        id: 42,
        title: "Midnight Diner: The Movie",
        platform: "netflix",
        genre: "drama",
        tags: ["heartwarming", "food", "comfort", "slice-of-life", "dialogue-driven"],
        description: "At a humble shinjuku alley restaurant open only from midnight to dawn, a scarred chef feeds and counsels patrons carrying personal heartache.",
        year: 2015,
        imdbRating: 7.8
    },
    {
        id: 43,
        title: "I Lost My Body",
        platform: "netflix",
        genre: "animation",
        tags: ["fantasy", "poetic", "drama", "romance", "artistic"],
        description: "A severed hand escapes from a laboratory in Paris and embarks on a perilous urban odyssey to reunite with the body of the young pizza courier it belongs to.",
        year: 2019,
        imdbRating: 7.5
    },
    {
        id: 44,
        title: "The Two Popes",
        platform: "netflix",
        genre: "drama",
        tags: ["historical", "biography", "dialogue-driven", "philosophical", "warm"],
        description: "Behind Vatican walls, conservative Pope Benedict XVI and future progressive Pope Francis debate the turbulent future of the Catholic Church.",
        year: 2019,
        imdbRating: 7.6
    },
    {
        id: 45,
        title: "13th",
        platform: "netflix",
        genre: "documentary",
        tags: ["historical", "social", "political", "eye-opening", "investigative"],
        description: "Ava DuVernay examines the 13th Amendment and how the criminal justice system has driven mass incarceration in the United States.",
        year: 2016,
        imdbRating: 8.2
    },
    {
        id: 46,
        title: "American Factory",
        platform: "netflix",
        genre: "documentary",
        tags: ["social", "culture-clash", "workplace", "economic", "candid"],
        description: "Hopes soar when a Chinese billionaire reopens a shuttered Ohio auto plant, but cultural friction soon threatens the American working-class dream.",
        year: 2019,
        imdbRating: 7.4
    },
    {
        id: 47,
        title: "My Octopus Teacher",
        platform: "netflix",
        genre: "documentary",
        tags: ["nature", "emotional", "ocean", "breathtaking", "healing"],
        description: "A burned-out filmmaker forms an unforgettable, year-long kinship with a wild octopus living in a South African kelp forest.",
        year: 2020,
        imdbRating: 8.1
    },
    {
        id: 48,
        title: "Shirkers",
        platform: "netflix",
        genre: "documentary",
        tags: ["mystery", "nostalgia", "artistic", "indie", "cinephile"],
        description: "Decades after shooting a pioneering indie film in Singapore that was stolen by their enigmatic mentor, the director recovers the silent footage.",
        year: 2018,
        imdbRating: 7.3
    },
    {
        id: 49,
        title: "The Devil All the Time",
        platform: "netflix",
        genre: "psychological thriller",
        tags: ["crime", "dark", "southern-gothic", "drama", "intense"],
        description: "Sinister characters converge around a devoted young man fighting to protect those he loves in a corrupt post-WWII backwoods Ohio town.",
        year: 2020,
        imdbRating: 7.1
    },
    {
        id: 50,
        title: "Gerald's Game",
        platform: "netflix",
        genre: "horror",
        tags: ["survival", "psychological", "suspense", "trauma", "isolated"],
        description: "When her husband's sex game goes fatally wrong in an isolated lake house, a handcuffed woman confronts real and hallucinated terrors.",
        year: 2017,
        imdbRating: 6.5
    },
    {
        id: 51,
        title: "Creep",
        platform: "netflix",
        genre: "horror",
        tags: ["psychological", "found-footage", "unsettling", "dark comedy", "minimalist"],
        description: "A cash-strapped videographer answers an online ad to record the final days of an eccentric dying man, but the assignment grows increasingly terrifying.",
        year: 2014,
        imdbRating: 6.3
    },
    {
        id: 52,
        title: "The King",
        platform: "netflix",
        genre: "historical",
        tags: ["drama", "war", "medieval", "epic", "political"],
        description: "Reluctant prince Hal ascends the English throne as Henry V and must navigate palace treachery, war with France, and his tumultuous past.",
        year: 2019,
        imdbRating: 7.3
    },
    {
        id: 53,
        title: "Mudbound",
        platform: "netflix",
        genre: "historical",
        tags: ["drama", "racial", "post-war", "poignant", "rural"],
        description: "Two WWII veterans—one Black, one white—return to rural Mississippi to face the harsh realities of farm life, racism, and lingering battle trauma.",
        year: 2017,
        imdbRating: 7.4
    },
    {
        id: 54,
        title: "Set It Up",
        platform: "netflix",
        genre: "romance",
        tags: ["comedy", "workplace", "feel-good", "charming", "witty"],
        description: "Two overworked, underpaid executive assistants in New York hatch a scheme to trick their demanding bosses into falling in love with each other.",
        year: 2018,
        imdbRating: 6.5
    },
    {
        id: 55,
        title: "Private Life",
        platform: "netflix",
        genre: "comedy",
        tags: ["drama", "marriage", "heartfelt", "indie", "realistic"],
        description: "A middle-aged Manhattan couple navigates the agonizing, darkly funny world of fertility treatments and adoption while struggling to preserve their marriage.",
        year: 2018,
        imdbRating: 7.2
    },

    // ==========================================
    // AMAZON PRIME VIDEO (55 Movies, IDs: 56 - 110)
    // ==========================================
    {
        id: 56,
        title: "Sound of Metal",
        platform: "amazon",
        genre: "drama",
        tags: ["music", "emotional", "overcoming", "sound-design", "acclaimed"],
        description: "A heavy-metal drummer's life is thrown into sudden turmoil when he abruptly begins to lose his hearing on a nationwide tour.",
        year: 2019,
        imdbRating: 7.7
    },
    {
        id: 57,
        title: "Manchester by the Sea",
        platform: "amazon",
        genre: "drama",
        tags: ["tragedy", "grief", "emotional", "family", "heartbreaking"],
        description: "A grief-stricken janitor is thrust into the role of sole guardian for his teenage nephew following his older brother's untimely death.",
        year: 2016,
        imdbRating: 7.8
    },
    {
        id: 58,
        title: "The Vast of Night",
        platform: "amazon",
        genre: "sci-fi",
        tags: ["mystery", "retro", "dialogue-driven", "atmospheric", "suspense"],
        description: "In 1950s New Mexico, a switchboard operator and a charismatic radio DJ uncover an eerie audio frequency that hints at extraterrestrial life.",
        year: 2019,
        imdbRating: 6.7
    },
    {
        id: 59,
        title: "One Night in Miami...",
        platform: "amazon",
        genre: "historical",
        tags: ["drama", "intellectual", "civil-rights", "dialogue-driven", "inspiring"],
        description: "In February 1964, Cassius Clay, Malcolm X, Sam Cooke, and Jim Brown gather in a hotel room to debate their roles in the civil rights movement.",
        year: 2020,
        imdbRating: 7.1
    },
    {
        id: 60,
        title: "The Big Sick",
        platform: "amazon",
        genre: "romance",
        tags: ["comedy", "culture-clash", "heartwarming", "true-story", "drama"],
        description: "A Pakistani-born stand-up comedian falls for a grad student, navigating cultural expectations and a sudden medical coma that bonds him with her parents.",
        year: 2017,
        imdbRating: 7.5
    },
    {
        id: 61,
        title: "Paterson",
        platform: "amazon",
        genre: "drama",
        tags: ["poetic", "peaceful", "slice-of-life", "contemplative", "quiet"],
        description: "A quiet, observant bus driver in Paterson, New Jersey, lives a routine life while channeling everyday observations into exquisite poetry.",
        year: 2016,
        imdbRating: 7.3
    },
    {
        id: 62,
        title: "Cold War",
        platform: "amazon",
        genre: "romance",
        tags: ["historical", "drama", "black-and-white", "musical", "tragic"],
        description: "A passionate musical director and a spirited young singer fall in love in post-war Poland, bounded by politics, cold war borders, and destiny.",
        year: 2018,
        imdbRating: 7.5
    },
    {
        id: 63,
        title: "The Handmaiden",
        platform: "amazon",
        genre: "psychological thriller",
        tags: ["crime", "plot-twist", "erotic", "korean", "masterpiece"],
        description: "In 1930s colonial Korea, a pickpocket is hired as handmaiden to a Japanese heiress as part of an elaborate con, but unexpected passions ignite.",
        year: 2016,
        imdbRating: 8.1
    },
    {
        id: 64,
        title: "The Salesman",
        platform: "amazon",
        genre: "drama",
        tags: ["suspense", "moral-dilemma", "iranian", "psychological", "intense"],
        description: "After his wife is assaulted in their new Tehran flat, a high school teacher and theater actor launches his own desperate quest for vengeance.",
        year: 2016,
        imdbRating: 7.7
    },
    {
        id: 65,
        title: "Air",
        platform: "amazon",
        genre: "drama",
        tags: ["historical", "sports", "business", "biography", "entertaining"],
        description: "In 1984, an ambitious Nike basketball scout bets his entire career on signing an unproven rookie named Michael Jordan to a groundbreaking shoe deal.",
        year: 2023,
        imdbRating: 7.4
    },
    {
        id: 66,
        title: "American Fiction",
        platform: "amazon",
        genre: "comedy",
        tags: ["satire", "drama", "literature", "sharp", "family"],
        description: "A frustrated African American professor and author writes an outrageous parody novel under a pen name, only for it to become an enormous cultural hit.",
        year: 2023,
        imdbRating: 7.5
    },
    {
        id: 67,
        title: "Borat Subsequent Moviefilm",
        platform: "amazon",
        genre: "comedy",
        tags: ["satire", "mockumentary", "outrageous", "political", "unfiltered"],
        description: "Kazakh journalist Borat Sagdiyev returns to the United States to deliver a bribe to American officials, inadvertently exposing cultural absurdities.",
        year: 2020,
        imdbRating: 6.6
    },
    {
        id: 68,
        title: "Sylvie's Love",
        platform: "amazon",
        genre: "romance",
        tags: ["drama", "jazz", "period-piece", "sweet", "passionate"],
        description: "A young woman working in her father's Harlem record store falls for an aspiring jazz saxophonist, embarking on a romance that spans decades.",
        year: 2020,
        imdbRating: 6.8
    },
    {
        id: 69,
        title: "Argentina, 1985",
        platform: "amazon",
        genre: "historical",
        tags: ["courtroom", "drama", "democracy", "true-story", "inspirational"],
        description: "A daring legal team of young lawyers prosecutes Argentina's ruthless military dictators in a high-stakes, historic 1985 trial.",
        year: 2022,
        imdbRating: 7.6
    },
    {
        id: 70,
        title: "Thirteen Lives",
        platform: "amazon",
        genre: "survival",
        tags: ["drama", "cave-rescue", "suspense", "true-story", "teamwork"],
        description: "The harrowing true story of the 2018 Tham Luang cave rescue, where volunteer divers brave flooded subterranean labyrinths to save a trapped soccer team.",
        year: 2022,
        imdbRating: 7.7
    },
    {
        id: 71,
        title: "The Report",
        platform: "amazon",
        genre: "thriller",
        tags: ["political", "investigation", "whistleblower", "drama", "historical"],
        description: "An idealistic Senate staffer leads a painstaking multi-year investigation into the CIA's post-9/11 detention and interrogation techniques.",
        year: 2019,
        imdbRating: 7.2
    },
    {
        id: 72,
        title: "Palm Springs",
        platform: "amazon",
        genre: "sci-fi",
        tags: ["comedy", "romance", "time-loop", "existential", "desert"],
        description: "Two wedding guests find themselves stuck in an endless time loop in Palm Springs, bonding over their bizarre shared existential predicament.",
        year: 2020,
        imdbRating: 7.4
    },
    {
        id: 73,
        title: "Annette",
        platform: "amazon",
        genre: "musical",
        tags: ["drama", "art-house", "surreal", "provocative", "opera"],
        description: "A provocative stand-up comedian and a world-renowned soprano welcome a mysterious, gifted daughter whose birth transforms their glamorous lives.",
        year: 2021,
        imdbRating: 6.3
    },
    {
        id: 74,
        title: "Suspiria",
        platform: "amazon",
        genre: "horror",
        tags: ["supernatural", "dance", "occult", "atmospheric", "gore"],
        description: "A young American dancer auditions for a prestigious dance company in 1970s divided Berlin, uncovering sinister occult rituals at its core.",
        year: 2018,
        imdbRating: 6.7
    },
    {
        id: 75,
        title: "Bones and All",
        platform: "amazon",
        genre: "horror",
        tags: ["romance", "road-trip", "tender", "dark", "coming-of-age"],
        description: "Two disenfranchised young cannibals embark on a thousand-mile odyssey through the backroads of Reagan-era America searching for belonging.",
        year: 2022,
        imdbRating: 6.8
    },
    {
        id: 76,
        title: "Beautiful Boy",
        platform: "amazon",
        genre: "drama",
        tags: ["biography", "family", "emotional", "addiction", "father-son"],
        description: "Based on memoirs by father and son David and Nic Sheff, chronicling the heartbreaking, relentless cycle of addiction and unconditional familial love.",
        year: 2018,
        imdbRating: 7.4
    },
    {
        id: 77,
        title: "You Were Never Really Here",
        platform: "amazon",
        genre: "psychological thriller",
        tags: ["crime", "trauma", "neo-noir", "intense", "vigilante"],
        description: "A traumatized veteran who tracks down missing girls triggers a deadly conspiracy when a rescue in a high-class Manhattan brothel goes awry.",
        year: 2017,
        imdbRating: 6.7
    },
    {
        id: 78,
        title: "Good Night Oppy",
        platform: "amazon",
        genre: "documentary",
        tags: ["space", "science", "mars", "inspirational", "emotional"],
        description: "The inspiring true story of Opportunity, a Mars exploration rover affectionately nicknamed Oppy that was expected to survive 90 days but explored for 15 years.",
        year: 2022,
        imdbRating: 7.7
    },
    {
        id: 79,
        title: "Val",
        platform: "amazon",
        genre: "documentary",
        tags: ["biography", "hollywood", "nostalgic", "intimate", "cinema"],
        description: "Iconic actor Val Kilmer shares thousands of hours of personal home video footage documenting his life, celebrated roles, and fight against throat cancer.",
        year: 2021,
        imdbRating: 7.6
    },
    {
        id: 80,
        title: "The Lost City of Z",
        platform: "amazon",
        genre: "adventure",
        tags: ["biography", "historical", "jungle", "obsession", "epic"],
        description: "British explorer Percy Fawcett journeys into the Amazon wilderness in the early 20th century, determined to find evidence of an advanced civilization.",
        year: 2016,
        imdbRating: 6.6
    },
    {
        id: 81,
        title: "I'm Your Woman",
        platform: "amazon",
        genre: "crime",
        tags: ["drama", "70s", "motherhood", "tension", "underworld"],
        description: "In the 1970s, a mother and her baby are forced on the run after her criminal husband betrays his lethal mob partners.",
        year: 2020,
        imdbRating: 6.2
    },
    {
        id: 82,
        title: "Late Night",
        platform: "amazon",
        genre: "comedy",
        tags: ["workplace", "witty", "television", "drama", "feminism"],
        description: "A legendary late-night talk show host facing cancellation hires her first female staff writer to breathe new life into her stale program.",
        year: 2019,
        imdbRating: 6.5
    },
    {
        id: 83,
        title: "Emergency",
        platform: "amazon",
        genre: "dark comedy",
        tags: ["thriller", "satire", "racial", "college", "suspense"],
        description: "Three college students ready for legendary partying find an unconscious stranger in their room and must weigh fear of police over moral duty.",
        year: 2022,
        imdbRating: 6.6
    },
    {
        id: 84,
        title: "Nanny",
        platform: "amazon",
        genre: "psychological thriller",
        tags: ["horror", "folklore", "immigrant", "haunting", "atmospheric"],
        description: "An undocumented Senegalese immigrant caring for the child of an affluent Upper East Side couple encounters an ominous aquatic presence.",
        year: 2022,
        imdbRating: 5.4
    },
    {
        id: 85,
        title: "Guy Ritchie's The Covenant",
        platform: "amazon",
        genre: "war",
        tags: ["action", "thriller", "brotherhood", "rescue", "suspense"],
        description: "An American army sergeant returns to war-torn Afghanistan to rescue the heroic local interpreter who saved his life from enemy ambush.",
        year: 2023,
        imdbRating: 7.5
    },
    {
        id: 86,
        title: "Saltburn",
        platform: "amazon",
        genre: "psychological thriller",
        tags: ["dark comedy", "obsession", "aristocracy", "twisted", "drama"],
        description: "An Oxford student is invited to spend the summer at an eccentric aristocratic classmate's sprawling estate, sparking an escalating web of obsession.",
        year: 2023,
        imdbRating: 7.0
    },
    {
        id: 87,
        title: "The Idea of You",
        platform: "amazon",
        genre: "romance",
        tags: ["comedy", "celebrity", "drama", "charming", "modern"],
        description: "A 40-year-old single mother takes her daughter to Coachella and sparks an unexpected romance with the 24-year-old lead singer of a boy band.",
        year: 2024,
        imdbRating: 6.4
    },
    {
        id: 88,
        title: "Jai Bhim",
        platform: "amazon",
        genre: "crime",
        tags: ["courtroom", "drama", "social-justice", "riveting", "true-story"],
        description: "A courageous human rights lawyer takes on the state police department to seek justice for an impoverished tribal woman whose husband vanished in custody.",
        year: 2021,
        imdbRating: 8.7
    },
    {
        id: 89,
        title: "Sardar Udham",
        platform: "amazon",
        genre: "historical",
        tags: ["biography", "drama", "freedom-fighter", "masterpiece", "epic"],
        description: "An intense biographical chronicle of Indian revolutionary Udham Singh, who spent two decades tracking down the architect of the 1919 Jallianwala Bagh massacre.",
        year: 2021,
        imdbRating: 8.4
    },
    {
        id: 90,
        title: "Kumbalangi Nights",
        platform: "amazon",
        genre: "drama",
        tags: ["family", "heartwarming", "coming-of-age", "slice-of-life", "comedy"],
        description: "Four hyper-dysfunctional brothers living in a dilapidated fisherman's shack in Kerala navigate fractured relationships, romance, and shared healing.",
        year: 2019,
        imdbRating: 8.5
    },
    {
        id: 91,
        title: "Tumbbad",
        platform: "amazon",
        genre: "horror",
        tags: ["mythology", "fantasy", "greed", "period", "atmospheric"],
        description: "In early 20th-century rural Maharashtra, three generations of a cursed family succumb to destructive greed as they hoard gold from a demonic deity.",
        year: 2018,
        imdbRating: 8.2
    },
    {
        id: 92,
        title: "Joji",
        platform: "amazon",
        genre: "crime",
        tags: ["drama", "dark", "macbeth", "psychological", "family"],
        description: "An engineering dropout and the youngest son of a tyrannical plantation patriarch seizes a dark opportunity when an illness incapacitates his father.",
        year: 2021,
        imdbRating: 7.8
    },
    {
        id: 93,
        title: "C/o Kancharapalem",
        platform: "amazon",
        genre: "romance",
        tags: ["drama", "anthology", "realistic", "poignant", "heartwarming"],
        description: "Four heartwarming, unconventionally touching love stories across different ages and faiths play out in a tight-knit coastal Andhra neighborhood.",
        year: 2018,
        imdbRating: 8.8
    },
    {
        id: 94,
        title: "Soorarai Pottru",
        platform: "amazon",
        genre: "drama",
        tags: ["biography", "inspirational", "aviation", "perseverance", "emotional"],
        description: "Inspired by the life of Captain G. R. Gopinath, a visionary former air force captain battles bureaucratic giants to make flying affordable for common citizens.",
        year: 2020,
        imdbRating: 8.7
    },
    {
        id: 95,
        title: "Kaithi",
        platform: "amazon",
        genre: "action",
        tags: ["thriller", "suspense", "night-long", "unrelenting", "heroic"],
        description: "A freshly released convict desperate to meet his daughter is commandeered by police to drive a truck of drugged officers through a hostile drug cartel ambush.",
        year: 2019,
        imdbRating: 8.4
    },
    {
        id: 96,
        title: "Drishyam 2",
        platform: "amazon",
        genre: "thriller",
        tags: ["crime", "mystery", "suspense", "family", "clever"],
        description: "Six years after covering up an accidental killing, Georgekutty must outwit a relentless new police probe determined to dig up buried secrets.",
        year: 2021,
        imdbRating: 8.3
    },
    {
        id: 97,
        title: "Master",
        platform: "amazon",
        genre: "action",
        tags: ["thriller", "drama", "combat", "clash", "intense"],
        description: "An alcoholic college professor is assigned to a juvenile correctional facility where he clashes with a ruthless gangster using kids for criminal rackets.",
        year: 2021,
        imdbRating: 7.8
    },
    {
        id: 98,
        title: "The Electrical Life of Louis Wain",
        platform: "amazon",
        genre: "historical",
        tags: ["biography", "drama", "eccentric", "cats", "love"],
        description: "The whimsical, bittersweet life of English artist Louis Wain, whose playful paintings of wide-eyed anthropomorphic cats transformed Victorian society.",
        year: 2021,
        imdbRating: 6.8
    },
    {
        id: 99,
        title: "Evangelion: 3.0+1.0 Thrice Upon a Time",
        platform: "amazon",
        genre: "animation",
        tags: ["sci-fi", "action", "mecha", "psychological", "epic"],
        description: "In the epic conclusion of the Rebuild of Evangelion saga, Shinji Ikari confronts the trauma of his past to determine the final fate of humanity.",
        year: 2021,
        imdbRating: 8.0
    },
    {
        id: 100,
        title: "Brittany Runs a Marathon",
        platform: "amazon",
        genre: "comedy",
        tags: ["drama", "fitness", "self-discovery", "uplifting", "relatable"],
        description: "A hard-partying 28-year-old New Yorker is forced by a doctor's checkup to lace up her sneakers, eventually training to run the NYC Marathon.",
        year: 2019,
        imdbRating: 6.8
    },
    {
        id: 101,
        title: "Time",
        platform: "amazon",
        genre: "documentary",
        tags: ["social", "incarceration", "family", "justice", "devotion"],
        description: "Fox Rich fights tirelessly for over two decades for the release of her husband, who is serving a 60-year prison sentence for an armed robbery.",
        year: 2020,
        imdbRating: 6.8
    },
    {
        id: 102,
        title: "All the Old Knives",
        platform: "amazon",
        genre: "thriller",
        tags: ["espionage", "mystery", "romance", "interrogation", "suspense"],
        description: "Two former lovers and CIA operatives reunite at a quiet dinner to unpack a disastrous terrorist hijacking, seeking to uncover a fatal mole.",
        year: 2022,
        imdbRating: 6.2
    },
    {
        id: 103,
        title: "Catherine Called Birdy",
        platform: "amazon",
        genre: "adventure",
        tags: ["comedy", "medieval", "coming-of-age", "feminist", "witty"],
        description: "In 13th-century England, a fiercely independent teenage girl devises hilarious, chaotic tricks to ward off suitors arranged by her broke father.",
        year: 2022,
        imdbRating: 6.6
    },
    {
        id: 104,
        title: "Cassandro",
        platform: "amazon",
        genre: "drama",
        tags: ["biography", "wrestling", "uplifting", "inspirational", "sports"],
        description: "The true story of Saúl Armendáriz, a gay amateur wrestler from El Paso who creates the fabulous exótico character Cassandro, shattering lucha libre traditions.",
        year: 2023,
        imdbRating: 6.6
    },
    {
        id: 105,
        title: "Totally Killer",
        platform: "amazon",
        genre: "horror",
        tags: ["comedy", "slasher", "time-travel", "80s", "sci-fi"],
        description: "Thirty-five years after the infamous Sweet Sixteen murders, the killer returns, prompting a rebellious teen to accidentally travel back in time to 1987.",
        year: 2023,
        imdbRating: 6.5
    },
    {
        id: 106,
        title: "The Tomorrow War",
        platform: "amazon",
        genre: "sci-fi",
        tags: ["action", "alien", "time-travel", "survival", "explosive"],
        description: "Time travelers arrive from the year 2051 to deliver an urgent warning: humanity is losing a global war against a deadly alien species.",
        year: 2021,
        imdbRating: 6.6
    },
    {
        id: 107,
        title: "The Burial",
        platform: "amazon",
        genre: "drama",
        tags: ["courtroom", "legal", "comedy", "underdog", "true-story"],
        description: "A charismatic personal injury lawyer teams up with a bankrupt funeral home owner in a massive David-and-Goliath civil lawsuit against a corporate giant.",
        year: 2023,
        imdbRating: 7.1
    },
    {
        id: 108,
        title: "Honey Boy",
        platform: "amazon",
        genre: "drama",
        tags: ["autobiographical", "father-son", "healing", "raw", "indie"],
        description: "Written by Shia LaBeouf as therapeutic rehab, a rising young actor reflects on his stormy childhood and fraught relationship with his ex-rodeo clown father.",
        year: 2019,
        imdbRating: 7.3
    },
    {
        id: 109,
        title: "Love & Friendship",
        platform: "amazon",
        genre: "comedy",
        tags: ["historical", "period-piece", "witty", "satire", "scheming"],
        description: "Delightfully manipulative widow Lady Susan Vernon uses razor-sharp wit and shameless tactics to secure wealthy husbands for herself and her daughter.",
        year: 2016,
        imdbRating: 6.4
    },
    {
        id: 110,
        title: "Bottoms",
        platform: "amazon",
        genre: "comedy",
        tags: ["satire", "high-school", "chaotic", "dark comedy", "rebellious"],
        description: "Two unpopular queer high school seniors launch a female fight club under the guise of female empowerment to impress attractive cheerleaders.",
        year: 2023,
        imdbRating: 6.7
    },

    // ==========================================
    // DISNEY+ HOTSTAR (55 Movies, IDs: 111 - 165)
    // ==========================================
    {
        id: 111,
        title: "Nomadland",
        platform: "hotstar",
        genre: "drama",
        tags: ["wanderlust", "contemplative", "american-west", "oscar-winner", "gentle"],
        description: "Following the economic collapse of a Nevada company town, a woman in her sixties packs her van and sets off on the road as a modern-day nomad.",
        year: 2020,
        imdbRating: 7.3
    },
    {
        id: 112,
        title: "Free Solo",
        platform: "hotstar",
        genre: "documentary",
        tags: ["extreme-sports", "climbing", "adventure", "vertigo", "gripping"],
        description: "Follow climber Alex Honnold as he attempts the unthinkable: scaling the 3,000-foot vertical rock face of Yosemite's El Capitan without any ropes.",
        year: 2018,
        imdbRating: 8.1
    },
    {
        id: 113,
        title: "Summer of Soul",
        platform: "hotstar",
        genre: "documentary",
        tags: ["music", "concert", "historical", "harlem", "joyful"],
        description: "A revelatory celebration of the legendary 1969 Harlem Cultural Festival, unearthing long-lost concert footage of Stevie Wonder, Nina Simone, and Sly Stone.",
        year: 2021,
        imdbRating: 8.0
    },
    {
        id: 114,
        title: "The Banshees of Inisherin",
        platform: "hotstar",
        genre: "dark comedy",
        tags: ["drama", "friendship", "irish", "tragedy", "existential"],
        description: "On a remote Irish island, two lifelong friends reach an impasse when one abruptly terminates their friendship, with shocking consequences for both.",
        year: 2022,
        imdbRating: 7.7
    },
    {
        id: 115,
        title: "Poor Things",
        platform: "hotstar",
        genre: "fantasy",
        tags: ["sci-fi", "dark comedy", "surreal", "feminist", "philosophical"],
        description: "The incredible tale and fantastical evolution of Bella Baxter, a young Victorian woman brought back to life by an unorthodox scientist.",
        year: 2023,
        imdbRating: 7.9
    },
    {
        id: 116,
        title: "All of Us Strangers",
        platform: "hotstar",
        genre: "supernatural",
        tags: ["drama", "romance", "grief", "poignant", "hauntingly-beautiful"],
        description: "A lonely screenwriter living in London meets a mysterious neighbor, while inexplicably finding his long-deceased parents living as they were thirty years ago.",
        year: 2023,
        imdbRating: 7.6
    },
    {
        id: 117,
        title: "The Grand Budapest Hotel",
        platform: "hotstar",
        genre: "comedy",
        tags: ["adventure", "crime", "stylish", "visual-treat", "quirky"],
        description: "The adventures of Gustave H, a legendary concierge at a famous European hotel, and Zero Moustafa, the lobby boy who becomes his trusted protégé.",
        year: 2014,
        imdbRating: 8.1
    },
    {
        id: 118,
        title: "Jojo Rabbit",
        platform: "hotstar",
        genre: "dark comedy",
        tags: ["satire", "war", "heartwarming", "coming-of-age", "historical"],
        description: "A lonely German boy in WWII has his world view turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic.",
        year: 2019,
        imdbRating: 7.9
    },
    {
        id: 119,
        title: "The Shape of Water",
        platform: "hotstar",
        genre: "fantasy",
        tags: ["romance", "drama", "cold-war", "creature", "fairy-tale"],
        description: "At a secret government facility in 1962 Baltimore, a mute cleaning woman forms an extraordinary bond with an amphibious humanoid captive.",
        year: 2017,
        imdbRating: 7.3
    },
    {
        id: 120,
        title: "Soul",
        platform: "hotstar",
        genre: "animation",
        tags: ["fantasy", "jazz", "existential", "family", "inspirational"],
        description: "A middle-school music teacher who dreams of playing jazz finally gets his big break, only to suffer an accident that sends his soul to the Great Before.",
        year: 2020,
        imdbRating: 8.0
    },
    {
        id: 121,
        title: "Coco",
        platform: "hotstar",
        genre: "animation",
        tags: ["music", "family", "day-of-the-dead", "adventure", "tearjerker"],
        description: "Aspiring young musician Miguel confronts his family's ancestral ban on music and enters the vibrant Land of the Dead to unlock his great-grandfather's legacy.",
        year: 2017,
        imdbRating: 8.4
    },
    {
        id: 122,
        title: "Inside Out",
        platform: "hotstar",
        genre: "animation",
        tags: ["family", "emotional", "psychology", "creative", "coming-of-age"],
        description: "Inside the mind of 11-year-old Riley, personified emotions Joy, Sadness, Anger, Fear, and Disgust struggle to steer her through a difficult cross-country move.",
        year: 2015,
        imdbRating: 8.1
    },
    {
        id: 123,
        title: "Turning Red",
        platform: "hotstar",
        genre: "animation",
        tags: ["comedy", "coming-of-age", "family", "friendship", "nostalgic"],
        description: "A confident, dorky 13-year-old Chinese-Canadian girl suddenly poofs into a giant red panda whenever she gets too excited or stressed.",
        year: 2022,
        imdbRating: 7.0
    },
    {
        id: 124,
        title: "Hamilton",
        platform: "hotstar",
        genre: "musical",
        tags: ["historical", "broadway", "biography", "hip-hop", "electrifying"],
        description: "An unforgettable live stage recording of Lin-Manuel Miranda's groundbreaking musical tracking the meteoric rise and tragic fall of Alexander Hamilton.",
        year: 2020,
        imdbRating: 8.3
    },
    {
        id: 125,
        title: "Ford v Ferrari",
        platform: "hotstar",
        genre: "historical",
        tags: ["drama", "sports", "racing", "friendship", "adrenaline"],
        description: "American car designer Carroll Shelby and fearless British driver Ken Miles battle corporate interference to build a revolutionary race car for Le Mans 1966.",
        year: 2019,
        imdbRating: 8.1
    },
    {
        id: 126,
        title: "The Menu",
        platform: "hotstar",
        genre: "dark comedy",
        tags: ["thriller", "satire", "mystery", "fine-dining", "suspense"],
        description: "A young couple travels to a remote island to eat at an exclusive restaurant where an enigmatic celebrity chef has prepared an opulent and lethal menu.",
        year: 2022,
        imdbRating: 7.2
    },
    {
        id: 127,
        title: "Prey",
        platform: "hotstar",
        genre: "sci-fi",
        tags: ["action", "thriller", "survival", "historical", "alien"],
        description: "In the Comanche Nation in 1719, a fierce young warrior woman fights to protect her tribe against a highly evolved alien predator hunting for sport.",
        year: 2022,
        imdbRating: 7.1
    },
    {
        id: 128,
        title: "Barbarian",
        platform: "hotstar",
        genre: "horror",
        tags: ["mystery", "thriller", "suspense", "twists", "subterranean"],
        description: "A woman arrives at her Detroit Airbnb only to find it accidentally double-booked by a stranger, but sinister underground tunnels conceal far greater horrors.",
        year: 2022,
        imdbRating: 7.0
    },
    {
        id: 129,
        title: "See How They Run",
        platform: "hotstar",
        genre: "mystery",
        tags: ["comedy", "crime", "whodunit", "theater", "1950s"],
        description: "In 1950s London's West End, plans for a movie version of a smash-hit play halt abruptly when a pivotal crew member is murdered backstage.",
        year: 2022,
        imdbRating: 6.8
    },
    {
        id: 130,
        title: "Fire of Love",
        platform: "hotstar",
        genre: "documentary",
        tags: ["science", "nature", "romance", "volcanoes", "hypnotic"],
        description: "Intrepid French scientists Katia and Maurice Krafft loved two things — each other and volcanoes — capturing the most spectacular imagery of Earth's eruptions.",
        year: 2022,
        imdbRating: 7.6
    },
    {
        id: 131,
        title: "Rye Lane",
        platform: "hotstar",
        genre: "romance",
        tags: ["comedy", "walk-and-talk", "london", "vibrant", "indie"],
        description: "Two twenty-somethings recovering from messy breakups connect over an eventful afternoon traversing the colorful streets of South London.",
        year: 2023,
        imdbRating: 7.2
    },
    {
        id: 132,
        title: "The French Dispatch",
        platform: "hotstar",
        genre: "comedy",
        tags: ["anthology", "journalism", "artistic", "visual-treat", "witty"],
        description: "A love letter to journalists set in an outpost of an American newspaper in a fictional 20th-century French city, bringing stories to life.",
        year: 2021,
        imdbRating: 7.1
    },
    {
        id: 133,
        title: "Three Billboards Outside Ebbing, Missouri",
        platform: "hotstar",
        genre: "crime",
        tags: ["drama", "dark comedy", "grief", "gripping", "revenge"],
        description: "A grieving mother takes matters into her own hands by painting three provocative billboards challenging the local police chief after her daughter's unsolved murder.",
        year: 2017,
        imdbRating: 8.1
    },
    {
        id: 134,
        title: "The Favourite",
        platform: "hotstar",
        genre: "historical",
        tags: ["dark comedy", "drama", "royalty", "period", "rivalry"],
        description: "In early 18th-century England, a frail Queen Anne occupies the throne while two cunning cousins engage in savage Machiavellian rivalry for her affections.",
        year: 2018,
        imdbRating: 7.5
    },
    {
        id: 135,
        title: "Isle of Dogs",
        platform: "hotstar",
        genre: "animation",
        tags: ["comedy", "adventure", "sci-fi", "stop-motion", "dystopian"],
        description: "When all the canine pets of Megasaki City are exiled to Trash Island, a brave 12-year-old boy flies a miniature plane to rescue his beloved bodyguard dog.",
        year: 2018,
        imdbRating: 7.8
    },
    {
        id: 136,
        title: "Birdman",
        platform: "hotstar",
        genre: "drama",
        tags: ["dark comedy", "theater", "oner", "satire", "psychological"],
        description: "A washed-up superhero actor attempts to resurrect his fading career by directing and starring in an ambitious Broadway adaptation.",
        year: 2014,
        imdbRating: 7.7
    },
    {
        id: 137,
        title: "The Night House",
        platform: "hotstar",
        genre: "psychological thriller",
        tags: ["horror", "mystery", "grief", "supernatural", "eerie"],
        description: "A widow mourning the unexpected suicide of her architect husband begins uncovering unsettling secrets and ghostly manifestations in their lakeside home.",
        year: 2020,
        imdbRating: 6.5
    },
    {
        id: 138,
        title: "Fresh",
        platform: "hotstar",
        genre: "thriller",
        tags: ["horror", "dark comedy", "modern-dating", "twisted", "suspense"],
        description: "Frustrated by dating apps, a young woman takes a chance on a charming grocery store suitor, only to discover his terrifying appetites on a weekend getaway.",
        year: 2022,
        imdbRating: 6.7
    },
    {
        id: 139,
        title: "A Haunting in Venice",
        platform: "hotstar",
        genre: "mystery",
        tags: ["crime", "horror", "detective", "atmospheric", "gothic"],
        description: "In post-WWII Venice, retired detective Hercule Poirot reluctantly attends a Halloween séance in a decaying palazzo, where a guest is murdered.",
        year: 2023,
        imdbRating: 6.5
    },
    {
        id: 140,
        title: "Flamin' Hot",
        platform: "hotstar",
        genre: "drama",
        tags: ["biography", "comedy", "inspirational", "underdog", "feel-good"],
        description: "The inspiring true story of Richard Montañez, a Frito-Lay janitor who leveraged his Mexican heritage to invent the beloved Flamin' Hot Cheetos.",
        year: 2023,
        imdbRating: 6.8
    },
    {
        id: 141,
        title: "Super/Man: The Christopher Reeve Story",
        platform: "hotstar",
        genre: "documentary",
        tags: ["biography", "heroism", "inspirational", "resilience", "emotional"],
        description: "An intimate, moving look at the remarkable life of Christopher Reeve, from charismatic cinematic icon to courageous disability rights champion.",
        year: 2024,
        imdbRating: 8.4
    },
    {
        id: 142,
        title: "Brahmāstra: Part One – Shiva",
        platform: "hotstar",
        genre: "fantasy",
        tags: ["action", "adventure", "mythology", "vfx", "supernatural"],
        description: "A young disc jockey in Mumbai discovers he has a divine connection to the element of fire and holds the key to awakening an ancient astral weapon.",
        year: 2022,
        imdbRating: 5.6
    },
    {
        id: 143,
        title: "12th Fail",
        platform: "hotstar",
        genre: "drama",
        tags: ["biography", "inspirational", "struggle", "education", "heartfelt"],
        description: "Based on the real-life struggle of Manoj Kumar Sharma, who overcomes extreme rural poverty to conquer the toughest civil service exam in India.",
        year: 2023,
        imdbRating: 8.8
    },
    {
        id: 144,
        title: "Vikram",
        platform: "hotstar",
        genre: "action",
        tags: ["thriller", "crime", "revenge", "undercover", "intense"],
        description: "A covert black-ops investigator untangles the mystery behind a masked vigilante group executing crooked narcotics officials.",
        year: 2022,
        imdbRating: 8.3
    },
    {
        id: 145,
        title: "Hridayam",
        platform: "hotstar",
        genre: "romance",
        tags: ["drama", "coming-of-age", "college", "music", "nostalgic"],
        description: "A reflective man retraces his formative university years, heartbreaks, maturity, and redemption on his journey into marriage and adulthood.",
        year: 2022,
        imdbRating: 8.1
    },
    {
        id: 146,
        title: "Kaaka Muttai",
        platform: "hotstar",
        genre: "drama",
        tags: ["comedy", "social", "slum", "childhood", "heartfelt"],
        description: "Two energetic slum boys in Chennai are captivated by a new commercial pizza parlor and embark on ingenious hustles to earn enough for one slice.",
        year: 2014,
        imdbRating: 8.3
    },
    {
        id: 147,
        title: "Premam",
        platform: "hotstar",
        genre: "romance",
        tags: ["comedy", "coming-of-age", "cult", "youth", "nostalgic"],
        description: "A young man experiences love at three different stages of his life — in school, college, and adulthood — discovering that love evolves with age.",
        year: 2015,
        imdbRating: 8.3
    },
    {
        id: 148,
        title: "Bangalore Days",
        platform: "hotstar",
        genre: "comedy",
        tags: ["drama", "romance", "cousins", "friendship", "youth"],
        description: "Three close cousins relocate from Kerala to the bustling metropolis of Bangalore, navigating newfound freedom, career ambitions, and turbulent love.",
        year: 2014,
        imdbRating: 8.3
    },
    {
        id: 149,
        title: "Chhichhore",
        platform: "hotstar",
        genre: "comedy",
        tags: ["drama", "college", "friendship", "life-lessons", "nostalgic"],
        description: "A tragic incident spurs a middle-aged father to reunite with his college hostel buddies, revisiting their underdog triumphs to inspire his hospitalized son.",
        year: 2019,
        imdbRating: 8.3
    },
    {
        id: 150,
        title: "Super 30",
        platform: "hotstar",
        genre: "drama",
        tags: ["biography", "education", "inspirational", "mathematics", "triumph"],
        description: "Patna mathematician Anand Kumar opens a revolutionary free educational program coaching 30 underprivileged students for India's elite IIT entrances.",
        year: 2019,
        imdbRating: 7.9
    },
    {
        id: 151,
        title: "Luca",
        platform: "hotstar",
        genre: "animation",
        tags: ["adventure", "comedy", "friendship", "summer", "italy"],
        description: "On the Italian Riviera, an unlikely friendship blossoms between a human and a sea monster disguised as a human boy, sharing unforgettable summer days.",
        year: 2021,
        imdbRating: 7.4
    },
    {
        id: 152,
        title: "WALL-E",
        platform: "hotstar",
        genre: "sci-fi",
        tags: ["animation", "romance", "post-apocalyptic", "visual-masterpiece", "ecological"],
        description: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
        year: 2008,
        imdbRating: 8.4
    },
    {
        id: 153,
        title: "Up",
        platform: "hotstar",
        genre: "animation",
        tags: ["adventure", "comedy", "heartfelt", "grief", "family"],
        description: "Elderly widower Carl Fredricksen ties thousands of balloons to his house to fly to Paradise Falls, inadvertently bringing along an earnest young Wilderness Explorer.",
        year: 2009,
        imdbRating: 8.3
    },
    {
        id: 154,
        title: "Ratatouille",
        platform: "hotstar",
        genre: "animation",
        tags: ["comedy", "food", "paris", "passion", "inspirational"],
        description: "A determined rat blessed with an exquisite culinary palate forms an alliance with a clumsy kitchen garbage boy in a legendary Paris restaurant.",
        year: 2007,
        imdbRating: 8.1
    },
    {
        id: 155,
        title: "The Princess Bride",
        platform: "hotstar",
        genre: "adventure",
        tags: ["comedy", "fantasy", "romance", "fairytale", "classic"],
        description: "A bedside grandfather reads his ailing grandson a legendary yarn of swashbuckling farmhands, giants, revenge, and true love overcoming all obstacles.",
        year: 1987,
        imdbRating: 8.0
    },
    {
        id: 156,
        title: "Who Framed Roger Rabbit",
        platform: "hotstar",
        genre: "mystery",
        tags: ["comedy", "crime", "noir", "hybrid", "classic"],
        description: "A cartoon-hating private eye in 1947 Los Angeles is hired to exonerate an animated superstar accused of murdering a wealthy Hollywood mogul.",
        year: 1988,
        imdbRating: 7.7
    },
    {
        id: 157,
        title: "Fantastic Mr. Fox",
        platform: "hotstar",
        genre: "animation",
        tags: ["comedy", "adventure", "stop-motion", "heist", "witty"],
        description: "An urbane fox cannot resist his wild animal instincts and raids the farms of three mean agricultural tycoons, endangering his entire animal community.",
        year: 2009,
        imdbRating: 7.9
    },
    {
        id: 158,
        title: "Black Swan",
        platform: "hotstar",
        genre: "psychological thriller",
        tags: ["drama", "horror", "ballet", "obsession", "hallucination"],
        description: "A dedicated ballerina wins the coveted lead in Swan Lake, but her obsession with perfection spirals into terrifying, hallucinatory paranoia.",
        year: 2010,
        imdbRating: 8.0
    },
    {
        id: 159,
        title: "127 Hours",
        platform: "hotstar",
        genre: "survival",
        tags: ["drama", "adventure", "true-story", "intense", "resilience"],
        description: "A fearless mountain climber becomes trapped by a dislodged boulder in an isolated Utah canyon, resorting to desperate measures to survive.",
        year: 2010,
        imdbRating: 7.5
    },
    {
        id: 160,
        title: "Hidden Figures",
        platform: "hotstar",
        genre: "historical",
        tags: ["biography", "drama", "science", "inspirational", "space"],
        description: "The extraordinary true story of three brilliant African American female mathematicians at NASA who served as the brains behind John Glenn's launch into orbit.",
        year: 2016,
        imdbRating: 7.8
    },
    {
        id: 161,
        title: "Little Miss Sunshine",
        platform: "hotstar",
        genre: "comedy",
        tags: ["drama", "family", "road-trip", "quirky", "heartwarming"],
        description: "A dysfunctional family piles into an ailing yellow VW camper van to drive their eccentric 7-year-old daughter across country to a beauty pageant.",
        year: 2006,
        imdbRating: 7.8
    },
    {
        id: 162,
        title: "(500) Days of Summer",
        platform: "hotstar",
        genre: "romance",
        tags: ["comedy", "drama", "nonlinear", "breakup", "realistic"],
        description: "An offbeat romantic comedy about a greeting-card writer who reflects on the 500 days of his relationship with a woman who didn't believe in true love.",
        year: 2009,
        imdbRating: 7.7
    },
    {
        id: 163,
        title: "The Martian",
        platform: "hotstar",
        genre: "sci-fi",
        tags: ["survival", "space", "problem-solving", "humor", "suspense"],
        description: "Left behind on Mars after a ferocious dust storm, an astronaut uses his botanical ingenuity to survive while NASA scrambles a rescue mission.",
        year: 2015,
        imdbRating: 8.0
    },
    {
        id: 164,
        title: "Logan",
        platform: "hotstar",
        genre: "action",
        tags: ["sci-fi", "neo-western", "raw", "superhero", "poignant"],
        description: "In a bleak near future, a weary Logan cares for an ailing Professor X near the Mexican border, until a young mutant pursued by dark forces arrives.",
        year: 2017,
        imdbRating: 8.1
    },
    {
        id: 165,
        title: "Kingsman: The Secret Service",
        platform: "hotstar",
        genre: "action",
        tags: ["adventure", "comedy", "spy", "stylish", "combat"],
        description: "A top-secret British intelligence agency recruits an unrefined street kid into its competitive training program just as a global tech terror emerges.",
        year: 2014,
        imdbRating: 7.7
    },

    // ==========================================
    // APPLE TV+ (55 Movies, IDs: 166 - 220)
    // ==========================================
    {
        id: 166,
        title: "CODA",
        platform: "appletv",
        genre: "drama",
        tags: ["comedy", "music", "family", "deaf-culture", "oscar-winner"],
        description: "As the only hearing person in a deaf Gloucester fishing family, 17-year-old Ruby is torn between family duties and her passion for singing.",
        year: 2021,
        imdbRating: 8.0
    },
    {
        id: 167,
        title: "Killers of the Flower Moon",
        platform: "appletv",
        genre: "crime",
        tags: ["drama", "historical", "epic", "betrayal", "masterpiece"],
        description: "Martin Scorsese's sprawling crime epic detailing the suspicious 1920s murders of wealthy Osage Nation members following the discovery of oil on their land.",
        year: 2023,
        imdbRating: 7.6
    },
    {
        id: 168,
        title: "The Tragedy of Macbeth",
        platform: "appletv",
        genre: "drama",
        tags: ["horror", "historical", "black-and-white", "shakespeare", "supernatural"],
        description: "Joel Coen's stark, expressionist adaptation of Shakespeare's classic tragedy of murder, madness, ambition, and wrath in medieval Scotland.",
        year: 2021,
        imdbRating: 7.1
    },
    {
        id: 169,
        title: "Greyhound",
        platform: "appletv",
        genre: "war",
        tags: ["action", "historical", "naval", "survival", "intense"],
        description: "During WWII, a US Navy captain leads an Allied convoy of 37 merchant ships across the icy North Atlantic while stalked by a pack of Nazi U-boats.",
        year: 2020,
        imdbRating: 7.0
    },
    {
        id: 170,
        title: "Cha Cha Real Smooth",
        platform: "appletv",
        genre: "comedy",
        tags: ["drama", "romance", "coming-of-age", "tender", "indie"],
        description: "A 22-year-old college grad adrift in New Jersey starts working as a bar mitzvah party starter and strikes up a heartfelt bond with a young mother.",
        year: 2022,
        imdbRating: 7.3
    },
    {
        id: 171,
        title: "Wolfwalkers",
        platform: "appletv",
        genre: "animation",
        tags: ["fantasy", "adventure", "folklore", "hand-drawn", "nature"],
        description: "In 17th-century Kilkenny, a young apprentice hunter befriends a wild free-spirited girl whose clan possesses the enchanted power to turn into wolves at night.",
        year: 2020,
        imdbRating: 8.0
    },
    {
        id: 172,
        title: "Causeway",
        platform: "appletv",
        genre: "drama",
        tags: ["psychological", "trauma", "veteran", "quiet", "friendship"],
        description: "A US soldier struggles to adjust to life back home in New Orleans after suffering a traumatic brain injury in Afghanistan.",
        year: 2022,
        imdbRating: 6.6
    },
    {
        id: 173,
        title: "Swan Song",
        platform: "appletv",
        genre: "sci-fi",
        tags: ["drama", "cloning", "futuristic", "emotional", "moral-dilemma"],
        description: "When a loving husband and father is diagnosed with a terminal illness, he is presented with a secret opportunity to shield his family through cloning.",
        year: 2021,
        imdbRating: 6.8
    },
    {
        id: 174,
        title: "Finch",
        platform: "appletv",
        genre: "sci-fi",
        tags: ["drama", "adventure", "robot", "post-apocalyptic", "heartfelt"],
        description: "On a post-apocalyptic Earth scorched by solar flares, an ailing robotics engineer builds an android to care for his beloved dog after he's gone.",
        year: 2021,
        imdbRating: 6.9
    },
    {
        id: 175,
        title: "Tetris",
        platform: "appletv",
        genre: "thriller",
        tags: ["biography", "cold-war", "video-games", "licensing", "fast-paced"],
        description: "The pulse-pounding true story of video game salesman Henk Rogers and his perilous journey to Soviet Moscow to secure global rights to Tetris.",
        year: 2023,
        imdbRating: 7.4
    },
    {
        id: 176,
        title: "Still: A Michael J. Fox Movie",
        platform: "appletv",
        genre: "documentary",
        tags: ["biography", "resilience", "humorous", "inspirational", "hollywood"],
        description: "Michael J. Fox recounts his meteoric 1980s pop culture rise alongside his private three-decade struggle living with Parkinson's disease.",
        year: 2023,
        imdbRating: 8.1
    },
    {
        id: 177,
        title: "The Velvet Underground",
        platform: "appletv",
        genre: "documentary",
        tags: ["music", "rock", "avant-garde", "artistic", "1960s"],
        description: "Todd Haynes explores how Lou Reed, John Cale, and The Velvet Underground revolutionized rock music amidst Andy Warhol's explosive Factory scene.",
        year: 2021,
        imdbRating: 7.3
    },
    {
        id: 178,
        title: "Boys State",
        platform: "appletv",
        genre: "documentary",
        tags: ["politics", "youth", "democracy", "texas", "insightful"],
        description: "A thousand teenage boys attending a mock government program in Texas engage in ruthless political campaigns, reflecting contemporary American divisions.",
        year: 2020,
        imdbRating: 7.6
    },
    {
        id: 179,
        title: "Girls State",
        platform: "appletv",
        genre: "documentary",
        tags: ["politics", "youth", "leadership", "constitutional", "insightful"],
        description: "Five hundred high school girls from across Missouri build a government from scratch in a deeply divided political landscape.",
        year: 2024,
        imdbRating: 7.1
    },
    {
        id: 180,
        title: "Raymond & Ray",
        platform: "appletv",
        genre: "dark comedy",
        tags: ["drama", "family", "funeral", "brothers", "witty"],
        description: "Two estranged half-brothers reunite to carry out their eccentric, abusive father's final wish: for them to dig his grave by hand.",
        year: 2022,
        imdbRating: 6.2
    },
    {
        id: 181,
        title: "The Banker",
        platform: "appletv",
        genre: "historical",
        tags: ["drama", "biography", "business", "civil-rights", "inspirational"],
        description: "In the 1960s, two revolutionary Black entrepreneurs hire a working-class white man to pose as the head of their real estate and banking empire.",
        year: 2020,
        imdbRating: 7.3
    },
    {
        id: 182,
        title: "Palmer",
        platform: "appletv",
        genre: "drama",
        tags: ["redemption", "ex-con", "small-town", "heartfelt", "family"],
        description: "An ex-convict former high school football star returns home to rebuild his life and forms an unexpected kinship with an abandoned boy from a troubled home.",
        year: 2021,
        imdbRating: 7.2
    },
    {
        id: 183,
        title: "Flora and Son",
        platform: "appletv",
        genre: "comedy",
        tags: ["musical", "drama", "dublin", "mother-son", "charming"],
        description: "A fiery single mother in Dublin rescues a battered acoustic guitar from a dumpster and uses online lessons to connect with her rebellious teenage son.",
        year: 2023,
        imdbRating: 7.0
    },
    {
        id: 184,
        title: "The Greatest Beer Run Ever",
        platform: "appletv",
        genre: "adventure",
        tags: ["comedy", "drama", "war", "true-story", "vietnam"],
        description: "In 1967, an easygoing New Yorker decides to track down his neighborhood buddies serving in Vietnam in person to deliver them cans of American beer.",
        year: 2022,
        imdbRating: 6.8
    },
    {
        id: 185,
        title: "Sharper",
        platform: "appletv",
        genre: "psychological thriller",
        tags: ["mystery", "crime", "twists", "con-artist", "stylish"],
        description: "In the penthouses and dark corners of Manhattan, a web of cunning con artists compete in high-stakes deceptions to swindle a billionaire's fortune.",
        year: 2023,
        imdbRating: 6.6
    },
    {
        id: 186,
        title: "Napoleon",
        platform: "appletv",
        genre: "historical",
        tags: ["action", "biography", "war", "epic", "spectacle"],
        description: "Ridley Scott's visual spectacle chronicling Napoleon Bonaparte's ruthless ascent to Emperor of France through the lens of his volatile marriage to Josephine.",
        year: 2023,
        imdbRating: 6.4
    },
    {
        id: 187,
        title: "Fly Me to the Moon",
        platform: "appletv",
        genre: "romance",
        tags: ["comedy", "historical", "space", "apollo-11", "witty"],
        description: "During the 1969 Space Race, a brilliant marketing specialist hired to fix NASA's public image creates chaos for the dedicated launch director.",
        year: 2024,
        imdbRating: 6.6
    },
    {
        id: 188,
        title: "Blitz",
        platform: "appletv",
        genre: "war",
        tags: ["drama", "historical", "survival", "london", "epic"],
        description: "Steve McQueen's vivid wartime drama following an 9-year-old boy in WWII London who flees his evacuation train to return home to his mother.",
        year: 2024,
        imdbRating: 6.5
    },
    {
        id: 189,
        title: "The Instigators",
        platform: "appletv",
        genre: "crime",
        tags: ["comedy", "action", "heist", "boston", "buddy"],
        description: "A desperate father and an ex-con botch a robbery of a corrupt mayor, dragging a bewildered therapist into their chaotic escape across Boston.",
        year: 2024,
        imdbRating: 6.2
    },
    {
        id: 190,
        title: "Spirited",
        platform: "appletv",
        genre: "musical",
        tags: ["comedy", "holiday", "fantasy", "charming", "modern"],
        description: "A high-energy musical reimagining of Dickens' A Christmas Carol told from the perspective of the ghosts, starring Will Ferrell and Ryan Reynolds.",
        year: 2022,
        imdbRating: 6.6
    },
    {
        id: 191,
        title: "Luck",
        platform: "appletv",
        genre: "animation",
        tags: ["fantasy", "adventure", "comedy", "family", "whimsical"],
        description: "The unluckiest girl in the world stumbles into the secret Land of Luck and teams up with a cynical talking black cat to turn her fortune around.",
        year: 2022,
        imdbRating: 6.4
    },
    {
        id: 192,
        title: "The Boy, the Mole, the Fox and the Horse",
        platform: "appletv",
        genre: "animation",
        tags: ["family", "poetic", "gentle", "short-film", "inspirational"],
        description: "A lost boy, a cake-loving mole, a cautious fox, and a wise horse journey together across a winter landscape exploring friendship, vulnerability, and home.",
        year: 2022,
        imdbRating: 7.8
    },
    {
        id: 193,
        title: "On the Rocks",
        platform: "appletv",
        genre: "comedy",
        tags: ["drama", "father-daughter", "nyc", "investigation", "witty"],
        description: "Suspicious that her husband is cheating, a young Manhattan mother teams up with her larger-than-life playboy art-dealer father to tail him across New York.",
        year: 2020,
        imdbRating: 6.4
    },
    {
        id: 194,
        title: "Hala",
        platform: "appletv",
        genre: "drama",
        tags: ["coming-of-age", "identity", "family", "indie", "skateboarding"],
        description: "A Pakistani-American high schooler struggles to balance her traditional Muslim family obligations with her burgeoning desires, skateboard culture, and secret romance.",
        year: 2019,
        imdbRating: 6.2
    },
    {
        id: 195,
        title: "Beastie Boys Story",
        platform: "appletv",
        genre: "documentary",
        tags: ["music", "hip-hop", "biography", "friendship", "nostalgic"],
        description: "Directed by Spike Jonze, Mike Diamond and Adam Horovitz step onto a stage to share an intimate, hilarious history of the Beastie Boys and their 40-year friendship.",
        year: 2020,
        imdbRating: 7.7
    },
    {
        id: 196,
        title: "Billie Eilish: The World's a Little Blurry",
        platform: "appletv",
        genre: "documentary",
        tags: ["music", "pop-star", "gen-z", "intimate", "vulnerable"],
        description: "A deeply personal look at teenage singer-songwriter Billie Eilish as she crafts her multi-Grammy-winning debut album alongside her brother Finneas.",
        year: 2021,
        imdbRating: 7.7
    },
    {
        id: 197,
        title: "Selena Gomez: My Mind & Me",
        platform: "appletv",
        genre: "documentary",
        tags: ["biography", "mental-health", "vulnerability", "candid", "emotional"],
        description: "After years in the limelight, Selena Gomez faces a dark turn into depression, anxiety, and lupus diagnosis in this raw six-year journey toward self-healing.",
        year: 2022,
        imdbRating: 7.4
    },
    {
        id: 198,
        title: "Stephen Curry: Underrated",
        platform: "appletv",
        genre: "documentary",
        tags: ["sports", "basketball", "biography", "underdog", "inspirational"],
        description: "The remarkable coming-of-age story of Stephen Curry, who defied scouts' doubts about his size to become a college phenomenon and 4-time NBA champion.",
        year: 2023,
        imdbRating: 7.3
    },
    {
        id: 199,
        title: "The Elephant Queen",
        platform: "appletv",
        genre: "documentary",
        tags: ["wildlife", "nature", "africa", "family", "epic"],
        description: "Chiwetel Ejiofor narrates the epic journey of Athena, a 50-year-old elephant matriarch leading her herd across the majestic African savanna during severe drought.",
        year: 2019,
        imdbRating: 7.8
    },
    {
        id: 200,
        title: "Cherry",
        platform: "appletv",
        genre: "drama",
        tags: ["crime", "war", "romance", "ptsd", "gritty"],
        description: "An Ohio army medic returns from Iraq with severe PTSD, drifting into opioid addiction and robbing banks to finance his habit alongside his troubled wife.",
        year: 2021,
        imdbRating: 6.6
    },
    {
        id: 201,
        title: "Emancipation",
        platform: "appletv",
        genre: "historical",
        tags: ["action", "thriller", "survival", "civil-war", "gritty"],
        description: "Inspired by the gripping 1863 photos of 'Whipped Peter,' an enslaved man braves deadly Louisiana swamps to escape to the Union Army.",
        year: 2022,
        imdbRating: 6.2
    },
    {
        id: 202,
        title: "Ghosted",
        platform: "appletv",
        genre: "action",
        tags: ["comedy", "romance", "adventure", "spy", "entertaining"],
        description: "A salt-of-the-earth farmer falls head over heels for an enigmatic woman, only to discover she's a secret CIA operative who inadvertently draws him into international intrigue.",
        year: 2023,
        imdbRating: 5.8
    },
    {
        id: 203,
        title: "The Pigeon Tunnel",
        platform: "appletv",
        genre: "documentary",
        tags: ["biography", "espionage", "literature", "intellectual", "mysterious"],
        description: "Oscar-winning director Errol Morris interviews former MI6 spy David Cornwell, known to the world as master espionage author John le Carré.",
        year: 2023,
        imdbRating: 7.2
    },
    {
        id: 204,
        title: "Dads",
        platform: "appletv",
        genre: "documentary",
        tags: ["comedy", "parenting", "family", "heartfelt", "interviews"],
        description: "Bryce Dallas Howard interviews celebrity dads and everyday fathers worldwide, exploring the joys, anxieties, and modern complexities of fatherhood.",
        year: 2019,
        imdbRating: 6.8
    },
    {
        id: 205,
        title: "Bruce Springsteen's Letter to You",
        platform: "appletv",
        genre: "documentary",
        tags: ["music", "rock", "recording", "introspective", "brotherhood"],
        description: "A cinematic tribute to rock and roll, capturing Bruce Springsteen and the E Street Band recording an entire studio album live in five days.",
        year: 2020,
        imdbRating: 7.3
    },
    {
        id: 206,
        title: "Come from Away",
        platform: "appletv",
        genre: "musical",
        tags: ["historical", "broadway", "humanity", "inspiring", "feel-good"],
        description: "The heartwarming true story of 7,000 airline passengers stranded in the small town of Gander, Newfoundland, when US airspace was closed on 9/11.",
        year: 2021,
        imdbRating: 8.5
    },
    {
        id: 207,
        title: "'Twas the Fight Before Christmas",
        platform: "appletv",
        genre: "documentary",
        tags: ["comedy", "neighborhood-feud", "bizarre", "holiday", "courtroom"],
        description: "An eccentric Idaho man's obsession with hosting an extravagant neighborhood Christmas pageant triggers a ferocious legal war with his homeowners association.",
        year: 2021,
        imdbRating: 6.7
    },
    {
        id: 208,
        title: "Sidney",
        platform: "appletv",
        genre: "documentary",
        tags: ["biography", "hollywood", "civil-rights", "legend", "inspirational"],
        description: "Produced by Oprah Winfrey, an honoring look at the iconic Sidney Poitier, the first Black performer to win the Academy Award for Best Actor.",
        year: 2022,
        imdbRating: 7.6
    },
    {
        id: 209,
        title: "Louis Armstrong's Black & Blues",
        platform: "appletv",
        genre: "documentary",
        tags: ["music", "jazz", "biography", "history", "culture"],
        description: "A definitive documentary chronicling master trumpeter Louis Armstrong's life through intimate audio recordings, personal letters, and rare archival footage.",
        year: 2022,
        imdbRating: 7.4
    },
    {
        id: 210,
        title: "Fancy Dance",
        platform: "appletv",
        genre: "drama",
        tags: ["indigenous", "family", "investigation", "poignant", "resilience"],
        description: "On the Seneca-Cayuga reservation, a woman takes in her niece after her sister goes missing, embarking on a desperate journey to keep their family intact.",
        year: 2023,
        imdbRating: 7.1
    },
    {
        id: 211,
        title: "The Family Plan",
        platform: "appletv",
        genre: "action",
        tags: ["comedy", "suburban", "assassin", "road-trip", "family"],
        description: "A quiet suburban car salesman who was once a world-class covert operative packs his unsuspecting family into a minivan for an impromptu road trip to Vegas.",
        year: 2023,
        imdbRating: 6.3
    },
    {
        id: 212,
        title: "Argylle",
        platform: "appletv",
        genre: "action",
        tags: ["comedy", "thriller", "spy", "twists", "meta"],
        description: "A reclusive espionage author whose best-selling plots mirror the real covert operations of a sinister syndicate finds herself plunged into actual spy warfare.",
        year: 2024,
        imdbRating: 5.7
    },
    {
        id: 213,
        title: "Fingernails",
        platform: "appletv",
        genre: "sci-fi",
        tags: ["drama", "romance", "surreal", "satire", "thought-provoking"],
        description: "In a world where a biological machine tests whether couples are truly in love, a woman takes a job at the institute and begins questioning her own results.",
        year: 2023,
        imdbRating: 5.9
    },
    {
        id: 214,
        title: "Bread & Roses",
        platform: "appletv",
        genre: "documentary",
        tags: ["human-rights", "courageous", "afghanistan", "kabul", "inspiring"],
        description: "An unflinching documentary capturing the courage of three Afghan women fighting for autonomy and education in Kabul following the Taliban's 2021 takeover.",
        year: 2024,
        imdbRating: 7.3
    },
    {
        id: 215,
        title: "The Beanie Bubble",
        platform: "appletv",
        genre: "comedy",
        tags: ["drama", "business", "90s", "satire", "true-story"],
        description: "The surreal story of Ty Warner, a frustrated toy salesman whose partnership with three women transformed stuffed Beanie Babies into a global financial mania.",
        year: 2023,
        imdbRating: 6.3
    },
    {
        id: 216,
        title: "The Year Earth Changed",
        platform: "appletv",
        genre: "documentary",
        tags: ["nature", "lockdown", "wildlife", "david-attenborough", "hopeful"],
        description: "Narrated by David Attenborough, this breathtaking special reveals how global lockdowns during the pandemic allowed nature to heal and thrive.",
        year: 2021,
        imdbRating: 8.2
    },
    {
        id: 217,
        title: "9/11: Inside the President's War Room",
        platform: "appletv",
        genre: "documentary",
        tags: ["historical", "crisis", "politics", "tense", "investigative"],
        description: "President George W. Bush and his key cabinet advisers recount the urgent, chaotic 12 hours following the 9/11 attacks aboard Air Force One.",
        year: 2021,
        imdbRating: 7.5
    },
    {
        id: 218,
        title: "Here We Are: Notes for Living on Planet Earth",
        platform: "appletv",
        genre: "animation",
        tags: ["family", "short-film", "gentle", "whimsical", "educational"],
        description: "On Earth Day, a precocious 7-year-old boy learns about the wonders of our planet from his parents during a visit to a magical natural history exhibit.",
        year: 2020,
        imdbRating: 7.3
    },
    {
        id: 219,
        title: "A Charlie Brown Christmas",
        platform: "appletv",
        genre: "animation",
        tags: ["holiday", "peanuts", "classic", "jazz", "nostalgic"],
        description: "Depressed at the commercialism of Christmas, Charlie Brown directs the neighborhood play and tries to restore the true spirit with a frail little tree.",
        year: 1965,
        imdbRating: 8.3
    },
    {
        id: 220,
        title: "It's the Great Pumpkin, Charlie Brown",
        platform: "appletv",
        genre: "animation",
        tags: ["halloween", "peanuts", "classic", "comedy", "nostalgic"],
        description: "Linus stakes his reputation by waiting up all night in the pumpkin patch for the Great Pumpkin to appear, while Snoopy takes on the Red Baron.",
        year: 1966,
        imdbRating: 8.2
    }
];

// Curated list of browsing categories / moods
const commonTags = [
    "Action",
    "Comedy",
    "Drama",
    "Thriller",
    "Sci-Fi",
    "Mystery",
    "Horror",
    "Romance",
    "Crime",
    "Animation",
    "Documentary",
    "Historical",
    "Adventure",
    "Psychological Thriller",
    "Dark Comedy",
    "Fantasy",
    "Survival",
    "War"
];

// Helper function to filter movies by platform
function getMoviesByPlatform(platform) {
    if (!platform) return [];
    return movieDatabase.filter(movie => movie.platform === platform);
}

// Helper function to filter movies by tag/mood and platform
function getMoviesByTagAndPlatform(tag, platform) {
    if (!tag || !platform) return [];
    const normTag = tag.trim().toLowerCase();
    const platformMovies = getMoviesByPlatform(platform);

    return platformMovies.filter(movie => {
        const normGenre = (movie.genre || '').toLowerCase();
        const normTags = (movie.tags || []).map(t => t.toLowerCase());

        // Primary genre match
        if (normGenre === normTag) return true;
        if (normTag === 'sci-fi' && (normGenre === 'sci-fi' || normGenre === 'science fiction')) return true;
        if (normTag === 'science fiction' && (normGenre === 'sci-fi' || normGenre === 'science fiction')) return true;
        if (normTag === 'psychological thriller' && normGenre === 'psychological thriller') return true;
        if (normTag === 'dark comedy' && normGenre === 'dark comedy') return true;

        // Secondary tag match
        if (normTags.includes(normTag)) return true;
        if (normTag === 'sci-fi' && (normTags.includes('science fiction') || normTags.includes('sci-fi'))) return true;
        if (normTag === 'suspense' && (normTags.includes('suspense') || normGenre === 'thriller' || normTags.includes('thriller'))) return true;

        return false;
    });
}

// Helper function to get random movie from array, with optional exclusion
function getRandomMovie(movies, excludeId = null) {
    if (!movies || movies.length === 0) return null;
    if (movies.length === 1) return movies[0];
    const pool = excludeId ? movies.filter(m => m.id !== excludeId) : movies;
    const finalPool = pool.length > 0 ? pool : movies;
    return finalPool[Math.floor(Math.random() * finalPool.length)];
}

// Movie of the Day logic using LocalStorage calendar date persistence
const STORAGE_DAILY_KEY = 'onefilm_motd_v1';
const STORAGE_PREV_DAILY_KEY = 'onefilm_motd_prev_v1';

function getMovieOfTheDay() {
    const todayStr = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
    let stored = null;
    try {
        const raw = localStorage.getItem(STORAGE_DAILY_KEY);
        if (raw) stored = JSON.parse(raw);
    } catch (e) {
        stored = null;
    }

    if (stored && stored.date === todayStr && stored.movieId) {
        const movie = movieDatabase.find(m => m.id === stored.movieId);
        if (movie) return movie;
    }

    // New calendar day: select a movie, avoiding previous day's selection
    let prevMovieId = null;
    try {
        const prevRaw = localStorage.getItem(STORAGE_PREV_DAILY_KEY);
        if (prevRaw) prevMovieId = JSON.parse(prevRaw);
    } catch(e) {}

    if (stored && stored.movieId) {
        prevMovieId = stored.movieId;
    }

    const pool = movieDatabase.filter(m => m.id !== prevMovieId);
    const candidatePool = pool.length > 0 ? pool : movieDatabase;
    const selected = candidatePool[Math.floor(Math.random() * candidatePool.length)];

    try {
        if (stored && stored.movieId) {
            localStorage.setItem(STORAGE_PREV_DAILY_KEY, JSON.stringify(stored.movieId));
        }
        localStorage.setItem(STORAGE_DAILY_KEY, JSON.stringify({
            date: todayStr,
            movieId: selected.id
        }));
    } catch (e) {}

    return selected;
}

// --- Local persistence for reviews and community posts (localStorage) ---
const STORAGE_REVIEWS_KEY = 'onefilm_reviews_v1';
const STORAGE_POSTS_KEY = 'onefilm_posts_v1';

function _loadFromStorage(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function _saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.warn('Storage save failed:', e);
    }
}

// Reviews: {id, movieId, platform, rating, comment, timestamp}
function submitReview(movieId, platform, rating, comment) {
    const reviews = _loadFromStorage(STORAGE_REVIEWS_KEY);
    const review = {
        id: Date.now() + Math.floor(Math.random() * 1000),
        movieId,
        platform,
        rating: Number(rating),
        comment: comment || '',
        timestamp: new Date().toISOString()
    };
    reviews.unshift(review);
    _saveToStorage(STORAGE_REVIEWS_KEY, reviews);
    return review;
}

function getReviewsForMovie(movieId) {
    const reviews = _loadFromStorage(STORAGE_REVIEWS_KEY);
    return reviews.filter(r => r.movieId === movieId);
}

function getAverageRatingForMovie(movieId) {
    const rs = getReviewsForMovie(movieId);
    if (rs.length === 0) return 0;
    const sum = rs.reduce((s, r) => s + r.rating, 0);
    return +(sum / rs.length).toFixed(1);
}

// Posts: {id, platform, title, description, votes, comments: [{id, text, timestamp}], timestamp}
function createPost(platform, title, description) {
    const posts = _loadFromStorage(STORAGE_POSTS_KEY);
    const post = {
        id: Date.now() + Math.floor(Math.random() * 1000),
        platform,
        title: title || '',
        description: description || '',
        votes: 0,
        comments: [],
        timestamp: new Date().toISOString()
    };
    posts.unshift(post);
    _saveToStorage(STORAGE_POSTS_KEY, posts);
    return post;
}

function getPostsForPlatform(platform) {
    const posts = _loadFromStorage(STORAGE_POSTS_KEY);
    return posts.filter(p => p.platform === platform);
}

function votePost(postId, delta) {
    const posts = _loadFromStorage(STORAGE_POSTS_KEY);
    const post = posts.find(p => p.id === postId);
    if (!post) return null;
    post.votes = (post.votes || 0) + delta;
    _saveToStorage(STORAGE_POSTS_KEY, posts);
    return post.votes;
}

function addCommentToPost(postId, text) {
    const posts = _loadFromStorage(STORAGE_POSTS_KEY);
    const post = posts.find(p => p.id === postId);
    if (!post) return null;
    const comment = { id: Date.now() + Math.floor(Math.random() * 1000), text: text || '', timestamp: new Date().toISOString() };
    post.comments.push(comment);
    _saveToStorage(STORAGE_POSTS_KEY, posts);
    return comment;
}

function formatTimestamp(ts) {
    try {
        const d = new Date(ts);
        return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) + ' ' + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
        return ts;
    }
}

// Aliases and universal exports
var movies = movieDatabase;
if (typeof window !== 'undefined') {
    window.movies = movieDatabase;
    window.movieDatabase = movieDatabase;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = movieDatabase;
    module.exports.movieDatabase = movieDatabase;
    module.exports.movies = movieDatabase;
    module.exports.commonTags = commonTags;
    module.exports.getMoviesByPlatform = getMoviesByPlatform;
    module.exports.getMoviesByTagAndPlatform = getMoviesByTagAndPlatform;
    module.exports.getRandomMovie = getRandomMovie;
    module.exports.getMovieOfTheDay = getMovieOfTheDay;
    module.exports.submitReview = submitReview;
    module.exports.getReviewsForMovie = getReviewsForMovie;
    module.exports.getAverageRatingForMovie = getAverageRatingForMovie;
    module.exports.createPost = createPost;
    module.exports.getPostsForPlatform = getPostsForPlatform;
    module.exports.votePost = votePost;
    module.exports.addCommentToPost = addCommentToPost;
    module.exports.formatTimestamp = formatTimestamp;
}


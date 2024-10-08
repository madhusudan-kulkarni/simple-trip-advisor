export const data = {
  continents: [
    {
      id: 1,
      name: 'Asia',
      image: 'https://i.postimg.cc/bvQdGJGV/asia.jpg',
      countries: [
        {
          id: 1,
          name: 'India',
          image: 'https://i.postimg.cc/FHvHMvCj/india.jpg',
          destinations: [
            {
              id: 1,
              name: 'Taj Mahal',
              description:
                'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the Yamuna river in the Indian city of Agra.',
              image: 'https://i.postimg.cc/Xq6RrjCL/tajMahal.jpg',
              ratings: 4.5,
              reviews: 250,
              location: 'Agra, India',
              openingHours: '6:00 AM - 7:00 PM',
              ticketPrice: '$20',
              website: 'https://example.com/taj_mahal',
            },
            {
              id: 2,
              name: 'Jaipur',
              description:
                'Jaipur is the capital of the Indian state of Rajasthan, known for its vibrant colors, rich history, and magnificent architecture.',
              image: 'https://i.postimg.cc/RFWS7Zqz/jaipur.jpg',
              ratings: 4.2,
              reviews: 180,
              location: 'Jaipur, India',
              openingHours: '9:00 AM - 5:00 PM',
              ticketPrice: '$15',
              website: 'https://example.com/jaipur',
            },
            {
              id: 3,
              name: 'Kerala Backwaters',
              description:
                'The Kerala Backwaters are a network of interconnected canals, rivers, lakes, and lagoons located in the Indian state of Kerala.',
              image: 'https://i.postimg.cc/90TckgG8/kerala-Back-Waters.jpg',
              ratings: 4.8,
              reviews: 300,
              location: 'Kerala, India',
              openingHours: 'Open all day',
              ticketPrice: '$25',
              website: 'https://example.com/kerala_backwaters',
            },
            {
              id: 4,
              name: 'Varanasi',
              description:
                'Varanasi is a city on the banks of the Ganges river in Uttar Pradesh, India, known for its spiritual and cultural significance.',
              image: 'https://i.postimg.cc/PfmGBwgR/varanasi.jpg',
              ratings: 4.6,
              reviews: 220,
              location: 'Varanasi, India',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/varanasi',
            },
          ],
        },
        {
          id: 2,
          name: 'China',
          image: 'https://i.postimg.cc/g2LxW4GW/china.jpg',
          destinations: [
            {
              id: 1,
              name: 'Great Wall of China',
              description:
                'The Great Wall of China is a historic fortification that stretches across the northern border of China, built to protect the Chinese Empire from invasions.',
              image: 'https://i.postimg.cc/90w6M40r/great-Wall-Of-China.jpg',
              ratings: 4.7,
              reviews: 500,
              location: 'China',
              openingHours: '8:00 AM - 5:00 PM',
              ticketPrice: '$30',
              website: 'https://example.com/great_wall',
            },
            {
              id: 2,
              name: 'Forbidden City',
              description:
                'The Forbidden City is a palace complex in Beijing, China, and was the former Chinese imperial palace from the Ming dynasty to the end of the Qing dynasty.',
              image: 'https://i.postimg.cc/P51dy7tP/forbidden-City.jpg',
              ratings: 4.4,
              reviews: 400,
              location: 'Beijing, China',
              openingHours: '9:00 AM - 5:00 PM',
              ticketPrice: '$25',
              website: 'https://example.com/forbidden_city',
            },
            {
              id: 3,
              name: 'Terracotta Army',
              description:
                'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China.',
              image: 'https://i.postimg.cc/jSqr6Skk/terracotta-Army.jpg',
              ratings: 4.6,
              reviews: 350,
              location: "Xi'an, China",
              openingHours: '8:30 AM - 6:00 PM',
              ticketPrice: '$18',
              website: 'https://example.com/terracotta_army',
            },
            {
              id: 4,
              name: 'Li River',
              description:
                'The Li River is a beautiful river in Guangxi Zhuang Autonomous Region in southern China, known for its stunning karst landscapes and scenic cruises.',
              image: 'https://i.postimg.cc/zB4J0YRH/liRiver.jpg',
              ratings: 4.8,
              reviews: 450,
              location: 'Guilin, China',
              openingHours: 'Open all day',
              ticketPrice: '$20',
              website: 'https://example.com/li_river',
            },
          ],
        },
        {
          id: 3,
          name: 'Japan',
          image: 'https://i.postimg.cc/zftDHgzj/japan.jpg',
          destinations: [
            {
              id: 1,
              name: 'Mount Fuji',
              description:
                'Mount Fuji is an iconic stratovolcano located in Honshu, Japan. It is the highest mountain in Japan and a UNESCO World Heritage site.',
              image: 'https://i.postimg.cc/SKsk4x6z/mount-Fuji.jpg',
              ratings: 4.7,
              reviews: 500,
              location: 'Honshu, Japan',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/mount_fuji',
            },
            {
              id: 2,
              name: 'Kyoto',
              description:
                "Kyoto is a city in Japan's Kansai region, known for its numerous temples, shrines, traditional wooden houses, and beautiful gardens.",
              image: 'https://i.postimg.cc/h474hvHL/kyoto.jpg',
              ratings: 4.4,
              reviews: 400,
              location: 'Kyoto, Japan',
              openingHours: '9:00 AM - 5:00 PM',
              ticketPrice: '$10',
              website: 'https://example.com/kyoto',
            },
            {
              id: 3,
              name: 'Hiroshima Peace Memorial',
              description:
                'The Hiroshima Peace Memorial, also known as the Atomic Bomb Dome, is a symbol of peace and a reminder of the devastating atomic bombing in 1945.',
              image:
                'https://i.postimg.cc/0yCyx4hh/hiroshima-Peace-Memorial.jpg',
              ratings: 4.6,
              reviews: 350,
              location: 'Hiroshima, Japan',
              openingHours: '8:30 AM - 6:00 PM',
              ticketPrice: '$5',
              website: 'https://example.com/hiroshima_peace_memorial',
            },
            {
              id: 4,
              name: 'Nara Park',
              description:
                'Nara Park is a large public park in Nara, Japan, famous for its free-roaming deer and historic sites, including Todai-ji temple and Kasuga Shrine.',
              image: 'https://i.postimg.cc/PqRh5nyV/naraPark.jpg',
              ratings: 4.8,
              reviews: 450,
              location: 'Nara, Japan',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/nara_park',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Europe',
      image: 'https://i.postimg.cc/JzC5SyWP/europe.jpg',
      countries: [
        {
          id: 1,
          name: 'France',
          image: 'https://i.postimg.cc/XYK0dy85/france.jpg',
          destinations: [
            {
              id: 1,
              name: 'Eiffel Tower',
              description:
                "The Eiffel Tower is an iconic iron lattice tower located in Paris, France. It is one of the world's most famous landmarks and offers stunning views of the city.",
              image: 'https://i.postimg.cc/RZtZ8FTC/eiffel-Tower.jpg',
              ratings: 4.7,
              reviews: 500,
              location: 'Paris, France',
              openingHours: '9:00 AM - 12:00 AM',
              ticketPrice: '€25',
              website: 'https://example.com/eiffel_tower',
            },
            {
              id: 2,
              name: 'Louvre Museum',
              description:
                "The Louvre Museum is the world's largest art museum and a historic monument located in Paris, France. It is home to thousands of artworks, including the famous Mona Lisa.",
              image: 'https://i.postimg.cc/kXQnFZMD/louvre-Museum.jpg',
              ratings: 4.6,
              reviews: 400,
              location: 'Paris, France',
              openingHours: '9:00 AM - 6:00 PM',
              ticketPrice: '€15',
              website: 'https://example.com/louvre_museum',
            },
            {
              id: 3,
              name: 'Mont Saint-Michel',
              description:
                'Mont Saint-Michel is a medieval abbey perched on a rocky island in Normandy, France. It is known for its stunning architecture and picturesque views.',
              image: 'https://i.postimg.cc/jSvtB77b/mont-Saint-Michel.jpg',
              ratings: 4.8,
              reviews: 350,
              location: 'Normandy, France',
              openingHours: '9:00 AM - 8:00 PM',
              ticketPrice: '€10',
              website: 'https://example.com/mont_saint_michel',
            },
            {
              id: 4,
              name: "Côte d'Azur",
              description:
                "The French Riviera, also known as the Côte d'Azur, is a glamorous coastline in the southeastern part of France. It is famous for its beautiful beaches, luxury resorts, and vibrant nightlife.",
              image: 'https://i.postimg.cc/y6fx32dK/cote-De-Azur.jpg',
              ratings: 4.5,
              reviews: 450,
              location: 'French Riviera, France',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/cote_dazur',
            },
          ],
        },
        {
          id: 2,
          name: 'Germany',
          image: 'https://i.postimg.cc/8CHNQrfG/europe.jpg',
          destinations: [
            {
              id: 1,
              name: 'Neuschwanstein Castle',
              description:
                'Neuschwanstein Castle is a stunning 19th-century Romanesque Revival palace located in Bavaria, Germany. It is known for its fairytale-like appearance and picturesque surroundings.',
              image: 'https://i.postimg.cc/nr8JqK6v/neuschwanstein-Castle.jpg',
              ratings: 4.7,
              reviews: 350,
              location: 'Bavaria, Germany',
              openingHours: '9:00 AM - 6:00 PM',
              ticketPrice: '€14',
              website: 'https://example.com/neuschwanstein_castle',
            },
            {
              id: 2,
              name: 'Berlin Wall',
              description:
                "The Berlin Wall was a symbol of the Cold War and division between East and West Germany. Today, it serves as a powerful memorial and reminder of Germany's history.",
              image: 'https://i.postimg.cc/cHhHmbBQ/berlin-Wall.jpg',
              ratings: 4.5,
              reviews: 280,
              location: 'Berlin, Germany',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/berlin_wall',
            },
            {
              id: 3,
              name: 'Cologne Cathedral',
              description:
                "Cologne Cathedral is a magnificent Gothic masterpiece and one of Germany's most famous landmarks. It is located in the city of Cologne and attracts millions of visitors each year.",
              image: 'https://i.postimg.cc/nzprqJBF/cologne-Cathedral.jpg',
              ratings: 4.8,
              reviews: 420,
              location: 'Cologne, Germany',
              openingHours: '8:00 AM - 6:00 PM',
              ticketPrice: '€8',
              website: 'https://example.com/cologne_cathedral',
            },
            {
              id: 4,
              name: 'Black Forest',
              description:
                'The Black Forest is a picturesque region in southwestern Germany known for its dense forests, charming villages, and cuckoo clocks. It offers opportunities for hiking, biking, and exploring nature.',
              image: 'https://i.postimg.cc/rFn4cKWS/black-Forest.jpg',
              ratings: 4.6,
              reviews: 320,
              location: 'Black Forest, Germany',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/black_forest',
            },
          ],
        },
        {
          id: 3,
          name: 'Italy',
          image: 'https://i.postimg.cc/jqG5hPz3/italy.jpg',
          destinations: [
            {
              id: 1,
              name: 'Colosseum',
              description:
                'The Colosseum is an ancient amphitheater located in the heart of Rome, Italy. It is a magnificent symbol of the Roman Empire and a popular tourist attraction.',
              image: 'https://i.postimg.cc/sDvXYKQh/colosseum.jpg',
              ratings: 4.7,
              reviews: 400,
              location: 'Rome, Italy',
              openingHours: '8:30 AM - 7:00 PM',
              ticketPrice: '€16',
              website: 'https://example.com/colosseum',
            },
            {
              id: 2,
              name: 'Venice Canals',
              description:
                'The Venice Canals are a network of picturesque waterways that wind through the city of Venice, Italy. They are famous for their gondolas and stunning architecture.',
              image: 'https://i.postimg.cc/DynVFzFy/venice-Canals.jpg',
              ratings: 4.5,
              reviews: 320,
              location: 'Venice, Italy',
              openingHours: 'Open all day',
              ticketPrice: '€80 for gondola rides',
              website: 'https://example.com/venice_canals',
            },
            {
              id: 3,
              name: 'Florence Cathedral',
              description:
                'Florence Cathedral, also known as the Duomo, is a beautiful Gothic cathedral in the city of Florence, Italy. It is famous for its iconic red dome and stunning artworks.',
              image: 'https://i.postimg.cc/cJZ0bcHT/florence-Cathedral.jpg',
              ratings: 4.8,
              reviews: 450,
              location: 'Florence, Italy',
              openingHours: '10:00 AM - 5:00 PM',
              ticketPrice: '€18',
              website: 'https://example.com/florence_cathedral',
            },
            {
              id: 4,
              name: 'Amalfi Coast',
              description:
                'The Amalfi Coast is a breathtaking stretch of coastline in southern Italy, renowned for its scenic beauty, colorful cliffside villages, and crystal-clear waters.',
              image: 'https://i.postimg.cc/Y2Nfcrb3/amalfi-Coast.jpg',
              ratings: 4.6,
              reviews: 380,
              location: 'Amalfi Coast, Italy',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/amalfi_coast',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'North America',
      image: 'https://i.postimg.cc/VL8w6R9w/north-America.jpg',
      countries: [
        {
          id: 1,
          name: 'United States',
          image: 'https://i.postimg.cc/9M93XRrz/united-States.jpg',
          destinations: [
            {
              id: 1,
              name: 'Grand Canyon',
              description:
                'The Grand Canyon is a breathtaking natural wonder located in Arizona, United States. It is known for its massive size, colorful rock formations, and stunning vistas.',
              image: 'https://i.postimg.cc/Y9PcMNp5/grand-Canyon.jpg',
              ratings: 4.9,
              reviews: 500,
              location: 'Arizona, United States',
              openingHours: 'Open all day',
              ticketPrice: '$30',
              website: 'https://example.com/grand_canyon',
            },
            {
              id: 2,
              name: 'Statue of Liberty',
              description:
                'The Statue of Liberty is a famous landmark and a symbol of freedom located in New York Harbor, United States. It welcomes visitors to the city of New York.',
              image: 'https://i.postimg.cc/tCNjVxDx/statue-Of-Liberty.jpg',
              ratings: 4.7,
              reviews: 450,
              location: 'New York, United States',
              openingHours: '9:30 AM - 5:00 PM',
              ticketPrice: '$25',
              website: 'https://example.com/statue_of_liberty',
            },
            {
              id: 3,
              name: 'Yellowstone National Park',
              description:
                'Yellowstone National Park is a vast natural reserve spanning parts of Wyoming, Montana, and Idaho in the United States. It is renowned for its geothermal features, wildlife, and stunning landscapes.',
              image:
                'https://i.postimg.cc/CLN3KVLC/yellowstone-National-Park.jpg',
              ratings: 4.8,
              reviews: 480,
              location: 'Wyoming, Montana, Idaho, United States',
              openingHours: 'Open all day',
              ticketPrice: '$35',
              website: 'https://example.com/yellowstone',
            },
            {
              id: 4,
              name: 'Golden Gate Bridge',
              description:
                'The Golden Gate Bridge is an iconic suspension bridge that spans the Golden Gate Strait, connecting San Francisco to Marin County in California, United States.',
              image: 'https://i.postimg.cc/xC8rwpSG/golden-Gate-Bridge.jpg',
              ratings: 4.6,
              reviews: 400,
              location: 'California, United States',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/golden_gate_bridge',
            },
          ],
        },
        {
          id: 2,
          name: 'Canada',
          image: 'https://i.postimg.cc/9X1RtrLv/canada.jpg',
          destinations: [
            {
              id: 1,
              name: 'Niagara Falls',
              description:
                'Niagara Falls is a world-famous natural wonder located on the border of Ontario, Canada, and New York, United States. It is renowned for its powerful waterfalls and captivating beauty.',
              image: 'https://i.postimg.cc/8chV4JSx/niagara-Falls.jpg',
              ratings: 4.8,
              reviews: 550,
              location: 'Ontario, Canada',
              openingHours: 'Open all day',
              ticketPrice: '$25',
              website: 'https://example.com/niagara_falls',
            },
            {
              id: 2,
              name: 'Banff National Park',
              description:
                'Banff National Park is a stunning natural reserve located in the Canadian Rockies of Alberta, Canada. It is known for its majestic mountains, turquoise lakes, and abundant wildlife.',
              image: 'https://i.postimg.cc/t48VZwBJ/banff-National-Park.jpg',
              ratings: 4.9,
              reviews: 600,
              location: 'Alberta, Canada',
              openingHours: 'Open all day',
              ticketPrice: '$30',
              website: 'https://example.com/banff_national_park',
            },
            {
              id: 3,
              name: 'Old Quebec City',
              description:
                'Old Quebec City is a charming historic district located in Quebec City, Quebec, Canada. It is known for its cobblestone streets, European architecture, and rich French-Canadian heritage.',
              image: 'https://i.postimg.cc/3rp7Y6v9/old-Quebec-City.jpg',
              ratings: 4.7,
              reviews: 400,
              location: 'Quebec, Canada',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/old_quebec_city',
            },
            {
              id: 4,
              name: 'Vancouver Island',
              description:
                'Vancouver Island is a picturesque island located in British Columbia, Canada. It offers a mix of stunning natural beauty, charming coastal towns, and diverse wildlife.',
              image: 'https://i.postimg.cc/QMHGPnDQ/vancouver-Island.jpg',
              ratings: 4.6,
              reviews: 350,
              location: 'British Columbia, Canada',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/vancouver_island',
            },
          ],
        },
        {
          id: 3,
          name: 'Mexico',
          image: 'https://i.postimg.cc/SNFS9qhw/mexico.jpg',
          destinations: [
            {
              id: 1,
              name: 'Chichen Itza',
              description:
                'Chichen Itza is an ancient Mayan city located in the Yucatan Peninsula of Mexico. It is known for its iconic pyramid, the Temple of Kukulcan, and its rich historical significance.',
              image: 'https://i.postimg.cc/6QGnMt8C/chichen-Itza.jpg',
              ratings: 4.8,
              reviews: 500,
              location: 'Yucatan Peninsula, Mexico',
              openingHours: '8:00 AM - 5:00 PM',
              ticketPrice: '$20',
              website: 'https://example.com/chichen_itza',
            },
            {
              id: 2,
              name: 'Tulum',
              description:
                'Tulum is a stunning coastal archaeological site located in the Riviera Maya of Mexico. It is known for its well-preserved Mayan ruins and breathtaking views of the Caribbean Sea.',
              image: 'https://i.postimg.cc/KYwSyrcd/tulum.jpg',
              ratings: 4.7,
              reviews: 450,
              location: 'Riviera Maya, Mexico',
              openingHours: '8:00 AM - 5:00 PM',
              ticketPrice: '$15',
              website: 'https://example.com/tulum',
            },
            {
              id: 3,
              name: 'Cancun',
              description:
                'Cancun is a popular resort city located on the northeastern coast of the Yucatan Peninsula in Mexico. It is known for its pristine white-sand beaches, turquoise waters, and vibrant nightlife.',
              image: 'https://i.postimg.cc/gkJwMm5r/cancun.jpg',
              ratings: 4.6,
              reviews: 400,
              location: 'Yucatan Peninsula, Mexico',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/cancun',
            },
            {
              id: 4,
              name: 'Mexico City',
              description:
                'Mexico City is the capital and largest city of Mexico. It is a bustling metropolis known for its rich history, vibrant culture, and architectural marvels, such as the ancient Templo Mayor and the modern Museo Soumaya.',
              image: 'https://i.postimg.cc/3R0hyfb8/mexico-City.jpg',
              ratings: 4.9,
              reviews: 550,
              location: 'Mexico City, Mexico',
              openingHours: 'Open all day',
              ticketPrice: 'Free',
              website: 'https://example.com/mexico_city',
            },
          ],
        },
      ],
    },
  ],
}

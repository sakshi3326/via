const districts = [
  {
    name: "Agra",
    coords: [27.1767, 78.0081],
    product: "Leather Shoes",
    type: "Leather",
    image: "https://kapsoverseas.com/images/banner1.jpg",
    description: "Agra is renowned for its high-quality leather shoes, crafted by skilled artisans using traditional methods.",
    businesses: [
      {
        name: "Asian Leather Private Limited",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        desc: "mail@asianleather.com",
        phone: "8756749280",
        rate: "INR 45000",
        video: "to be uploaded"

      },
      {
        name: "Ahmed tanmay Pvt. Ltd.",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "atcalcutta@vsnl.net",
        phone: "7658905435",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Acme Leathercraft",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "info@water-lily.com",
        phone: "8756749980",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Balaji Leather Creation",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "amitabh.blc@gmail.com",
        phone: "9254675213",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "BG Service",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "bgservices.india@gmail.com",
        phone: "7454756487",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Ciria Tanning Company Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "classictanneryco.vsnl.net",
        phone: "6556543490",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Dream WeaverPvt. Ltd",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "dreamweaver.rsan@yahoo.com",
        phone: "8756749280",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Das Style Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "office@dasstylev.com",
        phone: "8756749280",
        rate: "INR 45000",
        video: "to be uploaded"
      },
    ],
  },
  {
    name: "Aligarh",
    coords: [27.8974, 78.088],
    product: "Locks",
    type: "Hardware",
    image: "https://example.com/aligarh-locks.jpg",
    description: "Aligarh is famous for its robust and durable locks, which are exported worldwide.",
    businesses: [
      {
        name: "Secure Locks Ltd.",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        desc: "Manufacturer of high-security locks.",
      },
    ],
  },
  {
    name: "Aligarh",
    coords: [27.8974, 78.0880],
    product: "Locks",
    type: "Hardware",
    image: "https://example.com/aligarh.jpg",
    description: "Aligarh is famous for its high-quality locks and hardware products.",
    businesses: [
      {
        name: "Aligarh Lock Industries",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        desc: "info@aligarhlocks.com",
        phone: "9876543210",
        rate: "INR 5000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Allahabad",
    coords: [25.4358, 81.8463],
    product: "Guava",
    type: "Agriculture",
    image: "https://example.com/allahabad.jpg",
    description: "Allahabad is known for its delicious and nutritious guavas.",
    businesses: [
      {
        name: "Allahabad Guava Farms",
        image: "https://randomuser.me/api/portraits/men/13.jpg",
        desc: "info@allahabadguava.com",
        phone: "9876543211",
        rate: "INR 1000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Ambedkar Nagar",
    coords: [26.4294, 82.6603],
    product: "Wooden Furniture",
    type: "Handicraft",
    image: "https://example.com/ambedkarnagar.jpg",
    description: "Ambedkar Nagar is known for its exquisite wooden furniture.",
    businesses: [
      {
        name: "Ambedkar Furniture Works",
        image: "https://randomuser.me/api/portraits/men/14.jpg",
        desc: "info@ambedkarfurniture.com",
        phone: "9876543212",
        rate: "INR 15000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Amethi",
    coords: [26.1591, 81.8055],
    product: "Handloom Products",
    type: "Textile",
    image: "https://example.com/amethi.jpg",
    description: "Amethi is famous for its traditional handloom products.",
    businesses: [
      {
        name: "Amethi Handloom Center",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        desc: "info@amethihandloom.com",
        phone: "9876543213",
        rate: "INR 2000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Amroha",
    coords: [28.9030, 78.4698],
    product: "Wooden Toys",
    type: "Handicraft",
    image: "https://example.com/amroha.jpg",
    description: "Amroha is known for its beautifully crafted wooden toys.",
    businesses: [
      {
        name: "Amroha Toy Makers",
        image: "https://randomuser.me/api/portraits/men/16.jpg",
        desc: "info@amrohatoys.com",
        phone: "9876543214",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Auraiya",
    coords: [26.4692, 79.5154],
    product: "Pottery",
    type: "Handicraft",
    image: "https://example.com/auraiya.jpg",
    description: "Auraiya is renowned for its traditional pottery.",
    businesses: [
      {
        name: "Auraiya Pottery Works",
        image: "https://randomuser.me/api/portraits/men/17.jpg",
        desc: "info@auraiyapottery.com",
        phone: "9876543215",
        rate: "INR 2500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Azamgarh",
    coords: [26.0678, 83.1836],
    product: "Black Pottery",
    type: "Handicraft",
    image: "https://example.com/azamgarh.jpg",
    description: "Azamgarh is famous for its unique black pottery.",
    businesses: [
      {
        name: "Azamgarh Pottery Center",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        desc: "info@azamgarhpottery.com",
        phone: "9876543216",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Baghpat",
    coords: [28.9447, 77.2186],
    product: "Jaggery",
    type: "Agriculture",
    image: "https://example.com/baghpat.jpg",
    description: "Baghpat is known for its high-quality jaggery.",
    businesses: [
      {
        name: "Baghpat Jaggery Farms",
        image: "https://randomuser.me/api/portraits/men/19.jpg",
        desc: "info@baghpatjaggery.com",
        phone: "9876543217",
        rate: "INR 500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Bahraich",
    coords: [27.5745, 81.5942],
    product: "Mango",
    type: "Agriculture",
    image: "https://example.com/bahraich.jpg",
    description: "Bahraich is famous for its delicious mangoes.",
    businesses: [
      {
        name: "Bahraich Mango Orchards",
        image: "https://randomuser.me/api/portraits/men/20.jpg",
        desc: "info@bahraichmango.com",
        phone: "9876543218",
        rate: "INR 1000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Ballia",
    coords: [25.7603, 84.1471],
    product: "Banana",
    type: "Agriculture",
    image: "https://example.com/ballia.jpg",
    description: "Ballia is known for its high-quality bananas.",
    businesses: [
      {
        name: "Ballia Banana Farms",
        image: "https://randomuser.me/api/portraits/men/21.jpg",
        desc: "info@balliabanana.com",
        phone: "9876543219",
        rate: "INR 800",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Balrampur",
    coords: [27.4295, 82.1854],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/balrampur.jpg",
    description: "Balrampur is famous for its aromatic rice varieties.",
    businesses: [
      {
        name: "Balrampur Rice Mills",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        desc: "info@balrampurrice.com",
        phone: "9876543220",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Banda",
    coords: [25.4763, 80.3395],
    product: "Sharbati Wheat",
    type: "Agriculture",
    image: "https://example.com/banda.jpg",
    description: "Banda is known for its high-quality Sharbati wheat.",
    businesses: [
      {
        name: "Banda Wheat Farms",
        image: "https://randomuser.me/api/portraits/men/23.jpg",
        desc: "info@bandawheat.com",
        phone: "9876543221",
        rate: "INR 1500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Barabanki",
    coords: [26.9342, 81.1904],
    product: "Pottery",
    type: "Handicraft",
    image: "https://example.com/barabanki.jpg",
    description: "Barabanki is famous for its traditional pottery.",
    businesses: [
      {
        name: "Barabanki Pottery Works",
        image: "https://randomuser.me/api/portraits/men/24.jpg",
        desc: "info@barabankipottery.com",
        phone: "9876543222",
        rate: "INR 2000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Bareilly",
    coords: [28.3670, 79.4304],
    product: "Cane and Bamboo Products",
    type: "Handicraft",
    image: "https://example.com/bareilly.jpg",
    description: "Bareilly is known for its exquisite cane and bamboo products.",
    businesses: [
      {
        name: "Bareilly Bamboo Crafts",
        image: "https://randomuser.me/api/portraits/men/25.jpg",
        desc: "info@bareillybamboo.com",
        phone: "9876543223",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Basti",
    coords: [26.7940, 82.7317],
    product: "Jute Products",
    type: "Handicraft",
    image: "https://example.com/basti.jpg",
    description: "Basti is famous for its high-quality jute products.",
    businesses: [
      {
        name: "Basti Jute Works",
        image: "https://randomuser.me/api/portraits/men/26.jpg",
        desc: "info@bastijute.com",
        phone: "9876543224",
        rate: "INR 2500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Bijnor",
    coords: [29.3721, 78.1363],
    product: "Sugar",
    type: "Agriculture",
    image: "https://example.com/bijnor.jpg",
    description: "Bijnor is known for its high-quality sugar production.",
    businesses: [
      {
        name: "Bijnor Sugar Mills",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
        desc: "info@bijnorsugar.com",
        phone: "9876543225",
        rate: "INR 1000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Budaun",
    coords: [28.0389, 79.1205],
    product: "Wheat",
    type: "Agriculture",
    image: "https://example.com/budaun.jpg",
    description: "Budaun is famous for its high-quality wheat.",
    businesses: [
      {
        name: "Budaun Wheat Farms",
        image: "https://randomuser.me/api/portraits/men/28.jpg",
        desc: "info@budaunwheat.com",
        phone: "9876543226",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Bulandshahr",
    coords: [28.4066, 77.8493],
    product: "Pottery",
    type: "Handicraft",
    image: "https://example.com/bulandshahr.jpg",
    description: "Bulandshahr is known for its traditional pottery.",
    businesses: [
      {
        name: "Bulandshahr Pottery Works",
        image: "https://randomuser.me/api/portraits/men/29.jpg",
        desc: "info@bulandshahrpottery.com",
        phone: "9876543227",
        rate: "INR 2000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Chandauli",
    coords: [25.2619, 83.2686],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/chandauli.jpg",
    description: "Chandauli is famous for its aromatic rice varieties.",
    businesses: [
      {
        name: "Chandauli Rice Mills",
        image: "https://randomuser.me/api/portraits/men/30.jpg",
        desc: "info@chandaulirice.com",
        phone: "9876543228",
        rate: "INR 1500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Chitrakoot",
    coords: [25.1995, 80.8649],
    product: "Guava",
    type: "Agriculture",
    image: "https://example.com/chitrakoot.jpg",
    description: "Chitrakoot is known for its delicious guavas.",
    businesses: [
      {
        name: "Chitrakoot Guava Farms",
        image: "https://randomuser.me/api/portraits/men/31.jpg",
        desc: "info@chitrakootguava.com",
        phone: "9876543229",
        rate: "INR 1000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Deoria",
    coords: [26.5047, 83.7873],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/deoria.jpg",
    description: "Deoria is famous for its high-quality rice.",
    businesses: [
      {
        name: "Deoria Rice Mills",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        desc: "info@deoriarice.com",
        phone: "9876543230",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Etah",
    coords: [27.5619, 78.6506],
    product: "Wheat",
    type: "Agriculture",
    image: "https://example.com/etah.jpg",
    description: "Etah is known for its high-quality wheat.",
    businesses: [
      {
        name: "Etah Wheat Farms",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        desc: "info@etahwheat.com",
        phone: "9876543231",
        rate: "INR 1500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Etawah",
    coords: [26.7768, 79.0219],
    product: "Pottery",
    type: "Handicraft",
    image: "https://example.com/etawah.jpg",
    description: "Etawah is famous for its traditional pottery.",
    businesses: [
      {
        name: "Etawah Pottery Works",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
        desc: "info@etawahpottery.com",
        phone: "9876543232",
        rate: "INR 2000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Faizabad",
    coords: [26.7731, 82.1386],
    product: "Handloom Products",
    type: "Textile",
    image: "https://example.com/faizabad.jpg",
    description: "Faizabad is known for its traditional handloom products.",
    businesses: [
      {
        name: "Faizabad Handloom Center",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
        desc: "info@faizabadhandloom.com",
        phone: "9876543233",
        rate: "INR 2500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Farrukhabad",
    coords: [27.3917, 79.6302],
    product: "Pottery",
    type: "Handicraft",
    image: "https://example.com/farrukhabad.jpg",
    description: "Farrukhabad is famous for its traditional pottery.",
    businesses: [
      {
        name: "Farrukhabad Pottery Works",
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        desc: "info@farrukhabadpottery.com",
        phone: "9876543234",
        rate: "INR 2000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Fatehpur",
    coords: [25.9279, 80.8136],
    product: "Wheat",
    type: "Agriculture",
    image: "https://example.com/fatehpur.jpg",
    description: "Fatehpur is known for its high-quality wheat.",
    businesses: [
      {
        name: "Fatehpur Wheat Farms",
        image: "https://randomuser.me/api/portraits/men/37.jpg",
        desc: "info@fatehpurwheat.com",
        phone: "9876543235",
        rate: "INR 1500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Firozabad",
    coords: [27.1591, 78.3958],
    product: "Glass Bangles",
    type: "Handicraft",
    image: "https://example.com/firozabad.jpg",
    description: "Firozabad is famous for its exquisite glass bangles.",
    businesses: [
      {
        name: "Firozabad Glass Works",
        image: "https://randomuser.me/api/portraits/men/38.jpg",
        desc: "info@firozabadglass.com",
        phone: "9876543236",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Gautam Buddha Nagar",
    coords: [28.3586, 77.5507],
    product: "Pottery",
    type: "Handicraft",
    image: "https://example.com/gautambuddhanagar.jpg",
    description: "Gautam Buddha Nagar is known for its traditional pottery.",
    businesses: [
      {
        name: "Gautam Buddha Nagar Pottery Works",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
        desc: "info@gautambuddhanagarpottery.com",
        phone: "9876543237",
        rate: "INR 2000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Ghaziabad",
    coords: [28.6692, 77.4538],
    product: "Handloom Products",
    type: "Textile",
    image: "https://example.com/ghaziabad.jpg",
    description: "Ghaziabad is famous for its traditional handloom products.",
    businesses: [
      {
        name: "Ghaziabad Handloom Center",
        image: "https://randomuser.me/api/portraits/men/40.jpg",
        desc: "info@ghaziabadhandloom.com",
        phone: "9876543238",
        rate: "INR 2500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Ghazipur",
    coords: [25.5836, 83.5726],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/ghazipur.jpg",
    description: "Ghazipur is known for its high-quality rice.",
    businesses: [
      {
        name: "Amrit Corp.LTD.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@amrit.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "SINTHAYAI Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@foods.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "illet YArd PVT.LTD",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@milletyard.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Beautyma Agro Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@agro.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Chheda Specialties Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@chheda.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Bharat Mandi",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@baharatmandi.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Pagariya Foods Products Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@pagariya.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Ancient Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@ancient.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Khadyam Specialities Foods Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@kahdyam.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Farmers Producer Company Ltd.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@farmers.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Gonda",
    coords: [27.1318, 81.9533],
    product: "Jute Products",
    type: "Handicraft",
    image: "https://example.com/gonda.jpg",
    description: "Gonda is famous for its high-quality jute products.",
    businesses: [
      {
        name: "Gonda Jute Works",
        image: "https://randomuser.me/api/portraits/men/42.jpg",
        desc: "info@gondajute.com",
        phone: "9876543240",
        rate: "INR 2500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Gorakhpur",
    coords: [26.7606, 83.3732],
    product: "Terracotta",
    type: "Handicraft",
    image: "https://example.com/gorakhpur.jpg",
    description: "Gorakhpur is known for its exquisite terracotta products.",
    businesses: [
      {
        name: "Gorakhpur Terracotta Works",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        desc: "info@gorakhpurterracotta.com",
        phone: "9876543241",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Hamirpur",
    coords: [25.9550, 80.1500],
    product: "Wheat",
    type: "Agriculture",
    image: "https://example.com/hamirpur.jpg",
    description: "Hamirpur is famous for its high-quality wheat.",
    businesses: [
      {
        name: "Hamirpur Wheat Farms",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
        desc: "info@hamirpurwheat.com",
        phone: "9876543242",
        rate: "INR 1500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Hapur",
    coords: [28.7298, 77.7807],
    product: "Pottery",
    type: "Handicraft",
    image: "https://example.com/hapur.jpg",
    description: "Hapur is known for its traditional pottery.",
    businesses: [
      {
        name: "Hapur Pottery Works",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        desc: "info@hapurpottery.com",
        phone: "9876543243",
        rate: "INR 2000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Hardoi",
    coords: [27.4167, 80.1167],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/hardoi.jpg",
    description: "Hardoi is famous for its high-quality rice.",
    businesses: [
      {
        name: "Amrit Corp.LTD.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@amrit.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "SINTHAYAI Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@foods.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "illet YArd PVT.LTD",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@milletyard.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Beautyma Agro Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@agro.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Chheda Specialties Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@chheda.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Bharat Mandi",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@baharatmandi.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Pagariya Foods Products Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@pagariya.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Ancient Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@ancient.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Khadyam Specialities Foods Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@kahdyam.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Farmers Producer Company Ltd.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@farmers.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Hathras",
    coords: [27.6000, 78.0500],
    product: "Handloom Products",
    type: "Textile",
    image: "https://example.com/hathras.jpg",
    description: "Hathras is known for its traditional handloom products.",
    businesses: [
      {
        name: "Hathras Handloom Center",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
        desc: "info@hathrashandloom.com",
        phone: "9876543245",
        rate: "INR 2500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Jalaun",
    coords: [26.1486, 79.3500],
    product: "Wheat",
    type: "Agriculture",
    image: "https://example.com/jalaun.jpg",
    description: "Jalaun is famous for its high-quality wheat.",
    businesses: [
      {
        name: "Amrit Corp.LTD.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@amrit.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "SINTHAYAI Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@foods.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "illet YArd PVT.LTD",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@milletyard.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Beautyma Agro Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@agro.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Chheda Specialties Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@chheda.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Bharat Mandi",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@baharatmandi.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Pagariya Foods Products Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@pagariya.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Ancient Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@ancient.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Khadyam Specialities Foods Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@kahdyam.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Farmers Producer Company Ltd.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@farmers.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Jaunpur",
    coords: [25.7333, 82.6833],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/jaunpur.jpg",
    description: "Jaunpur is known for its high-quality rice.",
    businesses: [
      {
        name: "Amrit Corp.LTD.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@amrit.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "SINTHAYAI Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@foods.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "illet YArd PVT.LTD",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@milletyard.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Beautyma Agro Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@agro.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Chheda Specialties Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@chheda.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Bharat Mandi",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@baharatmandi.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Pagariya Foods Products Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@pagariya.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Ancient Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@ancient.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Khadyam Specialities Foods Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@kahdyam.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Farmers Producer Company Ltd.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@farmers.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Jhansi",
    coords: [25.4484, 78.5685],
    product: "Granite",
    type: "Mining",
    image: "https://example.com/jhansi.jpg",
    description: "Jhansi is famous for its high-quality granite.",
    businesses: [
      {
        name: "Jhansi Granite Works",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        desc: "info@jhansigranite.com",
        phone: "9876543248",
        rate: "INR 5000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Kannauj",
    coords: [27.0546, 79.9220],
    product: "Perfume",
    type: "Handicraft",
    image: "https://example.com/kannauj.jpg",
    description: "Kannauj is known for its traditional perfumes.",
    businesses: [
      {
        name: "Kannauj Perfume Works",
        image: "https://randomuser.me/api/portraits/men/51.jpg",
        desc: "info@kannaujperfume.com",
        phone: "9876543249",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Kanpur Dehat",
    coords: [26.4983, 80.3196],
    product: "Wheat",
    type: "Agriculture",
    image: "https://example.com/kanpurdehat.jpg",
    description: "Kanpur Dehat is famous for its high-quality wheat.",
    businesses: [
      {
        name: "Amrit Corp.LTD.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@amrit.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "SINTHAYAI Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@foods.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "illet YArd PVT.LTD",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@milletyard.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Beautyma Agro Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@agro.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Chheda Specialties Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@chheda.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Bharat Mandi",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@baharatmandi.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Pagariya Foods Products Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@pagariya.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Ancient Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@ancient.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Khadyam Specialities Foods Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@kahdyam.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Farmers Producer Company Ltd.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@farmers.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Aligarh",
    coords: [27.8974, 78.088],
    product: "Locks",
    type: "Hardware",
    image: "https://example.com/aligarh-locks.jpg",
    description: "Aligarh is famous for its robust and durable locks, which are exported worldwide.",
    businesses: [
      {
        name: "Secure Locks Ltd.",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        desc: "Manufacturer of high-security locks.",
      },
    ],
  },
  {
    name: "Kanpur Nagar",
    coords: [26.4499, 80.3319],
    product: "Leather Products",
    type: "Leather",
    image: "https://example.com/kanpurnagar.jpg",
    description: "Kanpur Nagar is known for its high-quality leather products.",
    businesses: [
      {
        name: "Asian Leather Private Limited",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        desc: "mail@asianleather.com",
        phone: "8756749280",
        rate: "INR 45000",
        video: "to be uploaded"

      },
      {
        name: "Ahmed tanmay Pvt. Ltd.",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "atcalcutta@vsnl.net",
        phone: "7658905435",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Acme Leathercraft",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "info@water-lily.com",
        phone: "8756749980",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Balaji Leather Creation",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "amitabh.blc@gmail.com",
        phone: "9254675213",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "BG Service",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "bgservices.india@gmail.com",
        phone: "7454756487",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Ciria Tanning Company Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "classictanneryco.vsnl.net",
        phone: "6556543490",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Dream WeaverPvt. Ltd",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "dreamweaver.rsan@yahoo.com",
        phone: "8756749280",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Das Style Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "office@dasstylev.com",
        phone: "8756749280",
        rate: "INR 45000",
        video: "to be uploaded"
      },
    ],
  },
  {
    name: "Aligarh",
    coords: [27.8974, 78.088],
    product: "Locks",
    type: "Hardware",
    image: "https://example.com/aligarh-locks.jpg",
    description: "Aligarh is famous for its robust and durable locks, which are exported worldwide.",
    businesses: [
      {
        name: "Secure Locks Ltd.",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        desc: "Manufacturer of high-security locks.",
      },
    ],
  },
  {
    name: "Kasganj",
    coords: [27.8089, 78.6458],
    product: "Pottery",
    type: "Handicraft",
    image: "https://example.com/kasganj.jpg",
    description: "Kasganj is famous for its traditional pottery.",
    businesses: [
      {
        name: "Kasganj Pottery Works",
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        desc: "info@kasganjpottery.com",
        phone: "9876543252",
        rate: "INR 2000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Kaushambi",
    coords: [25.5300, 81.3900],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/kaushambi.jpg",
    description: "Kaushambi is known for its high-quality rice.",
    businesses: [
      {
        name: "Kaushambi Rice Mills",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
        desc: "info@kaushambirice.com",
        phone: "9876543253",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Kushinagar",
    coords: [26.7403, 83.8889],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/kushinagar.jpg",
    description: "Kushinagar is famous for its high-quality rice.",
    businesses: [
      {
        name: "Kushinagar Rice Mills",
        image: "https://randomuser.me/api/portraits/men/56.jpg",
        desc: "info@kushinagarrice.com",
        phone: "9876543254",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Lakhimpur Kheri",
    coords: [27.9483, 80.7794],
    product: "Sugarcane",
    type: "Agriculture",
    image: "https://example.com/lakhimpurkheri.jpg",
    description: "Lakhimpur Kheri is known for its high-quality sugarcane.",
    businesses: [
      {
        name: "Lakhimpur Kheri Sugarcane Farms",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
        desc: "info@lakhimpurkherisugarcane.com",
        phone: "9876543255",
        rate: "INR 1000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Lalitpur",
    coords: [24.6850, 78.4139],
    product: "Granite",
    type: "Mining",
    image: "https://example.com/lalitpur.jpg",
    description: "Lalitpur is famous for its high-quality granite.",
    businesses: [
      {
        name: "Lalitpur Granite Works",
        image: "https://randomuser.me/api/portraits/men/58.jpg",
        desc: "info@lalitpurgranite.com",
        phone: "9876543256",
        rate: "INR 5000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Lucknow",
    coords: [26.8467, 80.9462],
    product: "Chikankari Embroidery",
    type: "Textile",
    image: "https://example.com/lucknow.jpg",
    description: "Lucknow is known for its exquisite Chikankari embroidery.",
    businesses: [
      {
        name: "Lucknow Chikankari Center",
        image: "https://randomuser.me/api/portraits/men/59.jpg",
        desc: "info@lucknowchikankari.com",
        phone: "9876543257",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Maharajganj",
    coords: [27.1333, 83.5667],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/maharajganj.jpg",
    description: "Maharajganj is famous for its high-quality rice.",
    businesses: [
      {
        name: "Maharajganj Rice Mills",
        image: "https://randomuser.me/api/portraits/men/60.jpg",
        desc: "info@maharajganjrice.com",
        phone: "9876543258",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Mahoba",
    coords: [25.2833, 79.8667],
    product: "Granite",
    type: "Mining",
    image: "https://example.com/mahoba.jpg",
    description: "Mahoba is known for its high-quality granite.",
    businesses: [
      {
        name: "Mahoba Granite Works",
        image: "https://randomuser.me/api/portraits/men/61.jpg",
        desc: "info@mahobagranite.com",
        phone: "9876543259",
        rate: "INR 5000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Mainpuri",
    coords: [27.2333, 79.0167],
    product: "Wheat",
    type: "Agriculture",
    image: "https://example.com/mainpuri.jpg",
    description: "Mainpuri is famous for its high-quality wheat.",
    businesses: [
      {
        name: "Amrit Corp.LTD.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@amrit.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "SINTHAYAI Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@foods.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "illet YArd PVT.LTD",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@milletyard.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Beautyma Agro Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@agro.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Chheda Specialties Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@chheda.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Bharat Mandi",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@baharatmandi.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Pagariya Foods Products Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@pagariya.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Ancient Foods",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@ancient.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Khadyam Specialities Foods Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@kahdyam.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      },
      {
        name: "Farmers Producer Company Ltd.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "info@farmers.com",
        phone: "9876543239",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Mathura",
    coords: [27.4924, 77.6737],
    product: "Pottery",
    type: "Handicraft",
    image: "https://example.com/mathura.jpg",
    description: "Mathura is known for its traditional pottery.",
    businesses: [
      {
        name: "Mathura Pottery Works",
        image: "https://randomuser.me/api/portraits/men/63.jpg",
        desc: "info@mathurapottery.com",
        phone: "9876543261",
        rate: "INR 2000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Mau",
    coords: [25.9417, 83.5611],
    product: "Silk Sarees",
    type: "Textile",
    image: "https://example.com/mau.jpg",
    description: "Mau is famous for its exquisite silk sarees.",
    businesses: [
      {
        name: "Mau Silk Saree Center",
        image: "https://randomuser.me/api/portraits/men/64.jpg",
        desc: "info@mausilksaree.com",
        phone: "9876543262",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Meerut",
    coords: [28.9845, 77.7064],
    product: "Sports Goods",
    type: "Handicraft",
    image: "https://example.com/meerut.jpg",
    description: "Meerut is known for its high-quality sports goods.",
    businesses: [
      {
        name: "Meerut Sports Goods Works",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        desc: "info@meerutsports.com",
        phone: "9876543263",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Mirzapur",
    coords: [25.1449, 82.5653],
    product: "Carpets",
    type: "Handicraft",
    image: "https://example.com/mirzapur.jpg",
    description: "Mirzapur is famous for its exquisite carpets.",
    businesses: [
      {
        name: "Mirzapur Carpet Works",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
        desc: "info@mirzapurcarpet.com",
        phone: "9876543264",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Moradabad",
    coords: [28.8389, 78.7768],
    product: "Brassware",
    type: "Handicraft",
    image: "https://example.com/moradabad.jpg",
    description: "Moradabad is known for its exquisite brassware.",
    businesses: [
      {
        name: "Moradabad Brassware Works",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        desc: "info@moradabadbrassware.com",
        phone: "9876543265",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Muzaffarnagar",
    coords: [29.4709, 77.7033],
    product: "Sugar",
    type: "Agriculture",
    image: "https://example.com/muzaffarnagar.jpg",
    description: "Muzaffarnagar is famous for its high-quality sugar.",
    businesses: [
      {
        name: "Muzaffarnagar Sugar Mills",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
        desc: "info@muzaffarnagarsugar.com",
        phone: "9876543266",
        rate: "INR 1000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Pilibhit",
    coords: [28.6312, 79.8044],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/pilibhit.jpg",
    description: "Pilibhit is known for its high-quality rice.",
    businesses: [
      {
        name: "Pilibhit Rice Mills",
        image: "https://randomuser.me/api/portraits/men/69.jpg",
        desc: "info@pilibhitrice.com",
        phone: "9876543267",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Pratapgarh",
    coords: [25.8967, 81.9436],
    product: "Guava",
    type: "Agriculture",
    image: "https://example.com/pratapgarh.jpg",
    description: "Pratapgarh is famous for its delicious guavas.",
    businesses: [
      {
        name: "Pratapgarh Guava Farms",
        image: "https://randomuser.me/api/portraits/men/70.jpg",
        desc: "info@pratapgarhguava.com",
        phone: "9876543268",
        rate: "INR 1000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Rae Bareli",
    coords: [26.2309, 81.2332],
    product: "Handloom Products",
    type: "Textile",
    image: "https://example.com/raebareli.jpg",
    description: "Rae Bareli is known for its traditional handloom products.",
    businesses: [
      {
        name: "Rae Bareli Handloom Center",
        image: "https://randomuser.me/api/portraits/men/71.jpg",
        desc: "info@raebarelihandloom.com",
        phone: "9876543269",
        rate: "INR 2500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Rampur",
    coords: [28.8031, 79.0244],
    product: "Brassware",
    type: "Handicraft",
    image: "https://example.com/rampur.jpg",
    description: "Rampur is famous for its exquisite brassware.",
    businesses: [
      {
        name: "Rampur Brassware Works",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
        desc: "info@rampurbrassware.com",
        phone: "9876543270",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Saharanpur",
    coords: [29.9679, 77.5452],
    product: "Wooden Furniture",
    type: "Handicraft",
    image: "https://example.com/saharanpur.jpg",
    description: "Saharanpur is known for its beautifully crafted wooden furniture.",
    businesses: [
      {
        name: "Saharanpur Furniture Works",
        image: "https://randomuser.me/api/portraits/men/73.jpg",
        desc: "info@saharanpurfurniture.com",
        phone: "9876543271",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Sambhal",
    coords: [28.5833, 78.5500],
    product: "Brassware",
    type: "Handicraft",
    image: "https://example.com/sambhal.jpg",
    description: "Sambhal is famous for its exquisite brassware.",
    businesses: [
      {
        name: "Sambhal Brassware Works",
        image: "https://randomuser.me/api/portraits/men/74.jpg",
        desc: "info@sambhalbrassware.com",
        phone: "9876543272",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Sant Kabir Nagar",
    coords: [26.7833, 83.0667],
    product: "Jute Products",
    type: "Handicraft",
    image: "https://example.com/santkabirnagar.jpg",
    description: "Sant Kabir Nagar is known for its high-quality jute products.",
    businesses: [
      {
        name: "Sant Kabir Nagar Jute Works",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        desc: "info@santkabirnagarjute.com",
        phone: "9876543273",
        rate: "INR 2500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Shahjahanpur",
    coords: [27.8833, 79.9167],
    product: "Sugar",
    type: "Agriculture",
    image: "https://example.com/shahjahanpur.jpg",
    description: "Shahjahanpur is famous for its high-quality sugar.",
    businesses: [
      {
        name: "Shahjahanpur Sugar Mills",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
        desc: "info@shahjahanpursugar.com",
        phone: "9876543274",
        rate: "INR 1000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Shravasti",
    coords: [27.5167, 82.0500],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/shravasti.jpg",
    description: "Shravasti is known for its high-quality rice.",
    businesses: [
      {
        name: "Shravasti Rice Mills",
        image: "https://randomuser.me/api/portraits/men/77.jpg",
        desc: "info@shravastirice.com",
        phone: "9876543275",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Siddharthnagar",
    coords: [27.2833, 83.1000],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/siddharthnagar.jpg",
    description: "Siddharthnagar is famous for its high-quality rice.",
    businesses: [
      {
        name: "Siddharthnagar Rice Mills",
        image: "https://randomuser.me/api/portraits/men/78.jpg",
        desc: "info@siddharthnagarrice.com",
        phone: "9876543276",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Sitapur",
    coords: [27.5667, 80.6833],
    product: "Wheat",
    type: "Agriculture",
    image: "https://example.com/sitapur.jpg",
    description: "Sitapur is known for its high-quality wheat.",
    businesses: [
      {
        name: "Sitapur Wheat Farms",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
        desc: "info@sitapurwheat.com",
        phone: "9876543277",
        rate: "INR 1500",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Sonbhadra",
    coords: [24.6833, 83.0667],
    product: "Granite",
    type: "Mining",
    image: "https://example.com/sonbhadra.jpg",
    description: "Sonbhadra is famous for its high-quality granite.",
    businesses: [
      {
        name: "Sonbhadra Granite Works",
        image: "https://randomuser.me/api/portraits/men/80.jpg",
        desc: "info@sonbhadragranite.com",
        phone: "9876543278",
        rate: "INR 5000",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Sultanpur",
    coords: [26.2667, 82.0667],
    product: "Rice",
    type: "Agriculture",
    image: "https://example.com/sultanpur.jpg",
    description: "Sultanpur is known for its high-quality rice.",
    businesses: [
      {
        name: "Sultanpur Rice Mills",
        image: "https://randomuser.me/api/portraits/men/81.jpg",
        desc: "info@sultanpurrice.com",
        phone: "9876543279",
        rate: "INR 1200",
        video: "to be uploaded"
      }
    ]
  },
  {
    name: "Unnao",
    coords: [26.5500, 80.4833],
    product: "Leather Products",
    type: "Leather",
    image: "https://example.com/unnao.jpg",
    description: "Unnao is famous for its high-quality leather products.",
    businesses: [
      {
        name: "Asian Leather Private Limited",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        desc: "mail@asianleather.com",
        phone: "8756749280",
        rate: "INR 45000",
        video: "to be uploaded"

      },
      {
        name: "Ahmed tanmay Pvt. Ltd.",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "atcalcutta@vsnl.net",
        phone: "7658905435",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Acme Leathercraft",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "info@water-lily.com",
        phone: "8756749980",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Balaji Leather Creation",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "amitabh.blc@gmail.com",
        phone: "9254675213",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "BG Service",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "bgservices.india@gmail.com",
        phone: "7454756487",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Ciria Tanning Company Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "classictanneryco.vsnl.net",
        phone: "6556543490",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Dream WeaverPvt. Ltd",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "dreamweaver.rsan@yahoo.com",
        phone: "8756749280",
        rate: "INR 45000",
        video: "to be uploaded"
      },
      {
        name: "Das Style Pvt.Ltd",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        desc: "office@dasstylev.com",
        phone: "8756749280",
        rate: "INR 45000",
        video: "to be uploaded"
      },
    ],
  },
  {
    name: "Aligarh",
    coords: [27.8974, 78.088],
    product: "Locks",
    type: "Hardware",
    image: "https://example.com/aligarh-locks.jpg",
    description: "Aligarh is famous for its robust and durable locks, which are exported worldwide.",
    businesses: [
      {
        name: "Secure Locks Ltd.",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        desc: "Manufacturer of high-security locks.",
      },
    ],
  },
  {
    name: "Varanasi",
    coords: [25.3176, 82.9739],
    product: "Silk Sarees",
    type: "Textile",
    image: "https://example.com/varanasi.jpg",
    description: "Varanasi is known for its exquisite silk sarees.",
    businesses: [
      {
        name: "Varanasi Silk Saree Center",
        image: "https://randomuser.me/api/portraits/men/83.jpg",
        desc: "info@varanasisilksaree.com",
        phone: "9876543281",
        rate: "INR 3000",
        video: "to be uploaded"
      }
    ]
  }
];

export default districts;
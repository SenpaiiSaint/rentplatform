import { Property } from "./schema";

const mockProperties: Property[] = [
  {
    id: "1",
    name: "Maplewood Apartments",
    address: "123 Maple St, Springfield, IL",
    owner: "Alice Johnson",
    units: 12,
    status: "occupied",
  },
  {
    id: "2",
    name: "Lakeside Villas",
    address: "456 Lakeview Dr, Madison, WI",
    owner: "Bob Smith",
    units: 8,
    status: "vacant",
  },
  {
    id: "3",
    name: "Downtown Lofts",
    address: "789 Main St, Chicago, IL",
    owner: "Carol Lee",
    units: 20,
    status: "maintenance",
  },
  {
    id: "4",
    name: "Sunset Condos",
    address: "321 Sunset Blvd, Los Angeles, CA",
    owner: "David Kim",
    units: 15,
    status: "occupied",
  },
  {
    id: "5",
    name: "Pinecrest Homes",
    address: "654 Pinecrest Ave, Denver, CO",
    owner: "Evelyn Wright",
    units: 10,
    status: "vacant",
  },
  {
    id: "6",
    name: "Riverside Townhomes",
    address: "987 Riverside Rd, Austin, TX",
    owner: "Frank Miller",
    units: 18,
    status: "occupied",
  },
  {
    id: "7",
    name: "Hilltop Estates",
    address: "246 Hilltop Ln, Seattle, WA",
    owner: "Grace Chen",
    units: 22,
    status: "maintenance",
  },
  {
    id: "8",
    name: "Cedar Grove",
    address: "135 Cedar Grove, Portland, OR",
    owner: "Henry Adams",
    units: 9,
    status: "occupied",
  },
  {
    id: "9",
    name: "Oceanview Residences",
    address: "864 Oceanview Dr, Miami, FL",
    owner: "Irene Lopez",
    units: 14,
    status: "vacant",
  },
  {
    id: "10",
    name: "Elmwood Flats",
    address: "753 Elmwood Ave, Columbus, OH",
    owner: "Jack Brown",
    units: 11,
    status: "occupied",
  },
  {
    id: "11",
    name: "Hollywood Hills Mansion",
    address: "1000 Hollywood Blvd, Los Angeles, CA",
    owner: "Lana Delmar",
    units: 1,
    status: "occupied",
  },
  {
    id: "12",
    name: "Calabasas Retreat",
    address: "200 Hidden Hills Rd, Calabasas, CA",
    owner: "Rick Fox",
    units: 1,
    status: "vacant",
  },
  {
    id: "13",
    name: "Casa del Sol",
    address: "Av. Coba 123, Tulum, Quintana Roo, Mexico",
    owner: "Maria Fernandez",
    units: 3,
    status: "occupied",
  },
  {
    id: "14",
    name: "Houston Heights Residence",
    address: "789 Heights Blvd, Houston, TX",
    owner: "James Carter",
    units: 2,
    status: "maintenance",
  },
  {
    id: "15",
    name: "Magnificent Mile Tower",
    address: "401 N Michigan Ave, Chicago, IL",
    owner: "Samantha Lee",
    units: 25,
    status: "occupied",
  },
  {
    id: "16",
    name: "Bayside Penthouse",
    address: "1500 Ocean Dr, Miami Beach, FL",
    owner: "Carlos Mendez",
    units: 1,
    status: "vacant",
  },
  {
    id: "17",
    name: "Tokyo Sakura Residence",
    address: "2-1-1 Nihonbashi, Chuo City, Tokyo, Japan",
    owner: "Yuki Tanaka",
    units: 6,
    status: "occupied",
  },
  {
    id: "18",
    name: "Montego Bay Villa",
    address: "Rose Hall Rd, Montego Bay, Jamaica",
    owner: "Alicia Morgan",
    units: 2,
    status: "vacant",
  },
  {
    id: "19",
    name: "Punta Cana Paradise",
    address: "Playa Bavaro, Punta Cana, Dominican Republic",
    owner: "Luis Ramirez",
    units: 4,
    status: "occupied",
  },
  {
    id: "20",
    name: "Swiss Alps Chalet",
    address: "Via Alpina 5, Zermatt, Switzerland",
    owner: "Heidi Baumann",
    units: 1,
    status: "maintenance",
  },
  {
    id: "21",
    name: "St Tropez Seaside Estate",
    address: "10 Chemin des Plages, St Tropez, France",
    owner: "Jean-Luc Moreau",
    units: 1,
    status: "occupied",
  },
  {
    id: "22",
    name: "Central Park Tower",
    address: "217 W 57th St, New York, NY",
    owner: "Olivia Harris",
    units: 30,
    status: "vacant",
  },
  {
    id: "23",
    name: "Costa Rica Rainforest Lodge",
    address: "Ruta 606, Monteverde, Costa Rica",
    owner: "Miguel Vargas",
    units: 5,
    status: "occupied",
  },
  {
    id: "24",
    name: "Monaco Harbor Residence",
    address: "1 Quai Louis II, Monaco",
    owner: "Sophie Laurent",
    units: 2,
    status: "maintenance",
  },
  {
    id: "25",
    name: "Aspen Mountain Lodge",
    address: "555 Snowmass Rd, Aspen, CO, USA",
    owner: "Natalie Brooks",
    units: 7,
    status: "occupied",
  },
  {
    id: "26",
    name: "Sydney Harbour View",
    address: "88 Circular Quay, Sydney, Australia",
    owner: "Liam O'Connor",
    units: 12,
    status: "vacant",
  },
  {
    id: "27",
    name: "Dubai Marina Residence",
    address: "22 Marina Walk, Dubai, UAE",
    owner: "Fatima Al Farsi",
    units: 18,
    status: "maintenance",
  },
  {
    id: "28",
    name: "Vancouver City Lofts",
    address: "1010 Robson St, Vancouver, BC, Canada",
    owner: "Lucas Chen",
    units: 15,
    status: "occupied",
  },
  {
    id: "29",
    name: "Boston Beacon Apartments",
    address: "77 Beacon St, Boston, MA, USA",
    owner: "Emily Carter",
    units: 10,
    status: "vacant",
  },
  {
    id: "30",
    name: "Barcelona Beach House",
    address: "12 Passeig Marítim, Barcelona, Spain",
    owner: "Miguel Torres",
    units: 3,
    status: "occupied",
  },
  {
    id: "31",
    name: "San Francisco Bayview",
    address: "300 Embarcadero, San Francisco, CA, USA",
    owner: "Priya Patel",
    units: 20,
    status: "maintenance",
  },
  {
    id: "32",
    name: "London Royal Residences",
    address: "1 Buckingham Gate, London, UK",
    owner: "Charlotte Evans",
    units: 8,
    status: "occupied",
  },
  {
    id: "33",
    name: "Berlin City Apartments",
    address: "45 Alexanderplatz, Berlin, Germany",
    owner: "Jonas Müller",
    units: 14,
    status: "vacant",
  },
  {
    id: "34",
    name: "Cape Town Oceanview",
    address: "9 Beach Rd, Cape Town, South Africa",
    owner: "Zanele Dlamini",
    units: 5,
    status: "occupied",
  },
  {
    id: "35",
    name: "Seattle Skyline Tower",
    address: "1201 3rd Ave, Seattle, WA, USA",
    owner: "Mason Reed",
    units: 16,
    status: "occupied",
  },
  {
    id: "36",
    name: "Parisian Riverfront Flat",
    address: "22 Quai de la Tournelle, Paris, France",
    owner: "Camille Dubois",
    units: 2,
    status: "vacant",
  },
  {
    id: "37",
    name: "Toronto City Residences",
    address: "350 Bay St, Toronto, ON, Canada",
    owner: "Ava Singh",
    units: 10,
    status: "maintenance",
  },
  {
    id: "38",
    name: "Rio Beachfront Condo",
    address: "500 Copacabana, Rio de Janeiro, Brazil",
    owner: "Lucas Silva",
    units: 6,
    status: "occupied",
  },
  {
    id: "39",
    name: "Moscow City Tower",
    address: "12 Presnenskaya Embankment, Moscow, Russia",
    owner: "Irina Petrova",
    units: 14,
    status: "vacant",
  },
  {
    id: "40",
    name: "Bangkok Riverside Villa",
    address: "88 Charoen Krung Rd, Bangkok, Thailand",
    owner: "Somsak Chaiyaporn",
    units: 4,
    status: "occupied",
  },
  {
    id: "41",
    name: "Auckland Harbour View",
    address: "1 Quay St, Auckland, New Zealand",
    owner: "Olivia Thompson",
    units: 7,
    status: "maintenance",
  },
  {
    id: "42",
    name: "Rome Historic Residence",
    address: "10 Via del Corso, Rome, Italy",
    owner: "Giovanni Rossi",
    units: 3,
    status: "occupied",
  },
  {
    id: "43",
    name: "Istanbul Bosphorus Mansion",
    address: "45 Bebek, Istanbul, Turkey",
    owner: "Selin Kaya",
    units: 5,
    status: "vacant",
  },
  {
    id: "44",
    name: "Hong Kong Peak Villa",
    address: "8 Mount Austin Rd, Hong Kong",
    owner: "Wei Zhang",
    units: 2,
    status: "occupied",
  },
  {
    id: "45",
    name: "San Diego Coastal Retreat",
    address: "700 Coast Blvd, San Diego, CA, USA",
    owner: "Chloe Martinez",
    units: 8,
    status: "maintenance",
  },
  {
    id: "46",
    name: "Vienna City Apartment",
    address: "15 Kärntner Str., Vienna, Austria",
    owner: "Stefan Bauer",
    units: 6,
    status: "occupied",
  },
  {
    id: "47",
    name: "Cape Cod Beach House",
    address: "123 Ocean St, Hyannis, MA, USA",
    owner: "Ethan Parker",
    units: 3,
    status: "vacant",
  },
  {
    id: "48",
    name: "Beijing Central Residence",
    address: "88 Chang'an Ave, Beijing, China",
    owner: "Li Wei",
    units: 12,
    status: "occupied",
  },
  {
    id: "49",
    name: "Santorini Cliffside Villa",
    address: "1 Oia, Santorini, Greece",
    owner: "Nikos Papadopoulos",
    units: 2,
    status: "maintenance",
  },
  {
    id: "50",
    name: "Dublin City Centre Flat",
    address: "5 Grafton St, Dublin, Ireland",
    owner: "Siobhan Murphy",
    units: 4,
    status: "occupied",
  },
];

export async function getProperties(): Promise<Property[]> {
  return mockProperties;
} 
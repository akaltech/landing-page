export interface CaseStudy {
  id: string;
  brand: string;
  color: string;
  poster: string;
  video: string;
  /** Cards link to the post. Without one the card renders un-clickable rather
      than pointing somewhere misleading. */
  tiktokUrl?: string;
  /* Not rendered since the cards were reduced to video + name. Kept because
     it is the record of each project, and cheap to carry. */
  description?: string;
  brief?: string;
  stats?: { views: string; likes: string };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "shake-shack",
    brand: "SHAKE SHACK",
    description: "When a New York icon goes fully halal",
    brief:
      "Broke the news that all UK beef and chicken is now halal-certified. The community had been waiting — we made sure they heard it first.",
    stats: { views: "251K", likes: "12.3K" },
    color: "#2D1F2D",
    poster: "/posters/shake-shack.webp",
    video: "/videos/v24044gl0000d4ct26nog65sqi3br5fg.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7573314351893908758",
  },
  {
    id: "cave-london-01",
    brand: "CAVE LONDON",
    color: "#26221F",
    poster: "/posters/cave-london-01.webp",
    video: "/videos/cave-london-01.mp4",
  },
  {
    id: "mr-whites-chophouse",
    brand: "MR WHITES CHOPHOUSE",
    description: "Marco Pierre White does iftar. Seriously.",
    brief:
      "Captured the full iftar sharing platter experience — sirloin, rack of lamb, sticky toffee — to drive Ramadan bookings from our community.",
    stats: { views: "87.8K", likes: "4.6K" },
    color: "#3D2B1F",
    poster: "/posters/mr-whites-chophouse.webp",
    video: "/videos/v24044gl0000cv8r4bnog65kc6l90q10.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7480957310173547798",
  },
  {
    id: "lorenzo-kusina",
    brand: "LORENZO KUSINI",
    description: "Filipino soul food, born in lockdown",
    brief:
      "Told the origin story of three brothers who turned a pandemic kitchen into London's halal Filipino movement. Adobo beef, jerk-glazed inasal, no pork ever.",
    stats: { views: "100.5K", likes: "9.6K" },
    color: "#3D1F1F",
    poster: "/posters/lorenzo-kusina.webp",
    video: "/videos/v24044gl0000d1vpobfog65iv3canr10.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7529909473364725014",
  },
  {
    id: "cave-london-02",
    brand: "CAVE LONDON",
    color: "#26221F",
    poster: "/posters/cave-london-02.webp",
    video: "/videos/cave-london-02.mp4",
  },
  {
    id: "meaa",
    brand: "MEAA",
    description: "Where brunch meets the Mediterranean",
    brief:
      "Highlighted the interiors and the menu — Southern European and North African flavours colliding in a space our audience needed to see.",
    stats: { views: "60.2K", likes: "1.8K" },
    color: "#1F2D3D",
    poster: "/posters/meaa.webp",
    video: "/videos/v24044gl0000d346bn7og65msp5ha51g.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7550397923125792022",
  },
  {
    id: "urumchi",
    brand: "URUMCHI",
    description: "The Uyghur kitchen London's been sleeping on",
    brief:
      "We spotlighted their hand-pulled noodles and crispy lamb ribs to introduce Uyghur cuisine to an audience that had never heard of it.",
    stats: { views: "46K", likes: "4.7K" },
    color: "#8B4513",
    poster: "/posters/urumchi.webp",
    video: "/videos/v0f044gc0000cu58cu7og65qqb7dn8ng.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7460923681783549217",
  },
  {
    id: "cave-london-03",
    brand: "CAVE LONDON",
    color: "#26221F",
    poster: "/posters/cave-london-03.webp",
    video: "/videos/cave-london-03.mp4",
  },
  {
    id: "cafe-east-pho",
    brand: "CAFE EAST PHO",
    description: "A 27-year pho legacy, still simmering",
    brief:
      "Told the story of a family recipe and a 10-hour broth — showing our audience that halal Vietnamese goes far beyond the usual spots.",
    stats: { views: "41.6K", likes: "1.8K" },
    color: "#2D4A3E",
    poster: "/posters/cafe-east-pho.webp",
    video: "/videos/v0f044gc0000culp5inog65tro2v6l00.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7470227610128157985",
  },
  {
    id: "thai-cup",
    brand: "THAI CUP",
    description: "Thai street food that doesn't compromise",
    brief:
      "Built hype around their signature Thai milk teas and street food classics — positioning them as the go-to Thai street food spot in central London.",
    stats: { views: "14.9K", likes: "1K" },
    color: "#4A2D2D",
    poster: "/posters/thai-cup.webp",
    video: "/videos/v24044gl0000cv2tuenog65i3plcus3g.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7477629917501443350",
  },
  {
    id: "cave-london-04",
    brand: "CAVE LONDON",
    color: "#26221F",
    poster: "/posters/cave-london-04.webp",
    video: "/videos/cave-london-04.mp4",
  },
  {
    id: "smoke-and-pepper",
    brand: "SMOKE & PEPPER",
    description: "12-hour brisket, zero compromise",
    brief:
      "Showcased the low-and-slow process behind their smoked brisket and smashed burgers — letting the craft speak for itself.",
    stats: { views: "10.6K", likes: "500" },
    color: "#1A3A2A",
    poster: "/posters/smoke-and-pepper.webp",
    video: "/videos/v24044gl0000d02iqbvog65oahpp4ttg.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7495450061720128790",
  },
  {
    id: "huong-viet",
    brand: "HUONG VIET",
    description: "Shoreditch's late-night banh mi window",
    brief:
      "Captured the energy of the midnight serving hatch and a 20-year master chef's pho — turning a local secret into a must-visit.",
    stats: { views: "21.5K", likes: "1.4K" },
    color: "#2A1F3D",
    poster: "/posters/huong-viet.webp",
    video: "/videos/v24044gl0000d0d2kevog65qsing9lo0.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7501356854686092567",
  },
  {
    id: "cave-london-05",
    brand: "CAVE LONDON",
    color: "#26221F",
    poster: "/posters/cave-london-05.webp",
    video: "/videos/cave-london-05.mp4",
  },
  {
    id: "hei-hei",
    brand: "HEI HEI",
    description: "Cantonese cooking in the heart of Whitechapel",
    brief:
      "Put the spotlight on proper Cantonese cooking for our community — a Whitechapel gem they needed on their radar.",
    stats: { views: "17.2K", likes: "1.4K" },
    color: "#3D3D1F",
    poster: "/posters/hei-hei.webp",
    video: "/videos/v24044gl0000d3b8817og65iavtpo4e0.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7554373176730422550",
  },
  {
    id: "top-five-indonesian",
    brand: "TOP FIVE INDONESIAN",
    description: "The nasi goreng worth knowing about",
    brief:
      "Put a spotlight on a cuisine that's massively underrepresented in London's food scene — bold spices, generous plates, no shortcuts.",
    stats: { views: "21K", likes: "1.6K" },
    color: "#1F3D2D",
    poster: "/posters/top-five-indonesian.webp",
    video: "/videos/v24044gl0000d5dt9jfog65m5m90vqeg.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7591895694731005206",
  },
  {
    id: "bali-bali",
    brand: "BALI BALI",
    description: "38 years of rijsttafel on Shaftesbury Avenue",
    brief:
      "Celebrated a family-run institution serving the West End since 1986 — the rijsttafel platter alone is an Indonesian education on one table.",
    stats: { views: "17.4K", likes: "1.2K" },
    color: "#3D2D1F",
    poster: "/posters/bali-bali.webp",
    video: "/videos/v24044gl0000d65j447og65ld8vreht0.MP4",
    tiktokUrl: "https://www.tiktok.com/@akal.space/video/7605227521856146690",
  },
];

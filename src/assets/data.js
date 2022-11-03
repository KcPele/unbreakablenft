import {
  board,
  cctv,
  eventscard,
  mic,
  schoolBatch,
  schoolImage,
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m3Complete,
  m4Complete,
  m5Complete,
  m6Complete,
  schoolImage1,
  schoolImage2,
  schoolImage4,
  schoolImage3,
  
} from ".";

export const initiativeData = [
  {
    icon: cctv,
    title: "CCTVs",
    desc: "Increase safety and security of students by installing CCTVs in selected high schools in Nigeria.",
  },
  {
    icon: mic,
    title: "Campaigns",
    desc: "Partner with organizations to create sensitization programs, seminars and essay competitions among students.",
  },
  {
    icon: board,
    title: "Story boards",
    desc: "Strategically place manual “promise boards” on some school campuses for positive affirmations.",
  },
];

export const journeyData = [
  {
    isaActive: false,
    version: "M1",
    year: "2022",
    title: "Pre-launch activities",
    desc: "Design and develop the website, create marketing plans, finish NFT artworks, plan and document anti-bullying initiatives",
  },
  {
    isaActive: true,
    version: "M2",
    year: "2022",
    title: "NFT & website Launch",
    desc: "Officially launch the NFT artworks and Unbroken website",
  },
  {
    isaActive: false,
    version: "M3",
    year: "2022",
    title: "Community building",
    desc: "Create social media pages, setup and onboard community and contributor platforms",
  },
  {
    isaActive: false,
    version: "M4",
    year: "2022",
    title: "Partnerships & NFT Sales",
    desc: "Host NFTs on Opensea, presale publicity and minting. Call for partnership.",
  },
];

export const schoolData = [
  {
    badge: schoolBatch,
    name: "GSS PASALI",
    address: "Kuje, Abuja",
    photo: schoolImage,
    videoLink: "https://",
  },
  {
    badge: schoolBatch,
    name: "GSS PASALI",
    address: "Kuje, Abuja",
    photo: schoolImage1,
    videoLink: "https://",
  },
  {
    badge: schoolBatch,
    name: "GSS PASALI",
    address: "Kuje, Abuja",
    photo: schoolImage2,
    videoLink: "https://",
  },
  {
    badge: schoolBatch,
    name: "GSS PASALI",
    address: "Kuje, Abuja",
    photo: schoolImage3,
    videoLink: "https://",
  },
  {
    badge: schoolBatch,
    name: "GSS PASALI",
    address: "Kuje, Abuja",
    photo: schoolImage4,
    videoLink: "https://",
  },
];

export const currentEventData = [
  {
    icon: "",
    center: "Twitter Space1",
    title: "Roadmap to the Future1",
    desc: "#respectme. The Anti-bullying alliance, join the movement, help make schools safer more kids",
    date: "Oct 12, 9:00 AM GMT+1",
    photo: eventscard,
    url: "#",
  },
  {
    icon: "",
    center: "Twitter Space2",
    title: "Roadmap to the Future2",
    desc: "#respectme. The Anti-bullying alliance, join the movement, help make schools safer more kids",
    date: "Oct 12, 9:00 AM GMT+1",
    photo: eventscard,
    url: "#",
  },
  {
    icon: "",
    center: "Twitter Space3",
    title: "Roadmap to the Future3",
    desc: "#respectme. The Anti-bullying alliance, join the movement, help make schools safer more kids",
    date: "Oct 12, 9:00 AM GMT+1",
    photo: eventscard,
    url: "#",
  },
];



export const pastEventData = [
  {
    icon: "",
    center: "Twitter Space1",
    title: "Roadmap to the Future1",
    desc: "#respectme. The Anti-bullying alliance, join the movement, help make schools safer more kids",
    date: "Oct 12, 9:00 AM GMT+1",
    photo: eventscard,
    url: "#",
  },
  {
    icon: "",
    center: "Twitter Space2",
    title: "Roadmap to the Future2",
    desc: "#respectme. The Anti-bullying alliance, join the movement, help make schools safer more kids",
    date: "Oct 12, 9:00 AM GMT+1",
    photo: eventscard,
    url: "#",
  },
  {
    icon: "",
    center: "Twitter Space3",
    title: "Roadmap to the Future3",
    desc: "#respectme. The Anti-bullying alliance, join the movement, help make schools safer more kids",
    date: "Oct 12, 9:00 AM GMT+1",
    photo: eventscard,
    url: "#",
  },
  {
    icon: "",
    center: "Twitter Space1",
    title: "Roadmap to the Future1",
    desc: "#respectme. The Anti-bullying alliance, join the movement, help make schools safer more kids",
    date: "Oct 12, 9:00 AM GMT+1",
    photo: eventscard,
    url: "#",
  },
  {
    icon: "",
    center: "Twitter Space2",
    title: "Roadmap to the Future2",
    desc: "#respectme. The Anti-bullying alliance, join the movement, help make schools safer more kids",
    date: "Oct 12, 9:00 AM GMT+1",
    photo: eventscard,
    url: "#",
  },
  {
    icon: "",
    center: "Twitter Space3",
    title: "Roadmap to the Future3",
    desc: "#respectme. The Anti-bullying alliance, join the movement, help make schools safer more kids",
    date: "Oct 12, 9:00 AM GMT+1",
    photo: eventscard,
    url: "#",
  },
];

export const roadmapData = [
  {
    isActive: false,
    isCompleted: true,
    version: "M1",
    progressIcon: m1,
    completedIcon: m1,
    year: "2022",
    title: "Pre-launch activities",
    desc: "Design and develop the website, create marketing plans, finish NFT artworks, plan and document anti-bullying initiatives",
  },
  {
    isActive: true,
    version: "M2",
    isCompleted: true,
    progressIcon: m2,
    completedIcon: m2,
    year: "2022",
    title: "NFT & website Launch",
    desc: "Officially launch the NFT artworks and Unbroken website",
  },
  {
    isActive: false,
    version: "M3",
    isCompleted: false,
    progressIcon: m3,
    completedIcon: m3Complete,
    year: "2022",
    title: "Community building",
    desc: "Create social media pages, setup and onboard community and contributor platforms",
  },
  {
    isActive: false,
    version: "M4",
    isCompleted: false,
    progressIcon: m4,
    completedIcon: m4Complete,
    year: "2022",
    title: "Partnerships & NFT Sales",
    desc: "Host NFTs on Opensea, presale publicity and minting. Call for partnership.",
  },
  {
    isActive: false,
    version: "M5",
    isCompleted: false,
    progressIcon: m5,
    completedIcon: m5Complete,
    year: "2022",
    title: "Groundwork for execution ",
    desc: "Pre-launch publicity and activities, Launch NFT, website, Pre-launch publicity and activities, Launch NFT, website, Pre-launch publicity and activities, Launch NFT, website, Pre-launch publicity and activities, Launch NFT, website",
  },
  {
    isActive: false,
    version: "M6",
    isCompleted: false,
    progressIcon: m6,
    completedIcon: m6Complete,
    year: "2022",
    title: "Execution of projects ",
    desc: "Pre-launch publicity and activities, Launch NFT, website, Pre-launch publicity and activities, Launch NFT, website, Pre-launch publicity and activities, Launch NFT, website, Pre-launch publicity and activities, Launch NFT, website",
  },
];

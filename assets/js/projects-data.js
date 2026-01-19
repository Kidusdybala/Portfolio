// Projects data with gallery images
// Categories: websites, telegram bots, simulations, applications
const projectsData = [
  // ==================== WEBSITES ====================
  {
    id: 'efootball',
    title: 'eFootball',
    category: 'websites',
    description: 'Football-related web application (TypeScript)',
    thumbnail: './assets/images/projects/efootball/home page.jpg',
    githubUrl: 'https://github.com/Kidusdybala/efootball',
    liveUrl: null,
    gallery: [
      './assets/images/projects/efootball/home page.jpg',
      './assets/images/projects/efootball/main.jpg',
      './assets/images/projects/efootball/desktop view.jpg',
      './assets/images/projects/efootball/coin page.jpg',
      './assets/images/projects/efootball/payment.jpg',
      './assets/images/projects/efootball/admin.jpg',
      './assets/images/projects/efootball/domain.jpg',
      './assets/images/projects/efootball/google domain registered.jpg',
      './assets/images/projects/efootball/google approval.jpg'
    ]
  },
  {
    id: 'yegnachat',
    title: 'YegnaChat',
    category: 'websites',
    description: 'Real-time Ethiopian messaging app (JavaScript)',
    thumbnail: './assets/images/projects/Yegna chat/yegna chat project overview.png',
    githubUrl: 'https://github.com/Kidusdybala/YegnaChat',
    liveUrl: null,
    gallery: [
      './assets/images/projects/Yegna chat/yegna chat project overview.png',
      './assets/images/projects/Yegna chat/Screenshot 2025-09-01 225416.png',
      './assets/images/projects/Yegna chat/Screenshot 2025-09-01 232658.png',
      './assets/images/projects/Yegna chat/Screenshot 2025-09-03 013817.png'
    ]
  },
  {
    id: 'smartcampus',
    title: 'Smart Campus',
    category: 'websites',
    description: 'Digital campus management system (TypeScript)',
    thumbnail: './assets/images/projects/smart campus/Screenshot 2026-01-14 202855.png',
    githubUrl: 'https://github.com/Kidusdybala/Smart_campus',
    liveUrl: null,
    gallery: [
      './assets/images/projects/smart campus/Screenshot 2026-01-14 202855.png',
      './assets/images/projects/smart campus/Screenshot 2026-01-14 202959.png',
      './assets/images/projects/smart campus/Screenshot 2026-01-14 203011.png',
      './assets/images/projects/smart campus/Screenshot 2026-01-14 203021.png',
      './assets/images/projects/smart campus/Screenshot 2026-01-14 203031.png',
      './assets/images/projects/smart campus/Screenshot 2026-01-14 203040.png',
      './assets/images/projects/smart campus/Screenshot 2026-01-14 203050.png'
    ]
  },
  {
    id: 'cityissue',
    title: 'City Issue Tracker',
    category: 'websites',
    description: 'Community issue reporting platform (JavaScript)',
    thumbnail: './assets/images/projects/City Issue tracker/citizen dashboard.png',
    githubUrl: 'https://github.com/Kidusdybala/City-IssueTracker',
    liveUrl: null,
    gallery: [
      './assets/images/projects/City Issue tracker/citizen dashboard.png',
      './assets/images/projects/City Issue tracker/citizen leaderboard.png',
      './assets/images/projects/City Issue tracker/citizens issue report.png',
      './assets/images/projects/City Issue tracker/official dashboard.png',
      './assets/images/projects/City Issue tracker/official leaderboard tracker.png',
      './assets/images/projects/City Issue tracker/official reported page.png'
    ]
  },
  {
    id: 'betting',
    title: 'Betting-Web',
    category: 'websites',
    description: 'Ethiopian Football Betting Platform (TypeScript)',
    thumbnail: './assets/images/projects/Betting page.png',
    githubUrl: 'https://github.com/Kidusdybala/Betting-Web',
    liveUrl: null,
    gallery: [
      './assets/images/projects/Betting page.png',
      './assets/images/projects/betting/dashboard.png',
      './assets/images/projects/betting/login.png',
      './assets/images/projects/betting/payment.png'
    ]
  },
  {
    id: 'parking',
    title: 'Parking-System',
    category: 'websites',
    description: 'Laravel-based parking system (JavaScript)',
    thumbnail: './assets/images/projects/Parking page.png',
    githubUrl: 'https://github.com/Kidusdybala/Parking-System',
    liveUrl: null,
    gallery: [
      './assets/images/projects/Parking page.png'
    ]
  },
  {
    id: 'record',
    title: 'Record Management System',
    category: 'websites',
    description: 'Enterprise document management (PHP)',
    thumbnail: './assets/images/projects/Record managment system/189502787-09a2b41c-4b42-4039-9609-1141913b475b.png',
    githubUrl: 'https://github.com/Kidusdybala/Record-managment-system',
    liveUrl: null,
    gallery: [
      './assets/images/projects/Record managment system/189502787-09a2b41c-4b42-4039-9609-1141913b475b.png'
    ]
  },
  {
    id: 'library',
    title: 'Library Management System',
    category: 'websites',
    description: 'Comprehensive library system (TypeScript)',
    thumbnail: './assets/images/projects/Library managment system/images.jpg',
    githubUrl: 'https://github.com/Kidusdybala/Library-managment-system',
    liveUrl: null,
    gallery: [
      './assets/images/projects/Library managment system/images.jpg'
    ]
  },
  {
    id: 'fooddelivery',
    title: 'Food Delivery Ecommerce',
    category: 'websites',
    description: 'Ecommerce platform for food delivery (TypeScript)',
    thumbnail: './assets/images/projects/food delivery/e7de4f54-d0c6-46f7-b95e-027dea41ae31-cover.png',
    githubUrl: 'https://github.com/Kidusdybala/food-delivery-ecommerce',
    liveUrl: null,
    gallery: [
      './assets/images/projects/food delivery/e7de4f54-d0c6-46f7-b95e-027dea41ae31-cover.png'
    ]
  },
  {
    id: 'cbemobile',
    title: 'CBE-Mobile',
    category: 'websites',
    description: 'Commercial Bank of Ethiopia mobile web app (TypeScript)',
    thumbnail: './assets/images/projects/cbe%20mobile/cbe.png',
    githubUrl: 'https://github.com/Kidusdybala/CBE-Mobile',
    liveUrl: null,
    gallery: [
      './assets/images/projects/cbe%20mobile/cbe.png'
    ]
  },
  {
    id: 'hotelmanagement',
    title: 'C-Hotel Management',
    category: 'websites',
    description: 'Hotel management system (C#)',
    thumbnail: './assets/images/projects/C%20hotel%20managment/Hotel%20management.jpg',
    githubUrl: 'https://github.com/Kidusdybala/C-hotel-managment',
    liveUrl: null,
    gallery: [
      './assets/images/projects/C%20hotel%20managment/Hotel%20management.jpg',
      './assets/images/projects/C%20hotel%20managment/user%20page.jpg',
      './assets/images/projects/C%20hotel%20managment/Screenshot%202026-01-19%20131003.png',
      './assets/images/projects/C%20hotel%20managment/Screenshot%202026-01-19%20131023.png'
    ]
  },
  {
    id: 'horizonbus',
    title: 'Horizon-Bus',
    category: 'websites',
    description: 'Real-time bus ticket booking system (PHP)',
    thumbnail: './assets/images/projects/Horizon%20bus/Managing-Groups-with-React-JS-event-booking-app-1.png',
    githubUrl: 'https://github.com/Kidusdybala/Horizon-Bus',
    liveUrl: null,
    gallery: [
      './assets/images/projects/Horizon%20bus/Managing-Groups-with-React-JS-event-booking-app-1.png',
      './assets/images/projects/Horizon%20bus/images.jpg'
    ]
  },
  {
    id: 'ethiofantasy',
    title: 'Ethio Fantasy Premier League',
    category: 'websites',
    description: 'Ethiopian fantasy football league platform',
    thumbnail: './assets/images/projects/ethio%20fantasy/main.jpg',
    githubUrl: 'https://github.com/Kidusdybala/ethio-fantasy-premier-league',
    liveUrl: null,
    gallery: [
      './assets/images/projects/ethio%20fantasy/main.jpg',
      './assets/images/projects/ethio%20fantasy/Template-Teamv2.webp',
      './assets/images/projects/ethio%20fantasy/sda.webp'
    ]
  },

  // ==================== TELEGRAM BOTS ====================
  {
    id: 'spamfilterbot',
    title: '433Sport Spam Filter Bot',
    category: 'telegram bots',
    description: 'Telegram spam filter bot for 433Sport (Python)',
    thumbnail: './assets/images/projects/433 spam filter/sapm filter.jpg',
    githubUrl: 'https://github.com/Kidusdybala/433sport-spam-filter-bot',
    liveUrl: null,
    gallery: [
      './assets/images/projects/433 spam filter/sapm filter.jpg',
      './assets/images/projects/433 spam filter/filter.png',
      './assets/images/projects/433 spam filter/sapm filte.jpg'
    ]
  },
  {
    id: 'visabot',
    title: 'Visa & Travel Agency Bot',
    category: 'telegram bots',
    description: 'Telegram bot for visa and travel agency services',
    thumbnail: './assets/images/projects/visa bot/Screenshot 2026-01-14 225110.png',
    githubUrl: 'https://github.com/Kidusdybala/Visa-and-Travel-agency-telegram-bot',
    liveUrl: null,
    gallery: [
      './assets/images/projects/visa bot/Screenshot 2026-01-14 225110.png',
      './assets/images/projects/visa bot/Screenshot 2025-10-06 225756.png',
      './assets/images/projects/visa bot/Screenshot 2025-10-06 230104.png',
      './assets/images/projects/visa bot/Screenshot 2025-10-06 230133.png'
    ]
  },
  {
    id: 'askanything',
    title: 'Ask Anything Bot',
    category: 'telegram bots',
    description: 'AI-powered Q&A Telegram bot (JavaScript)',
    thumbnail: './assets/images/projects/ask anything/MAIN.jpg',
    githubUrl: 'https://github.com/Kidusdybala/Ask_anything',
    liveUrl: null,
    gallery: [
      './assets/images/projects/ask anything/MAIN.jpg',
      './assets/images/projects/ask anything/Screenshot 2026-01-14 225253.png',
      './assets/images/projects/ask anything/Screenshot 2026-01-14 225332.png'
    ]
  },

  // ==================== SIMULATIONS (Tier 3) ====================
  {
    id: 'ciscopacket',
    title: 'Cisco Packet Tracker',
    category: 'simulations',
    description: 'Cisco network simulation and packet tracer projects (HTML)',
    thumbnail: './assets/images/projects/cisco/main.png',
    githubUrl: 'https://github.com/Kidusdybala/cisco-packet-tracker',
    liveUrl: null,
    gallery: [
      './assets/images/projects/cisco/main.png',
      './assets/images/projects/cisco/Screenshot-(74).png'
    ]
  },
  {
    id: 'huawieensp',
    title: 'Huawei eNSP',
    category: 'simulations',
    description: 'Huawei Enterprise Network Simulation Platform projects (HTML)',
    thumbnail: './assets/images/projects/huwawie/main.png',
    githubUrl: 'https://github.com/Kidusdybala/huwawie-ensp',
    liveUrl: null,
    gallery: [
      './assets/images/projects/huwawie/main.png',
      './assets/images/projects/huwawie/sub.png'
    ]
  },

  // ==================== APPLICATIONS ====================
  {
    id: 'ethiomovie',
    title: 'Ethio Movie',
    category: 'applications',
    description: 'Ethiopian movie streaming platform',
    thumbnail: './assets/images/projects/ethio movie/Screenshot 2026-01-14 222354.png',
    githubUrl: 'https://github.com/Kidusdybala/ethio-movie',
    liveUrl: null,
    gallery: [
      './assets/images/projects/ethio movie/Screenshot 2026-01-14 222354.png'
    ]
  },
  {
    id: 'ethiofitnesspro',
    title: 'Ethio Fitness Pro',
    category: 'applications',
    description: 'Ethiopian fitness and workout application',
    thumbnail: './assets/images/projects/ethio fitness pro/Screenshot 2026-01-14 222552.png',
    githubUrl: 'https://github.com/Kidusdybala/ethio-fitness-pro',
    liveUrl: null,
    gallery: [
      './assets/images/projects/ethio fitness pro/Screenshot 2026-01-14 222552.png'
    ]
  }
];

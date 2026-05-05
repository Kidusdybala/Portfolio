// Projects data with gallery images
// Categories: websites, telegram bots, simulations, applications
const projectsData = [
  // ==================== WEBSITES ====================
  {
    id: 'efootball',
    title: 'Aura Shop – eCommerce Platform',
    category: 'websites',
    description: 'Live Ethiopian marketplace for eFootball digital assets. Features multilingual support (English & Amharic), bank-transfer payments, Telegram bot notifications, and Cloudinary media hosting.<br/><br/><strong>Tech:</strong> React · Node.js · MongoDB',
    thumbnail: './assets/images/projects/efootball/home page.jpg',
    githubUrl: 'https://github.com/Kidusdybala/efootball',
    liveUrl: 'https://www.aurashop.et',
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
    id: 'parking',
    title: 'Smart Parking System',
    category: 'websites',
    description: 'Real-time parking spot tracking and reservation platform with Chapa payment integration, automated PDF receipts, and an AI chatbot for user assistance.<br/><br/><strong>Tech:</strong> React · Laravel · MySQL',
    thumbnail: './assets/images/projects/Parking page.png',
    githubUrl: 'https://github.com/Kidusdybala/Parking-System',
    liveUrl: null,
    gallery: [
      './assets/images/projects/Parking page.png'
    ]
  },
  {
    id: 'fooddelivery',
    title: 'Food Delivery System',
    category: 'websites',
    description: 'Full restaurant browsing and ordering platform with real-time order tracking via Mapbox, Chapa payment integration, and role-based authentication.<br/><br/><strong>Tech:</strong> React · Laravel · MongoDB',
    thumbnail: './assets/images/projects/food delivery/e7de4f54-d0c6-46f7-b95e-027dea41ae31-cover.png',
    githubUrl: 'https://github.com/Kidusdybala/food-delivery-ecommerce',
    liveUrl: null,
    gallery: [
      './assets/images/projects/food delivery/e7de4f54-d0c6-46f7-b95e-027dea41ae31-cover.png'
    ]
  },
  {
    id: 'yegnachat',
    title: 'YegnaChat – Real-Time Messaging',
    category: 'websites',
    description: 'Ethiopian real-time messaging app built with WebSockets for live bidirectional communication. Designed for local users with a fast, clean interface.<br/><br/><strong>Tech:</strong> JavaScript · Socket.IO',
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
    description: 'Digital campus management system covering student scheduling, resource management, and campus services in one unified platform.<br/><br/><strong>Tech:</strong> TypeScript · React',
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
    description: 'Community platform where residents can report and track local infrastructure issues, helping cities respond faster to public concerns.<br/><br/><strong>Tech:</strong> JavaScript · React',
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
    id: 'record',
    title: 'Record Management System',
    category: 'websites',
    description: 'Secure enterprise document management solution with role-based access control, automated backups, and advanced search capabilities.<br/><br/><strong>Tech:</strong> PHP · MySQL',
    thumbnail: './assets/images/projects/Record managment system/189502787-09a2b41c-4b42-4039-9609-1141913b475b.png',
    githubUrl: 'https://github.com/Kidusdybala/Record-managment-system',
    liveUrl: null,
    gallery: [
      './assets/images/projects/Record managment system/189502787-09a2b41c-4b42-4039-9609-1141913b475b.png'
    ]
  },
  {
    id: 'betting',
    title: 'Betting-Web',
    category: 'websites',
    description: 'Comprehensive sports betting platform tailored for Ethiopian football leagues, featuring live odds updates, user wallets, and match analytics.<br/><br/><strong>Tech:</strong> TypeScript · React',
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
    id: 'library',
    title: 'Library Management System',
    category: 'websites',
    description: 'Digital library application handling book inventory, user borrowing history, and automated return reminders.<br/><br/><strong>Tech:</strong> TypeScript · React',
    thumbnail: './assets/images/projects/Library managment system/images.jpg',
    githubUrl: 'https://github.com/Kidusdybala/Library-managment-system',
    liveUrl: null,
    gallery: [
      './assets/images/projects/Library managment system/images.jpg'
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

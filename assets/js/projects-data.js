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
  }
];

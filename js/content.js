/* ==================================================================
   PORTFOLIO CONTENT
   This is the only file you need to edit to update your site.

   - Anything left empty ("" or []) is hidden on the site, so you can
     fill things in gradually.
   - Images: put files in the "images" folder, then set
     image: "images/my-photo.jpg" on a work sample.
   - CV files: put PDFs in the "files" folder, then set
     cv: "files/my-cv.pdf". Without a file, the button becomes
     "Request my CV" and opens an email to you instead.
     Only link a CV with no ID number, birth date, phone numbers
     or transcripts: anyone can download it.
   - When everything is final, set draft: false to hide the
     "Draft" badge.
   ================================================================== */

window.PORTFOLIO = {
  draft: false,

  name: "Pumikorn Vittanon",
  email: "camp488@gmail.com",
  photo: "images/Profile pic 1.jpg",
  cv: "files/CV - Pumikorn Vittanon.pdf", // public CV: no ID, birth date or phone numbers
  location: "Mannheim, Germany",
  languages: ["Thai (native)", "English (B2)", "German (basic)"],
  openTo: "", // e.g. "Full-time · Freelance · Remote"
  availability: "Available for new roles & projects",

  // Words that rotate at the end of the hero headline
  heroWords: ["on screen.", "in the classroom.", "online.", "at the game table.", "in every room."],

  // Shown above the skill cards. The lead appears first in grey,
  // then the twist animates in with an underline. Set to null to hide.
  motto: {
    label: "My motto",
    lead: "A jack of all trades is a master of none,",
    twist: "but oftentimes better than a master of one.",
  },

  intro:
    "Social media marketer, software & AI tester, English teacher and event coordinator, from Thailand and now based in Germany. Different stages, one focus: people.",

  about: [
    "I'm Pumikorn, a Thai professional based in Mannheim, Germany. My path has taken me from a law degree at Khon Kaen University and work as a paralegal, to teaching English, growing a health & beauty sales business, creating content for 88K+ TikTok followers, coordinating executive training events and evaluating AI models for ByteDance and Microsoft.",
    "What ties it all together is people: explaining things clearly, making others feel welcome and paying close attention to detail. I'm currently looking for roles in social media marketing and software, and I'm also open to other opportunities where my mix of skills can make a difference.",
  ],

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/pumikorn-vittanon-09802a259/" },
    { label: "TikTok", url: "https://www.tiktok.com/@icamppositive" },
    { label: "Instagram", url: "https://www.instagram.com/icamp_pv/" },
    { label: "YouTube", url: "https://www.youtube.com/@ICampPositive" },
    { label: "GitHub", url: "https://github.com/icamp-coding" },
  ],

  /* ----------------------------------------------------------------
     SKILLS: each one becomes a card on the home page and its own
     page at yoursite.com/#/<id>. Add, remove or reorder freely.
     accent: the skill's colour (keep it dark enough for white text).
     icon: film | teach | social | code | ai | event | dice | leaf
     The first two skills get the big featured cards on the home page.
     testimonials: the first quote is shown large, the rest as smaller cards.
     work ratio: shape of the image box, e.g. "4/3" (wide) or "4/5" (tall)
     ---------------------------------------------------------------- */
  skills: [
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      short: "Content that builds an audience and sells products.",
      accent: "#BE185D",
      icon: "social",
      role: "Content Creator · Social Media Marketer",
      years: "5+",
      summary:
        "I plan, shoot and edit short-form content for brands and for my own TikTok channel, from content calendars and audience research to paid brand partnerships. I use AI to speed things up, but every piece is finished by hand.",
      stats: [
        { value: "88.1K", label: "TikTok followers" },
        { value: "1.6M", label: "TikTok likes" },
        { value: "1M+", label: "Views on a single video" },
      ],
      tools: ["TikTok", "Facebook", "Instagram", "Content calendars", "Audience research", "Brand partnerships", "AI-assisted editing"],
      experience: [
        {
          role: "TikTok Marketing & Content Creator (Temp)",
          org: "Sabuy Connext Co., Ltd. · Bangkok",
          dates: "08/2023 – 10/2023",
          points: [
            "Analysed the target audience and created short video content from scratch.",
            "Planned content and edited product ads on computer and phone.",
          ],
        },
        {
          role: "Paralegal / Social Media Manager",
          org: "Sorasak Law Office & International Consultant · Bangkok",
          dates: "06/2021 – 08/2023",
          points: [
            "Promoted the law firm by writing articles and creating short videos for Facebook and TikTok.",
            "Prepared legal documents, conducted legal research and interpreted for foreign clients.",
          ],
        },
      ],
      caseStudies: [],
      work: [
        {
          type: "Paid partnership",
          title: "GQ Apparel",
          description: "Sponsored TikTok series for a men's clothing brand.",
          image: "images/Social Media 1.jpg",
          ratio: "4/5",
          link: "https://www.tiktok.com/@icamppositive/video/7362597100233690386",
          linkLabel: "Watch on TikTok",
        },
        {
          type: "Restaurant review",
          title: "BoGeul BoGrill",
          description: "Review video for a premium shabu & sushi restaurant chain.",
          image: "images/Social Media 2.jpg",
          ratio: "4/5",
          link: "https://www.tiktok.com/@icamppositive/video/7440115989389348103",
          linkLabel: "Watch on TikTok",
        },
        {
          type: "Product ad",
          title: "Keto sukiyaki sauce",
          description: "Product video for a local food brand.",
          image: "images/Social Media 3 .jpg",
          ratio: "4/5",
          link: "https://www.tiktok.com/@icamppositive/video/7421124844772658450",
          linkLabel: "Watch on TikTok",
        },
        { type: "Community", title: "Speaking to the community", description: "Talking with community members in person.", image: "images/Me with the Social media community.jpg", link: "" },
        { type: "Community", title: "Buzz Global 2024", description: "Thousands of community members together in one arena.", image: "images/Me with the Social media community 2.jpg", link: "" },
        { type: "Community", title: "With the community", description: "Meeting the people behind the follows and likes.", image: "images/Me with the Social media community 3.jpg", link: "" },
      ],
      certifications: [],
      testimonials: [
        { quote: "My teacher played your video in my class.", name: "TikTok viewer", role: "TikTok comment" },
        { quote: "I learned more from you than from my school.", name: "TikTok viewer", role: "TikTok comment" },
        { quote: "You made me understand this difficult topic. Are you sure you're not a teacher?", name: "TikTok viewer", role: "TikTok comment" },
        { quote: "Love it, funny and informative. I have been looking for this!", name: "TikTok viewer", role: "Comment on a video with 1M+ views" },
      ],
      cv: "",
    },
    {
      id: "software-development",
      title: "Software Development",
      short: "From low-level C to testing software before it ships.",
      accent: "#334155",
      icon: "code",
      role: "Software Engineering Student · Software & Game Tester",
      years: "2+",
      summary:
        "I trained in low-level C programming and algorithms at 42 School, and I test games and software before release for Microsoft through Lionbridge, reporting bugs and findings straight to the developers.",
      stats: [],
      tools: ["C programming", "Algorithms & problem-solving", "Git & GitHub", "Software testing", "Game testing (alpha/beta)", "Bug reporting"],
      experience: [
        {
          role: "Software Engineering Student",
          org: "42 School · Bangkok",
          dates: "05/2025 – 01/2026",
          points: [
            "Learned low-level C programming and algorithmic problem-solving.",
            "Built projects from scratch in a self-taught, peer-reviewed environment, learning complex systems from the ground up.",
          ],
        },
        {
          role: "Game, Software & AI Evaluator",
          org: "Lionbridge (Thailand) / Microsoft · Remote",
          dates: "05/2024 – Present",
          points: [
            "Performed soft and hard testing on games in alpha and beta, reporting findings to developers.",
            "Tested Microsoft AI features in MS Office before public release.",
          ],
        },
      ],
      caseStudies: [],
      work: [
        { type: "Photo", title: "Coding at 42 School", description: "Writing C during the 42 Piscine.", image: "images/Me at 42school.jpg", ratio: "4/5", link: "" },
        { type: "Photo", title: "My 42 School cohort", description: "Learning together in a peer-to-peer coding school.", image: "images/42School photo.jpg", ratio: "4/5", link: "" },
        { type: "Code", title: "icamp-coding on GitHub", description: "My code and 42 School projects.", image: "", link: "https://github.com/icamp-coding", linkLabel: "View on GitHub" },
      ],
      certifications: [],
      testimonial: null,
      cv: "",
    },
    {
      id: "video-photo-editing",
      title: "Video & Photo Editing",
      short: "Short-form edits made for the scroll.",
      accent: "#C2410C",
      icon: "film",
      role: "Video Editor · Content Producer",
      years: "5+",
      summary:
        "I shoot and edit short-form video on desktop and mobile, shaping each edit around the product and the audience, for brands, a law firm and my own channels.",
      stats: [{ value: "1M+", label: "Views on a single short video" }],
      tools: ["Video editing", "Photo & video shooting", "Mobile editing", "AI-assisted editing"],
      experience: [
        {
          role: "TikTok Marketing & Content Creator (Temp)",
          org: "Sabuy Connext Co., Ltd. · Bangkok",
          dates: "08/2023 – 10/2023",
          points: ["Planned, shot and edited product advertising videos on computer and phone."],
        },
        {
          role: "Paralegal / Social Media Manager",
          org: "Sorasak Law Office & International Consultant · Bangkok",
          dates: "06/2021 – 08/2023",
          points: ["Created short videos promoting the firm on Facebook and TikTok."],
        },
      ],
      caseStudies: [],
      work: [
        { type: "Channel", title: "@icamppositive on TikTok", description: "Health and lifestyle videos, shot and edited by me.", image: "", link: "https://www.tiktok.com/@icamppositive", linkLabel: "Watch on TikTok" },
        { type: "Channel", title: "ICampPositive on YouTube", description: "Longer videos from my own channel.", image: "", link: "https://www.youtube.com/@ICampPositive", linkLabel: "Watch on YouTube" },
      ],
      certifications: [],
      testimonial: null,
      cv: "",
    },
    {
      id: "ai-evaluation",
      title: "AI Evaluation",
      short: "Careful human judgement that makes AI better.",
      accent: "#0F766E",
      icon: "ai",
      role: "AI Prompt Evaluator · Game, Software & AI Tester",
      years: "2+",
      summary:
        "I assess large language model output for factual accuracy, logical consistency and instruction-following, build evaluation rubrics and golden responses, and make sure Thai-language prompts sound natural and culturally right.",
      note: "Client work is under NDA, so no task content is shown here.",
      stats: [{ value: "2", label: "Global tech clients: ByteDance & Microsoft" }],
      tools: [
        "Evaluation rubrics",
        "Golden responses / benchmark data",
        "Fact-checking & hallucination spotting",
        "Instruction-adherence rating",
        "Thai language QA",
        "Game alpha/beta testing",
      ],
      experience: [
        {
          role: "AI Prompt Evaluator (Thai Language)",
          org: "ByteDance Ltd. · Remote",
          dates: "04/2026 – Present",
          points: [
            "Designed structured evaluation rubrics and “golden responses” as ground-truth benchmark data for assessing LLM performance.",
            "Analysed AI output for factual accuracy, logical consistency and instruction adherence, identifying edge cases and hallucination patterns.",
            "Ran quality assurance on Thai-language prompts for natural phrasing, tone and cultural accuracy.",
          ],
        },
        {
          role: "Game, Software & AI Evaluator",
          org: "Lionbridge (Thailand) / Microsoft · Remote",
          dates: "05/2024 – Present",
          points: [
            "Performed soft and hard testing on games in alpha and beta, reporting findings to developers.",
            "Optimised and reported on AI recognition of text and photo scans.",
            "Evaluated Microsoft AI's performance in MS Office before public release.",
          ],
        },
      ],
      caseStudies: [],
      work: [],
      certifications: [],
      testimonial: null,
      cv: "",
    },
    {
      id: "english-teaching",
      title: "English Teaching",
      short: "Confident speakers, one lesson at a time.",
      accent: "#1D4ED8",
      icon: "teach",
      role: "English Teacher",
      years: "8+",
      summary:
        "I teach English to high school students from basic to advanced level, with a focus on speaking and listening, and on building the confidence and soft skills that make students actually use the language.",
      stats: [],
      tools: ["Speaking & listening", "Basic to advanced English", "Confidence building", "Soft skills", "Course presentations"],
      experience: [
        {
          role: "English Teacher",
          org: "Samut Prakan, Thailand",
          dates: "08/2018 – Present",
          points: [
            "Teach high school students English from basic to advanced level.",
            "Help students build self-confidence and soft skills.",
            "Focus mainly on improving speaking and listening.",
          ],
        },
        {
          role: "Project Manager",
          org: "ARIT Co., Ltd. · Thailand",
          dates: "01/2024 – 12/2024",
          points: [
            "Presented English courses and company products to private and public institutions.",
            "Developed timelines, identified potential customers and advised the marketing and sales teams.",
          ],
        },
      ],
      caseStudies: [],
      work: [],
      certifications: [],
      testimonial: null,
      cv: "",
    },
    {
      id: "event-coordination",
      title: "Event Coordination",
      short: "Executive training events that run smoothly.",
      accent: "#6D28D9",
      icon: "event",
      role: "Executive Event Coordinator · Master of Ceremonies",
      years: "",
      summary:
        "I coordinate leadership and business administration training for executives at major Thai state enterprises, host sessions as Master of Ceremonies and support the program manager from setup to wrap-up.",
      stats: [
        { value: "2", label: "State enterprise clients: AOT & EXAT" },
        { value: "MC", label: "Hosting training sessions" },
      ],
      tools: ["Executive training logistics", "Master of Ceremonies", "Program support", "Client coordination"],
      experience: [
        {
          role: "Executive Event Coordinator",
          org: "SCG HR Solutions Co., Ltd. · Bangkok",
          dates: "01/2026 – Present",
          points: [
            "Organised leadership and business administration training for executive clients, including Airports of Thailand (AOT) and the Expressway Authority of Thailand (EXAT).",
            "Served as Master of Ceremonies and supported the Program Manager.",
          ],
        },
      ],
      caseStudies: [],
      work: [
        { type: "Photo", title: "Executive leadership session", description: "Small-group session with senior executives.", image: "images/Event 2.jpg", link: "" },
        { type: "Photo", title: "Creating a Mindset for Change", description: "Full-room training session for executive clients.", image: "images/Event 1.jpg", link: "" },
        { type: "Photo", title: "Group workshop", description: "Table workshops and facilitated group work.", image: "images/Event 3.jpg", link: "" },
      ],
      certifications: [],
      testimonial: null,
      cv: "",
    },
    {
      id: "recreation-management",
      title: "Recreation Management",
      short: "A welcoming table for players from around the world.",
      accent: "#92400E",
      icon: "dice",
      role: "General Manager & Game Master · International DnD Café, Bangkok",
      years: "",
      summary:
        "As General Manager of an international Dungeons & Dragons café in Bangkok, I run the venue and host games in both English and Thai, bringing local and international players together around the same table.",
      stats: [{ value: "2", label: "Languages I host games in: English & Thai" }],
      tools: ["Game Master (D&D)", "Hosting in English & Thai", "Venue management", "Community building", "Customer experience"],
      experience: [
        {
          role: "General Manager & Game Master",
          org: "International DnD Café · Bangkok",
          dates: "",
          points: [
            "Run the café and its game nights.",
            "Host Dungeons & Dragons games in both English and Thai for local and international players.",
          ],
        },
      ],
      caseStudies: [],
      work: [
        { type: "Photo", title: "Game Master at the table", description: "Running a session for local and international players.", image: "images/DnD 1.png", ratio: "6/5", link: "" },
        { type: "Photo", title: "Thumbs up after a session", description: "Lighting, terrain and miniatures set up for the story.", image: "images/DnD 2.png", ratio: "6/5", link: "" },
        { type: "Photo", title: "A full table", description: "A packed game night at the café.", image: "images/DnD 3.png", ratio: "6/5", link: "" },
      ],
      certifications: [],
      testimonial: null,
      cv: "",
    },
    {
      id: "wellness-beauty",
      title: "Wellness & Beauty Consultation",
      short: "Healthy routines, honest advice and real sales results.",
      accent: "#4D7C0F",
      icon: "leaf",
      role: "Wellness & Beauty Consultant · Sales Manager",
      years: "9+",
      summary:
        "I help people build healthier routines with honest, personal advice, built on more than 10,000 hours of learning from doctors, nutritionists and fitness trainers, plus courses from Harvard Health Publishing and Chulalongkorn University. I've also grown a health & beauty product business from zero to 1.1M THB in annual sales.",
      stats: [
        { value: "10,000+", label: "Hours learning from doctors, nutritionists & fitness trainers" },
        { value: "1.1M THB", label: "Annual sales managed" },
        { value: "30+", label: "New customers" },
        { value: "10+", label: "Repeat customers" },
        { value: "5+", label: "Distributors trained" },
      ],
      tools: ["Personal consultation", "Weight management", "Sales & customer care", "Distributor training", "Health content"],
      experience: [
        {
          role: "Sales Manager / Marketing / Content Creator",
          org: "Judy Hopps Co., Ltd. · Bangkok",
          dates: "05/2017 – Present",
          points: [
            "Grew sales from zero experience to managing 1.1M THB in annual sales.",
            "Used Smart Dashboard and the affiliate programme to win 30+ new customers and 10+ repeat customers.",
            "Trained 5+ distributors and franchisees in soft and hard skills.",
            "Collaborated with Amway (Thailand) on an outsourcing basis.",
          ],
        },
      ],
      caseStudies: [
        {
          title: "Early results with an online coaching client",
          problem: "A client wanted to lose weight and slim down.",
          action: "Coached them online with regular check-ins, tracking their weight and measurements over chat, and adjusted their nutrition plan to fit their lifestyle.",
          result: "By the second update: −1.3 kg, −5 cm waist, −4 cm hips, −3 cm thighs and −2 cm arms.",
        },
      ],
      work: [
        { type: "Before & after", title: "My own transformation", description: "Practising what I teach.", image: "images/Weight loss/My Before after 1.png", ratio: "6/5", link: "" },
        { type: "Before & after", title: "My own transformation, part 2", description: "Another before & after from my own journey.", image: "images/Weight loss/My Before after 2.png", ratio: "6/5", link: "" },
        { type: "Certificates", title: "Harvard & Chulalongkorn courses", description: "Both weight-loss certificates I completed in 2024.", image: "images/Weight loss/Me with Certificate.jpg", ratio: "6/5", link: "" },
        { type: "Client results", title: "Client transformations", description: "Results from clients I've coached.", image: "images/Weight loss/Before after 1.png", ratio: "6/5", link: "" },
        { type: "Client results", title: "More client results", description: "Body and skin results from clients I've coached.", image: "images/Weight loss/Before after 2.png", ratio: "6/5", link: "" },
        { type: "Client feedback", title: "Progress updates", description: "A client's weekly progress messages.", image: "images/Weight loss/Customer feedback 1.png", ratio: "6/5", link: "" },
        { type: "Client feedback", title: "Thank-you messages", description: "What clients say after working with me.", image: "images/Weight loss/Customer feedback 2.png", ratio: "6/5", link: "" },
        { type: "Channel", title: "Health & lifestyle on Instagram", description: "Wellness tips and my own health journey.", image: "", link: "https://www.instagram.com/icamp_pv/", linkLabel: "View on Instagram" },
      ],
      certifications: [
        { name: "Lose Weight and Keep It Off", issuer: "Harvard Health Publishing, Harvard Medical School", year: "2024", link: "" },
        { name: "Weight Loss by Diet and Various Approaches", issuer: "Chulalongkorn University (CHULA MOOC)", year: "2024", link: "" },
      ],
      testimonials: [
        { quote: "Thank you for the gifts, I love them. A lovely service from you warms my heart!", name: "Client", role: "Wellness client" },
        { quote: "My pants are looser!", name: "Client", role: "Coaching client" },
        { quote: "I'm starting to see my shoulders!", name: "Client", role: "Coaching client" },
      ],
      cv: "",
    },
  ],
};

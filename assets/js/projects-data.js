/**
 * ═══════════════════════════════════════════════════════════════
 *  USMAN.AI — Projects Data Layer
 *  Source of truth for all project cards on the Projects page.
 *  To add/edit/remove a project, just modify this array.
 *  The MDX files in /projects/ mirror this data for documentation.
 * ═══════════════════════════════════════════════════════════════
 */

window.PROJECTS_DATA = [
    {
        title: "Personalized TimeTable Generator",
        slug: "timetable-generator",
        icon: "fas fa-calendar-check",
        badge: "New",
        order: 1,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["Python", "AI Optimization", "Constraint Solving", "Streamlit"],
        category: "AI Optimization",
        status: "completed",
        description: "AI-powered timetable generation system that creates personalized, conflict-free academic schedules based on student preferences, course loads, and constraints."
    },
    {
        title: "ZiaAI Agent",
        slug: "ziaai-agent",
        icon: "fas fa-robot",
        badge: "New",
        order: 2,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["Groq API", "LLM", "Python", "Streaming", "TTS"],
        category: "LLM / Agents",
        status: "completed",
        description: "A fast, responsive AI desktop agent powered by Groq API with streaming text output, voice interaction, avatar-based UI, and direct system task execution capabilities."
    },
    {
        title: "Ziraat AI",
        slug: "ziraat-ai",
        icon: "fas fa-seedling",
        badge: "New",
        order: 3,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["Deep Learning", "Computer Vision", "NLP", "Python", "Streamlit"],
        category: "Agriculture AI",
        status: "completed",
        description: "An intelligent agricultural AI assistant that provides crop recommendations, disease detection, weather-based guidance, and yield predictions for Pakistani farmers."
    },
    {
        title: "AI-Powered Resume Screening System",
        slug: "resume-screening",
        icon: "fas fa-file-invoice",
        badge: "",
        order: 4,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["NLP", "Deep Learning", "Streamlit", "TF-IDF"],
        category: "NLP",
        status: "completed",
        description: "Automated system to screen and rank candidate resumes using NLP and Deep Learning, significantly reducing HR processing time."
    },
    {
        title: "Bitcoin Price Prediction using LSTM",
        slug: "bitcoin-prediction",
        icon: "fas fa-chart-line",
        badge: "",
        order: 5,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["LSTM", "Time-Series", "TensorFlow", "Pandas"],
        category: "Time-Series / Finance",
        status: "completed",
        description: "Time-series forecasting model to predict Bitcoin prices with high accuracy using Long Short-Term Memory networks."
    },
    {
        title: "Skin Disease Detector",
        slug: "skin-disease-detector",
        icon: "fas fa-brain",
        badge: "",
        order: 6,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["CNN", "Computer Vision", "Keras"],
        category: "Medical AI",
        status: "completed",
        description: "CNN-based model for classifying multiple skin conditions from dermoscopic images with clinical-grade accuracy."
    },
    {
        title: "Fake News Detection System",
        slug: "fake-news-detection",
        icon: "fas fa-newspaper",
        badge: "",
        order: 7,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["NLP", "Scikit-learn", "Deep Learning"],
        category: "NLP",
        status: "completed",
        description: "NLP model to detect fake news with high precision using text classification and feature extraction pipelines."
    },
    {
        title: "White Rhino Visitor Interactions Prediction",
        slug: "white-rhino-prediction",
        icon: "fas fa-binoculars",
        badge: "",
        order: 8,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["Time-Series", "Regression", "Deep Learning", "ANN"],
        category: "Predictive Analytics",
        status: "completed",
        description: "Predictive analytics model for forecasting wildlife sanctuary visitor trends and rhino interaction patterns using AI."
    },
    {
        title: "AI Multi-Disease Detection",
        slug: "multi-disease-detection",
        icon: "fas fa-stethoscope",
        badge: "",
        order: 9,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["Deep Learning", "Medical AI", "CNN", "PyTorch"],
        category: "Medical AI",
        status: "completed",
        description: "Deep learning system to detect multiple diseases from medical images and patient symptoms with high recall."
    },
    {
        title: "Neural Style Transfer",
        slug: "neural-style-transfer",
        icon: "fas fa-palette",
        badge: "",
        order: 10,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["CNN", "VGG19", "TensorFlow"],
        category: "Computer Vision",
        status: "completed",
        description: "Artistic style transfer using VGG-19 convolutional neural networks to blend artistic styles onto photographs."
    },
    {
        title: "Harmonic Origin",
        slug: "harmonic-origin",
        icon: "fas fa-music",
        badge: "",
        order: 11,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["Deep Learning", "TensorFlow", "Streamlit"],
        category: "Audio / Deep Learning",
        status: "completed",
        description: "Audio analysis and music generation project exploring harmonic patterns with deep learning models."
    },
    {
        title: "Weather Application",
        slug: "weather-app",
        icon: "fas fa-cloud-sun",
        badge: "",
        order: 12,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["API", "JavaScript", "Python"],
        category: "Web App",
        status: "completed",
        description: "Real-time weather forecasting app with beautiful UI, live API integration, and location-based forecasts."
    },
    {
        title: "NFT Marketplace on XRPL",
        slug: "nft-marketplace",
        icon: "fas fa-coins",
        badge: "",
        order: 13,
        github: "https://github.com/usman-rgb",
        demo: "",
        tags: ["Blockchain", "XRPL", "Web3", "JavaScript"],
        category: "Blockchain / Web3",
        status: "completed",
        description: "Decentralized NFT marketplace built on XRP Ledger with smart contracts and Web3 wallet integration."
    }
];

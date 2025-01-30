![image](https://github.com/user-attachments/assets/44ae8ebd-0a10-4827-bdc0-01b221cd376e)

[![Next.js](https://img.shields.io/badge/Next.js-13.5-blue?logo=next.js)](https://nextjs.org/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-1.9-purple?logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)

A weather dashboard built with Next.js and Redux Toolkit that fulfills all requirements of the internship challenge, featuring real-time weather data, elegant UI, and robust error handling.

**Live Demo:** [https://weather-city-eosin.vercel.app/](https://weather-city-eosin.vercel.app/)

## ✅ Challenge Requirements Implementation

### Core Requirements Met

| Feature | Implementation Details |
|---------|------------------------|
| **Homepage Search** | - Search bar with city input <br> - Redux-managed search state <br> - Responsive design with Tailwind CSS |
| **City Weather Page** | - Dynamic routing (`/weather/[city]`) <br> - Displays temperature, humidity, wind speed, weather description <br> - Weather condition icons from OpenWeather API |
| **State Management** | - Redux Toolkit for global state <br> - Stores: `weather`, `loading`, `error` states <br> - Thunks for API calls |
| **API Integration** | - OpenWeather Current Weather API <br> - Axios HTTP client <br> - Error handling for 404/500 responses |
| **Styling** | - Tailwind CSS with custom animations <br> - Glassmorphism design system <br> - Mobile-first responsive layout |
| **Error Handling** | - Invalid city detection <br> - Network error handling <br> - Visual error components with retry action |

### Bonus Features Implemented

- **🌡️ Temperature Unit Toggle**  
  Switch between Celsius/Fahrenheit with animated transitions
- **💾 Search Caching**  
  Redux-powered cache to prevent duplicate API calls
- **🛡 Type Safety**  
  Full TypeScript integration with strict type checking
- **⏳ Loading States**  
  Animated spinner with gradient styling
- **🎨 Advanced Styling**  
  Glassmorphism effects, gradient overlays, and smooth animations

## 🚀 Installation

1. Clone repository:
git clone https://github.com/your-username/weather-dashboard.git
2. Install dependencies:
npm install
3. Create .env.local file:
NEXT_PUBLIC_OPENWEATHER_API_KEY=01db3e95cae7f1594db309dc1324ca56
4. Start development server:
npm run dev

🧰 Technologies Used
Framework: Next.js 13
. State Management: Redux Toolkit
. Styling: Tailwind CSS + CSS Modules
. HTTP Client: Axios
. Type Checking: TypeScript

``git
📂 Project Structure
UI Components: Custom animated SVG elements
├── store/
│   ├── store.ts          # Redux store configuration
│   └── weatherSlice.ts   # Weather state management
├── pages/
│   ├── index.tsx         # Homepage with search
│   └── weather/          # Dynamic weather pages
├── components/
│   ├── ErrorComponent.tsx # Error display UI
│   └── LoadingComponent.tsx # Animated spinner
├── services/             # API service layer
└── public/               # Static assets
``git

🔍 Key Implementation Highlights
1. Efficient State Management
Redux Toolkit cache prevents redundant API calls
Optimized re-renders with memoized selectors

2. Robust Error Handling
3 distinct error states handled
User-friendly error messages with retry options

3. UI/UX Best Practices
Loading skeletons during data fetch
Smooth CSS transitions between states
Accessible form validation

🙏 Acknowledgments
. Weather data provided by OpenWeatherMap
. UI inspiration from dribbble glassmorphism designs
. Next.js App Router documentation

Note: This project was completed as part of an internship technical challenge to demonstrate full-stack development capabilities with modern web technologies.


This README:

1. Clearly maps challenge requirements to implementation
2. Highlights technical capabilities
3. Shows attention to detail in error handling and UI
4. Demonstrates understanding of modern web development
5. Provides easy verification path for evaluators

Would you like me to adjust any section to better highlight specific aspects of your implementation?

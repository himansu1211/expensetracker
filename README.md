# Expense Tracker

A modern, web-based expense tracking application built with HTML5, CSS3, and JavaScript. This app helps users manage their daily income and expenses, visualize spending patterns, and share their financial summaries.

## 🚀 Features

### Core Functionality
- **Google Authentication**: Secure sign-in using Firebase Auth
- **Income Management**: Add and track multiple income sources
- **Expense Tracking**: Categorize and record daily expenses
- **Automatic Calculations**: Real-time computation of totals and savings
- **Expense Analysis**: Identify highest spending categories
- **Data Visualization**: Interactive doughnut chart for expense breakdown
- **Share as Image**: Export your expense dashboard as a PNG image
- **Data Persistence**: Local storage ensures data survives browser sessions
- **Responsive Design**: Optimized for desktop and mobile devices

### User Interface
- Clean, dark-themed design
- Intuitive add/remove functionality for entries
- Real-time summary updates
- Visual feedback with color-coded chart segments

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Authentication**: Firebase Auth with Google Sign-in
- **Charts**: Chart.js for data visualization
- **Image Export**: html2canvas for dashboard screenshots
- **Storage**: Browser LocalStorage for data persistence

## 📋 Prerequisites

- Modern web browser with JavaScript enabled
- Internet connection for Firebase authentication and Chart.js CDN

## 🚀 Getting Started

1. **Clone or Download**: Get the project files
2. **Open in Browser**: Launch `index.html` in your web browser
3. **Sign In**: Use Google Sign-in to access the app
4. **Start Tracking**: Add your income and expenses

### Usage Guide

1. **Authentication**: Click "Sign in with Google" to access the app
2. **Add Entries**:
   - Click "+ Add Income" to add income sources
   - Click "+ Add Expense" to add expenses
   - Fill in category and amount for each entry
3. **Manage Entries**: Use the ✕ button to remove entries
4. **View Summary**: Check totals, savings, and highest expense category
5. **Visualize Data**: Review the expense breakdown chart
6. **Share Results**: Click "📤 Share as Image" to download your dashboard

## 📁 Project Structure

```
expense-tracker/
├── index.html          # Main HTML file
├── style.css           # Application styling
├── script.js           # Core functionality
├── auth.js             # Firebase authentication
├── package.json        # Dependencies
├── README.md           # This file
└── TODO.md             # Development notes
```

## 🔧 Configuration

The app uses Firebase for authentication. Firebase config is embedded in `auth.js`:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD4lBLWGS05lqIfV2FbL5jG3ygHUyaVKN4",
  authDomain: "expense-tracker-hks.firebaseapp.com",
  projectId: "expense-tracker-hks",
  appId: "1:576142656812:web:f6702b73eacda8af175889"
};
```

## 🌟 Key Highlights

- **Solo Project**: Built by Himansu Kumar Sahu as a personal solution
- **No External Dependencies**: Uses CDN links for libraries
- **Privacy-Focused**: Data stored locally, no server-side tracking
- **Open Source**: Available under MIT License
- **Cross-Platform**: Works on any device with a modern browser

## 📊 Sample Categories

### Income
- Salary
- Freelance
- Investments
- Gifts

### Expenses
- Rent/Utilities
- Groceries
- Transportation
- Entertainment
- Healthcare
- Miscellaneous

## 🤝 Contributing

This is a personal project, but feel free to fork and modify for your own use.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Himansu Kumar Sahu**
- Built as a weekend side project to solve personal expense tracking needs
- No team, no groups – just coding away!

---

*Track your expenses, visualize your spending, and take control of your finances with Daily Expense Tracker!*

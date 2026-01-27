# 🍿 usePopcorn — Ultimate Movie Tracker

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**usePopcorn** is a sleek, highly interactive movie database application. It allows users to search for real-time movie data, view detailed information, rate movies, and maintain a personalized "Watched" list with integrated analytics.



## 🚀 Key Features

- **🔍 Live Movie Search**: Instant fetching from the **OMDb API** as you type.
- **⭐ Custom Star Rating**: A fully interactive, animated rating component built from scratch.
- **📊 Personal Dashboard**: Track your cinema habits with automated stats (average ratings, total runtime).
- **🎨 Premium UI/UX**: Features **Glassmorphism**, smooth staggered animations, and a high-contrast dark theme.
- **💾 Data Persistence**: Uses **Local Storage** to ensure your watched list remains saved after refresh.
- **⌨️ Pro Navigation**: Includes custom hooks for global keyboard shortcuts (e.g., `Enter` to focus search).

---

## 🛠 Tech Stack

- **Framework**: React.js (Functional Components & Hooks)
- **Styling**: Tailwind CSS (PostCSS)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **API**: OMDb (Open Movie Database)

---

## 📁 Project Architecture

The project is organized into modular components to ensure a "Clean Code" approach:

| Component Type | Responsibility |
| :--- | :--- |
| **UI** | Global elements like `Logo`, `StarRating`, `Loader`, and `ErrorMessage`. |
| **Layout** | Structural wrappers like `NavBar`, `Main`, and the toggleable `Box`. |
| **Movies** | Search results and the deep-dive `MovieDetails` view. |
| **Watched** | The summary dashboard and the list of saved movies. |
| **Hooks** | Reusable logic for APIs (`useMovies`), Keys (`useKey`), and Storage. |

---

## 💻 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/usePopcorn.git](https://github.com/your-username/usePopcorn.git)

2. Install dependencies:
    ```bash
    npm install
3. Start the application:
    ```bash
   npm run dev
---
##📝 Core Logic: Custom Hooks
To keep the components lean, the app utilizes specialized hooks:

useMovies(query): Handles complex fetching, loading states, and error handling for the API.

useLocalStorage(initialState, key): Keeps the watched movies list persistent across sessions.

useKey(key, action): Listens for global keydown events to enhance the user experience.
---
##🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

Fork the Project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your Changes (git commit -m 'Add some AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.

##⭐ If you find this project useful, please consider giving it a star on GitHub!

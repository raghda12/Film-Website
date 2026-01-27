# 🍿 usePopcorn — The Ultimate Movie Tracker

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

تطبيق سينمائي متكامل مبني باستخدام **React** و **Tailwind CSS**، يهدف إلى مساعدة المستخدمين على اكتشاف الأفلام، تقييمها، وإدارة قائمة المشاهدة الخاصة بهم بواجهة مستخدم عصرية وسلسة.



## 🚀 المميزات (Key Features)

- **Search & Discover**: ابحث عن أي فيلم في العالم بفضل التكامل مع **OMDb API**.
- **Interactive Rating**: نظام تقييم بالنجوم مخصص يدعم التفاعل بالماوس.
- **Dynamic Summary**: إحصائيات فورية (متوسط التقييم، عدد الأفلام، وقت المشاهدة الكلي).
- **Glassmorphism Design**: واجهة مستخدم شفافة وعصرية باستخدام **Tailwind CSS**.
- **Smooth Animations**: حركات انتقالية سلسة للعناصر باستخدام **Framer Motion**.
- **Persistent Data**: يتم حفظ قائمة المشاهدة تلقائياً في المتصفح عبر **Local Storage**.
- **Keyboard Shortcuts**: دعم اختصارات لوحة المفاتيح (مثل `Enter` للبحث و `Esc` للإغلاق).

## 🛠 البناء التقني (Tech Stack)

- **Frontend**: React (Hooks, Context, Refs).
- **Styling**: Tailwind CSS (Utility-first approach).
- **Animations**: Framer Motion.
- **Icons**: Lucide React.
- **Data Source**: OMDb API.

## 📁 تنظيم الكود (Folder Structure)

يتبع المشروع هيكل **Atomic Design** لضمان فصل المكونات وسهولة صيانتها:

```text
src/
 ┣ components/
 ┃ ┣ ui/            # المكونات الصغيرة (Logo, StarRating, Loader, Error)
 ┃ ┣ layout/        # الهيكل العام (NavBar, Main, Box)
 ┃ ┣ movies/        # مكونات عرض البحث (MovieList, MovieDetails)
 ┃ ┗ watched/       # مكونات قائمة المشاهدة (WatchedSummary, WatchedList)
 ┣ hooks/           # الـ Custom Hooks (useMovies, useKey, useLocalStorage)
 ┣ App.js           # المكون الأساسي
 ┗ index.css        # إعدادات Tailwind الرئيسية

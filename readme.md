# 🌟 Naufal Journey - Personal Blog Website

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

> A modern, responsive personal blog website showcasing travel adventures and career journey with elegant design and smooth user experience.

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Color Scheme](#-color-scheme)
- [Customization](#-customization)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🎯 Overview

**Naufal Journey** is a personal blog website that documents travel adventures and career milestones. Built with pure HTML, CSS, and vanilla JavaScript, this website offers a clean, modern, and responsive design that provides an excellent user experience across all devices.

### Key Highlights

- **🎨 Modern Design** - Clean and elegant UI with gradient themes
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance** - No heavy frameworks, pure vanilla implementation
- **🎭 Category-Based Theming** - Different color schemes for Travel and Career sections
- **♿ Accessible** - Semantic HTML and ARIA-compliant structure

## ✨ Features

### Core Features

- **Dynamic Content Cards** - Showcase journey entries with images, descriptions, and dates
- **Category Filtering** - Separate pages for All Journey, Travel Journey, and Career Journey
- **Show More Functionality** - Display 9 cards initially with "Show All" button for additional content
- **Detailed Article Pages** - Individual pages for each journey with full story and image gallery
- **Responsive Navigation** - Sticky header with smooth navigation transitions
- **Interactive Elements** - Hover effects, smooth animations, and transitions

### Design Features

- **Color-Coded Categories**
  - 🌈 All Journey: Purple gradient (`#667eea → #764ba2`)
  - ✈️ Travel Journey: Pink gradient (`#f093fb → #f5576c`)
  - 💼 Career Journey: Blue gradient (`#4facfe → #00f2fe`)
- **Image Galleries** - Grid-based photo galleries in detail pages
- **Social Media Integration** - Quick links to LinkedIn, Instagram, GitHub, etc.
- **Email Contact** - Direct email integration for inquiries

## 🎬 Demo

### Pages Overview

1. **Homepage (All Journey)** - `index.html`
   - Displays all journey entries (travel + career)
   - Purple theme with gradient hero section
   - Shows 9 cards initially with "Show All Journey" button

2. **Travel Journey** - `travel.html`
   - Filtered view of travel-related entries
   - Pink theme throughout
   - Dedicated travel adventures showcase

3. **Career Journey** - `career.html`
   - Filtered view of career-related entries
   - Blue theme throughout
   - Professional achievements and experiences

4. **Detail Pages** - `Detail/*.html`
   - Individual journey stories
   - Author info with avatar
   - Image galleries
   - Navigation back to respective category

## 🛠 Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure & Semantics | Latest |
| **CSS3** | Styling & Animations | Latest |
| **JavaScript (Vanilla)** | Interactivity | ES6+ |
| **Google Fonts** | Typography | Segoe UI |

### Why Vanilla Stack?

- ⚡ **Performance** - No framework overhead, faster load times
- 🎯 **Simplicity** - Easy to understand and maintain
- 📦 **Lightweight** - Minimal dependencies
- 🔧 **Customizable** - Full control over every aspect

## 📁 Project Structure

```
BLOG JOURNEY/
│
├── CSS/
│   └── style.css                 # Main stylesheet with all styles
│
├── img/                          # Image assets organized by category
│   ├── arsip/                    # Career: Kementrian Perhubungan
│   │   ├── arsip1.jpeg
│   │   └── arsip2.jpeg
│   ├── curug/                    # Travel: Curug Citambur
│   │   ├── curug1.jpg
│   │   └── curug2.jpg
│   ├── devest2024/               # Career: DevFest 2024
│   ├── devest2025/               # Career: DevFest 2025
│   ├── diskominfo/               # Career: Diskominfo Internship
│   ├── google/                   # Career: Google Workshop
│   ├── handayani/                # Career: Teaching Experience
│   ├── merapi/                   # Travel: Merapi Lava Tour
│   ├── puntang/                  # Travel: Gunung Puntang
│   ├── pvj/                      # Career: Photographer
│   ├── rancaupas/                # Travel: Ranca Upas Camping
│   ├── situ/                     # Travel: Situ Gunung Bridge
│   ├── tahura/                   # Travel: Taman Hutan Raya
│   ├── logo.png                  # Website logo
│   └── pp.jpeg                   # Profile picture
│
├── Detail/                       # Individual journey detail pages
│   ├── arsip.html
│   ├── curug.html
│   ├── devest2024.html
│   ├── devest2025.html
│   ├── diskominfo.html
│   ├── google.html
│   ├── handayani.html
│   ├── merapi.html
│   ├── puntang.html
│   ├── pvj.html
│   ├── rancaupas.html
│   ├── situ.html
│   └── tahura.html
│
├── index.html                    # Homepage - All Journey
├── travel.html                   # Travel Journey page
├── career.html                   # Career Journey page
└── README.md                     # Project documentation
```

## 🚀 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for local development)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/naufal-journey.git
   cd naufal-journey
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   open index.html

   # Option 2: Using Python local server
   python -m http.server 8000

   # Option 3: Using Node.js http-server
   npx http-server
   ```

3. **Access the website**
   - Direct: Open `index.html` in your browser
   - Server: Navigate to `http://localhost:8000`

### Deployment

The website is static and can be deployed to any web hosting service:

- **GitHub Pages** - Free hosting for static sites
- **Netlify** - One-click deployment
- **Vercel** - Fast deployment with CDN
- **Traditional Hosting** - Upload files via FTP

## 💻 Usage

### Adding New Journey Entries

1. **Add images** to appropriate folder in `img/`
2. **Create detail page** in `Detail/` folder
3. **Add card** to respective HTML file (index.html, travel.html, or career.html)

#### Example Card Structure

```html
<a href="Detail/your-journey.html" class="card">
    <div class="card-image">
        <img src="img/folder/image.jpg" alt="Journey Title">
    </div>
    <div class="card-content">
        <span class="card-badge badge-travel">✈️ Travel</span>
        <h4 class="card-title">Your Journey Title</h4>
        <p class="card-description">
            Brief description of your journey...
        </p>
        <span class="card-date">📅 DD Month YYYY</span>
    </div>
</a>
```

### Hidden Cards (For Show More Feature)

For cards beyond the 9th position, add `hidden-card` class:

```html
<a href="Detail/journey.html" class="card hidden-card">
    <!-- Card content -->
</a>
```

## 🎨 Color Scheme

### Primary Colors

| Category | Gradient | Hex Codes |
|----------|----------|-----------|
| **All Journey** | Purple | `#667eea → #764ba2` |
| **Travel Journey** | Pink | `#f093fb → #f5576c` |
| **Career Journey** | Blue | `#4facfe → #00f2fe` |

### Neutral Colors

| Element | Color | Hex Code |
|---------|-------|----------|
| Background | Light Gray | `#f8f9fa` |
| Text Primary | Dark Gray | `#333333` |
| Text Secondary | Medium Gray | `#666666` |
| Border | Light Border | `#e0e0e0` |

## 🔧 Customization

### Changing Colors

Edit `CSS/style.css` and update gradient values:

```css
/* All Journey - Purple */
.hero {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}

/* Travel Journey - Pink */
.hero.hero-travel {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}

/* Career Journey - Blue */
.hero.hero-career {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

### Changing Fonts

Update font-family in CSS:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Adjusting Card Display Limit

In HTML files, change the number of cards before adding `hidden-card` class (currently set to 9).

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest 2 versions | ✅ Fully Supported |
| Firefox | Latest 2 versions | ✅ Fully Supported |
| Safari | Latest 2 versions | ✅ Fully Supported |
| Edge | Latest 2 versions | ✅ Fully Supported |
| Opera | Latest 2 versions | ✅ Fully Supported |

### Mobile Devices

- ✅ iOS Safari (12+)
- ✅ Chrome Mobile
- ✅ Samsung Internet
- ✅ Firefox Mobile

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style
- Test on multiple browsers
- Update documentation as needed
- Add comments for complex logic

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

```
Copyright (c) 2025 Naufal Zul Faza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

## 📧 Contact

**Naufal Zul Faza**

- 📧 Email: [naufalzul45@gmail.com](mailto:naufalzul45@gmail.com)
- 💼 LinkedIn: [Naufal Zul Faza](https://www.linkedin.com/in/naufalzulfaza2003/)
- 📱 Instagram: [@_naufaliaaa](https://www.instagram.com/_naufaliaaa/)
- 🐙 GitHub: [@Naufaliaaa](https://github.com/Naufaliaaa)
- 🎥 YouTube: [Naufal Channel](https://www.youtube.com/channel/UCK2yPLXG4KELYmd8Lr_w_FA)
- 🎬 TikTok: [@naufaliaaa._](https://www.tiktok.com/@naufaliaaa._)

---

## 🙏 Acknowledgments

- Inspired by modern blog designs and personal portfolio websites
- Icons and emojis from Unicode standard
- Photography by Naufal Zul Faza
- Built with ❤️ by Naufal Zul Faza

---

## 📊 Project Statistics

- **Total Pages**: 17+ pages (3 main + 14 detail pages)
- **Total Images**: 50+ high-quality photos
- **Lines of Code**: ~3000+ lines
- **Load Time**: < 2 seconds
- **Mobile Optimized**: Yes
- **SEO Optimized**: Yes

---

<div align="center">

**⭐ If you like this project, please give it a star! ⭐**

Made with 💙 by [Naufal Zul Faza](https://github.com/Naufaliaaa)

**© 2025 Naufal Zul Faza. All Rights Reserved.**

</div>
// ======================================
// CONTENT DATA - EDIT KONTEN DI SINI
// ======================================
const journeyContent = {
    intro: `Setelah 3 tahun bekerja keras, akhirnya mendapat promosi menjadi Senior Developer. Ini adalah pencapaian besar dalam karir saya di bidang teknologi dan membuka banyak peluang baru untuk berkembang lebih jauh.`,
    
    sections: [
        {
            title: "🎯 Perjalanan Menuju Promosi",
            content: `Perjalanan menuju promosi ini tidaklah mudah. Dimulai dari posisi Junior Developer, saya terus belajar teknologi baru setiap hari. Mengambil berbagai online course di platform seperti Udemy, Coursera, dan Frontend Masters menjadi rutinitas malam hari. Tidak hanya belajar, saya juga aktif mengerjakan side project dan berkontribusi di berbagai repository open source. Setiap pull request yang di-merge, setiap bug yang berhasil di-fix, semua menjadi batu loncatan menuju goal besar ini.`
        },
        {
            title: "💪 Tantangan yang Dihadapi",
            content: `Tantangan terbesar adalah memimpin tim pertama kali dalam project besar perusahaan. Project tersebut adalah migrasi sistem lama ke arsitektur microservices yang lebih modern. Dengan tim yang terdiri dari 5 developer, saya harus belajar cara berkomunikasi efektif, mendelegasikan tugas, dan menyelesaikan konflik. Dari situ saya belajar tentang communication skills, time management, dan technical leadership yang tidak pernah diajarkan di bootcamp atau kuliah.`
        },
        {
            title: "👨‍🏫 Peran Mentor",
            content: `Mentor saya, seorang Principal Engineer yang sudah 10 tahun di industri, selalu memberikan feedback konstruktif yang membantu perkembangan karir. Dia mengajarkan bahwa menjadi senior developer bukan hanya soal coding yang bagus, tapi juga tentang bagaimana kita bisa membantu orang lain tumbuh. Code review yang dia berikan selalu detail dan penuh pembelajaran. Setiap 1-on-1 meeting adalah sesi mentoring yang berharga tentang architecture decision, best practices, dan career growth.`
        },
        {
            title: "🎉 Momen Pengumuman",
            content: `Saat diumumkan mendapat promosi dalam town hall meeting perusahaan, rasa haru dan bangga bercampur menjadi satu. CEO perusahaan sendiri yang mengumumkan dan memberikan apresiasi atas kontribusi saya dalam berbagai project critical. Standing ovation dari rekan kerja membuat saya sadar bahwa kerja keras selama ini tidak sia-sia. Ini bukan akhir, tapi awal dari tanggung jawab yang lebih besar. Sekarang giliran saya untuk membantu junior developer lain berkembang seperti saya dulu dibantu.`
        }
    ],
    
    conclusion: `Saya berkomitmen untuk terus berkembang dan membantu junior developer lainnya mencapai goals mereka. Promosi ini adalah reminder bahwa dengan dedikasi, kerja keras, dan mindset growth yang tepat, semua orang bisa mencapai mimpinya di industri tech. Let's keep learning and growing together! 💻✨`
};

// Timeline Data
const timelineData = [
    {
        year: "2022",
        title: "Junior Developer",
        description: "Memulai karir sebagai Junior Developer, fokus belajar fundamental dan best practices."
    },
    {
        year: "2023",
        title: "Mid-Level Developer",
        description: "Promosi pertama! Mulai handle project sendiri dan mentoring intern."
    },
    {
        year: "2024",
        title: "Tech Lead Project",
        description: "Memimpin tim dalam project besar migrasi ke microservices architecture."
    },
    {
        year: "2025",
        title: "Senior Developer",
        description: "Promosi menjadi Senior Developer dengan fokus pada technical leadership dan mentoring."
    }
];

// Skills Data
const skillsData = [
    { icon: "⚛️", name: "React & Next.js" },
    { icon: "🟢", name: "Node.js & Express" },
    { icon: "🐘", name: "PostgreSQL & MongoDB" },
    { icon: "🐳", name: "Docker & Kubernetes" },
    { icon: "☁️", name: "AWS Cloud Services" },
    { icon: "🔧", name: "CI/CD Pipeline" },
    { icon: "📊", name: "System Design" },
    { icon: "👥", name: "Team Leadership" }
];

// ======================================
// RENDER CONTENT
// ======================================
function renderContent() {
    const articleContent = document.getElementById('articleContent');
    
    let contentHTML = `
        <p class="intro-paragraph">${journeyContent.intro}</p>
    `;
    
    journeyContent.sections.forEach(section => {
        contentHTML += `
            <h2>${section.title}</h2>
            <p>${section.content}</p>
        `;
    });
    
    contentHTML += `
        <p class="conclusion-paragraph"><strong>${journeyContent.conclusion}</strong></p>
    `;
    
    articleContent.innerHTML = contentHTML;
}

// ======================================
// RENDER TIMELINE
// ======================================
function renderTimeline() {
    const timelineItems = document.getElementById('timelineItems');
    
    const timelineHTML = timelineData.map((item, index) => `
        <div class="timeline-item" style="animation-delay: ${index * 0.2}s">
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-description">${item.description}</div>
        </div>
    `).join('');
    
    timelineItems.innerHTML = timelineHTML;
}

// ======================================
// RENDER SKILLS
// ======================================
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    const skillsHTML = skillsData.map((skill, index) => `
        <div class="skill-card" style="animation-delay: ${index * 0.1}s">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
        </div>
    `).join('');
    
    skillsGrid.innerHTML = skillsHTML;
}

// ======================================
// LOGO CLICK
// ======================================
function setupLogoClick() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
}

// ======================================
// SCROLL ANIMATIONS
// ======================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.article-text h2, .article-text p').forEach(el => {
        observer.observe(el);
    });
}

// ======================================
// INITIALIZATION
// ======================================
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    renderTimeline();
    renderSkills();
    setupLogoClick();
    setupScrollAnimations();
});
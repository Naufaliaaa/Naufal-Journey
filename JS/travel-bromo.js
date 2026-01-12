// ======================================
// CONTENT DATA - EDIT KONTEN DI SINI
// ======================================
const journeyContent = {
    intro: `Perjalanan dimulai pukul 3 pagi dengan berkendara menuju viewpoint. Suasana gelap dan dingin tidak menyurutkan semangat untuk melihat matahari terbit yang legendaris di Gunung Bromo.`,
    
    sections: [
        {
            title: "🌅 Sunrise yang Memukau",
            content: `Sesampainya di viewpoint, langit mulai berubah warna dari hitam menjadi oranye keemasan. Pemandangan Gunung Bromo, Gunung Batok, dan Gunung Semeru yang menjulang tinggi terlihat sangat megah. Kabut tipis yang menyelimuti kawah menciptakan suasana mistis yang memukau. Suhu udara yang mencapai 3-5 derajat celsius membuat semua pengunjung mengenakan jaket tebal, tapi tidak ada yang mengeluh. Semua mata tertuju pada horizon yang perlahan menyala dengan warna emas dan jingga.`
        },
        {
            title: "🐴 Menuju Kawah Bromo",
            content: `Setelah sunrise, kami turun ke lautan pasir dan menunggang kuda menuju kawah Bromo. Lautan pasir yang luas membentang sejauh mata memandang, menciptakan pemandangan seperti di planet lain. Perjalanan dengan kuda memakan waktu sekitar 20 menit, melewati padang pasir vulkanik yang eksotis. Sesekali terdengar suara letusan kecil dari kawah yang mengingatkan kita bahwa gunung ini masih aktif.`
        },
        {
            title: "⛰️ Pengalaman di Bibir Kawah",
            content: `Pengalaman berdiri di bibir kawah yang masih mengeluarkan asap sulfur adalah momen yang tak terlupakan. Dari dekat, kita bisa melihat kawah dengan diameter sekitar 800 meter dan kedalaman 200 meter. Asap putih tebal terus mengepul dari dalam kawah, disertai bau belerang yang menyengat. Tangga beton dengan 250 anak tangga harus ditaklukkan untuk mencapai puncak. Meskipun melelahkan, pemandangan dari atas benar-benar sepadan dengan usaha yang dikeluarkan.`
        },
        {
            title: "🌿 Pelajaran Berharga",
            content: `Perjalanan ini mengajarkan saya tentang keindahan alam Indonesia yang luar biasa dan pentingnya menjaga kelestarian lingkungan. Gunung Bromo bukan hanya destinasi wisata, tapi juga tempat suci bagi masyarakat Tengger yang tinggal di sekitarnya. Melihat bagaimana mereka hidup harmonis dengan alam memberikan perspektif baru tentang kehidupan. Kita belajar untuk lebih menghargai anugerah alam yang telah Tuhan berikan.`
        }
    ],
    
    conclusion: `Petualangan ke Gunung Bromo adalah pengalaman yang mengubah cara pandang saya terhadap keindahan Indonesia. Setiap detik di sana adalah momen berharga yang akan selalu tersimpan dalam memori. Jika kalian punya kesempatan, jangan lewatkan untuk mengunjungi salah satu keajaiban alam Indonesia ini! 🏔️✨`
};

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
// GALLERY INTERACTION
// ======================================
function setupGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const mainImage = document.getElementById('mainImage');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            mainImage.src = item.src.replace('w=400', 'w=1200');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
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
    setupGallery();
    setupLogoClick();
    setupScrollAnimations();
});
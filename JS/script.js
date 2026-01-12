// ======================================
// DATA JOURNEYS - TAMBAHKAN JOURNEY BARU DI SINI
// ======================================
const journeys = [
    {
        id: 1,
        title: "Petualangan ke Gunung Bromo",
        category: "travel",
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800",
        description: "Pengalaman luar biasa mendaki Gunung Bromo di pagi hari. Pemandangan sunrise yang memukau dan kabut yang menyelimuti kawah membuat perjalanan ini tak terlupakan.",
        date: "15 Desember 2024",
        link: "travel-bromo.html"
    },
    {
        id: 2,
        title: "Promosi Menjadi Senior Developer",
        category: "career",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
        description: "Setelah 3 tahun bekerja keras, akhirnya mendapat promosi menjadi Senior Developer. Ini adalah pencapaian besar dalam karir saya di bidang teknologi.",
        date: "1 Januari 2025",
        link: "career-promotion.html"
    }
];

// ======================================
// STATE MANAGEMENT
// ======================================
let currentFilter = 'all';

// ======================================
// INITIALIZATION
// ======================================
document.addEventListener('DOMContentLoaded', () => {
    renderJourneys();
    setupEventListeners();
});

// ======================================
// EVENT LISTENERS
// ======================================
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });

    // Logo click
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
}

function handleFilterClick(e) {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    // Update filter and re-render
    currentFilter = e.target.dataset.filter;
    renderJourneys();
}

// ======================================
// RENDER FUNCTIONS
// ======================================
function renderJourneys() {
    const grid = document.getElementById('journeysGrid');
    const titleMap = {
        'all': 'Semua Journey',
        'travel': 'Travel Journey',
        'career': 'Career Journey'
    };
    
    // Update section title
    document.getElementById('sectionTitle').textContent = titleMap[currentFilter];

    // Filter journeys based on current filter
    const filtered = currentFilter === 'all' 
        ? journeys 
        : journeys.filter(j => j.category === currentFilter);

    // Handle empty state
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <h3>Belum ada journey di kategori ini</h3>
                <p>Tunggu petualangan selanjutnya! 🚀</p>
            </div>
        `;
        return;
    }

    // Render journey cards
    grid.innerHTML = filtered.map((journey, index) => createJourneyCard(journey, index)).join('');
}

function createJourneyCard(journey, index) {
    const categoryLabel = journey.category === 'travel' ? '✈️ Travel' : '💼 Career';
    
    return `
        <a href="${journey.link}" class="journey-card" style="animation-delay: ${index * 0.1}s; text-decoration: none;">
            <img src="${journey.image}" alt="${journey.title}" class="journey-image">
            <div class="journey-content">
                <span class="journey-category category-${journey.category}">
                    ${categoryLabel}
                </span>
                <h3 class="journey-title">${journey.title}</h3>
                <p class="journey-description">${journey.description}</p>
                <div class="journey-date">
                    📅 ${journey.date}
                </div>
            </div>
        </a>
    `;
}
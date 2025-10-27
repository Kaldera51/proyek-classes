// Data untuk website
const galleryData = [
    {
        id: 1,
        title: "Bapak Ali Zainudin & Siswa XI-I",
        description: "-",
        image: "images/gallery/withpazen.jpg",
        date: "05 Agustus 2025",
        location: "MA NU Ma'arif Kudus",
        category: "Random",
        photos: 1
    },
    {
        id: 2,
        title: "Galeri 2",
        description: "Galeri blm diisi.",
        image: "",
        date: "04 Mei 2006",
        location: "-",
        category: "-",
        photos: 0
    },
    {
        id: 3,
        title: "Galeri 3",
        description: "Galeri blm diisi.",
        image: "",
        date: "07 Agustus 2009",
        location: "-",
        category: "-",
        photos: 0
    },
    {
        id: 4,
        title: "Galeri 4",
        description: "Galeri blm diisi.",
        image: "",
        date: "10 November 2012",
        location: "-",
        category: "-",
        photos: 0
    },
    {
        id: 5,
        title: "Galeri 5",
        description: "Galeri blm diisi.",
        image: "",
        date: "13 Februari 2015",
        location: "-",
        category: "-",
        photos: 0
    },
    {
        id: 6,
        title: "Galeri 6",
        description: "Galeri blm diisi.",
        image: "",
        date: "16 Mei 2018",
        location: "-",
        category: "-",
        photos: 0
    }
]

// Data Wali Kelas - BARU
const teacherData = {
    name: "Muhammad Khoirul Fikri Maulana, S.Ag.",
    position: "Wali Kelas XI-I TSM",
    subject: "Wali Kelas terganteng dan tergawhul",
    education: "S.Ag. (Sarjana Agama)",
    experience: "-",
    specialization: "Pendidikan Agama Islam",
    bio: "System.out.println(\"Kosong\");",
    teachingPhilosophy: "console.log(\"Kosong\");",
    subjects: [
        "Nahwu Shorof",
    ],
    achievements: [
        "-"
    ],
    motto: "Be yourself",
    joinDate: "-",
    studentsCount: 29,
    subjectsCount: 1,
    image: "images/students/pak-fikri.jpg"
};

// Data siswa
const studentsData = {
mainLeaders: [
        {
            id: 1,
            name: "M. Aslam Musyadad",
            position: "Ketua Kelas",
            initials: "AM",
            nim: "015",
            birthDate: "23 Juni 2010",
            address: "Mijen, Kaliwungu, Kudus",
            hobbies: ["Game", "Recite Prayers"],
            achievements: ["Juara 1 MTQ tingkat Kecamatan (2022)"],
            bio: "Suka mengaji.",
            image: "images/students/aslam.jpg"
        },
        {
            id: 2,
            name: "Ferly Apri Trisnadi",
            position: "Wakil Ketua",
            initials: "FAT",
            nim: "008",
            birthDate: "04 April 2010",
            address: "Banget, Kaliwungu, Kudus",
            hobbies: ["Drawing"],
            achievements: [],
            bio: "Think by yourself.",
            image: "images/students/default.jpg"
        },
        {
            id: 3,
            name: "M. Rizqi Maulana",
            position: "Sekretaris",
            initials: "RM",
            nim: "023",
            birthDate: "01 Oktober 2009",
            address: "Jetak Kedungdowo, Kaliwungu, Kudus",
            hobbies: ["Roleplay", "Program"],
            achievements: [],
            bio: "Estrella de Java.",
            image: "images/students/default.jpg"
        },
        {
            id: 4,
            name: "Aris Dwi Saputra",
            position: "Bendahara",
            initials: "ADS",
            nim: "005",
            birthDate: "09 Januari 2009",
            address: "Mijen Gadon, Kaliwungu, Kudus",
            hobbies: ["Game", "Jogging", "Fishing"],
            achievements: [],
            bio: "Saya islam.",
            image: "images/students/default.jpg"
        }
    ],
    
    coordinators: [
        {
            id: 5,
            name: "Muhammad Kholil",
            position: "Seksi Pendidikan",
            initials: "MK",
            nim: "020",
            birthDate: "29 September 2009",
            address: "Mijen Krajan, Kaliwungu, Kudus",
            hobbies: ["Volley Ball"],
            achievements: [],
            bio: "Rajin mengaji.",
            image: "images/students/kholil.jpg"
        },
        {
            id: 6,
            name: "Andika Fajar Zulianto",
            position: "Seksi Kebersihan",
            initials: "AFZ",
            nim: "004",
            birthDate: "24 Oktober 2009",
            address: "Mijen Klisat, Kaliwungu, Kudus",
            hobbies: ["Jogging", "Social Media"],
            achievements: [],
            bio: "Orang baik-baik, pendiam, dan murah hati.",
            image: "images/students/andika.jpg"
        },
        {
            id: 7,
            name: "M. Yahya Arif",
            position: "Seksi Keamanan",
            initials: "YA",
            nim: "011",
            birthDate: "23 Juni 2009",
            address: "Mijen, Kaliwungu, Kudus",
            hobbies: ["Indoor Football", "Jogging"],
            achievements: ["Juara 1 Lomba Lari Sprint tingkat Kecamatan (2024)", "Juara 2 Lomba Puisi tingkat Sekolah (2024)"],
            bio: "Baik hati, sabar, dan tidak sombong.",
            image: "images/students/yahya.jpg"
        },
        {
            id: 8,
            name: "M. Yusuf Zakaria",
            position: "Seksi Olahraga",
            initials: "YZ",
            nim: "024",
            birthDate: "17 April 2009",
            address: "Kacu Banget, Kaliwungu, Kudus",
            hobbies: [],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/yusuf.jpg"
        }
    ],
    
    classMembers: [
        {
            id: 9,
            name: "Achmad Mahendra",
            position: "Anggota",
            initials: "AM",
            nim: "001",
            birthDate: "30 Maret 2009",
            address: "Mijen Klisat, Kaliwungu, Kudus",
            hobbies: ["Motorcycle"],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 10,
            name: "Achmad Maulana Fahri",
            position: "Anggota",
            initials: "AMF",
            nim: "002",
            birthDate: "27 Mei 2010",
            address: "Gamong, Kaliwungu, Kudus",
            hobbies: ["Social Media"],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 11,
            name: "Achmad Miftahul Ula",
            position: "Anggota",
            initials: "AMU",
            nim: "003",
            birthDate: "-",
            address: "Sidorekso, Kaliwungu, Kudus",
            hobbies: ["Game"],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 12,
            name: "Bagus Ahmad Dinijad",
            position: "Anggota",
            initials: "BAD",
            nim: "006",
            birthDate: "-",
            address: "Sidorekso, Kaliwungu, Kudus",
            hobbies: ["Motorcycle"],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 13,
            name: "Farel Firmansyah",
            position: "Anggota",
            initials: "FF",
            nim: "007",
            birthDate: "10 November 2008",
            address: "Kedungdowo, Kaliwungu, Kudus",
            hobbies: ["Game"],
            achievements: [],
            bio: "Mboh, ak dewe yo rrti.",
            image: "images/students/default.jpg"
        },
        {
            id: 14,
            name: "Firdaus Galih Kurniawan",
            position: "Anggota",
            initials: "FGK",
            nim: "009",
            birthDate: "-",
            address: "Sidorekso, Kaliwungu, Kudus",
            hobbies: ["Motorcycle"],
            achievements: [],
            bio: "Galih belum besar tante.",
            image: "images/students/default.jpg"
        },
        {
            id: 15,
            name: "Masyaril Kharom",
            position: "Anggota",
            initials: "MK",
            nim: "010",
            birthDate: "07 Desember 2009",
            address: "Blimbing Kidul, Kaliwungu, Kudus",
            hobbies: ["Sleeping in Class"],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 16,
            name: "Muhammad Doni",
            position: "Anggota",
            initials: "MD",
            nim: "012",
            birthDate: "05 Januari 2009",
            address: "Sidorekso, Kaliwungu, Kudus",
            hobbies: ["Motorcycle", "Social Media"],
            achievements: [],
            bio: "Sering tidur.",
            image: "images/students/default.jpg"
        },
        {
            id: 17,
            name: "M. Abdul Ryan",
            position: "Anggota",
            initials: "AR",
            nim: "013",
            birthDate: "-",
            address: "Mijen, Kaliwungu, Kudus",
            hobbies: [],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 18,
            name: "M. Afka Immanul Haq",
            position: "Anggota",
            initials: "AIH",
            nim: "014",
            birthDate: "08 Mei 2009",
            address: "Sidorekso, Kaliwungu, Kudus",
            hobbies: ["Music", "Social Media"],
            achievements: [],
            bio: "Random Boy.",
            image: "images/students/afka.jpg"
        },
        {
            id: 19,
            name: "M. Dhika Saputra",
            position: "Anggota",
            initials: "DS",
            nim: "016",
            birthDate: "20 Desember 2008",
            address: "Blimbing Kidul, Kaliwungu, Kudus",
            hobbies: ["Game"],
            achievements: [],
            bio: "Ingin menjadi orang yang lebih baik dari kemarin.",
            image: "images/students/default.jpg"
        },
        {
            id: 20,
            name: "M. Dwi Rizky Pradipta",
            position: "Anggota",
            initials: "DRP",
            nim: "017",
            birthDate: "24 Desember 2008",
            address: "Mijen Klisat, Kaliwungu, Kudus",
            hobbies: ["Motorcycle"],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 21,
            name: "M. Ilyas Sri Perdana",
            position: "Anggota",
            initials: "ISP",
            nim: "018",
            birthDate: "-",
            address: "-",
            hobbies: [],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 22,
            name: "M. Kevin Muntakim",
            position: "Anggota",
            initials: "KM",
            nim: "019",
            birthDate: "07 Agustus 2009",
            address: "Mijen, Kaliwungu, Kudus",
            hobbies: ["Video Editor", "Otaku"],
            achievements: [],
            bio: "Kepin Dingin Banget.",
            image: "images/students/default.jpg"
        },
        {
            id: 23,
            name: "Muhammad Masduqi",
            position: "Anggota",
            initials: "MM",
            nim: "021",
            birthDate: "13 Agustus 2009",
            address: "Mijen, Kaliwungu, Kudus",
            hobbies: ["Game", "Fishing"],
            achievements: [],
            bio: "Jangan lupa makan.",
            image: "images/students/masduqi.jpg"
        },
        {
            id: 24,
            name: "M. Maulana Akmal",
            position: "Anggota",
            initials: "MA",
            nim: "022",
            birthDate: "25 Juli 2008",
            address: "Kacu Banget, Kaliwungu, Kudus",
            hobbies: ["Game"],
            achievements: [],
            bio: "Ramah, baik hati, humoris, tidak sombong, rajin ibadah, dan juga soft spoken.",
            image: "images/students/lana1.jpg"
        },
        {
            id: 25,
            name: "Rifky Akbar Nur Ramadhani",
            position: "Anggota",
            initials: "RANR",
            nim: "025",
            birthDate: "18 September 2009",
            address: "Gamong, Kaliwungu, Kudus",
            hobbies: ["Social Media"],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 26,
            name: "Rizki Dhinar Widhianto",
            position: "Anggota",
            initials: "RDW",
            nim: "026",
            birthDate: "-",
            address: "Mijen, Kaliwungu, Kudus",
            hobbies: [],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 27,
            name: "Seno Indrawan",
            position: "Anggota",
            initials: "SI",
            nim: "027",
            birthDate: "12 Agustus 2009",
            address: "Kacu Banget, Kaliwungu, Kudus",
            hobbies: ["Motorcycle", "Social Media"],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 28,
            name: "Sugi Rejo",
            position: "Anggota",
            initials: "SR",
            nim: "028",
            birthDate: "15 September 2009",
            address: "Blimbing Kidul, Kaliwungu, Kudus",
            hobbies: ["Game", "Social Media", "Roleplay"],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        },
        {
            id: 29,
            name: "M. Nailal Muna",
            position: "Anggota",
            initials: "NM",
            nim: "029",
            birthDate: "-",
            address: "Tunggulpandean, Nalumsari, Jepara",
            hobbies: [],
            achievements: [],
            bio: "no bio yet",
            image: "images/students/default.jpg"
        }
    ]
};

const scheduleData = {
    days: ['Sabtu', 'Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis'],
    subjects: {
        'Tadarus': '#8B4513',
        'Sejarah Kebudayaan Islam - Umi Syafaah, S.Pd.I.': '#654321',
        'Ke NU an - Umi Syafaah, S.Pd.I.': '#A0522D',
        'PJOK - Sunarto, S.E.': '#D2691E',
        'Bahasa Inggris - Akhmadatus Samawat, S.Ag.': '#CD853F',
        'Akhlak Kitab - Habib Tanwir, S.Pd.': '#8B7355',
        'Akidah Akhlak - Ririn Sholikhah, S.Pd.I.': '#C0A080',
        'Ekonomi - H. Zamroni, M.E.': '#228B22',
        'Sosiologi - Moch. Anwar Bagus, S.H.': '#2E8B57',
        'Tafsir - Fathul \'Alim, S.Pd.': '#3CB371',
        'Matematika - Tiara Intani Dewi, S.Pd.': '#4169E1',
        'Geografi - Efy Rachmawati, S.Sos., M.Pd.': '#4682B4',
        'Nahwu Shorof - M. Khoirul Fikri M., S.Ag.': '#5F9EA0',
        'Bahasa Indonesia - Habib Tanwir, S.Pd.': '#6495ED',
        'Vokasi - Ali Zainudin.': '#1E90FF',
        'Pendidikan Pancasila - Moch. Anwar Bagus, S.H.': '#DC143C',
        'Fiqih Kitab - Fauzan Akbar, S.H.I.': '#A52A2A',
        'Aswaja - K.H. Ahmad Radjab.': '#B22222',
        'Takhasus - Fathul \'Alim, S.Pd.': '#CD5C5C',
        'Qur\'an Hadits - H. Yusuf Ilhami, M.Pd.I.': '#32CD32',
        'Bahasa Arab - M. Fahmi Musthofa, S.Pd.': '#20B2AA',
        'Fiqih - Fauzan Akbar, S.H.I.': '#008080',
        'Sejarah - Umi Syafaah, S.Pd.I.': '#6A5ACD'
    },
    schedule: {
        'Sabtu': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:30 - 08:10', subject: 'Sejarah Kebudayaan Islam - Umi Syafaah, S.Pd.I.' },
            { time: '08:10 - 08:50', subject: 'Ke NU an - Umi Syafaah, S.Pd.I.' },
            { time: '08:50 - 09:30', subject: 'PJOK - Sunarto, S.E.' },
            { time: '09:30 - 10:10', subject: 'PJOK - Sunarto, S.E.' },
            { time: '10:30 - 11:10', subject: 'Bahasa Inggris - Akhmadatus Samawat, S.Ag.' },
            { time: '11:10 - 11:50', subject: 'Bahasa Inggris - Akhmadatus Samawat, S.Ag.' },
            { time: '12:20 - 13:00', subject: 'Akhlak Kitab - Habib Tanwir, S.Pd.' },
            { time: '13:00 - 13:40', subject: 'Akidah Akhlak - Ririn Sholikhah, S.Pd.I.' }
        ],
        'Ahad': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:45 - 08:10', subject: 'Ekonomi - H. Zamroni, M.E.' },
            { time: '08:30 - 08:50', subject: 'Ekonomi - H. Zamroni, M.E.' },
            { time: '09:15 - 09:30', subject: 'Sosiologi - Moch. Anwar Bagus, S.H.' },
            { time: '10:15 - 10:10', subject: 'Sosiologi - Moch. Anwar Bagus, S.H.' },
            { time: '10:30 - 11:10', subject: 'Sosiologi - Moch. Anwar Bagus, S.H.' },
            { time: '11:10 - 11:50', subject: 'Tafsir - Fathul \'Alim, S.Pd.' }
        ],
        'Senin': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:30 - 08:10', subject: 'Matematika - Tiara Intani Dewi, S.Pd.' },
            { time: '08:10 - 08:50', subject: 'Matematika - Tiara Intani Dewi, S.Pd.' },
            { time: '08:50 - 09:30', subject: 'Matematika - Tiara Intani Dewi, S.Pd.' },
            { time: '09:30 - 10:10', subject: 'Geografi - Efy Rachmawati, S.Sos., M.Pd.' },
            { time: '10:30 - 11:10', subject: 'Geografi - Efy Rachmawati, S.Sos., M.Pd.' },
            { time: '11:10 - 11:50', subject: 'Geografi - Efy Rachmawati, S.Sos., M.Pd.' },
            { time: '12:20 - 13:00', subject: 'Nahwu Shorof - M. Khoirul Fikri M., S.Ag.' },
            { time: '13:00 - 13:40', subject: 'Nahwu Shorof - M. Khoirul Fikri M., S.Ag.' }
        ],
        'Selasa': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:30 - 08:10', subject: 'Bahasa Indonesia - Habib Tanwir, S.Pd.' },
            { time: '08:10 - 08:50', subject: 'Bahasa Indonesia - Habib Tanwir, S.Pd.' },
            { time: '08:50 - 09:30', subject: 'Vokasi - Ali Zainudin.' },
            { time: '09:30 - 10:10', subject: 'Vokasi - Ali Zainudin.' },
            { time: '10:30 - 11:10', subject: 'Vokasi - Ali Zainudin.' },
            { time: '11:10 - 11:50', subject: 'Vokasi - Ali Zainudin.' },
            { time: '12:20 - 13:00', subject: 'Vokasi - Ali Zainudin.' },
            { time: '13:00 - 13:40', subject: 'Vokasi - Ali Zainudin.' }
        ],
        'Rabu': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:30 - 08:10', subject: 'Pendidikan Pancasila - Moch. Anwar Bagus, S.H.' },
            { time: '08:10 - 08:50', subject: 'Pendidikan Pancasila - Moch. Anwar Bagus, S.H.' },
            { time: '08:50 - 09:30', subject: 'Fiqih Kitab - Fauzan Akbar, S.H.I.' },
            { time: '09:30 - 10:10', subject: 'Ekonomi - H. Zamroni, M.E.' },
            { time: '10:30 - 11:10', subject: 'Aswaja - K.H. Ahmad Radjab.' },
            { time: '11:10 - 11:50', subject: 'Bahasa Indonesia - Habib Tanwir, S.Pd.' },
            { time: '12:20 - 13:00', subject: 'Takhasus - Fathul \'Alim, S.Pd.' },
            { time: '13:00 - 13:40', subject: 'Takhasus - Fathul \'Alim, S.Pd.' }
        ],
        'Kamis': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:30 - 08:10', subject: 'Qur\'an Hadits - H. Yusuf Ilhami, M.Pd.I.' },
            { time: '08:10 - 08:50', subject: 'Qur\'an Hadits - H. Yusuf Ilhami, M.Pd.I.' },
            { time: '08:50 - 09:30', subject: 'Bahasa Arab - M. Fahmi Musthofa, S.Pd.' },
            { time: '09:30 - 10:10', subject: 'Bahasa Arab - M. Fahmi Musthofa, S.Pd.' },
            { time: '10:30 - 11:10', subject: 'Fiqih - Fauzan Akbar, S.H.I.' },
            { time: '11:10 - 11:50', subject: 'Fiqih - Fauzan Akbar, S.H.I.' },
            { time: '12:20 - 13:00', subject: 'Sejarah - Umi Syafaah, S.Pd.I.' },
            { time: '13:00 - 13:40', subject: 'Sejarah - Umi Syafaah, S.Pd.I.' }
        ]
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize Website
function initializeWebsite() {
    loadGallery();
    loadStudents();
    loadSchedule();
    setupEventListeners();
    setupScrollEffects();
    setupStudentModals();
    renderTeacherCard();
    setupTeacherEvents();
    setupModalCloseEvents();
    initializeMobileFeatures();
    centerHeroSection();
    setupEventDelegation();
    mobileBruteForceFix();
}

// Load Gallery Data
function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-id', item.id);
        
        galleryItem.innerHTML = `
            <div class="gallery-image">
                ${item.image ? 
                    `<img src="${item.image}" alt="${item.title}" onerror="this.style.display='none';">
                     <div class="image-placeholder" style="${item.image ? 'display: none' : ''}">
                         <i class="fas fa-image"></i>
                     </div>` :
                    `<div class="image-placeholder">
                         <i class="fas fa-image"></i>
                     </div>`
                }
                <div class="gallery-badge">${item.category}</div>
            </div>
            <div class="gallery-content">
                <h3>${item.title}</h3>
                <p class="gallery-description">${item.description}</p>
                <div class="gallery-meta">
                    <span class="gallery-date">
                        <i class="fas fa-calendar"></i> ${item.date}
                    </span>
                    <span class="gallery-photos">
                        <i class="fas fa-camera"></i> ${item.photos} foto
                    </span>
                </div>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
    
    setupGalleryModals();
}

// Fungsi untuk setup gallery modals
function setupGalleryModals() {
    const modal = document.getElementById('galleryModal');
    const closeBtn = document.querySelector('.close-gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Click event untuk gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            const galleryItem = galleryData.find(item => item.id === itemId);
            if (galleryItem) {
                showGalleryModal(galleryItem);
            }
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal ketika klik di luar
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close dengan ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
}

function showGalleryModal(item) {
    const modal = document.getElementById('galleryModal');
    const modalBody = document.getElementById('galleryModalBody');
    
    modalBody.innerHTML = `
        <div class="gallery-modal-image">
            ${item.image ? 
                `<img src="${item.image}" alt="${item.title}">` :
                `<div style="text-align: center; color: var(--primary-color);">
                     <i class="fas fa-image" style="font-size: 4rem; margin-bottom: 20px;"></i>
                     <p>Blm ada gambar jir</p>
                 </div>`
            }
        </div>
        <div class="gallery-modal-info">
            <h2 class="gallery-modal-title">${item.title}</h2>
            <p class="gallery-modal-description">${item.description}</p>
            
            <div class="gallery-modal-details">
                <div class="detail-item">
                    <span class="detail-label">Tanggal:</span>
                    <span class="detail-value">${item.date}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Lokasi:</span>
                    <span class="detail-value">${item.location}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Kategori:</span>
                    <span class="detail-value">${item.category}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Total Foto:</span>
                    <span class="detail-value">${item.photos} foto</span>
                </div>
            </div>
            
            <button class="btn btn-primary">
                <i class="fas fa-images"></i> Lihat Album Lengkap
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Fungsi loadStudents
function loadStudents() {
    loadStudentCategory('main-leaders', studentsData.mainLeaders);
    loadStudentCategory('coordinators', studentsData.coordinators);
    loadStudentCategory('class-members', studentsData.classMembers);
}

function loadStudentCategory(containerId, students) {
    const container = document.getElementById(containerId);
    
    students.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        studentCard.setAttribute('data-id', student.id);
        
        studentCard.innerHTML = `
            <div class="student-avatar">
                ${student.image ? 
                    `<img src="${student.image}" alt="${student.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                     <div class="avatar-initials" style="display: none">${student.initials}</div>` :
                    `<div class="avatar-initials">${student.initials}</div>`
                }
            </div>
            <h3>${student.name}</h3>
            <div class="student-position">${student.position}</div>
            ${student.position !== 'Anggota' ? '<div class="student-badge">Pengurus</div>' : ''}
        `;
        
        container.appendChild(studentCard);
    });
}

// Fungsi untuk detail siswa
function setupStudentModals() {
    const modal = document.getElementById('studentModal');
    const closeBtn = modal.querySelector('.close-modal');
    
    // Student cards click event (yang existing)
    const studentCards = document.querySelectorAll('.student-card');
    studentCards.forEach(card => {
        card.addEventListener('click', function() {
            const studentId = parseInt(this.getAttribute('data-id'));
            const student = findStudentById(studentId);
            if (student) {
                showStudentModal(student);
            }
        });
    });

    // Close Event = Yes
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Click outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

function findStudentById(id) {
    // Cari di semua kategori
    const allStudents = [
        ...studentsData.mainLeaders,
        ...studentsData.coordinators,
        ...studentsData.classMembers
    ];
    return allStudents.find(student => student.id === id);
}

function showStudentModal(student) {
    const modal = document.getElementById('studentModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="student-detail">
            <!-- Header dengan Avatar -->
            <div class="student-detail-header">
                <div class="student-detail-avatar">
                    ${student.image ? 
                        `<img src="${student.image}" alt="${student.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                         <div class="avatar-initials" style="display: none">${student.initials}</div>` :
                        `<div class="avatar-initials">${student.initials}</div>`
                    }
                </div>
                <h2>${student.name}</h2>
                <div class="student-detail-position">${student.position}</div>
                <div class="student-nim">No. Absen: ${student.nim}</div>
            </div>
            
            <!-- Informasi Pribadi -->
            ${student.birthDate || student.address ? `
            <div class="info-section">
                <h3 class="section-title-modal">
                    <i class="fas fa-user-circle"></i>
                    Informasi Pribadi
                </h3>
                <div class="personal-info-grid">
                    ${student.birthDate ? `
                    <div class="info-item">
                        <span class="info-label">
                            <i class="fas fa-birthday-cake"></i>
                            Tanggal Lahir
                        </span>
                        <span class="info-value">${student.birthDate}</span>
                    </div>
                    ` : ''}
                    
                    ${student.address ? `
                    <div class="info-item">
                        <span class="info-label">
                            <i class="fas fa-map-marker-alt"></i>
                            Alamat
                        </span>
                        <span class="info-value">${student.address}</span>
                    </div>
                    ` : ''}
                </div>
            </div>
            ` : ''}
            
            <!-- Tentang Saya -->
            ${student.bio ? `
            <div class="info-section">
                <h3 class="section-title-modal">
                    <i class="fas fa-file-alt"></i>
                    Tentang Saya
                </h3>
                <div class="bio-text">
                    ${student.bio}
                </div>
            </div>
            ` : ''}
            
            <!-- Hobi -->
            ${student.hobbies && student.hobbies.length > 0 ? `
            <div class="info-section">
                <h3 class="section-title-modal">
                    <i class="fas fa-heart"></i>
                    Hobi & Minat
                </h3>
                <div class="hobbies-container">
                    ${student.hobbies.map(hobby => `
                        <span class="hobby-tag">${hobby}</span>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            <!-- Prestasi -->
            ${student.achievements && student.achievements.length > 0 ? `
            <div class="info-section">
                <h3 class="section-title-modal">
                    <i class="fas fa-trophy"></i>
                    Prestasi
                </h3>
                <ul class="achievements-list">
                    ${student.achievements.map(achievement => `
                        <li class="achievement-item">
                            <i class="fas fa-award achievement-icon"></i>
                            <span class="achievement-text">${achievement}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            ` : ''}
            
            <!-- Kontak -->
            ${student.phone || student.email ? `
            <div class="info-section">
                <h3 class="section-title-modal">
                    <i class="fas fa-address-book"></i>
                    Kontak
                </h3>
                <div class="contact-links">
                    ${student.phone ? `
                    <a href="tel:${student.phone}" class="contact-link">
                        <i class="fas fa-phone"></i>
                        ${student.phone}
                    </a>
                    ` : ''}
                    
                    ${student.email ? `
                    <a href="mailto:${student.email}" class="contact-link">
                        <i class="fas fa-envelope"></i>
                        ${student.email}
                    </a>
                    ` : ''}
                </div>
            </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
}

// Fungsi untuk menampilkan modal wali kelas - BARU
function showTeacherModal() {
    const modal = document.getElementById('teacherModal');
    const modalBody = document.getElementById('teacherModalBody');
    
    modalBody.innerHTML = `
        <div class="teacher-modal-header">
            <div class="teacher-modal-avatar">
               ${teacherData.image ? 
                    `<img src="${teacherData.image}" alt="${teacherData.name}" 
                          style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;"
                          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                     <i class="fas fa-user-tie" style="display: none; font-size: 3rem; color: white;"></i>` :
                    `<i class="fas fa-user-tie" style="font-size: 3rem; color: white;"></i>`
                }
            </div>
            <h2 class="teacher-modal-title">${teacherData.name}</h2>
            <p class="teacher-modal-subtitle">${teacherData.position}</p>
        </div>
        
        <div class="teacher-modal-body">
            <!-- Informasi Pribadi -->
            <div class="teacher-info-grid">
                <div class="teacher-info-card">
                    <h4><i class="fas fa-graduation-cap"></i> Pendidikan</h4>
                    <div class="teacher-detail-item">
                        <span class="detail-label">Gelar</span>
                        <span class="detail-value">${teacherData.education}</span>
                    </div>
                    <div class="teacher-detail-item">
                        <span class="detail-label">Spesialisasi</span>
                        <span class="detail-value">${teacherData.specialization}</span>
                    </div>
                </div>
                
                <div class="teacher-info-card">
                    <h4><i class="fas fa-briefcase"></i> Pengalaman</h4>
                    <div class="teacher-detail-item">
                        <span class="detail-label">Mengajar</span>
                        <span class="detail-value">${teacherData.experience}</span>
                    </div>
                    <div class="teacher-detail-item">
                        <span class="detail-label">Bergabung</span>
                        <span class="detail-value">Tahun ${teacherData.joinDate}</span>
                    </div>
                </div>
                
                <div class="teacher-info-card">
                    <h4><i class="fas fa-chalkboard-teacher"></i> Mengajar</h4>
                    <div class="teacher-detail-item">
                        <span class="detail-label">Siswa</span>
                        <span class="detail-value">${teacherData.studentsCount} siswa</span>
                    </div>
                    <div class="teacher-detail-item">
                        <span class="detail-label">Mapel</span>
                        <span class="detail-value">${teacherData.subjectsCount} bidang</span>
                    </div>
                </div>
            </div>
            
            <!-- Mata Pelajaran -->
            <div class="teacher-info-card">
                <h4><i class="fas fa-book"></i> Mata Pelajaran</h4>
                <div class="teacher-subjects">
                    ${teacherData.subjects.map(subject => `
                        <span class="subject-tag">${subject}</span>
                    `).join('')}
                </div>
            </div>
            
            <!-- Filosofi Mengajar -->
            <div class="teacher-bio-section">
                <h3><i class="fas fa-lightbulb"></i> Filosofi Mengajar</h3>
                <p class="teacher-bio-text">${teacherData.teachingPhilosophy}</p>
            </div>
            
            <!-- Tentang -->
            <div class="teacher-bio-section">
                <h3><i class="fas fa-user"></i> Tentang Saya</h3>
                <p class="teacher-bio-text">${teacherData.bio}</p>
            </div>
            
            <!-- Prestasi -->
            <div class="teacher-info-card">
                <h4><i class="fas fa-trophy"></i> Prestasi & Sertifikasi</h4>
                <div style="margin-top: 15px;">
                    ${teacherData.achievements.map(achievement => `
                        <div class="teacher-detail-item">
                            <span class="detail-label">
                                <i class="fas fa-award" style="color: var(--primary-color);"></i>
                            </span>
                            <span class="detail-value" style="text-align: left; flex: 1; margin-left: 10px;">${achievement}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Kontak -->
            <div class="teacher-contact-links">
                ${teacherData.email ? `
                    <a href="mailto:${teacherData.email}" class="teacher-contact-link">
                        <i class="fas fa-envelope"></i> Email
                    </a>
                ` : ''}
                
                ${teacherData.phone ? `
                    <a href="tel:${teacherData.phone}" class="teacher-contact-link">
                        <i class="fas fa-phone"></i> Telepon
                    </a>
                ` : ''}
                
                <button class="teacher-contact-link" style="background: var(--accent-color); border: none; cursor: default;">
                    <i class="fas fa-quote-left"></i> "${teacherData.motto}"
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Function untuk render teacher card
function renderTeacherCard() {
    const container = document.getElementById('teacherCardContainer');
    
    container.innerHTML = `
        <div class="teacher-card" id="teacherCard">
            <div class="teacher-avatar">
                <div class="avatar-image">
                    ${teacherData.image ? 
                        `<img src="${teacherData.image}" alt="${teacherData.name}" 
                              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                         <i class="fas fa-user-tie" style="display: none; font-size: 4rem; color: white;"></i>` :
                        `<i class="fas fa-user-tie" style="font-size: 4rem; color: white;"></i>`
                    }
                </div>
                <div class="teacher-badge">
                    <i class="fas fa-star"></i>
                    Wali Kelas
                </div>
            </div>
            
            <div class="teacher-info">
                <h3 class="teacher-name">${teacherData.name}</h3>
                <p class="teacher-subject">${teacherData.subject}</p>
                
                <div class="teacher-stats">
                    <div class="stat-item">
                        <span class="stat-number">${teacherData.studentsCount}</span>
                        <span class="stat-label">Anak Didik</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${teacherData.subjectsCount}</span>
                        <span class="stat-label">Bidang Studi</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${teacherData.experience}</span>
                        <span class="stat-label">Tahun Mengajar</span>
                    </div>
                </div>
                
                <div class="teacher-quote">
                    <i class="fas fa-quote-left"></i>
                    "${teacherData.motto}"
                    <i class="fas fa-quote-right"></i>
                </div>
                
                <button class="btn btn-primary" id="viewTeacherDetail">
                    <i class="fas fa-info-circle"></i>  Lihat Profil Lengkap
                </button>
            </div>
        </div>
    `;
}

// Setup event listeners untuk wali kelas
function setupTeacherEvents() {
    // BIKIN SEMUA CARD NON-CLICKABLE
    const teacherCard = document.getElementById('teacherCard');
    if (teacherCard) {
        teacherCard.style.pointerEvents = 'none';
    }
    
    // TOMBOL DOANG YANG CLICKABLE  
    const viewTeacherBtn = document.getElementById('viewTeacherDetail');
    if (viewTeacherBtn) {
        viewTeacherBtn.style.pointerEvents = 'auto';
        
        // Remove existing dulu
        const newBtn = viewTeacherBtn.cloneNode(true);
        viewTeacherBtn.parentNode.replaceChild(newBtn, viewTeacherBtn);
        
        // Attach event
        document.getElementById('viewTeacherDetail').onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            showTeacherModal();
            return false;
        };
    }
}

// HANDLE CLOSE MODAL
function setupModalCloseEvents() {
    const teacherModal = document.getElementById('teacherModal');
    const closeBtn = teacherModal.querySelector('.close-modal');
    
    // Close button
    closeBtn.onclick = function() {
        teacherModal.style.display = 'none';
    };
    
    // Click outside modal
    teacherModal.onclick = function(e) {
        if (e.target === teacherModal) {
            teacherModal.style.display = 'none';
        }
    };
    
    // ESC key - FIX YANG INI!
    document.addEventListener('keydown', function handleEsc(e) {
        if (e.key === 'Escape' && teacherModal.style.display === 'block') {
            teacherModal.style.display = 'none';
            // Remove event listener setelah dipakai
            document.removeEventListener('keydown', handleEsc);
        }
    });
}

// Load Schedule Data
function loadSchedule() {
    const scheduleContainer = document.querySelector('.schedule-container');
    
    scheduleContainer.innerHTML = `
        <div class="schedule-tabs" id="scheduleTabs">
            ${scheduleData.days.map(day => `
                <button class="schedule-tab ${day === 'Senin' ? 'active' : ''}" data-day="${day}">
                    ${day}
                </button>
            `).join('')}
        </div>
        
        <div class="schedule-days" id="scheduleDays">
            ${scheduleData.days.map(day => `
                <div class="schedule-day ${day === 'Senin' ? 'active' : ''}" data-day="${day}">
                    <h3 class="day-title">Jadwal Pelajaran - ${day}</h3>
                    <div class="schedule-classes" id="classes-${day}">
                        <!-- Classes will be loaded here -->
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="schedule-summary">
            <div class="summary-item">
                <div class="summary-number">${scheduleData.days.length}</div>
                <div class="summary-label">Hari Aktif</div>
            </div>
            <div class="summary-item">
                <div class="summary-number">${Object.keys(scheduleData.subjects).length}</div>
                <div class="summary-label">Mata Pelajaran</div>
            </div>
            <div class="summary-item">
                <div class="summary-number">${getTotalClasses()}</div>
                <div class="summary-label">Total Jam</div>
            </div>
        </div>
    `;
    
    // Load classes for each day
    scheduleData.days.forEach(day => {
        loadDaySchedule(day);
    });
    
    setupScheduleTabs();
}

function loadDaySchedule(day) {
    const classesContainer = document.getElementById(`classes-${day}`);
    const classes = scheduleData.schedule[day];
    
    classesContainer.innerHTML = classes.map((classItem, index) => {
        const subjectColor = scheduleData.subjects[classItem.subject] || '#8B4513';
        
        return `
            <div class="class-item" style="border-left-color: ${subjectColor}">
                <div class="class-time">
                    <i class="fas fa-clock"></i>
                    ${classItem.time}
                </div>
                <div class="class-subject">${classItem.subject}</div>
                <div class="class-badge" style="background: ${subjectColor}">
                    Jam ${index + 1}
                </div>
            </div>
        `;
    }).join('');
}

function setupScheduleTabs() {
    const tabs = document.querySelectorAll('.schedule-tab');
    const days = document.querySelectorAll('.schedule-day');
    
    tabs.forEach(tab => {
        // Gunakan both click dan touchstart events
        tab.addEventListener('click', handleTabClick);
        tab.addEventListener('touchstart', handleTabClick);
    });
    
    function handleTabClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const day = this.getAttribute('data-day');
        
        // Remove active class from all tabs and days
        tabs.forEach(t => t.classList.remove('active'));
        days.forEach(d => d.classList.remove('active'));
        
        // Add active class to current tab and day
        this.classList.add('active');
        document.querySelector(`.schedule-day[data-day="${day}"]`).classList.add('active');
    }
}

function getTotalClasses() {
    let total = 0;
    scheduleData.days.forEach(day => {
        total += scheduleData.schedule[day].length;
    });
    return total;
}
    
    // Create header row
    const headerRow = document.createElement('tr');
    scheduleData.headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    scheduleTable.appendChild(headerRow);
    
    // Create data rows
    scheduleData.rows.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            row.appendChild(td);
        });
        scheduleTable.appendChild(row);
    });

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle (tetap sama)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link (tetap sama)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(); // Panggil fungsi baru
    });
    
    // Smooth scrolling for navigation links (tetap sama)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup Scroll Effects
function setupScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        // Add fade-in animation for sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Initialize section animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

        // ✅ VALIDATION CHECK - JANGAN SAMPAI KOSONG
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !message) {
        showBubble('error', 'Form Ga Lengkap!', 'Isi dulu tuh sebelum ngirim!');
        setTimeout(() => {
            hideBubble();
        }, 4000);
        return; // STOP JIKA ADA YANG KOSONG
    }
    
    // Show loading bubble
    showBubble('loading', 'Mengirim Pesan...', 'Sabar, lagi ngirim');
    
    // Disable button
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    
    // ✅ EMAILJS CONFIG - GANTI DENGAN KODE LU!
    emailjs.init("rPS0AgAP1Uh7XtNzJ"); // Public Key dari STEP 4
    
    const templateParams = {
        from_name: document.getElementById('name').value,
        message: document.getElementById('message').value
    };
    
    // ✅ GANTI SERVICE_ID DAN TEMPLATE_ID DARI STEP 2 & 3
    emailjs.send('service_vr95sfg', 'template_0xlkc37', templateParams)
        .then(function(response) {
            hideBubble();
            showBubble('success', 'Pesan Terkirim!', 'Mantap, makasi udah ngirim pesan :D');
            form.reset();
            
            setTimeout(() => {
                hideBubble();
            }, 5000);
        })

        .catch(function(error) {
            if (error.status === 0) {
                // Network error (sinyal jelek)
                showBubble('error', 'Koneksi Error', 'Internet lu mati/sinyalmu jelek!');
            } else if (error.status === 400) {
                // Bad request (template/service error)  
                showBubble('error', 'Server Bermasalah', 'Sorry, lagi ada masalah.');
            } else {
                // Other errors
                showBubble('error', 'Gagal Mengirim', 'Error? Ntar coba lagi ya!');
            }

            setTimeout(() => {
                hideBubble();
            }, 5000);
        })

        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
}

// Fungsi untuk show bubble notification
function showBubble(type, title, message) {
    // Remove existing bubble if any
    const existingBubble = document.getElementById('formBubble');
    if (existingBubble) {
        existingBubble.remove();
    }
    
    const bubble = document.createElement('div');
    bubble.id = 'formBubble';
    bubble.className = `bubble-notification bubble-${type}`;
    
    let icon = '';
    switch(type) {
        case 'success':
            icon = '<i class="fas fa-check-circle bubble-icon"></i>';
            break;
        case 'loading':
            icon = '<div class="loading-spinner"></div>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-triangle bubble-icon"></i>';
            break;
    }
    
    bubble.innerHTML = `
        <div class="bubble-content">
            <div class="bubble-icon">${icon}</div>
            <div class="bubble-text">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(bubble);
    
    // Trigger animation
    setTimeout(() => {
        bubble.classList.add('show');
    }, 100);
}

// Fungsi untuk hide bubble notification
function hideBubble() {
    const bubble = document.getElementById('formBubble');
    if (bubble) {
        bubble.classList.remove('show');
        bubble.classList.add('hide');
        
        // Remove from DOM after animation
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        }, 500);
    }
}

// Add some interactive features
function setupInteractiveFeatures() {
    // Add click effect to student cards
    document.querySelectorAll('.student-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add loading animation
    function setupEventListeners() {
        document.body.classList.add('loaded');
    };
}

// Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(); showBubble('loading', 'Judul', 'Pesan'); // Untuk loading
showBubble('success', 'Judul', 'Pesan'); // Untuk success  
showBubble('error', 'Judul', 'Pesan'); // Untuk error
hideBubble(); // Memanggil fungsi baru
    });

// Initialize interactive features
setupInteractiveFeatures();

// ======= MOBILE FEATURES =======

// Mobile-specific initialization
function initializeMobileFeatures() {
    setupTouchEvents();
    preventZoomOnInput();
    optimizeMobilePerformance();
    bileTouchFix();
}

// ===== HERO CENTERING FIX =====
function centerHeroSection() {
    const hero = document.querySelector('.hero');
    const header = document.getElementById('header');
    
    function updateHeroCenter() {
        const headerHeight = header.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Set hero height to fill screen minus header
        hero.style.minHeight = `${windowHeight - headerHeight}px`;
        hero.style.marginTop = `${headerHeight}px`;
    }
    
    // Update on load and resize
    updateHeroCenter();
    window.addEventListener('resize', updateHeroCenter);
    window.addEventListener('load', updateHeroCenter);
}

// Better touch events
function setupTouchEvents() {
    const touchElements = document.querySelectorAll('.student-card, .gallery-item, .btn, .schedule-tab');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transition = 'transform 0.1s ease, opacity 0.1s ease';
            this.style.transform = 'scale(0.97)';
            this.style.opacity = '0.9';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
        });
    });
}

// Prevent zoom on input focus (iOS)
function preventZoomOnInput() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.fontSize = '16px'; // Prevent zoom on iOS
        });
    });
}

function optimizeMobilePerformance() {
    // Debounce scroll events
    let scrollTimer;
    window.addEventListener('scroll', function() {
        if (!scrollTimer) {
            scrollTimer = setTimeout(function() {
                scrollTimer = null;
                // Scroll handling code here
            }, 100);
        }
    });
    
    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

function switchToNextScheduleTab() {
    const tabs = document.querySelectorAll('.schedule-tab');
    const activeTab = document.querySelector('.schedule-tab.active');
    const currentIndex = Array.from(tabs).indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    
    tabs[nextIndex].click();
}

function switchToPrevScheduleTab() {
    const tabs = document.querySelectorAll('.schedule-tab');
    const activeTab = document.querySelector('.schedule-tab.active');
    const currentIndex = Array.from(tabs).indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    
    tabs[prevIndex].click();
}

// ===== FIXED MOBILE TOUCH FOR ALL ELEMENTS =====
function bileTouchFix() {
    
    // Tunggu sampai semua element ready
    setTimeout(() => {
        // === STUDENT CARDS ===
        const studentCards = document.querySelectorAll('.student-card');
        
        studentCards.forEach(card => {
            // HAPUS semua existing event listeners dulu
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
        });
        
        // Re-attach ke student cards yang baru
        document.querySelectorAll('.student-card').forEach(card => {
            card.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const studentId = parseInt(this.getAttribute('data-id'));
                const student = findStudentById(studentId);
                if (student) {
                    showStudentModal(student);
                }
                return false;
            };
        });
        
        // === GALLERY ITEMS ===
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            const newItem = item.cloneNode(true);
            item.parentNode.replaceChild(newItem, item);
        });
        
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const itemId = parseInt(this.getAttribute('data-id'));
                const galleryItem = galleryData.find(item => item.id === itemId);
                if (galleryItem) {
                    showGalleryModal(galleryItem);
                }
                return false;
            };
        });
        
        // === SCHEDULE TABS ===
        const scheduleTabs = document.querySelectorAll('.schedule-tab');
        
        // Setup schedule tabs functionality
        setupScheduleTabs();
        
        // === BUTTON "MARI KITA JELAJAHI" ===
        const exploreBtn = document.querySelector('.hero .btn-primary');
        if (exploreBtn) {
            exploreBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const target = document.querySelector('#about');
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
                return false;
            };
        }
        
        // === NAVIGATION LINKS ===
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.onclick = function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
                
                // Close mobile menu jika terbuka
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                return false;
            };
        });

        // === HERO BUTTON "Scroll untuk menjelajah" ===
        const heroBtn = document.querySelector('.hero .btn-primary');
        if (heroBtn) {
            const newHeroBtn = heroBtn.cloneNode(true);
            heroBtn.parentNode.replaceChild(newHeroBtn, heroBtn);
            
            document.querySelector('.hero .btn-primary').onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const target = document.querySelector('#about');
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
                return false;
            };
        }

        // === TEACHER CARD BUTTON ===
        const teacherBtn = document.getElementById('viewTeacherDetail');
        if (teacherBtn) {
            const newBtn = teacherBtn.cloneNode(true);
            teacherBtn.parentNode.replaceChild(newBtn, teacherBtn);
    
            document.getElementById('viewTeacherDetail').onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                showTeacherModal();
                return false;
            };
        }

        // === CONTACT FORM SUBMIT BUTTON ===
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            const newForm = contactForm.cloneNode(true);
            contactForm.parentNode.replaceChild(newForm, contactForm);
            
            // Re-attach form submission
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                handleFormSubmission();
            });
            
            // Juga attach click event langsung ke button
            const submitBtn = document.getElementById('contactForm').querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    handleFormSubmission();
                    return false;
                };
            }
        }
        
    }, 1500); // Tunggu 1.5 detik biar semua element benar-benar ready
}

// MOBILE BRUTE FORCE FIX
function mobileBruteForceFix() {
    
    if (window.innerWidth <= 768) {
        // === FIX 1: NAMA SEKOLAH ===
        const schoolName = document.querySelector('.logo-text p');
        if (schoolName) {
            schoolName.style.display = 'block';
            schoolName.style.visibility = 'visible';
            schoolName.style.opacity = '0.9';
            schoolName.style.fontSize = '0.7rem';
            schoolName.style.marginTop = '2px';
        }
        
        // === FIX 2: HAMBURGER DI KANAN ===
        const headerContent = document.querySelector('.header-content');
        if (headerContent) {
            headerContent.style.justifyContent = 'space-between';
            headerContent.style.alignItems = 'center';
        }
        
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.style.marginLeft = 'auto';
            hamburger.style.marginRight = '0';
        }

        // === FIX 3: GALLERY LAYOUT ===
        const galleryGrid = document.querySelector('.gallery-grid');
        if (galleryGrid) {
        galleryGrid.style.gridTemplateColumns = '1fr';
        galleryGrid.style.gap = '15px';
        }
        
        // === FIX 4: STUDENT CARDS 2 KOLOM ===
        const studentGrids = document.querySelectorAll('.students-grid');
        studentGrids.forEach((grid, index) => {
            grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            grid.style.gap = '12px';
        });
        
        const studentCards = document.querySelectorAll('.student-card');
        studentCards.forEach(card => {
            card.style.minHeight = '140px';
            card.style.padding = '15px 10px';
        });
    }
}

// JALANKAN FIX
document.addEventListener('DOMContentLoaded', function() {
    mobileBruteForceFix();
    setTimeout(mobileBruteForceFix, 1000); // Double tap
});

window.addEventListener('resize', mobileBruteForceFix);
window.addEventListener('load', mobileBruteForceFix);
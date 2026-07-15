/* ============================================
   DATA.JS - Data Loader dari data.json
   ============================================ */

let galleryData = [];
let teacherData = {};
let studentsData = { mainLeaders: [], coordinators: [], classMembers: [] };
let scheduleData = { days: [], colors: {}, schedule: {} };

// Load data dari file JSON
fetch('js/data.json?' + new Date().getTime())
    .then(response => {
        if (!response.ok) throw new Error('Gagal load data.json');
        return response.json();
    })
    .then(data => {
        galleryData = data.gallery || [];
        teacherData = data.teacher || {};
        studentsData = data.students || { mainLeaders: [], coordinators: [], classMembers: [] };
        scheduleData = data.schedule || { days: [], colors: {}, schedule: {} };
        
        // Init website setelah data siap
        initApp();
    })
    .catch(error => {
    console.error('Error loading data.json:', error);

    // fallback biar ga kosong total
    galleryData = [];
    teacherData = { name: "Data tidak tersedia" };
    studentsData = { mainLeaders: [], coordinators: [], classMembers: [] };
    scheduleData = { days: [], colors: {}, schedule: {} };

    initApp();
});
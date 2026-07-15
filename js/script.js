/* ============================================
   SCRIPT.JS - Kelas XII-I TSM Website
   Fresh & Clean Version
   ============================================ */

// ---------- GLOBAL STATE ----------
let currentModal = null;

// ---------- INITIALIZE APP ----------
function initApp() {
    loadGallery();
    loadTeacher();
    loadStudents();
    loadSchedule();
    setupNavigation();
    setupScrollEffects();
    setupModals();
    setupContactForm();
    setupToast();
}

// ============================================
// LOAD GALLERY
// ============================================
function loadGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    grid.innerHTML = galleryData.map(item => `
        <div class="gallery-card" data-id="${item.id}" onclick="openGalleryDetail(${item.id})">
            <div class="gallery-card-image">
                <img src="${item.image}" 
                     alt="${item.title}" 
                     loading="lazy"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-fallback" style="display:none; height:200px;">
                    <i class="fas fa-image"></i>
                </div>
            </div>
            <div class="gallery-card-body">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="gallery-card-date">
                    <i class="fas fa-calendar-alt"></i> ${item.date}
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// LOAD TEACHER
// ============================================
function loadTeacher() {
    const section = document.getElementById('teacherSection');
    if (!section) return;
    
    section.innerHTML = `
        <div class="teacher-card">
            <div class="teacher-avatar">
                <img src="${teacherData.image}" 
                     alt="${teacherData.name}"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <i class="fas fa-user-tie" style="display:none;"></i>
            </div>
            <div class="teacher-info">
                <h3>${teacherData.name}</h3>
                <p class="teacher-subject">${teacherData.subject}</p>
                <div class="teacher-stats">
                    <div class="teacher-stat">
                        <span class="stat-number">${teacherData.studentsCount}</span>
                        <span class="stat-label">Anak Didik</span>
                    </div>
                    <div class="teacher-stat">
                        <span class="stat-number">${teacherData.subjectsCount}</span>
                        <span class="stat-label">Bidang Studi</span>
                    </div>
                    <div class="teacher-stat">
                        <span class="stat-number">${teacherData.experience}</span>
                        <span class="stat-label">Pengalaman</span>
                    </div>
                </div>
                <p class="teacher-motto">
                    <i class="fas fa-quote-left"></i> 
                    ${teacherData.motto}
                    <i class="fas fa-quote-right"></i>
                </p>
                <button class="btn btn-primary btn-sm" onclick="openTeacherModal()">
                    <i class="fas fa-info-circle"></i> Lihat Profil Lengkap
                </button>
            </div>
        </div>
    `;
}

// ============================================
// LOAD STUDENTS
// ============================================
function loadStudents() {
    loadStudentCategory('mainLeaders', studentsData.mainLeaders);
    loadStudentCategory('coordinators', studentsData.coordinators);
    loadStudentCategory('classMembers', studentsData.classMembers);
}

function loadStudentCategory(containerId, students) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = students.map(student => `
        <div class="member-card" data-id="${student.id}" onclick="openMemberDetail(${student.id})">
            <div class="member-avatar">
                <img src="${student.image}" 
                     alt="${student.name}"
                     loading="lazy"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="avatar-initials" style="display:none;">${student.initials}</div>
            </div>
            <h4>${student.name}</h4>
            <p class="member-role">${student.position}</p>
            ${student.position !== 'Anggota' ? '<span class="member-badge">Pengurus</span>' : ''}
        </div>
    `).join('');
}

// ============================================
// LOAD SCHEDULE
// ============================================
function loadSchedule() {
    const wrapper = document.getElementById('scheduleWrapper');
    if (!wrapper) return;
    
    const days = scheduleData.days;
    const totalClasses = days.reduce((sum, day) => sum + scheduleData.schedule[day].length, 0);
    const totalSubjects = Object.keys(scheduleData.colors).length;
    
    wrapper.innerHTML = `
        <div class="schedule-tabs" id="scheduleTabs">
            ${days.map((day, i) => `
                <button class="schedule-tab ${i === 0 ? 'active' : ''}" 
                        data-day="${day}" 
                        onclick="switchScheduleDay('${day}')">
                    ${day}
                </button>
            `).join('')}
        </div>
        
        <div class="schedule-content">
            ${days.map((day, i) => `
                <div class="schedule-day ${i === 0 ? 'active' : ''}" id="day-${day}">
                    <div class="schedule-list">
                        ${scheduleData.schedule[day].map((item, index) => {
                            const color = scheduleData.colors[item.subject] || '#8B4513';
                            return `
                                <div class="schedule-item" style="border-left-color: ${color}">
                                    <div class="schedule-item-time">
                                        <i class="fas fa-clock"></i>
                                        <span>${item.time}</span>
                                    </div>
                                    <div class="schedule-item-info">
                                        <div class="schedule-item-subject">${item.subject}</div>
                                        ${item.teacher && item.teacher !== '-' ? `
                                            <div class="schedule-item-teacher">
                                                <i class="fas fa-chalkboard-teacher"></i> ${item.teacher}
                                            </div>
                                        ` : ''}
                                    </div>
                                    <span class="schedule-item-num" style="background: ${color}">
                                        Jam ${index + 1}
                                    </span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="schedule-summary">
            <div class="schedule-summary-item">
                <div class="schedule-summary-icon"><i class="fas fa-calendar-week"></i></div>
                <div class="schedule-summary-number">${days.length}</div>
                <div class="schedule-summary-label">Hari Aktif</div>
            </div>
            <div class="schedule-summary-item">
                <div class="schedule-summary-icon"><i class="fas fa-book"></i></div>
                <div class="schedule-summary-number">${totalSubjects}</div>
                <div class="schedule-summary-label">Mata Pelajaran</div>
            </div>
            <div class="schedule-summary-item">
                <div class="schedule-summary-icon"><i class="fas fa-hourglass-half"></i></div>
                <div class="schedule-summary-number">${totalClasses}</div>
                <div class="schedule-summary-label">Total Jam</div>
            </div>
        </div>
    `;
}

// ============================================
// SWITCH SCHEDULE DAY
// ============================================
function switchScheduleDay(day) {
    // Update tabs
    document.querySelectorAll('.schedule-tab').forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-day') === day);
    });
    
    // Update content
    document.querySelectorAll('.schedule-day').forEach(dayDiv => {
        dayDiv.classList.toggle('active', dayDiv.id === `day-${day}`);
    });
}

// ============================================
// FIND STUDENT BY ID
// ============================================
function findStudentById(id) {
    const allStudents = [
        ...studentsData.mainLeaders,
        ...studentsData.coordinators,
        ...studentsData.classMembers
    ];
    return allStudents.find(s => s.id === id);
}

// ============================================
// MODALS
// ============================================
function setupModals() {
    // Close buttons
    document.getElementById('modalClose')?.addEventListener('click', closeAllModals);
    document.getElementById('galleryModalClose')?.addEventListener('click', closeAllModals);
    
    // Click outside
    document.getElementById('memberModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeAllModals();
    });
    document.getElementById('galleryModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeAllModals();
    });
    
    // ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeAllModals();
    });
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    currentModal = null;
    document.body.style.overflow = '';
}

function openModal(modalId) {
    closeAllModals();
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        currentModal = modal;
        document.body.style.overflow = 'hidden';
    }
}

// ============================================
// MEMBER DETAIL MODAL
// ============================================
function openMemberDetail(id) {
    const student = findStudentById(id);
    if (!student) return;
    
    const body = document.getElementById('modalBody');
    const modal = document.getElementById('memberModal');
    
    // ===== SPECIAL MODAL UNTUK M. RIZQI MAULANA (id: 3) =====
    if (id === 3) {
        modal.classList.remove('aslam-modal');
        modal.classList.remove('yahya-modal');
        modal.classList.add('special-modal-active');
        
        body.innerHTML = `
            <div class="special-modal-wrapper">
                <!-- Header -->
                <div class="special-modal-header">
                    <div class="special-modal-avatar">
                        <img src="${student.image}" alt="${student.name}"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="special-modal-initials" style="display:none;">${student.initials}</div>
                    </div>
                    <h2>${student.name}</h2>
                    <p class="special-modal-position">${student.position}</p>
                    <p class="special-modal-nim">No. Absen: ${student.nim}</p>
                    <div class="special-modal-divider"></div>
                </div>
                
                <!-- Info Pribadi -->
                ${(student.birthDate && student.birthDate !== '-' && student.birthDate !== 'Blm diisi') || 
                  (student.address && student.address !== '-' && student.address !== 'Blm diisi') ? `
                <div class="special-info-block">
                    <h4><i class="fas fa-user-circle"></i> Informasi Pribadi</h4>
                    ${student.birthDate && student.birthDate !== '-' && student.birthDate !== 'Blm diisi' ? `
                    <div class="special-info-row">
                        <span class="special-info-label"><i class="fas fa-calendar"></i> Lahir</span>
                        <span class="special-info-value">${student.birthDate}</span>
                    </div>` : ''}
                    ${student.address && student.address !== '-' && student.address !== 'Blm diisi' ? `
                    <div class="special-info-row">
                        <span class="special-info-label"><i class="fas fa-map-marker-alt"></i> Alamat</span>
                        <span class="special-info-value">${student.address}</span>
                    </div>` : ''}
                </div>` : ''}
                
                <!-- Bio -->
                ${student.bio && student.bio !== '-' && student.bio !== 'Blm ada bio' ? `
                <div class="special-info-block">
                    <h4><i class="fas fa-file-alt"></i> Tentang</h4>
                    <p style="line-height:1.6; font-size:0.9rem; color:rgba(255,255,255,0.8);">${student.bio}</p>
                </div>` : ''}
                
                <!-- Hobi -->
                ${student.hobbies && student.hobbies.length > 0 ? `
                <div class="special-info-block">
                    <h4><i class="fas fa-heart"></i> Hobi & Minat</h4>
                    <div class="special-hobbies">
                        ${student.hobbies.map(h => `<span class="special-hobby-tag">${h}</span>`).join('')}
                    </div>
                </div>` : ''}
                
                <!-- Prestasi -->
                ${student.achievements && student.achievements.length > 0 && student.achievements[0] !== '-' ? `
                <div class="special-info-block">
                    <h4><i class="fas fa-trophy"></i> Prestasi</h4>
                    <ul class="special-achievements">
                        ${student.achievements.map(a => `
                            <li><i class="fas fa-award"></i> <span>${a}</span></li>
                        `).join('')}
                    </ul>
                </div>` : ''}
                
                <!-- Koneksi -->
                ${student.instagram || student.tiktok || student.facebook || student.linkedin || student.steam ? `
                <div class="special-info-block">
                    <h4><i class="fas fa-share-alt"></i> Koneksi</h4>
                    <div class="special-social-list">
                        ${student.instagram ? `
                        <div class="special-social-item">
                            <span class="special-social-label"><i class="fab fa-instagram"></i> Instagram</span>
                            <a href="${student.instagram}" target="_blank" class="special-social-link">${student.instagram.replace('https://instagram.com/', '@')}</a>
                        </div>` : ''}
                        ${student.tiktok ? `
                        <div class="special-social-item">
                            <span class="special-social-label"><i class="fab fa-tiktok"></i> TikTok</span>
                            <a href="${student.tiktok}" target="_blank" class="special-social-link">${student.tiktok.replace('https://tiktok.com/@', '@')}</a>
                        </div>` : ''}
                        ${student.facebook ? `
                        <div class="special-social-item">
                            <span class="special-social-label"><i class="fab fa-facebook"></i> Facebook</span>
                            <a href="${student.facebook}" target="_blank" class="special-social-link">Facebook</a>
                        </div>` : ''}
                        ${student.linkedin ? `
                        <div class="special-social-item">
                            <span class="special-social-label"><i class="fab fa-linkedin"></i> LinkedIn</span>
                            <a href="${student.linkedin}" target="_blank" class="special-social-link">${student.linkedin.replace('https://linkedin.com/in/', '@')}</a>
                        </div>` : ''}
                        ${student.steam ? `
                        <div class="special-social-item">
                            <span class="special-social-label"><i class="fab fa-steam"></i> Steam</span>
                            <a href="${typeof student.steam === 'object' ? student.steam.url : student.steam}" target="_blank" class="special-social-link">${typeof student.steam === 'object' ? student.steam.displayName : 'Steam'}</a>
                        </div>` : ''}
                    </div>
                </div>` : ''}
            </div>
        `;
        
        openModal('memberModal');
        return;
    }

    // ===== SPECIAL MODAL UNTUK M. ASLAM MUSYADAD (id: 1) =====
    if (id === 1) {
        modal.classList.remove('special-modal-active');
        modal.classList.remove('yahya-modal');
        modal.classList.add('aslam-modal');
        
        body.innerHTML = `
            <div class="special-modal-wrapper">
                <div class="aslam-modal-header">
                    <div class="aslam-modal-avatar">
                        <img src="${student.image}" alt="${student.name}"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="aslam-modal-initials" style="display:none;">${student.initials}</div>
                    </div>
                    <h2>${student.name}</h2>
                    <p class="aslam-modal-position">${student.position}</p>
                    <p class="aslam-modal-nim">No. Absen: ${student.nim}</p>
                    <div class="aslam-modal-divider"></div>
                </div>
                
                ${(student.birthDate && student.birthDate !== '-' && student.birthDate !== 'Blm diisi') || 
                  (student.address && student.address !== '-' && student.address !== 'Blm diisi') ? `
                <div class="aslam-info-block">
                    <h4><i class="fas fa-user-circle"></i> Informasi Pribadi</h4>
                    ${student.birthDate && student.birthDate !== '-' && student.birthDate !== 'Blm diisi' ? `
                    <div class="aslam-info-row">
                        <span class="aslam-info-label"><i class="fas fa-calendar"></i> Lahir</span>
                        <span class="aslam-info-value">${student.birthDate}</span>
                    </div>` : ''}
                    ${student.address && student.address !== '-' && student.address !== 'Blm diisi' ? `
                    <div class="aslam-info-row">
                        <span class="aslam-info-label"><i class="fas fa-map-marker-alt"></i> Alamat</span>
                        <span class="aslam-info-value">${student.address}</span>
                    </div>` : ''}
                </div>` : ''}
                
                ${student.bio && student.bio !== '-' && student.bio !== 'Blm ada bio' ? `
                <div class="aslam-info-block">
                    <h4><i class="fas fa-file-alt"></i> Tentang</h4>
                    <p style="line-height:1.6; font-size:0.9rem; color:rgba(255,255,255,0.85);">${student.bio}</p>
                </div>` : ''}
                
                ${student.hobbies && student.hobbies.length > 0 ? `
                <div class="aslam-info-block">
                    <h4><i class="fas fa-heart"></i> Hobi & Minat</h4>
                    <div class="aslam-hobbies">
                        ${student.hobbies.map(h => `<span class="aslam-hobby-tag">${h}</span>`).join('')}
                    </div>
                </div>` : ''}
                
                ${student.achievements && student.achievements.length > 0 && student.achievements[0] !== '-' ? `
                <div class="aslam-info-block">
                    <h4><i class="fas fa-trophy"></i> Prestasi</h4>
                    <ul class="aslam-achievements">
                        ${student.achievements.map(a => `
                            <li><i class="fas fa-award"></i> <span>${a}</span></li>
                        `).join('')}
                    </ul>
                </div>` : ''}
                
                ${student.instagram || student.tiktok || student.facebook || student.linkedin || student.steam ? `
                <div class="aslam-info-block">
                    <h4><i class="fas fa-share-alt"></i> Koneksi</h4>
                    <div class="aslam-social-list">
                        ${student.instagram ? `
                        <div class="aslam-social-item">
                            <span class="aslam-social-label"><i class="fab fa-instagram"></i> Instagram</span>
                            <a href="${student.instagram}" target="_blank" class="aslam-social-link">${student.instagram.replace('https://instagram.com/', '@')}</a>
                        </div>` : ''}
                        ${student.tiktok ? `
                        <div class="aslam-social-item">
                            <span class="aslam-social-label"><i class="fab fa-tiktok"></i> TikTok</span>
                            <a href="${student.tiktok}" target="_blank" class="aslam-social-link">${student.tiktok.replace('https://tiktok.com/@', '@')}</a>
                        </div>` : ''}
                        ${student.facebook ? `
                        <div class="aslam-social-item">
                            <span class="aslam-social-label"><i class="fab fa-facebook"></i> Facebook</span>
                            <a href="${student.facebook}" target="_blank" class="aslam-social-link">Facebook</a>
                        </div>` : ''}
                        ${student.linkedin ? `
                        <div class="aslam-social-item">
                            <span class="aslam-social-label"><i class="fab fa-linkedin"></i> LinkedIn</span>
                            <a href="${student.linkedin}" target="_blank" class="aslam-social-link">${student.linkedin.replace('https://linkedin.com/in/', '@')}</a>
                        </div>` : ''}
                        ${student.steam ? `
                        <div class="aslam-social-item">
                            <span class="aslam-social-label"><i class="fab fa-steam"></i> Steam</span>
                            <a href="${typeof student.steam === 'object' ? student.steam.url : student.steam}" target="_blank" class="aslam-social-link">${typeof student.steam === 'object' ? student.steam.displayName : 'Steam'}</a>
                        </div>` : ''}
                    </div>
                </div>` : ''}
            </div>
        `;
        
        openModal('memberModal');
        return;
    }
    
    // ===== SPECIAL MODAL UNTUK M. YAHYA ARIF (id: 7) =====
    if (id === 7) {
        modal.classList.remove('special-modal-active');
        modal.classList.remove('aslam-modal');
        modal.classList.add('yahya-modal');
        
        body.innerHTML = `
            <div class="special-modal-wrapper">
                <div class="yahya-modal-header">
                    <div class="yahya-modal-avatar">
                        <img src="${student.image}" alt="${student.name}"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="yahya-modal-initials" style="display:none;">${student.initials}</div>
                    </div>
                    <h2>${student.name}</h2>
                    <p class="yahya-modal-position">${student.position}</p>
                    <p class="yahya-modal-nim">No. Absen: ${student.nim}</p>
                    <div class="yahya-modal-divider"></div>
                </div>
                
                ${(student.birthDate && student.birthDate !== '-' && student.birthDate !== 'Blm diisi') || 
                  (student.address && student.address !== '-' && student.address !== 'Blm diisi') ? `
                <div class="yahya-info-block">
                    <h4><i class="fas fa-user-circle"></i> Informasi Pribadi</h4>
                    ${student.birthDate && student.birthDate !== '-' && student.birthDate !== 'Blm diisi' ? `
                    <div class="yahya-info-row">
                        <span class="yahya-info-label"><i class="fas fa-calendar"></i> Lahir</span>
                        <span class="yahya-info-value">${student.birthDate}</span>
                    </div>` : ''}
                    ${student.address && student.address !== '-' && student.address !== 'Blm diisi' ? `
                    <div class="yahya-info-row">
                        <span class="yahya-info-label"><i class="fas fa-map-marker-alt"></i> Alamat</span>
                        <span class="yahya-info-value">${student.address}</span>
                    </div>` : ''}
                </div>` : ''}
                
                ${student.bio && student.bio !== '-' && student.bio !== 'Blm ada bio' ? `
                <div class="yahya-info-block">
                    <h4><i class="fas fa-file-alt"></i> Tentang</h4>
                    <p style="line-height:1.6; font-size:0.9rem; color:rgba(255,255,255,0.85);">${student.bio}</p>
                </div>` : ''}
                
                ${student.hobbies && student.hobbies.length > 0 ? `
                <div class="yahya-info-block">
                    <h4><i class="fas fa-heart"></i> Hobi & Minat</h4>
                    <div class="yahya-hobbies">
                        ${student.hobbies.map(h => `<span class="yahya-hobby-tag">${h}</span>`).join('')}
                    </div>
                </div>` : ''}
                
                ${student.achievements && student.achievements.length > 0 && student.achievements[0] !== '-' ? `
                <div class="yahya-info-block">
                    <h4><i class="fas fa-trophy"></i> Prestasi</h4>
                    <ul class="yahya-achievements">
                        ${student.achievements.map(a => `
                            <li><i class="fas fa-award"></i> <span>${a}</span></li>
                        `).join('')}
                    </ul>
                </div>` : ''}
                
                ${student.instagram || student.tiktok || student.facebook || student.linkedin || student.steam ? `
                <div class="yahya-info-block">
                    <h4><i class="fas fa-share-alt"></i> Koneksi</h4>
                    <div class="yahya-social-list">
                        ${student.instagram ? `
                        <div class="yahya-social-item">
                            <span class="yahya-social-label"><i class="fab fa-instagram"></i> Instagram</span>
                            <a href="${student.instagram}" target="_blank" class="yahya-social-link">${student.instagram.replace('https://instagram.com/', '@')}</a>
                        </div>` : ''}
                        ${student.tiktok ? `
                        <div class="yahya-social-item">
                            <span class="yahya-social-label"><i class="fab fa-tiktok"></i> TikTok</span>
                            <a href="${student.tiktok}" target="_blank" class="yahya-social-link">${student.tiktok.replace('https://tiktok.com/@', '@')}</a>
                        </div>` : ''}
                        ${student.facebook ? `
                        <div class="yahya-social-item">
                            <span class="yahya-social-label"><i class="fab fa-facebook"></i> Facebook</span>
                            <a href="${student.facebook}" target="_blank" class="yahya-social-link">Facebook</a>
                        </div>` : ''}
                        ${student.linkedin ? `
                        <div class="yahya-social-item">
                            <span class="yahya-social-label"><i class="fab fa-linkedin"></i> LinkedIn</span>
                            <a href="${student.linkedin}" target="_blank" class="yahya-social-link">${student.linkedin.replace('https://linkedin.com/in/', '@')}</a>
                        </div>` : ''}
                        ${student.steam ? `
                        <div class="yahya-social-item">
                            <span class="yahya-social-label"><i class="fab fa-steam"></i> Steam</span>
                            <a href="${typeof student.steam === 'object' ? student.steam.url : student.steam}" target="_blank" class="yahya-social-link">${typeof student.steam === 'object' ? student.steam.displayName : 'Steam'}</a>
                        </div>` : ''}
                    </div>
                </div>` : ''}
            </div>
        `;
        
        openModal('memberModal');
        return;
    }

    // ===== MODAL BIASA UNTUK YANG LAIN =====
    modal.classList.remove('special-modal-active');
    modal.classList.remove('aslam-modal');
    modal.classList.remove('yahya-modal');
    
    body.innerHTML = `
        <div class="member-detail">
            <!-- Header -->
            <div class="member-detail-header">
                <div class="member-avatar">
                    <img src="${student.image}" alt="${student.name}"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="avatar-initials" style="display:none;">${student.initials}</div>
                </div>
                <h2>${student.name}</h2>
                <p class="detail-position">${student.position}</p>
                <p class="detail-nim">No. Absen: ${student.nim}</p>
            </div>
            
            ${(student.birthDate && student.birthDate !== '-' && student.birthDate !== 'Blm diisi') || 
              (student.address && student.address !== '-' && student.address !== 'Blm diisi') ? `
            <div class="detail-info-block">
                <h4><i class="fas fa-user-circle"></i> Informasi Pribadi</h4>
                ${student.birthDate && student.birthDate !== '-' && student.birthDate !== 'Blm diisi' ? `
                <div class="detail-info-row">
                    <span class="detail-info-label"><i class="fas fa-calendar"></i> Lahir</span>
                    <span class="detail-info-value">${student.birthDate}</span>
                </div>` : ''}
                ${student.address && student.address !== '-' && student.address !== 'Blm diisi' ? `
                <div class="detail-info-row">
                    <span class="detail-info-label"><i class="fas fa-map-marker-alt"></i> Alamat</span>
                    <span class="detail-info-value">${student.address}</span>
                </div>` : ''}
            </div>` : ''}
            
            ${student.bio && student.bio !== '-' && student.bio !== 'Blm ada bio' ? `
            <div class="detail-info-block">
                <h4><i class="fas fa-file-alt"></i> Tentang</h4>
                <p style="line-height:1.6; font-size:0.9rem; color:var(--dark);">${student.bio}</p>
            </div>` : ''}
            
            ${student.hobbies && student.hobbies.length > 0 ? `
            <div class="detail-info-block">
                <h4><i class="fas fa-heart"></i> Hobi & Minat</h4>
                <div class="detail-hobbies">
                    ${student.hobbies.map(h => `<span class="detail-hobby-tag">${h}</span>`).join('')}
                </div>
            </div>` : ''}
            
            ${student.achievements && student.achievements.length > 0 && student.achievements[0] !== '-' ? `
            <div class="detail-info-block">
                <h4><i class="fas fa-trophy"></i> Prestasi</h4>
                <ul class="detail-achievements">
                    ${student.achievements.map(a => `
                        <li><i class="fas fa-award"></i> <span>${a}</span></li>
                    `).join('')}
                </ul>
            </div>` : ''}
            
            ${student.instagram || student.tiktok || student.facebook || student.linkedin || student.steam ? `
            <div class="detail-info-block">
                <h4><i class="fas fa-share-alt"></i> Koneksi</h4>
                <div class="detail-social-list">
                    ${student.instagram ? `
                    <div class="detail-social-item">
                        <span class="detail-social-label"><i class="fab fa-instagram"></i> Instagram</span>
                        <a href="${student.instagram}" target="_blank" class="detail-social-link">${student.instagram.replace('https://instagram.com/', '@')}</a>
                    </div>` : ''}
                    ${student.tiktok ? `
                    <div class="detail-social-item">
                        <span class="detail-social-label"><i class="fab fa-tiktok"></i> TikTok</span>
                        <a href="${student.tiktok}" target="_blank" class="detail-social-link">${student.tiktok.replace('https://tiktok.com/@', '@')}</a>
                    </div>` : ''}
                    ${student.facebook ? `
                    <div class="detail-social-item">
                        <span class="detail-social-label"><i class="fab fa-facebook"></i> Facebook</span>
                        <a href="${student.facebook}" target="_blank" class="detail-social-link">Facebook</a>
                    </div>` : ''}
                    ${student.linkedin ? `
                    <div class="detail-social-item">
                        <span class="detail-social-label"><i class="fab fa-linkedin"></i> LinkedIn</span>
                        <a href="${student.linkedin}" target="_blank" class="detail-social-link">${student.linkedin.replace('https://linkedin.com/in/', '@')}</a>
                    </div>` : ''}
                    ${student.steam ? `
                    <div class="detail-social-item">
                        <span class="detail-social-label"><i class="fab fa-steam"></i> Steam</span>
                        <a href="${typeof student.steam === 'object' ? student.steam.url : student.steam}" target="_blank" class="detail-social-link">${typeof student.steam === 'object' ? student.steam.displayName : 'Steam'}</a>
                    </div>` : ''}
                </div>
            </div>` : ''}
        </div>
    `;
    
    openModal('memberModal');
}

// ============================================
// TEACHER MODAL
// ============================================
function openTeacherModal() {
    const body = document.getElementById('galleryModalBody');
    
    body.innerHTML = `
        <div class="teacher-modal-header">
            <div class="member-avatar">
                <img src="${teacherData.image}" alt="${teacherData.name}"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <i class="fas fa-user-tie" style="display:none;"></i>
            </div>
            <h2>${teacherData.name}</h2>
            <p class="teacher-position">${teacherData.position}</p>
        </div>
        
        <div class="teacher-modal-content">
            <div class="teacher-info-grid">
                <div class="teacher-info-mini-card">
                    <h4><i class="fas fa-graduation-cap"></i> Pendidikan</h4>
                    <p><strong>Gelar:</strong> ${teacherData.education}</p>
                    <p><strong>Spesialisasi:</strong> ${teacherData.specialization}</p>
                </div>
                <div class="teacher-info-mini-card">
                    <h4><i class="fas fa-briefcase"></i> Pengalaman</h4>
                    <p><strong>Mengajar:</strong> ${teacherData.experience}</p>
                    <p><strong>Bergabung:</strong> ${teacherData.joinDate}</p>
                </div>
            </div>
            
            <div class="detail-info-block">
                <h4><i class="fas fa-book"></i> Mata Pelajaran</h4>
                <div class="teacher-subjects">
                    ${teacherData.subjects.map(s => `<span class="teacher-subject-tag">${s}</span>`).join('')}
                </div>
            </div>
            
            <div class="detail-info-block">
                <h4><i class="fas fa-lightbulb"></i> Filosofi Mengajar</h4>
                <p class="teacher-philosophy">${teacherData.teachingPhilosophy}</p>
            </div>
            
            <div class="detail-info-block">
                <h4><i class="fas fa-user"></i> Tentang</h4>
                <p style="line-height:1.6; font-size:0.9rem; color:var(--dark);">${teacherData.bio}</p>
            </div>
            
            ${teacherData.achievements && teacherData.achievements.length > 0 && teacherData.achievements[0] !== '-' ? `
            <div class="detail-info-block">
                <h4><i class="fas fa-trophy"></i> Prestasi & Sertifikasi</h4>
                <ul class="detail-achievements">
                    ${teacherData.achievements.map(a => `
                        <li><i class="fas fa-award"></i> <span>${a}</span></li>
                    `).join('')}
                </ul>
            </div>` : ''}
            
            ${teacherData.instagram || teacherData.facebook || teacherData.linkedin ? `
            <div class="detail-info-block">
                <h4><i class="fas fa-share-alt"></i> Koneksi</h4>
                <div class="detail-social-list">
                    ${teacherData.instagram ? `
                    <div class="detail-social-item">
                        <span class="detail-social-label"><i class="fab fa-instagram"></i> Instagram</span>
                        <a href="${teacherData.instagram}" target="_blank" class="detail-social-link">${teacherData.instagram.replace('https://instagram.com/', '@')}</a>
                    </div>` : ''}
                    ${teacherData.facebook ? `
                    <div class="detail-social-item">
                        <span class="detail-social-label"><i class="fab fa-facebook"></i> Facebook</span>
                        <a href="${teacherData.facebook}" target="_blank" class="detail-social-link">Kh Fikri</a>
                    </div>` : ''}
                    ${teacherData.linkedin ? `
                    <div class="detail-social-item">
                        <span class="detail-social-label"><i class="fab fa-linkedin"></i> LinkedIn</span>
                        <a href="${teacherData.linkedin}" target="_blank" class="detail-social-link">${teacherData.linkedin.replace('https://linkedin.com/in/', '@')}</a>
                    </div>` : ''}
                </div>
            </div>` : ''}
        </div>
    `;
    
    openModal('galleryModal');
}

// ============================================
// GALLERY DETAIL MODAL
// ============================================
function openGalleryDetail(id) {
    const item = galleryData.find(g => g.id === id);
    if (!item) return;
    
    const body = document.getElementById('galleryModalBody');
    
    body.innerHTML = `
        <div class="gallery-modal-layout">
            <!-- Image Section -->
            <div class="gallery-modal-image">
                <img src="${item.image}" alt="${item.title}"
                     onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=image-fallback style=min-height:200px;display:flex;align-items:center;justify-content:center;flex-direction:column;color:var(--primary);gap:16px;><i class=fas fa-image style=font-size:4rem;opacity:0.6;></i><p>Gambar belum tersedia</p></div>';">
            </div>
            
            <!-- Info Section -->
            <div class="gallery-modal-info">
                <h2>${item.title}</h2>
                <p class="gallery-modal-desc">${item.description}</p>
                
                <div class="gallery-modal-details">
                    <div class="gallery-modal-detail-item">
                        <span class="gallery-modal-detail-label">
                            <i class="fas fa-calendar-alt"></i> Tanggal
                        </span>
                        <span class="gallery-modal-detail-value">${item.date}</span>
                    </div>
                    <div class="gallery-modal-detail-item">
                        <span class="gallery-modal-detail-label">
                            <i class="fas fa-map-marker-alt"></i> Lokasi
                        </span>
                        <span class="gallery-modal-detail-value">${item.location}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    openModal('galleryModal');
}

// ============================================
// NAVIGATION
// ============================================
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const header = document.getElementById('header');
    
    hamburger?.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });
    
    // Nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const isMobile = window.innerWidth <= 768;
                const headerScrolledHeight = isMobile ? 56 : 60;
                
                const rect = target.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetPosition = rect.top + scrollTop - headerScrolledHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            hamburger?.classList.remove('active');
            navbar?.classList.remove('active');
        });
    });
    
    // Tombol "Jelajahi" → About
    const exploreBtn = document.querySelector('.hero .btn-primary');
    exploreBtn?.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector('#about');
        if (target) {
            const isMobile = window.innerWidth <= 768;
            const headerScrolledHeight = isMobile ? 56 : 60;
            const rect = target.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetPosition = rect.top + scrollTop - headerScrolledHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
    
    // Tombol "Lihat Anggota" → Members
    const membersBtn = document.querySelector('.hero .btn-outline');
    membersBtn?.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector('#members');
        if (target) {
            const isMobile = window.innerWidth <= 768;
            const headerScrolledHeight = isMobile ? 56 : 60;
            const rect = target.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetPosition = rect.top + scrollTop - headerScrolledHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
    
    // Footer links
    document.querySelectorAll('.footer-links a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const isMobile = window.innerWidth <= 768;
                const headerScrolledHeight = isMobile ? 56 : 60;
                
                const rect = target.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetPosition = rect.top + scrollTop - headerScrolledHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
            });
        }
    });
}

// ============================================
// SCROLL EFFECTS
// ============================================
function setupScrollEffects() {
    const header = document.getElementById('header');
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        const headerHeight = header.offsetHeight;
        
        // Header shrink
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update posisi navbar biar nempel terus ke header
        if (navbar) {
            navbar.style.top = headerHeight + 'px';
        }
    });
}

// ============================================
// CONTACT FORM
// ============================================
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmit();
    });
}

function handleFormSubmit() {
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    
    // Validasi
    if (!name || !message) {
        showToast('error', 'Form Belum Lengkap', 'Isi nama dan pesan dulu ya!');
        return;
    }
    
    // Loading state
    const originalHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    
    showToast('loading', 'Mengirim Pesan', 'Bentar wok lagi ngirim...');
    
    // Kirim via EmailJS
    emailjs.init("rPS0AgAP1Uh7XtNzJ");
    
    emailjs.send('service_lwej8vm', 'template_0xlkc37', {
        from_name: name,
        message: message
    })
    .then(function() {
        hideToast();
        showToast('success', 'Pesan Terkirim!', 'Makasih udah kirim pesan :)');
        document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
        hideToast();
        if (error.status === 0) {
            showToast('error', 'Koneksi Error', 'Internet kamu jeleg.');
        } else {
            showToast('error', 'Gagal Mengirim', 'Lgi ada problem, ntar coba lagi.');
        }
    })
    .finally(function() {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
    });
}

// ============================================
// TOAST NOTIFICATION
// ============================================
let toastTimer;

function setupToast() {
    // Toast element sudah ada di HTML
}

function showToast(type, title, message) {
    const toast = document.getElementById('toast');
    const icon = document.getElementById('toastIcon');
    const titleEl = document.getElementById('toastTitle');
    const messageEl = document.getElementById('toastMessage');
    
    if (!toast || !icon || !titleEl || !messageEl) return;
    
    // Reset classes
    toast.className = 'toast';
    
    // Set icon based on type
    switch(type) {
        case 'success':
            icon.className = 'toast-icon fas fa-check-circle';
            toast.classList.add('success');
            break;
        case 'error':
            icon.className = 'toast-icon fas fa-exclamation-triangle';
            toast.classList.add('error');
            break;
        case 'loading':
            icon.className = 'toast-icon fas fa-spinner fa-spin';
            toast.classList.add('loading');
            break;
    }
    
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    // Show
    clearTimeout(toastTimer);
    toast.classList.add('show');
    
    // Auto hide
    if (type !== 'loading') {
        toastTimer = setTimeout(hideToast, 4000);
    }
}

function hideToast() {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.remove('show');
    }
}
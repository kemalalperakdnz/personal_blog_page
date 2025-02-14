// Typed.js Başlatma
const typed = new Typed('.typed-text', {
    strings: ['Web Geliştirici', 'Grafik Tasarımcı', 'Freelancer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});


// Navbar Scroll Efekti
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Progress Bar Animasyonu
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBars.forEach(bar => {
        const value = bar.dataset.progress;
        bar.style.width = `${value}%`;
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    
    if (sectionPos < screenPos) {
        showProgress();
    }
});

// Form Gönderimi
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Form verilerini al
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // EmailJS ile e-posta gönder
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    })
    .then(function(response) {
        alert('Mesajınız gönderildi!');
        contactForm.reset();
    }, function(error) {
        alert('Mesaj gönderilirken bir hata oluştu: ' + JSON.stringify(error));
    });
});

// AOS başlatma
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Karanlık Mod Fonksiyonları
function setupDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.className = 'dark-mode-toggle';
    document.body.appendChild(darkModeToggle);

    // Sayfa yüklendiğinde localStorage'dan tercihi al
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode'); // html elementine ekle
    }

    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        const isDark = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        darkModeToggle.innerHTML = isDark ? 
            '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

document.addEventListener('DOMContentLoaded', setupDarkMode);

// Dil değişimi için gerekli çeviriler
const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        skills: "Yetenekler",
        projects: "Projeler",
        contact: "İletişim",
        contactTitle: "Bana Ulaşın",
        contactSubtitle: "Projeleriniz için benimle iletişime geçebilirsiniz",
        contactInfo: "İletişim Bilgileri",
        phone: "Telefon",
        email: "Email",
        location: "Konum",
        locationValue: "Mersin, Türkiye",
        sendMessage: "Mesaj Gönderin",
        messageDesc: "Size en kısa sürede dönüş yapacağım",
        name: "Kemal Alper AKDENİZ",
        emailAddress: "Email Adresiniz",
        subject: "Konu",
        message: "Mesajınız",
        send: "Gönder",
        copyright: "Tüm Hakları Saklıdır",
        hello: "Merhaba, Ben",
        role: "Web Geliştirici & Grafik Tasarımcı",
        seeProjects: "Projelerimi Gör",
        getInTouch: "İletişime Geç",
        portfolio: "Portfolyo",
        aboutTitle: "Hakkımda",
        aboutMe: "Merhaba! Ben Kemal Alper",
        aboutText: "Mersin Üniversitesi Bilgisayar Bilimleri ve Teknolojileri ve Anadolu Üniversitesi Bilgisayar Programcılığı öğrencisi Kemal Alper. Temel bilgisayar bilimlerinin yanı sıra web geliştirme, veritabanı yönetimi ve yazılım mühendisliği alanlarında da eğitim alıyorum. Bu, teorik bilgilerimi güçlendirmemi ve pratik projeler üzerinde çalışarak deneyim kazanmamı sağlıyor. Amacım, ön uç geliştirici olmak ve dijital dünyada fark yaratmak için kullanıcı dostu ve etkileyici web arayüzleri oluşturmak. HTML, CSS ve JavaScript gibi teknolojilerle çalışırken, en son trendleri takip ediyor ve kullanıcıların ihtiyaçlarını en iyi şekilde karşılamak için tasarım ilkelerini uygulamaya çalışıyorum.",
        education: "Eğitim",
        educationTitle: "Eğitim Geçmişim",
        educationSubtitle: "Akademik yolculuğum",
        computerProgramming: "Bilgisayar Programcılığı",
        computerScience: "Bilişim Sistemleri ve Teknolojileri",
        highSchool: "Lise Eğitimi (Sayısal)",
        middleSchool: "Ortaokul Eğitimi",
        primarySchool: "İlkokul Eğitimi",
        ongoing: "Devam",
        certificates: "Sertifikalar",
        certificatesTitle: "Sertifikalarım",
        certificatesSubtitle: "Kazandığım başarı belgeleri",
        viewCertificate: "Görüntüle",
        frontEndSchool: "Front-End Okulu",
        frontEndDev: "Frontend Geliştirme",
        smartTransport: "Akıllı Ulaşım Projesi",
        humanityProject: "İnsanlık Yararına Projesi",
        agriTechProject: "Tarım Teknolojileri Projesi",
        aiCertificate: "Yapay Zeka",
        cyberSecurity: "Siber Güvenlik",
        operatingSystems: "İşletim Sistemleri",
        teamwork: "Takım Çalışması",
        projectPlanning: "proje planlaması",
        projectPresentation: "proje tanıtımı",
        skills: "Yetenekler",
        skillsTitle: "Teknik Yeteneklerim",
        skillsSubtitle: "Uzmanı olduğum teknolojiler ve araçlar",
        programmingLang: "Programlama Dilleri",
        professionalSkills: "Profesyonel Beceriler",
        effectiveCommunication: "Etkili İletişim",
        projectManagement: "Proje Yönetimi",
        timeManagement: "Zaman Yönetimi",
        creativeThinking: "Yaratıcı Düşünme",
        designProjectSkills: "Tasarım & Proje Becerileri",
        photoshop: "Photoshop",
        projectDelivery: "Proje Teslimi",
        computerArchitecture: "Bilgisayar Mimarisi",
        artificialIntelligence: "Yapay Zeka",
        webServices: "Web Hizmetleri",
        webApplicability: "Web Uygulanabilirliği",
        frontendDev: "Frontend Geliştirme",
        projects: "Projeler",
        projectsTitle: "Son Projelerim",
        projectsSubtitle: "Geliştirdiğim bazı özel projeler",
        personalBlog: "Kişisel Blog",
        personalBlogDesc: "Kişisel blog sitesi.",
        seeAllProjects: "Tüm Projeleri Gör",
        viewProject: "Projeyi Görüntüle",
        viewGithub: "GitHub",
        downloadCV: "Özgeçmişimi İndirin",
        downloadCVDesc: "Detaylı özgeçmişime göz atın ve indirin",
        downloadPDF: "PDF İndir",
        downloadDOCX: "DOCX İndir"
    },
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        contactTitle: "Get in Touch",
        contactSubtitle: "You can contact me for your projects",
        contactInfo: "Contact Information",
        phone: "Phone",
        email: "Email",
        location: "Location",
        locationValue: "Mersin, Turkey",
        sendMessage: "Send Message",
        messageDesc: "I will get back to you as soon as possible",
        name: "Kemal Alper AKDENİZ",
        emailAddress: "Your Email",
        subject: "Subject",
        message: "Your Message",
        send: "Send",
        copyright: "All Rights Reserved",
        hello: "Hello, I'm",
        role: "Web Developer & Graphic Designer",
        seeProjects: "See My Projects",
        getInTouch: "Get in Touch",
        portfolio: "Portfolio",
        aboutTitle: "About Me",
        aboutMe: "Hello! I'm Kemal Alper",
        aboutText: "Kemal Alper, a student of Mersin University Computer Sciences and Technologies and Anadolu University Computer Programming. In addition to basic computer science, I am also studying web development, database management and software engineering. This allows me to strengthen my theoretical knowledge and gain experience by working on practical projects. My goal is to become a front-end developer and create user-friendly and impressive web interfaces to make a difference in the digital world. While working with technologies such as HTML, CSS and JavaScript, I follow the latest trends and try to apply design principles to best meet the needs of users.",
        education: "Education",
        educationTitle: "My Education",
        educationSubtitle: "My academic journey",
        computerProgramming: "Computer Programming",
        computerScience: "Information Systems and Technologies",
        highSchool: "High School Education (Science)",
        middleSchool: "Middle School Education",
        primarySchool: "Primary School Education",
        ongoing: "Ongoing",
        certificates: "Certificates",
        certificatesTitle: "My Certificates",
        certificatesSubtitle: "Achievement certificates I have earned",
        viewCertificate: "View",
        frontEndSchool: "Front-End School",
        frontEndDev: "Frontend Development",
        smartTransport: "Smart Transportation Project",
        humanityProject: "Project for Humanity",
        agriTechProject: "Agricultural Technologies Project",
        aiCertificate: "Artificial Intelligence",
        cyberSecurity: "Cyber Security",
        operatingSystems: "Operating Systems",
        teamwork: "Teamwork",
        projectPlanning: "project planning",
        projectPresentation: "project presentation",
        skills: "Skills",
        skillsTitle: "Technical Skills",
        skillsSubtitle: "Technologies and tools I specialize in",
        programmingLang: "Programming Languages",
        professionalSkills: "Professional Skills",
        effectiveCommunication: "Effective Communication",
        projectManagement: "Project Management",
        timeManagement: "Time Management",
        creativeThinking: "Creative Thinking",
        designProjectSkills: "Design & Project Skills",
        photoshop: "Photoshop",
        projectDelivery: "Project Delivery",
        computerArchitecture: "Computer Architecture",
        artificialIntelligence: "Artificial Intelligence",
        webServices: "Web Services",
        webApplicability: "Web Applicability",
        frontendDev: "Frontend Development",
        projects: "Projects",
        projectsTitle: "Recent Projects",
        projectsSubtitle: "Some special projects I have developed",
        personalBlog: "Personal Blog",
        personalBlogDesc: "Personal blog website.",
        seeAllProjects: "See All Projects",
        viewProject: "View Project",
        viewGithub: "GitHub",
        downloadCV: "Download My CV",
        downloadCVDesc: "View and download my detailed resume",
        downloadPDF: "Download PDF",
        downloadDOCX: "Download DOCX"
    }
};

// Varsayılan dil Türkçe olarak ayarlanır
let currentLanguage = 'tr';

// Dil değiştirme fonksiyonu
function toggleLanguage() {
    const button = document.getElementById('languageToggle');
    const currentLanguage = button.innerHTML.includes('EN') ? 'en' : 'tr';
    
    // Buton metnini güncelle
    button.innerHTML = `<i class="fas fa-globe"></i> ${currentLanguage === 'tr' ? 'EN' : 'TR'}`;
    
    // Çevirileri uygula
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Dil değiştirme butonuna tıklama olayı ekle
    const languageToggle = document.getElementById('languageToggle');
    languageToggle.addEventListener('click', toggleLanguage);
});

// Sayfa yükleme animasyonu
function setupPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    document.body.appendChild(loader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

// Scroll progress bar
function setupScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
}

// Görsel lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Sertifika Kaydırma Fonksiyonları
function setupCertificateScroll() {
    const wrapper = document.querySelector('.certificates-wrapper');
    const groups = document.querySelectorAll('.certificates-group');
    const prevBtn = document.querySelector('.scroll-btn.prev');
    const nextBtn = document.querySelector('.scroll-btn.next');
    const dots = document.querySelectorAll('.scroll-dot');
    let currentIndex = 0;

    // Kaydırma butonları için event listeners
    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        scrollToGroup(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, groups.length - 1);
        scrollToGroup(currentIndex);
    });

    // Nokta göstergeleri için event listeners
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            scrollToGroup(index);
        });
    });

    // Belirli bir grupa kaydırma
    function scrollToGroup(index) {
        const group = groups[index];
        wrapper.scrollTo({
            left: group.offsetLeft - wrapper.offsetLeft,
            behavior: 'smooth'
        });
        updateDots(index);
    }

    // Nokta göstergelerini güncelleme
    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Scroll olayını dinleme
    wrapper.addEventListener('scroll', () => {
        const scrollPosition = wrapper.scrollLeft;
        const groupWidth = wrapper.offsetWidth;
        const newIndex = Math.round(scrollPosition / groupWidth);
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateDots(newIndex);
        }
    });
}

// Sayfa yüklendiğinde fonksiyonu çağır
document.addEventListener('DOMContentLoaded', setupCertificateScroll);

function sendEmail(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const mailtoLink = `mailto:alperkemalakdeniz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
    window.location.href = mailtoLink;
}

// Kullanılmayan fonksiyonları kaldırın
function unusedFunction() {
    // Bu fonksiyon kullanılmıyor, kaldırılabilir
}

document.querySelector('.dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
// 네비게이션 링크에 부드러운 스크롤 기능 추가 및 현재 섹션에 따라 active 클래스 적용
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href');
      const targetSection = document.querySelector(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // 스크롤 이벤트를 이용하여 현재 섹션에 해당하는 네비게이션 링크에 active 클래스 추가
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.resume-section');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentIndex = -1;
    
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        currentIndex = index;
      }
    });
    
    navLinks.forEach(link => link.classList.remove('active'));
    if (currentIndex !== -1) {
      navLinks[currentIndex].classList.add('active');
    }
  });
  
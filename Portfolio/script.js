document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('site-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileMenuItems = document.querySelectorAll('.mobile-nav-menu a');

    hamburger.addEventListener('click', () => {
        mobileNavOverlay.classList.toggle('open');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
        document.body.classList.toggle('no-scroll');
    });

    mobileMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('open');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
            document.body.classList.remove('no-scroll');
        });
    });
    const fadeInSections = document.querySelectorAll('.fade-in-section, .intro-paragraph, .skill-box, .project-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        observer.observe(section);
    });
    const sections = document.querySelectorAll('main > div[id]');
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-nav-menu a');
    const headerHeight = header.offsetHeight;

    const activateNavLink = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.parentNode.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.parentNode.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', activateNavLink);
    window.addEventListener('load', activateNavLink);

    const skillBoxes = document.querySelectorAll('.skill-box');
    const skillObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    item.style.transitionDelay = `${index * 0.1}s`;
                });
                entry.target.classList.add('is-visible');
                skillObserver.unobserve(entry.target);
            }
        });
    }, skillObserverOptions);

    skillBoxes.forEach(box => {
        skillObserver.observe(box);
    });

    activateNavLink();
    fadeInSections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight && section.getBoundingClientRect().bottom > 0) {
            section.classList.add('is-visible');
        }
    });
    skillBoxes.forEach(box => {
        if (box.getBoundingClientRect().top < window.innerHeight && box.getBoundingClientRect().bottom > 0) {
            const skillItems = box.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.1}s`;
            });
            box.classList.add('is-visible');
        }
    });

});
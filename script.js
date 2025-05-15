document.addEventListener('DOMContentLoaded', function() {
    // 背景动效增强
    const cubes = document.querySelectorAll('.cube');
    
    cubes.forEach(cube => {
        // 随机位置
        cube.style.left = `${Math.random() * 100}%`;
        cube.style.top = `${Math.random() * 100}%`;
        
        // 随机大小
        const size = 30 + Math.random() * 60;
        cube.style.width = `${size}px`;
        cube.style.height = `${size}px`;
        
        // 随机旋转
        cube.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // 随机动画延迟
        cube.style.animationDelay = `${Math.random() * 5}s`;
    });
    
    // 在document.addEventListener('DOMContentLoaded', function() {...}) 中添加以下代码
    
    // 代码背景动画效果
    const codeBg = document.querySelector('.code-bg');
    if (codeBg) {
        window.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            codeBg.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
        });
    }
    
    // 为标题中的每个单词添加悬停效果
    const hoverWords = document.querySelectorAll('.hover-word');
    
    hoverWords.forEach(word => {
        word.addEventListener('mouseenter', function() {
            this.style.color = 'var(--primary-color)';
            const underline = this.querySelector('::after');
            if (underline) {
                underline.style.width = '100%';
            }
        });
        
        word.addEventListener('mouseleave', function() {
            this.style.color = '';
            const underline = this.querySelector('::after');
            if (underline) {
                underline.style.width = '0';
            }
        });
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        // 初始化粒子效果
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#f0b90b'
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#f0b90b',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 0.5
                            }
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            });
        }
        
        // 滚动效果
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // 视差滚动效果
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
            }
            
            // 添加元素进入视图时的动画
            const animateElements = document.querySelectorAll('.expandable-card');
            animateElements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.classList.add('animate');
                }
            });
        });
        
        // Expandable cards
        const cards = document.querySelectorAll('.expandable-card');
        
        cards.forEach(card => {
            const header = card.querySelector('.card-header');
            
            header.addEventListener('click', () => {
                card.classList.toggle('active');
                
                // Update icon
                const icon = card.querySelector('.expand-icon i');
                if (card.classList.contains('active')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });
        });
        
        // Tabs
        const tabs = document.querySelectorAll('.tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
            });
        });
        
        // Launch options
        const options = document.querySelectorAll('.option-btn');
        
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all options
                options.forEach(o => o.classList.remove('active'));
                
                // Add active class to clicked option
                option.classList.add('active');
            });
        });
    });
});
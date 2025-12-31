// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        }
        
        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNav() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // Load blog posts
    loadBlogPosts();
});

// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Understanding Transformer Architecture",
        excerpt: "A deep dive into the transformer architecture that revolutionized NLP and beyond.",
        date: "2024-01-15",
        category: "Deep Learning"
    },
    {
        id: 2,
        title: "Efficient Model Compression Techniques",
        excerpt: "Exploring various methods to make deep learning models smaller and faster.",
        date: "2024-01-10",
        category: "Optimization"
    },
    {
        id: 3,
        title: "The Future of Computer Vision",
        excerpt: "Recent advances and future directions in computer vision research.",
        date: "2024-01-05",
        category: "Computer Vision"
    },
    {
        id: 4,
        title: "Reinforcement Learning in Practice",
        excerpt: "Practical applications and challenges of reinforcement learning.",
        date: "2023-12-28",
        category: "Reinforcement Learning"
    },
    {
        id: 5,
        title: "Neural Architecture Search: An Overview",
        excerpt: "Understanding automated machine learning and architecture search methods.",
        date: "2023-12-20",
        category: "AutoML"
    },
    {
        id: 6,
        title: "Attention Mechanisms Explained",
        excerpt: "Breaking down attention mechanisms and their role in modern AI.",
        date: "2023-12-15",
        category: "Deep Learning"
    }
];

// Load and display blog posts
function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    blogPosts.forEach(post => {
        const blogCard = createBlogCard(post);
        blogGrid.appendChild(blogCard);
    });
}

// Create blog card element
function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.addEventListener('click', () => {
        // Navigate to blog post page (you can implement this later)
        console.log('Opening post:', post.id);
    });

    const emoji = getEmojiForCategory(post.category);
    
    card.innerHTML = `
        <div class="blog-card-image">${emoji}</div>
        <div class="blog-card-content">
            <div class="blog-card-date">${formatDate(post.date)}</div>
            <h3 class="blog-card-title">${post.title}</h3>
            <p class="blog-card-excerpt">${post.excerpt}</p>
        </div>
    `;

    return card;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ko-KR', options);
}

// Get emoji for category
function getEmojiForCategory(category) {
    const emojiMap = {
        'Deep Learning': '🧠',
        'Optimization': '⚡',
        'Computer Vision': '👁️',
        'Reinforcement Learning': '🎯',
        'AutoML': '🤖',
        'NLP': '💬'
    };
    return emojiMap[category] || '📝';
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.research-card, .publication-item, .blog-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});


// --- blog.js ---

const blogPosts = [
    {
        image: 'itsme.png',
        title: 'HELLO!',
        description: 'Its K.A.THATHSARA NAWANJANA',
        overlayPngs: ['Health.png', 'technology.png', 'Relationship.png'], // Add paths to your PNGs
        backgroundHeading: 'NAWANJANA' // Text for background heading
    },
    {
        image: 'dicipline.png',
        title: 'DICIPLINE',
        description: 'This isnt about punishment,its about self control.Its choosing what you want long term over what you want right now.Want to get a good grade? You need the discipline to study instead of scroling.Want to be fit?You need the discipline to hit the gym even when youre tired.Discipline is the ability to show up for yourself,every single day.Its the bridge between your goals and your reality.',
        overlayPngs: ['tech1.png', 'Health3.png', 'money.png'], // More PNGs
        backgroundHeading: 'DICIPLINE'
    },
    {
        image: 'Finance.png',
        title: 'FINANCE',
        description:'Simply put this is the art of managing money.Its not just about earning.Its about what you do with it.Are you budgeting?Are you saving?Are you avoiding bad debt?Personal finance is the skill of making sure your money works for you.Understand this early,and you unlock massive freedom later. Control your money,or it will control you.',
        overlayPngs: ['pocket.png', 'finance2.png','finance3.png'],
        backgroundHeading: 'FINANCE'
    }
    ,
    {
        image: 'Health.png',
        title: 'HEALTH',
        description: 'This is the foundation,Health.Im talking about physical health nutrition,exercise,sleep and mental health how you handle stress,your emotional wellbeing.You cant perform in any other area school,work,relationships if your health is broken.Treat your body and mind like the most valuable asset you own.Because they are.',
        overlayPngs: ['Health1.png', 'Health2.png','Health3.png'],
        backgroundHeading: 'HEALTH'
    }
    ,
    {
        image: 'technology.png',
        title: 'TECHNOLOGY',
        description: 'Then we have Technology,Its the application of knowledge to solve practical problems.Right now, its mostly about Information Technology the computers, the internet,the software.Technology is a tool,not a master.It has the power to connect us and simplify our lives,but we have to be smart users, understanding its impact on society and on our attention spans.',
        overlayPngs: ['tech1.png', 'tech2.png','tech3.png'],
        backgroundHeading: 'TECHNOLOGYS'
    }
    ,
    {
        image: 'Relationship.png',
        title: 'RELATIONSHIP',
        description: 'Relationships the connections we build .Family, friends, partners, colleagues.This is where we invest our time and emotion.The quality of your life is,in large part,determined by the quality of your relationships The core skills here are simple, but hard,communication,empathy,and trust.You have to show up, listen,and invest in the people who matter.',
        overlayPngs: ['r1.png', 'r2.png','r3.png'],
        backgroundHeading: 'RELATIONSHIP'
    }
    ,
    {
        image: 'Travel.png',
        title: 'TRAVEL',
        description: 'Travel is about moving from one place to another,but its really about moving outside your comfort zone.When you travel,you gain perspective.You see how other people live,you learn history firsthand,and you realize your small problems arent the only things happening in the world.It’s an investment in your education and personal growth that pays dividends forever.',
        overlayPngs: ['t1.png', 't2.png','t3.png'],
        backgroundHeading: 'TRAVEL'
    }
    ,
    {
        image: 'Fashion.png',
        title: 'FASHION',
        description: 'Fashion is a popular style or practice,specially in clothing,footwear,accessories,makeup, or body for a particular period.It is a powerful form of self expression, reflecting cultural trends,personal identity,and social statements.',
        overlayPngs: ['f1.png', 'f2.png','f3.png'],
        backgroundHeading: 'FASHION'
    }
    ,
    {
        image: 'food.png',
        title: 'FOODS',
        description: 'Lets talk about Foods.Beyond just nutrition,which is vital for energy and health,food is culture,tradition,and community. We celebrate with food,we grieve with food,and we connect over food.Understand how food fuels your body,but also appreciate how it brings us all together.Its essential fuel, and its an essential experience.',
        overlayPngs: ['fo1.png', 'fo2.png','fo3.png'],
        backgroundHeading: 'FOODS'
    }
    ,
    {
        image: 'goal.png',
        title: 'GOAL',
        description: 'Finally,we have the most important practice is Goal Setting.A goal is simply the desired result youre working toward.Whether its passing this class,saving for a car,or running a marathon,you need a target.We often talk about goals that Specific,Measurable,Achievable,Relevant,and Timebound.You have to define the destination,or youll just drift.',
        overlayPngs: ['g1.png', 'g2.png','g3.png'],
        backgroundHeading: 'GOAL'
    }
];

let currentBlogIndex = 0;

const blogImageElement = document.getElementById('blog-image');
const blogTitleElement = document.getElementById('blog-title');
const blogDescriptionElement = document.getElementById('blog-description');
const blogContentWrapper = document.querySelector('.blog-content-wrapper'); // The element to animate

const blogOverlayPngsContainer = document.getElementById('blog-overlay-pngs'); // NEW
const blogHeadingBehindElement = document.getElementById('blog-heading-behind'); // NEW

const prevBlogButton = document.getElementById('prev-blog');
const nextBlogButton = document.getElementById('next-blog');

function updateBlogContent() {
    // Start fade-out animation for main content
    blogContentWrapper.classList.add('content-fade-out');
    // Clear existing PNGs and heading immediately
    blogOverlayPngsContainer.innerHTML = '';
    blogHeadingBehindElement.textContent = ''; // Clear text

    setTimeout(() => {
        const post = blogPosts[currentBlogIndex];

        // Update main content
        blogImageElement.src = post.image;
        blogTitleElement.textContent = post.title;
        blogDescriptionElement.textContent = post.description;

        // Update and show background heading
        blogHeadingBehindElement.textContent = post.backgroundHeading;
        blogHeadingBehindElement.classList.remove('fadeInBackgroundText'); // Reset animation
        void blogHeadingBehindElement.offsetWidth; // Trigger reflow
        blogHeadingBehindElement.classList.add('fadeInBackgroundText');

        // Add overlay PNGs and apply animation
        post.overlayPngs.forEach((pngSrc, index) => {
            const img = document.createElement('img');
            img.src = pngSrc;
            img.alt = `Overlay Icon ${index + 1}`;
            // Apply pop-in animation class
            img.classList.add('png-pop-in'); 
            // Add a small delay for each PNG for a staggered effect
            img.style.animationDelay = `${0.2 + (index * 0.1)}s`; 
            blogOverlayPngsContainer.appendChild(img);
        });

        // Remove fade-out and apply fade-in for main content
        blogContentWrapper.classList.remove('content-fade-out');
        blogContentWrapper.classList.add('content-fade-in');

        // Remove fade-in after animation to reset for next change
        setTimeout(() => {
            blogContentWrapper.classList.remove('content-fade-in');
        }, 500); 

    }, 500); // Must match main content animation duration
}

prevBlogButton.addEventListener('click', () => {
    currentBlogIndex = (currentBlogIndex - 1 + blogPosts.length) % blogPosts.length;
    updateBlogContent();
});

nextBlogButton.addEventListener('click', () => {
    currentBlogIndex = (currentBlogIndex + 1) % blogPosts.length;
    updateBlogContent();
});

// Initial load
updateBlogContent();

// Ensure active class for blog navigation
document.addEventListener('DOMContentLoaded', () => {
    const blogNavLink = document.querySelector('.nav-links a[href="blog.html"]');
    if (blogNavLink) {
        document.querySelectorAll('.nav-links .nav-button').forEach(link => link.classList.remove('active'));
        blogNavLink.classList.add('active');
    }
});

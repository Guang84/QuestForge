// Application State (In-Memory Data Storage)
const appState = {
    currentDisciplineFilter: 'all',
    userProfile: {
        name: 'You',
        age: 23,
        status: 'CS Graduate',
        goals: ['Master Mathematics', 'Cybersecurity Expert', 'Advanced Programmer', 'Athlete-Level Fitness'],
        currentLevels: {
            math: 'Basic Arithmetic',
            cybersecurity: 'Beginner',
            programming: 'Intermediate (CS Grad)',
            fitness: 'Beginner'
        },
        startedDate: '2025-11-06'
    },
    studyStats: {
        totalHours: 0,
        streak: 0,
        lastStudyDate: null
    },
    mathPhases: [
        {
            id: 1,
            name: 'Foundation Mathematics',
            description: 'Arithmetic, Basic Algebra, Exponents & Radicals',
            duration: '6-9 weeks',
            topics: ['Arithmetic fundamentals', 'Basic algebraic equations', 'Exponents and radicals'],
            prerequisites: 'None',
            status: 'not_started',
            progress: 0
        },
        {
            id: 2,
            name: 'Pre-Algebra & Intermediate Algebra',
            description: 'Factoring, Rational Expressions, Linear Equations',
            duration: '7-10 weeks',
            topics: ['Polynomial factoring', 'Rational expressions', 'Systems of linear equations'],
            prerequisites: 'Foundation Mathematics',
            status: 'not_started',
            progress: 0
        },
        {
            id: 3,
            name: 'Geometry',
            description: 'Basic Geometry, Area, Volume, Coordinate Geometry',
            duration: '8-10 weeks',
            topics: ['Basic geometry concepts', 'Area and volume calculations', 'Coordinate systems'],
            prerequisites: 'Foundation Mathematics',
            status: 'not_started',
            progress: 0
        },
        {
            id: 4,
            name: 'Algebra 2',
            description: 'Quadratics, Polynomials, Systems, Complex Numbers',
            duration: '9-12 weeks',
            topics: ['Quadratic equations', 'Polynomial operations', 'Complex number systems'],
            prerequisites: 'Pre-Algebra, Geometry',
            status: 'not_started',
            progress: 0
        },
        {
            id: 5,
            name: 'Functions',
            description: 'Function Basics, Transformations, Advanced Functions',
            duration: '8-10 weeks',
            topics: ['Function definition and properties', 'Function composition', 'Transformations'],
            prerequisites: 'Algebra 2',
            status: 'not_started',
            progress: 0
        },
        {
            id: 6,
            name: 'Exponential & Logarithmic Functions',
            description: 'Exponential Functions, Logarithms, Applications',
            duration: '7-9 weeks',
            topics: ['Exponential growth and decay', 'Logarithmic functions', 'Real-world applications'],
            prerequisites: 'Functions',
            status: 'not_started',
            progress: 0
        },
        {
            id: 7,
            name: 'Trigonometry',
            description: 'Trig Ratios, Unit Circle, Graphs, Identities, Inverse Trig',
            duration: '10-13 weeks',
            topics: ['Sine, cosine, tangent ratios', 'Unit circle and radian measure', 'Trigonometric identities'],
            prerequisites: 'Functions, Geometry',
            status: 'not_started',
            progress: 0
        },
        {
            id: 8,
            name: 'Precalculus',
            description: 'Sequences, Series, Conics, Vectors, Matrices, Polar Equations',
            duration: '11-14 weeks',
            topics: ['Sequences and series', 'Conic sections', 'Vectors and matrices', 'Polar coordinates'],
            prerequisites: 'Trigonometry, Exponential & Logarithmic',
            status: 'not_started',
            progress: 0
        },
        {
            id: 9,
            name: 'Discrete Mathematics',
            description: 'Logic, Proofs, Sets, Graph Theory, Combinatorics, Number Theory',
            duration: '12-15 weeks',
            topics: ['Mathematical logic', 'Graph theory and trees', 'Combinatorics', 'Number theory and cryptography'],
            prerequisites: 'Algebra 2',
            status: 'not_started',
            progress: 0
        },
        {
            id: 10,
            name: 'Calculus 1 - Differential',
            description: 'Limits, Derivatives, Applications of Derivatives, Integration Intro',
            duration: '11-14 weeks',
            topics: ['Limits and continuity', 'Derivatives and rules', 'Optimization and curve sketching', 'Introduction to integration'],
            prerequisites: 'Precalculus',
            status: 'not_started',
            progress: 0
        },
        {
            id: 11,
            name: 'Calculus 2 - Integral',
            description: 'Integration Techniques, Applications, Sequences, Series',
            duration: '11-14 weeks',
            topics: ['Integration techniques', 'Applications of integration', 'Convergence and series', 'Power and Taylor series'],
            prerequisites: 'Calculus 1',
            status: 'not_started',
            progress: 0
        },
        {
            id: 12,
            name: 'Calculus 3 - Multivariable',
            description: 'Vectors, Partial Derivatives, Multiple Integrals, Vector Calculus',
            duration: '12-15 weeks',
            topics: ['3D vectors and geometry', 'Partial derivatives', 'Double and triple integrals', 'Vector calculus theorems'],
            prerequisites: 'Calculus 2',
            status: 'not_started',
            progress: 0
        },
        {
            id: 13,
            name: 'Linear Algebra',
            description: 'Matrices, Vector Spaces, Eigenvalues, Applications',
            duration: '10-13 weeks',
            topics: ['Matrix operations and systems', 'Vector spaces', 'Eigenvalues and eigenvectors', 'SVD and least squares'],
            prerequisites: 'Precalculus, Calculus 1',
            status: 'not_started',
            progress: 0
        },
        {
            id: 14,
            name: 'Differential Equations',
            description: 'First & Second Order ODEs, Systems, Applications, Transforms',
            duration: '10-13 weeks',
            topics: ['First order differential equations', 'Second order equations', 'Systems of ODEs', 'Laplace transforms'],
            prerequisites: 'Calculus 2, Linear Algebra',
            status: 'not_started',
            progress: 0
        },
        {
            id: 15,
            name: 'Probability & Statistics',
            description: 'Probability, Distributions, Inferential Stats, Regression',
            duration: '10-13 weeks',
            topics: ['Probability fundamentals', 'Random variables and distributions', 'Hypothesis testing', 'Regression and correlation'],
            prerequisites: 'Precalculus',
            status: 'not_started',
            progress: 0
        }
    ],
    cybersecurityStages: [
        {
            id: 1,
            name: 'Foundation Stage',
            description: 'Computer & Networking Fundamentals',
            duration: '8-12 weeks',
            topics: ['Computer Fundamentals', 'Networking Basics (IP, DNS, TCP/IP)', 'Windows OS Fundamentals', 'Linux OS Fundamentals', 'Cybersecurity Intro (CIA Triad)', 'Basic Cryptography'],
            prerequisites: 'None',
            status: 'not_started',
            progress: 0
        },
        {
            id: 2,
            name: 'Intermediate Stage',
            description: 'Network Security & Ethical Hacking',
            duration: '12-16 weeks',
            topics: ['Network Security (CYS 254)', 'Introduction to Network Security (CYS 354)', 'Computer Crime & Forensics (CYS 355)', 'Information Security (CYS 333)', 'Ethical Hacking Basics', 'Web Security & OWASP', 'Linux Administration'],
            prerequisites: 'Foundation Stage',
            status: 'not_started',
            progress: 0
        },
        {
            id: 3,
            name: 'Advanced Stage',
            description: 'Penetration Testing & Security Tools',
            duration: '12-16 weeks',
            topics: ['Advanced Network Security', 'Penetration Testing', 'Incident Response', 'Vulnerability Assessment', 'Security Tools (Wireshark, Metasploit)', 'Cloud Security', 'Threat Detection'],
            prerequisites: 'Intermediate Stage',
            status: 'not_started',
            progress: 0
        },
        {
            id: 4,
            name: 'Professional Stage',
            description: 'Specialization & Certifications',
            duration: 'Ongoing',
            topics: ['Specialization (Cloud/Network/App)', 'Certifications (Security+, CEH, CISSP)', 'Real-world Projects', 'CTF Challenges', 'Advanced Topics'],
            prerequisites: 'Advanced Stage',
            status: 'not_started',
            progress: 0
        }
    ],
    programmingTracks: [
        {
            id: 1,
            name: 'Web Development',
            description: 'HTML/CSS, JavaScript, React, Backend',
            duration: '16-20 weeks',
            topics: ['HTML/CSS Basics', 'JavaScript Fundamentals', 'DOM Manipulation', 'Async & Promises', 'React/Vue Introduction', 'Backend Basics (Node.js)'],
            prerequisites: 'None',
            status: 'not_started',
            progress: 0
        },
        {
            id: 2,
            name: 'Python Development',
            description: 'Python Basics, OOP, Django, Flask',
            duration: '14-18 weeks',
            topics: ['Python Basics', 'Data Structures', 'OOP in Python', 'File Handling', 'Libraries (NumPy, Pandas)', 'Web Frameworks (Django, Flask)'],
            prerequisites: 'None',
            status: 'not_started',
            progress: 0
        },
        {
            id: 3,
            name: 'System Programming',
            description: 'C/C++, Memory, Pointers, Algorithms',
            duration: '16-20 weeks',
            topics: ['C/C++ Basics', 'Memory Management', 'Pointers', 'Data Structures', 'Algorithms', 'System Design'],
            prerequisites: 'None',
            status: 'not_started',
            progress: 0
        },
        {
            id: 4,
            name: 'Problem Solving',
            description: 'Data Structures, Algorithms, LeetCode',
            duration: '12-16 weeks',
            topics: ['Data Structures', 'Algorithms', 'Leetcode Problems', 'System Design', 'Interview Prep'],
            prerequisites: 'None',
            status: 'not_started',
            progress: 0
        },
        {
            id: 5,
            name: 'DevOps/Infrastructure',
            description: 'Linux, Git, Docker, Kubernetes, CI/CD',
            duration: '10-14 weeks',
            topics: ['Linux Command Line', 'Git & Version Control', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
            prerequisites: 'None',
            status: 'not_started',
            progress: 0
        }
    ],
    fitnessLevels: [
        {
            id: 1,
            name: 'Beginner',
            description: 'Full-body, Cardio Fundamentals, Flexibility',
            duration: '4 weeks',
            topics: ['Basic body awareness', 'Full-body workouts', 'Cardio fundamentals', 'Flexibility/stretching', 'Nutrition basics'],
            prerequisites: 'None',
            frequency: '3-4 days/week',
            status: 'not_started',
            progress: 0
        },
        {
            id: 2,
            name: 'Intermediate',
            description: 'Push/Pull/Legs, Core, Nutritional Optimization',
            duration: '8 weeks',
            topics: ['Push/Pull/Legs split', 'Intermediate cardio', 'Core strengthening', 'Nutritional optimization', 'Recovery practices'],
            prerequisites: 'Beginner',
            frequency: '4-5 days/week',
            status: 'not_started',
            progress: 0
        },
        {
            id: 3,
            name: 'Advanced',
            description: 'Specialized Training, High-Intensity, Injury Prevention',
            duration: '12 weeks',
            topics: ['Specialized training splits', 'High-intensity training', 'Sports-specific training', 'Advanced nutrition', 'Injury prevention'],
            prerequisites: 'Intermediate',
            frequency: '5-6 days/week',
            status: 'not_started',
            progress: 0
        },
        {
            id: 4,
            name: 'Athlete',
            description: 'Elite Training, Competition Prep, Performance',
            duration: 'Ongoing',
            topics: ['Elite training programs', 'Competition preparation', 'Advanced biomechanics', 'Periodization', 'Performance optimization'],
            prerequisites: 'Advanced',
            frequency: '6 days/week',
            status: 'not_started',
            progress: 0
        }
    ],
    dailySchedule: {
        morning: [
            { time: '6:00-6:30 AM', activity: 'Cardio/Warmup', discipline: 'fitness', duration: '30 min' },
            { time: '6:30-6:45 AM', activity: 'Breakfast & Hydration', discipline: 'fitness', duration: '15 min' },
            { time: '6:45-7:30 AM', activity: 'Math Learning', discipline: 'math', duration: '45 min' },
            { time: '7:30-8:00 AM', activity: 'Math Review', discipline: 'math', duration: '30 min' }
        ],
        midMorning: [
            { time: '8:00-8:30 AM', activity: 'Code Session', discipline: 'programming', duration: '30 min' },
            { time: '8:30-9:30 AM', activity: 'Code Practice', discipline: 'programming', duration: '60 min' },
            { time: '9:30-10:00 AM', activity: 'Break & Stretch', discipline: 'fitness', duration: '30 min' },
            { time: '10:00-11:30 AM', activity: 'Cybersecurity Lab', discipline: 'cybersecurity', duration: '90 min' }
        ],
        afternoon: [
            { time: '12:00-1:00 PM', activity: 'Lunch & Rest', discipline: 'fitness', duration: '60 min' },
            { time: '1:00-2:30 PM', activity: 'Weight Training', discipline: 'fitness', duration: '90 min' },
            { time: '2:30-3:00 PM', activity: 'Shower & Recovery', discipline: 'fitness', duration: '30 min' },
            { time: '3:00-4:30 PM', activity: 'Project Work', discipline: 'programming', duration: '90 min' },
            { time: '4:30-5:00 PM', activity: 'Cybersecurity Tools', discipline: 'cybersecurity', duration: '30 min' },
            { time: '5:00-6:00 PM', activity: 'Math Practice', discipline: 'math', duration: '60 min' }
        ],
        evening: [
            { time: '6:00-7:00 PM', activity: 'Dinner & Relax', discipline: 'fitness', duration: '60 min' },
            { time: '7:00-8:00 PM', activity: 'Cybersecurity Reading', discipline: 'cybersecurity', duration: '60 min' },
            { time: '8:00-9:00 PM', activity: 'Code Review', discipline: 'programming', duration: '60 min' },
            { time: '9:00-9:30 PM', activity: 'Math Summary', discipline: 'math', duration: '30 min' },
            { time: '9:30-10:00 PM', activity: 'Cool Down/Stretch', discipline: 'fitness', duration: '30 min' }
        ]
    },
    weeklySchedule: {
        Monday: {
            dayNumber: 1,
            activities: [
                { time: '9:00 AM - 9:50 AM', activity: 'Lecture/Learn New Topic', description: 'Watch Khan Academy or Professor Leonard video', type: 'learning' },
                { time: '10:00 AM - 10:50 AM', activity: 'Note Taking & Summarization', description: 'Take handwritten notes and summarize concepts', type: 'learning' },
                { time: '3:00 PM - 4:00 PM', activity: 'Practice Problems', description: 'Solve 10-15 problems from lesson', type: 'practice' }
            ]
        },
        Tuesday: {
            dayNumber: 2,
            activities: [
                { time: '9:00 AM - 10:00 AM', activity: 'Deep Practice', description: 'Work on challenging problems', type: 'practice' },
                { time: '2:00 PM - 3:00 PM', activity: 'Mixed Review', description: 'Review topics from this week', type: 'review' }
            ]
        },
        Wednesday: {
            dayNumber: 3,
            activities: [
                { time: '9:00 AM - 9:50 AM', activity: 'New Topic Lecture', description: 'Continue with next lesson', type: 'learning' },
                { time: '3:00 PM - 4:30 PM', activity: 'Extended Practice', description: 'Solve 15-20 problems', type: 'practice' }
            ]
        },
        Thursday: {
            dayNumber: 4,
            activities: [
                { time: '9:00 AM - 10:00 AM', activity: 'Problem Solving', description: 'Focus on difficult problems', type: 'practice' },
                { time: '2:00 PM - 2:30 PM', activity: 'Quick Review', description: '5-minute drill on basics', type: 'review' }
            ]
        },
        Friday: {
            dayNumber: 5,
            activities: [
                { time: '9:00 AM - 10:00 AM', activity: 'Lecture/Learn', description: 'New topic introduction', type: 'learning' },
                { time: '3:00 PM - 4:00 PM', activity: 'Week Review', description: 'Review all week\'s topics', type: 'review' }
            ]
        },
        Saturday: {
            dayNumber: 6,
            activities: [
                { time: '10:00 AM - 1:00 PM', activity: 'Deep Work Session', description: 'Extended practice and problem solving', type: 'practice' },
                { time: '2:00 PM - 3:00 PM', activity: 'Summary Sheet Creation', description: 'Create visual notes and concepts', type: 'review' }
            ]
        },
        Sunday: {
            dayNumber: 7,
            activities: [
                { time: '10:00 AM - 11:30 AM', activity: 'Comprehensive Review', description: 'Review entire week\'s content', type: 'review' },
                { time: '2:00 PM - 3:00 PM', activity: 'Week Planning', description: 'Plan next week\'s topics', type: 'learning' }
            ]
        }
    },
    resources: {
        mathematics: [
            { name: 'Khan Academy', url: 'https://www.khanacademy.org', type: 'Video', icon: '📚' },
            { name: 'Professor Leonard', url: 'https://www.youtube.com/@ProfessorLeonard', type: 'Video', icon: '🎓' },
            { name: 'Paul\'s Online Notes', url: 'https://tutorial.math.lamar.edu', type: 'Written', icon: '📝' },
            { name: 'MIT OCW', url: 'https://ocw.mit.edu', type: 'Course', icon: '🏫' },
            { name: '3Blue1Brown', url: 'https://www.youtube.com/@3blue1brown', type: 'Video', icon: '🎨' }
        ],
        cybersecurity: [
            { name: 'Hilbert University Curriculum', type: 'Course', icon: '🏛️' },
            { name: 'Professor Messer', url: 'https://www.professormesser.com', type: 'Video', icon: '🎓' },
            { name: 'TryHackMe', url: 'https://www.tryhackme.com', type: 'Lab', icon: '🔐' },
            { name: 'Hack The Box', url: 'https://www.hackthebox.com', type: 'Lab', icon: '📦' },
            { name: 'OWASP', url: 'https://owasp.org', type: 'Reference', icon: '🔒' },
            { name: 'Cybrary', url: 'https://www.cybrary.it', type: 'Video', icon: '📖' }
        ],
        programming: [
            { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org', type: 'Video', icon: '🔥' },
            { name: 'LeetCode', url: 'https://leetcode.com', type: 'Practice', icon: '💻' },
            { name: 'GitHub', url: 'https://github.com', type: 'Repository', icon: '🐙' },
            { name: 'MDN Docs', url: 'https://developer.mozilla.org', type: 'Reference', icon: '📘' },
            { name: 'Codecademy', url: 'https://www.codecademy.com', type: 'Course', icon: '🎯' }
        ],
        fitness: [
            { name: 'MyFitnessPal', type: 'App', icon: '📱' },
            { name: 'Fitness YouTube Channels', type: 'Video', icon: '▶️' },
            { name: 'Nutrition Guides', type: 'Reference', icon: '🥗' },
            { name: 'Fitness Tracking Tools', type: 'App', icon: '⌚' }
        ]
    },
    oldResources: {
        'Video Platforms': [
            { name: 'Khan Academy', description: 'Complete structured curriculum from arithmetic to calculus', url: 'https://www.khanacademy.org', icon: '▶️' },
            { name: 'Professor Leonard', description: 'Full college-length calculus lectures (Calc 1, 2, 3)', url: 'https://www.youtube.com/@ProfessorLeonard', icon: '🎓' },
            { name: 'Organic Chemistry Tutor', description: 'Problem-solving and review videos for all math topics', url: 'https://www.youtube.com/@TheOrganicChemistryTutor', icon: '🧪' },
            { name: '3Blue1Brown', description: 'Visual explanations of linear algebra and calculus', url: 'https://www.youtube.com/@3blue1brown', icon: '🎨' }
        ],
        'Written Resources': [
            { name: 'Paul\'s Online Math Notes', description: 'Comprehensive notes with practice problems and cheat sheets', url: 'https://tutorial.math.lamar.edu', icon: '📝' },
            { name: 'MIT OpenCourseWare', description: 'College-level courses with lectures, notes, and exams', url: 'https://ocw.mit.edu', icon: '🏫' }
        ],
        'Tools and Apps': [
            { name: 'Desmos Calculator', description: 'Online graphing calculator with visual exploration', url: 'https://www.desmos.com/calculator', icon: '📊' },
            { name: 'GeoGebra', description: 'Geometry and graphing tool for visualization', url: 'https://www.geogebra.org', icon: '🔷' },
            { name: 'Wolfram Alpha', description: 'Computational engine for verification and step-by-step solutions', url: 'https://www.wolframalpha.com', icon: '🔬' }
        ],
        'Communities': [
            { name: 'r/learnmath', description: 'Friendly Reddit community for math questions', url: 'https://www.reddit.com/r/learnmath', icon: '👥' },
            { name: 'Math StackExchange', description: 'Q&A site for detailed math problem solutions', url: 'https://math.stackexchange.com', icon: '❓' }
        ]
    },
    scheduleTemplates: [
        { name: 'Weekday Intense', hoursPerDay: 6, mathPercent: 20, cybersecPercent: 25, codePercent: 30, fitnessPercent: 25 },
        { name: 'Weekend Relaxed', hoursPerDay: 4, mathPercent: 25, cybersecPercent: 25, codePercent: 25, fitnessPercent: 25 },
        { name: 'Balanced', hoursPerDay: 5, mathPercent: 22, cybersecPercent: 24, codePercent: 27, fitnessPercent: 27 }
    ],
    studyTips: [
        { title: 'Active Learning', description: 'Don\'t just watch videos - always do practice problems and hands-on labs', icon: '💪' },
        { title: 'Spaced Repetition', description: 'Review material at 1 day, 3 days, 1 week, 1 month intervals for better retention', icon: '🔄' },
        { title: 'Physical + Mental', description: 'Exercise before study sessions to enhance cognitive function and focus', icon: '🏃' },
        { title: 'Daily Consistency', description: '11 hours daily with proper breaks beats irregular marathon sessions', icon: '📅' },
        { title: 'Cross-Discipline Learning', description: 'Apply math in coding, use programming for cybersecurity labs', icon: '🔗' },
        { title: 'Build Strong Foundations', description: 'Master basics in each discipline before advancing to next phase', icon: '🏗️' },
        { title: 'Track Progress', description: 'Log every session, celebrate milestones, measure what matters', icon: '📊' },
        { title: 'Rest is Growth', description: 'Sleep 7-9 hours. Recovery time is when learning consolidates', icon: '😴' }
    ]
};

// Initialize the application
function initApp() {
    renderLearningMap();
    renderDailySchedule();
    renderResources();
    renderTips();
    renderDashboard();
    updateProgressDisplay();
    setupTabNavigation();
    checkDarkModePreference();
}

// Tab Navigation
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to selected button
    const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    // Refresh data for specific tabs
    if (tabName === 'dashboard') {
        renderDashboard();
    } else if (tabName === 'progress') {
        updateProgressDisplay();
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Export function for generating progress report
function generateProgressReport() {
    const report = {
        date: new Date().toLocaleDateString(),
        totalHours: appState.studyStats.totalHours,
        streak: appState.studyStats.streak,
        mathProgress: calculateDisciplineProgress('math'),
        cyberProgress: calculateDisciplineProgress('cyber'),
        codeProgress: calculateDisciplineProgress('code'),
        fitnessProgress: calculateDisciplineProgress('fitness'),
        completedPhases: [
            ...appState.mathPhases.filter(p => p.status === 'completed').map(p => ({ discipline: 'Math', name: p.name })),
            ...appState.cybersecurityStages.filter(p => p.status === 'completed').map(p => ({ discipline: 'Cyber', name: p.name })),
            ...appState.programmingTracks.filter(p => p.status === 'completed').map(p => ({ discipline: 'Code', name: p.name })),
            ...appState.fitnessLevels.filter(p => p.status === 'completed').map(p => ({ discipline: 'Fitness', name: p.name }))
        ]
    };
    
    const reportText = `
=== MASTERY HUB PROGRESS REPORT ===
Date: ${report.date}

TOTAL STATISTICS:
- Total Study Hours: ${report.totalHours}
- Current Streak: ${report.streak} days

PROGRESS BY DISCIPLINE:
- Mathematics: ${report.mathProgress}%
- Cybersecurity: ${report.cyberProgress}%
- Programming: ${report.codeProgress}%
- Fitness: ${report.fitnessProgress}%

COMPLETED PHASES (${report.completedPhases.length}):
${report.completedPhases.map(p => `- [${p.discipline}] ${p.name}`).join('\n')}

Keep up the great work!
    `;
    
    alert(reportText);
    console.log('Progress Report:', report);
}

// Render Dashboard
function renderDashboard() {
    // Update progress rings
    const mathProgress = calculateDisciplineProgress('math');
    const cyberProgress = calculateDisciplineProgress('cyber');
    const codeProgress = calculateDisciplineProgress('code');
    const fitnessProgress = calculateDisciplineProgress('fitness');
    
    document.getElementById('math-progress').textContent = mathProgress + '%';
    document.getElementById('cyber-progress').textContent = cyberProgress + '%';
    document.getElementById('code-progress').textContent = codeProgress + '%';
    document.getElementById('fitness-progress').textContent = fitnessProgress + '%';
    
    // Update total hours and streak
    document.getElementById('total-hours-dash').textContent = appState.studyStats.totalHours.toFixed(1);
    document.getElementById('streak-days-dash').textContent = appState.studyStats.streak;
    
    const totalCompleted = appState.mathPhases.filter(p => p.status === 'completed').length +
                          appState.cybersecurityStages.filter(p => p.status === 'completed').length +
                          appState.programmingTracks.filter(p => p.status === 'completed').length +
                          appState.fitnessLevels.filter(p => p.status === 'completed').length;
    document.getElementById('phases-completed-dash').textContent = totalCompleted;
    
    // Render today's schedule preview
    renderTodaySchedulePreview();
}

function renderTodaySchedulePreview() {
    const container = document.getElementById('today-schedule-preview');
    const allActivities = [
        ...appState.dailySchedule.morning,
        ...appState.dailySchedule.midMorning,
        ...appState.dailySchedule.afternoon,
        ...appState.dailySchedule.evening
    ];
    
    const next5 = allActivities.slice(0, 5);
    
    container.innerHTML = next5.map(activity => {
        const color = getDisciplineColor(activity.discipline);
        return `
            <div style="padding: 0.75rem; margin-bottom: 0.5rem; border-left: 3px solid ${color}; background: rgba(${color === 'var(--color-math)' ? '52, 152, 219' : color === 'var(--color-cyber)' ? '231, 76, 60' : color === 'var(--color-code)' ? '39, 174, 96' : '243, 156, 18'}, 0.1); border-radius: 4px;">
                <div style="font-weight: 600; font-size: 0.9rem;">${activity.time}</div>
                <div style="color: var(--text-dark);">${activity.activity}</div>
                <div style="color: var(--text-light); font-size: 0.85rem;">${activity.discipline.charAt(0).toUpperCase() + activity.discipline.slice(1)} - ${activity.duration}</div>
            </div>
        `;
    }).join('');
}

function getDisciplineColor(discipline) {
    const colors = {
        math: 'var(--color-math)',
        cybersecurity: 'var(--color-cyber)',
        programming: 'var(--color-code)',
        fitness: 'var(--color-fitness)'
    };
    return colors[discipline] || 'var(--primary-color)';
}

function calculateDisciplineProgress(discipline) {
    let total, completed;
    
    switch(discipline) {
        case 'math':
            total = appState.mathPhases.length;
            completed = appState.mathPhases.filter(p => p.status === 'completed').length;
            break;
        case 'cyber':
            total = appState.cybersecurityStages.length;
            completed = appState.cybersecurityStages.filter(p => p.status === 'completed').length;
            break;
        case 'code':
            total = appState.programmingTracks.length;
            completed = appState.programmingTracks.filter(p => p.status === 'completed').length;
            break;
        case 'fitness':
            total = appState.fitnessLevels.length;
            completed = appState.fitnessLevels.filter(p => p.status === 'completed').length;
            break;
        default:
            return 0;
    }
    
    return total > 0 ? Math.round((completed / total) * 100) : 0;
}

// Render Learning Map
function renderLearningMap() {
    renderMathPhases();
    renderCyberPhases();
    renderCodePhases();
    renderFitnessPhases();
}

function renderMathPhases() {
    const container = document.getElementById('math-phases');
    container.innerHTML = '';
    
    appState.mathPhases.forEach(phase => {
        const phaseCard = document.createElement('div');
        phaseCard.className = 'phase-card';
        phaseCard.style.borderLeftColor = 'var(--color-math)';
        phaseCard.innerHTML = `
            <div class="phase-header">
                <div>
                    <div class="phase-title">Phase ${phase.id}: ${phase.name}</div>
                    <div class="phase-duration"><i class="fas fa-clock"></i> ${phase.duration}</div>
                </div>
                <span class="phase-status status-${phase.status.replace('_', '-')}">
                    ${phase.status === 'not_started' ? 'Not Started' : phase.status === 'in_progress' ? 'In Progress' : 'Completed'}
                </span>
            </div>
            <div class="phase-description">${phase.description}</div>
            <div class="phase-actions">
                <button class="btn btn-secondary btn-small" onclick="togglePhaseDetails('math', ${phase.id})">
                    <i class="fas fa-info-circle"></i> Details
                </button>
                ${phase.status !== 'completed' ? `
                    <button class="btn btn-primary btn-small" onclick="updatePhaseStatus('math', ${phase.id}, 'in_progress')">
                        <i class="fas fa-play"></i> Start
                    </button>
                    <button class="btn btn-primary btn-small" onclick="updatePhaseStatus('math', ${phase.id}, 'completed')">
                        <i class="fas fa-check"></i> Complete
                    </button>
                ` : `
                    <button class="btn btn-secondary btn-small" onclick="updatePhaseStatus('math', ${phase.id}, 'not_started')">
                        <i class="fas fa-undo"></i> Reset
                    </button>
                `}
            </div>
            <div class="phase-details" id="phase-details-math-${phase.id}">
                <h4>Topics Covered:</h4>
                <ul>
                    ${phase.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
                <h4 style="margin-top: 1rem;">Prerequisites:</h4>
                <p style="color: var(--text-light); font-size: 0.9rem;">${phase.prerequisites}</p>
            </div>
        `;
        container.appendChild(phaseCard);
    });
}

function renderCyberPhases() {
    const container = document.getElementById('cyber-phases');
    container.innerHTML = '';
    
    appState.cybersecurityStages.forEach(phase => {
        const phaseCard = document.createElement('div');
        phaseCard.className = 'phase-card';
        phaseCard.style.borderLeftColor = 'var(--color-cyber)';
        phaseCard.innerHTML = `
            <div class="phase-header">
                <div>
                    <div class="phase-title" style="color: var(--color-cyber);">Stage ${phase.id}: ${phase.name}</div>
                    <div class="phase-duration"><i class="fas fa-clock"></i> ${phase.duration}</div>
                </div>
                <span class="phase-status status-${phase.status.replace('_', '-')}">
                    ${phase.status === 'not_started' ? 'Not Started' : phase.status === 'in_progress' ? 'In Progress' : 'Completed'}
                </span>
            </div>
            <div class="phase-description">${phase.description}</div>
            <div class="phase-actions">
                <button class="btn btn-secondary btn-small" onclick="togglePhaseDetails('cyber', ${phase.id})">
                    <i class="fas fa-info-circle"></i> Details
                </button>
                ${phase.status !== 'completed' ? `
                    <button class="btn btn-primary btn-small" onclick="updatePhaseStatus('cyber', ${phase.id}, 'in_progress')" style="background: var(--color-cyber);">
                        <i class="fas fa-play"></i> Start
                    </button>
                    <button class="btn btn-primary btn-small" onclick="updatePhaseStatus('cyber', ${phase.id}, 'completed')" style="background: var(--color-cyber);">
                        <i class="fas fa-check"></i> Complete
                    </button>
                ` : `
                    <button class="btn btn-secondary btn-small" onclick="updatePhaseStatus('cyber', ${phase.id}, 'not_started')">
                        <i class="fas fa-undo"></i> Reset
                    </button>
                `}
            </div>
            <div class="phase-details" id="phase-details-cyber-${phase.id}">
                <h4>Modules Covered:</h4>
                <ul>
                    ${phase.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
                <h4 style="margin-top: 1rem;">Prerequisites:</h4>
                <p style="color: var(--text-light); font-size: 0.9rem;">${phase.prerequisites}</p>
            </div>
        `;
        container.appendChild(phaseCard);
    });
}

function renderCodePhases() {
    const container = document.getElementById('code-phases');
    container.innerHTML = '';
    
    appState.programmingTracks.forEach(phase => {
        const phaseCard = document.createElement('div');
        phaseCard.className = 'phase-card';
        phaseCard.style.borderLeftColor = 'var(--color-code)';
        phaseCard.innerHTML = `
            <div class="phase-header">
                <div>
                    <div class="phase-title" style="color: var(--color-code);">Track ${phase.id}: ${phase.name}</div>
                    <div class="phase-duration"><i class="fas fa-clock"></i> ${phase.duration}</div>
                </div>
                <span class="phase-status status-${phase.status.replace('_', '-')}">
                    ${phase.status === 'not_started' ? 'Not Started' : phase.status === 'in_progress' ? 'In Progress' : 'Completed'}
                </span>
            </div>
            <div class="phase-description">${phase.description}</div>
            <div class="phase-actions">
                <button class="btn btn-secondary btn-small" onclick="togglePhaseDetails('code', ${phase.id})">
                    <i class="fas fa-info-circle"></i> Details
                </button>
                ${phase.status !== 'completed' ? `
                    <button class="btn btn-primary btn-small" onclick="updatePhaseStatus('code', ${phase.id}, 'in_progress')" style="background: var(--color-code);">
                        <i class="fas fa-play"></i> Start
                    </button>
                    <button class="btn btn-primary btn-small" onclick="updatePhaseStatus('code', ${phase.id}, 'completed')" style="background: var(--color-code);">
                        <i class="fas fa-check"></i> Complete
                    </button>
                ` : `
                    <button class="btn btn-secondary btn-small" onclick="updatePhaseStatus('code', ${phase.id}, 'not_started')">
                        <i class="fas fa-undo"></i> Reset
                    </button>
                `}
            </div>
            <div class="phase-details" id="phase-details-code-${phase.id}">
                <h4>Topics Covered:</h4>
                <ul>
                    ${phase.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
                <h4 style="margin-top: 1rem;">Prerequisites:</h4>
                <p style="color: var(--text-light); font-size: 0.9rem;">${phase.prerequisites}</p>
            </div>
        `;
        container.appendChild(phaseCard);
    });
}

function renderFitnessPhases() {
    const container = document.getElementById('fitness-phases');
    container.innerHTML = '';
    
    appState.fitnessLevels.forEach(phase => {
        const phaseCard = document.createElement('div');
        phaseCard.className = 'phase-card';
        phaseCard.style.borderLeftColor = 'var(--color-fitness)';
        phaseCard.innerHTML = `
            <div class="phase-header">
                <div>
                    <div class="phase-title" style="color: var(--color-fitness);">Level ${phase.id}: ${phase.name}</div>
                    <div class="phase-duration"><i class="fas fa-clock"></i> ${phase.duration} • ${phase.frequency}</div>
                </div>
                <span class="phase-status status-${phase.status.replace('_', '-')}">
                    ${phase.status === 'not_started' ? 'Not Started' : phase.status === 'in_progress' ? 'In Progress' : 'Completed'}
                </span>
            </div>
            <div class="phase-description">${phase.description}</div>
            <div class="phase-actions">
                <button class="btn btn-secondary btn-small" onclick="togglePhaseDetails('fitness', ${phase.id})">
                    <i class="fas fa-info-circle"></i> Details
                </button>
                ${phase.status !== 'completed' ? `
                    <button class="btn btn-primary btn-small" onclick="updatePhaseStatus('fitness', ${phase.id}, 'in_progress')" style="background: var(--color-fitness);">
                        <i class="fas fa-play"></i> Start
                    </button>
                    <button class="btn btn-primary btn-small" onclick="updatePhaseStatus('fitness', ${phase.id}, 'completed')" style="background: var(--color-fitness);">
                        <i class="fas fa-check"></i> Complete
                    </button>
                ` : `
                    <button class="btn btn-secondary btn-small" onclick="updatePhaseStatus('fitness', ${phase.id}, 'not_started')">
                        <i class="fas fa-undo"></i> Reset
                    </button>
                `}
            </div>
            <div class="phase-details" id="phase-details-fitness-${phase.id}">
                <h4>Focus Areas:</h4>
                <ul>
                    ${phase.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
                <h4 style="margin-top: 1rem;">Prerequisites:</h4>
                <p style="color: var(--text-light); font-size: 0.9rem;">${phase.prerequisites}</p>
            </div>
        `;
        container.appendChild(phaseCard);
    });
}

function togglePhaseDetails(discipline, phaseId) {
    const detailsElement = document.getElementById(`phase-details-${discipline}-${phaseId}`);
    if (detailsElement) {
        detailsElement.classList.toggle('show');
    }
}

function filterDiscipline(filter) {
    appState.currentDisciplineFilter = filter;
    const sections = document.querySelectorAll('.discipline-section');
    
    sections.forEach(section => {
        if (filter === 'all') {
            section.style.display = 'block';
        } else {
            const discipline = section.getAttribute('data-discipline');
            section.style.display = discipline === filter ? 'block' : 'none';
        }
    });
}

function updatePhaseStatus(discipline, phaseId, newStatus) {
    let phase;
    
    switch(discipline) {
        case 'math':
            phase = appState.mathPhases.find(p => p.id === phaseId);
            break;
        case 'cyber':
            phase = appState.cybersecurityStages.find(p => p.id === phaseId);
            break;
        case 'code':
            phase = appState.programmingTracks.find(p => p.id === phaseId);
            break;
        case 'fitness':
            phase = appState.fitnessLevels.find(p => p.id === phaseId);
            break;
    }
    if (phase) {
        phase.status = newStatus;
        if (newStatus === 'completed') {
            phase.progress = 100;
        } else if (newStatus === 'in_progress') {
            phase.progress = 50;
        } else {
            phase.progress = 0;
        }
        renderLearningMap();
        renderDashboard();
        updateProgressDisplay();
    }
}

// Render Daily Schedule
function renderDailySchedule() {
    const container = document.getElementById('daily-schedule-container');
    container.innerHTML = '';
    
    const timeBlocks = [
        { name: 'Morning (6:00-8:00 AM)', activities: appState.dailySchedule.morning },
        { name: 'Mid-Morning (8:00-12:00 PM)', activities: appState.dailySchedule.midMorning },
        { name: 'Afternoon (12:00-6:00 PM)', activities: appState.dailySchedule.afternoon },
        { name: 'Evening (6:00-10:00 PM)', activities: appState.dailySchedule.evening }
    ];
    
    timeBlocks.forEach(block => {
        const blockCard = document.createElement('div');
        blockCard.className = 'card';
        blockCard.style.marginBottom = '1.5rem';
        
        blockCard.innerHTML = `
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">${block.name}</h3>
            ${block.activities.map(activity => {
                const colorMap = {
                    'math': 'var(--color-math)',
                    'cybersecurity': 'var(--color-cyber)',
                    'programming': 'var(--color-code)',
                    'fitness': 'var(--color-fitness)'
                };
                const color = colorMap[activity.discipline] || 'var(--primary-color)';
                
                return `
                    <div style="padding: 0.75rem; margin-bottom: 0.75rem; border-left: 4px solid ${color}; background: rgba(0,0,0,0.02); border-radius: 6px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                            <strong style="color: var(--text-dark);">${activity.time}</strong>
                            <span style="font-size: 0.85rem; color: var(--text-light);">${activity.duration}</span>
                        </div>
                        <div style="font-weight: 500; margin-bottom: 0.25rem;">${activity.activity}</div>
                        <div style="font-size: 0.85rem; color: var(--text-light); text-transform: capitalize;">
                            ${activity.discipline}
                        </div>
                    </div>
                `;
            }).join('')}
        `;
        
        container.appendChild(blockCard);
    });
}

// Render Resources
function renderResources() {
    const container = document.getElementById('resources-container');
    container.innerHTML = '';
    
    const disciplines = ['mathematics', 'cybersecurity', 'programming', 'fitness'];
    const disciplineColors = {
        'mathematics': 'var(--color-math)',
        'cybersecurity': 'var(--color-cyber)',
        'programming': 'var(--color-code)',
        'fitness': 'var(--color-fitness)'
    };
    const disciplineIcons = {
        'mathematics': '📐',
        'cybersecurity': '🔒',
        'programming': '💻',
        'fitness': '🏋️'
    };
    
    disciplines.forEach(discipline => {
        const categorySection = document.createElement('div');
        categorySection.className = 'resource-category';
        
        const categoryTitle = discipline.charAt(0).toUpperCase() + discipline.slice(1);
        const color = disciplineColors[discipline];
        const icon = disciplineIcons[discipline];
        
        categorySection.innerHTML = `
            <h3 class="category-title" style="color: ${color}; border-bottom-color: ${color};">${icon} ${categoryTitle} Resources</h3>
            <div class="resources-grid">
                ${appState.resources[discipline].map(resource => `
                    <div class="resource-card">
                        <div class="resource-header">
                            <span class="resource-icon">${resource.icon}</span>
                            <div>
                                <div class="resource-name">${resource.name}</div>
                            </div>
                        </div>
                        <div style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 0.5rem;">
                            <strong>Type:</strong> ${resource.type}
                        </div>
                        ${resource.url ? `
                            <a href="${resource.url}" target="_blank" class="btn btn-primary" style="margin-top: auto; background: ${color};">
                                <i class="fas fa-external-link-alt"></i> Visit Resource
                            </a>
                        ` : `
                            <div style="color: var(--text-light); font-size: 0.85rem; font-style: italic;">Resource available via course materials</div>
                        `}
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(categorySection);
    });
}

// Render Study Tips
function renderTips() {
    const container = document.getElementById('tips-container');
    container.innerHTML = '';
    
    appState.studyTips.forEach(tip => {
        const tipCard = document.createElement('div');
        tipCard.className = 'tip-card';
        tipCard.innerHTML = `
            <div class="tip-header">
                <span class="tip-icon">${tip.icon}</span>
                <div class="tip-title">${tip.title}</div>
            </div>
            <div class="tip-description">${tip.description}</div>
        `;
        container.appendChild(tipCard);
    });
}

// Update Progress Display
function updateProgressDisplay() {
    const totalPhases = appState.mathPhases.length + appState.cybersecurityStages.length + 
                        appState.programmingTracks.length + appState.fitnessLevels.length;
    const completedPhases = appState.mathPhases.filter(p => p.status === 'completed').length +
                           appState.cybersecurityStages.filter(p => p.status === 'completed').length +
                           appState.programmingTracks.filter(p => p.status === 'completed').length +
                           appState.fitnessLevels.filter(p => p.status === 'completed').length;
    const inProgressPhases = appState.mathPhases.filter(p => p.status === 'in_progress').length +
                            appState.cybersecurityStages.filter(p => p.status === 'in_progress').length +
                            appState.programmingTracks.filter(p => p.status === 'in_progress').length +
                            appState.fitnessLevels.filter(p => p.status === 'in_progress').length;
    const progressPercentage = Math.round((completedPhases / totalPhases) * 100);
    
    // Update overall progress bar
    const progressBar = document.getElementById('overall-progress-bar');
    const progressText = document.getElementById('overall-progress-text');
    const progressPercentageSpan = document.getElementById('progress-percentage');
    const completedPhasesMap = document.getElementById('completed-phases-map');
    
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
    }
    if (progressText) {
        progressText.textContent = `${progressPercentage}%`;
    }
    if (progressPercentageSpan) {
        progressPercentageSpan.textContent = progressPercentage > 5 ? `${progressPercentage}%` : '';
    }
    if (completedPhasesMap) {
        completedPhasesMap.textContent = completedPhases;
    }
    
    // Update hero progress
    const heroProgress = document.getElementById('hero-progress');
    if (heroProgress) {
        heroProgress.textContent = `${progressPercentage}%`;
    }
    
    // Update progress tracker stats
    if (document.getElementById('total-phases')) {
        document.getElementById('total-phases').textContent = totalPhases;
    }
    if (document.getElementById('completed-phases')) {
        document.getElementById('completed-phases').textContent = completedPhases;
    }
    if (document.getElementById('in-progress-phases')) {
        document.getElementById('in-progress-phases').textContent = inProgressPhases;
    }
    if (document.getElementById('total-hours-prog')) {
        document.getElementById('total-hours-prog').textContent = appState.studyStats.totalHours.toFixed(1);
    }
    
    // Render discipline progress bars
    const progressBarsContainer = document.getElementById('discipline-progress-bars');
    if (progressBarsContainer) {
        const disciplines = [
            { name: 'Mathematics', color: 'var(--color-math)', progress: calculateDisciplineProgress('math'), phases: appState.mathPhases },
            { name: 'Cybersecurity', color: 'var(--color-cyber)', progress: calculateDisciplineProgress('cyber'), phases: appState.cybersecurityStages },
            { name: 'Programming', color: 'var(--color-code)', progress: calculateDisciplineProgress('code'), phases: appState.programmingTracks },
            { name: 'Fitness', color: 'var(--color-fitness)', progress: calculateDisciplineProgress('fitness'), phases: appState.fitnessLevels }
        ];
        
        progressBarsContainer.innerHTML = disciplines.map(disc => `
            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <strong style="color: ${disc.color};">${disc.name}</strong>
                    <span>${disc.progress}% (${disc.phases.filter(p => p.status === 'completed').length}/${disc.phases.length} phases)</span>
                </div>
                <div class="progress-bar" style="height: 25px;">
                    <div style="height: 100%; background: ${disc.color}; width: ${disc.progress}%; transition: width 0.5s ease; border-radius: 15px; display: flex; align-items: center; justify-content: flex-end; padding-right: 0.75rem; color: white; font-weight: 600; font-size: 0.85rem;">
                        ${disc.progress > 5 ? disc.progress + '%' : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Render phase progress details
    const detailsContainer = document.getElementById('phase-progress-details');
    if (detailsContainer) {
        detailsContainer.innerHTML = appState.mathPhases.map(phase => `
            <div style="margin-bottom: 1.5rem; display: none;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <strong>${phase.name}</strong>
                    <span class="phase-status status-${phase.status.replace('_', '-')}" style="font-size: 0.8rem; padding: 0.2rem 0.6rem;">
                        ${phase.status === 'not_started' ? 'Not Started' : phase.status === 'in_progress' ? 'In Progress' : 'Completed'}
                    </span>
                </div>
                <div class="progress-bar" style="height: 20px;">
                    <div class="progress-fill" style="width: ${phase.progress}%; font-size: 0.8rem;">
                        ${phase.progress > 10 ? phase.progress + '%' : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Study Session Logging
function logStudySession() {
    const hours = prompt('How many hours did you study today?', '2');
    if (hours && !isNaN(hours)) {
        appState.studyStats.totalHours += parseFloat(hours);
        
        // Update streak
        const today = new Date().toDateString();
        if (appState.studyStats.lastStudyDate !== today) {
            appState.studyStats.streak += 1;
            appState.studyStats.lastStudyDate = today;
        }
        
        // Update display
        if (document.getElementById('total-hours')) {
            document.getElementById('total-hours').textContent = appState.studyStats.totalHours.toFixed(1);
        }
        if (document.getElementById('total-hours-prog')) {
            document.getElementById('total-hours-prog').textContent = appState.studyStats.totalHours.toFixed(1);
        }
        if (document.getElementById('total-hours-dash')) {
            document.getElementById('total-hours-dash').textContent = appState.studyStats.totalHours.toFixed(1);
        }
        if (document.getElementById('study-streak')) {
            document.getElementById('study-streak').textContent = appState.studyStats.streak;
        }
        if (document.getElementById('streak-days-dash')) {
            document.getElementById('streak-days-dash').textContent = appState.studyStats.streak;
        }
        
        renderDashboard();
        
        alert(`Great work! You've logged ${hours} hours of study. Keep up the momentum!`);
    }
}

// Dark Mode Toggle
function toggleDarkMode() {
    const isDark = document.getElementById('dark-mode-toggle').checked;
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

function checkDarkModePreference() {
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById('dark-mode-toggle').checked = true;
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// Motivational messages
function getMotivationalMessage() {
    const messages = [
        "Every expert was once a beginner. Keep going! 💪",
        "Small daily improvements lead to stunning results. 🌟",
        "Your future self will thank you for today's effort. 🚀",
        "Discipline is choosing between what you want now and what you want most. 🎯",
        "The only bad workout is the one that didn't happen. Same for study sessions! 📚",
        "You're building a better version of yourself every single day. 🏆",
        "Consistency beats intensity. Show up today! ⭐",
        "Mind and body both growing stronger. Keep the balance! ⚖️"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

// Display motivational message on dashboard
function showMotivation() {
    const message = getMotivationalMessage();
    console.log('💡 Today\'s Motivation:', message);
}

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initApp();
        showMotivation();
    });
} else {
    initApp();
    showMotivation();
}
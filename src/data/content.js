export const siteData = {
  headline: 'Building fast, scalable web applications that deliver real business value.',
  subtitle: 'I\'m a frontend-leaning full-stack developer with 10 years of experience building production websites, e-commerce platforms, internal tools, and custom CMS solutions.',
  techBadges: [ 'JavaScript', 'React', 'Next.js', 'Laravel', 'WordPress','E-commerce'],
  cvUrl: '/VedranKovacevicCV.pdf',
}

export const aboutContent = {
  summary: 'My primary focus is building fast, intuitive, and maintainable user interfaces with React, Next.js, JavaScript, HTML, and CSS. Beyond the frontend, I develop full-stack applications using Laravel, PHP, SQL databases, and REST APIs, always aiming to write clean, scalable code that delivers a great user experience. I enjoy solving complex problems, collaborating with teams, and building software that is reliable, performant, and easy to maintain. Whether working independently or as part of a team, I take pride in creating solutions that balance technical quality with real business needs.',
  focus: [
    'Modern React & Next.js development',
    'Frontend architecture & UI engineering',
    'Laravel full-stack applications',
    'E-commerce platforms & user experience',
    'API integrations & application performance',
    'WordPress custom development',
  ],
}

export const skillsData = {
  frontend: ['HTML5', 'CSS3', 'Tailwind CSS', 'JS', 'React', 'Next.js', 'React Router', 'Redux Toolkit', 'Context API', 'Responsive Web Design'],
  backend: ['PHP', 'Laravel', 'Blade', 'Eloquent ORM', 'MVC Architecture', 'MySQL', 'REST API Development & Integration'],
  cmsTools: ['WordPress', 'Shopify', 'Webflow'],
  other: ['Git', 'GitHub', 'npm', 'Composer', 'Vite', 'Figma', 'Adobe Photoshop', 'Canva'],
}

export const projectsData = [
  {
    id: 4,
    title: 'DraftLens',
    description: 'A League of Legends desktop companion app currently in public beta, built to provide champion insights, matchup analysis, and build recommendations during champion select. This portfolio includes the promotional website for the project, while the application itself is being prepared for future monetization.',
    technologies: ['React', 'Laravel', 'PHP', 'Blade', 'MySQL', 'REST API', 'Electron', 'Tailwind CSS'],
    codeUrl: 'https://github.com/Veka85/draftlens.git',
    demoUrl: 'https://draftlensapp.com/',
  },
  {
    id: 5,
    title: 'EloCoach',
    description: 'A full-stack web application connecting League of Legends players with professional coaches. Built with Laravel 11 (REST API) and React 18 (Frontend) as a portfolio project demonstrating full-stack development.',
    technologies: [ 'React', 'Tailwind CSS', 'Laravel', 'REST API', 'MySQL'],
    codeUrl: 'https://github.com/Veka85/elocoach.git',
    demoUrl: 'https://elocoach.vedrankovacevic.com/',
  },
  {
    id: 6,
    title: 'TaskFlow',
    description: 'TaskFlow is a collaborative project management app inspired by Trello. Users can create boards, add lists (columns), create and drag-and-drop cards, assign members, add labels, write comments, and more.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Prisma + PostgreSQL', 'Axios + React Router + @dnd-kit', 'JWT auth' ],
    codeUrl: 'https://github.com/Veka85/taskflow.git',
    demoUrl: 'https://taskflow.vedrankovacevic.com',
  },
  {
    id: 1,
    title: 'lenus.ba',
    description: 'Full corporate website for Lenus, built on WordPress with a custom theme. Includes tailored page templates, content management, and responsive layouts.',
    technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    codeUrl: '',
    demoUrl: 'https://lenus.ba',
  },
  {
    id: 2,
    title: 'conexa.ba',
    description: 'Marketing website for Conexa, hand-coded from scratch. Focused on performance, clean markup, and pixel-perfect design implementation.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    codeUrl: '',
    demoUrl: 'https://conexa.ba',
  },
  {
    id: 3,
    title: 'aserta.ba',
    description: 'Corporate website for Aserta Accounting Agency featuring custom functionality, responsive layouts, and performance optimization.',
    technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    codeUrl: '',
    demoUrl: '#',
  },
]

export const blogData = [
  {
    id: 6,
    title: 'Understanding WordPress Interactivity API (And Why It Matters)',
    excerpt: 'How WordPress 7.0 Interactivity API enables app-like UX, faster transitions, and better performance without heavy front-end libraries.',
    slug: 'understanding-wordpress-interactivity-api-and-why-it-matters',
    date: '2026-02-18',
    tag: 'WordPress',
  },
  {
    id: 5,
    title: 'Understanding State in React (Without the Confusion)',
    excerpt: 'A practical, beginner-friendly explanation of React state and why mastering it early makes everything easier.',
    slug: 'understanding-state-in-react-without-the-confusion',
    date: '2026-04-09',
    tag: 'React',
  },
  {
    id: 4,
    title: 'Understanding WordPress REST API: POST, GET, DELETE & Security',
    excerpt: 'How WordPress REST API handles GET, POST, and DELETE requests, plus practical security best practices for real projects.',
    slug: 'understanding-wordpress-rest-api-post-get-delete-security',
    date: '2026-06-27',
    tag: 'WordPress',
  },
]

export const blogPostsContent = {
  'understanding-wordpress-interactivity-api-and-why-it-matters': {
    title: 'Understanding WordPress Interactivity API (And Why It Matters)',
    date: '2026-02-18',
    tag: 'WordPress',
    intro: "The Interactivity API is a massive shift in how we think about the front end of WordPress. For a long time, if you wanted a site to feel fast and reactive like a modern app, you usually had to load heavy external libraries.",
    intro2: 'With the Interactivity API now standard in WordPress 7.0, those app-like features are becoming native to the core experience.',
    sections: [
      {
        heading: 'Why this matters',
        paragraphs: [
          'It provides a standard way for developers to add interactive elements to blocks without reinventing the wheel every time. Here is why this matters for the average site owner:',
        ],
        notes: [
          'Instant Page Transitions: Client-side navigation updates only the content area while header and footer stay in place, reducing white flash between loads.',
          'Real-time Feedback: Add to Cart buttons, search filters, and live counters can update immediately without full page refreshes.',
          'Better Performance: Because it is built into WordPress, it loads only the JavaScript needed for interactive parts, helping Core Web Vitals.',
          'Consistency: Instead of multiple plugins loading overlapping scripts, everything can run through one optimized framework.',
        ],
      },
      {
        heading: 'Developer experience improvements',
        paragraphs: [
          'From a developer perspective, it uses a declarative system. You add directives directly to HTML, similar to modern tools like Alpine.js, which makes code easier to maintain than old-school jQuery patterns.',
        ],
      },
      {
        heading: 'The bigger result',
        paragraphs: [
          'The result is a WordPress that feels less like a series of static documents and more like a fluid, high-performance application.',
          'Are you noticing more instant interactions on the sites you build, or are you still relying on traditional page reloads?',
        ],
      },
    ],
  },
  'understanding-state-in-react-without-the-confusion': {
    title: 'Understanding State in React (Without the Confusion)',
    date: '2026-04-09',
    tag: 'React',
    intro: 'One of the core ideas in React is state, and once it clicks, everything else gets much easier.',
    intro2: 'In simple terms, state represents data that can change over time. Unlike regular variables, when state changes, React automatically re-renders the UI so the user sees the updated result. That is the magic.',
    sections: [
      {
        heading: 'Think of state as the memory of a component',
        notes: [
          'Is a button clicked or not?',
          'Is a modal open?',
          'What value did the user type into an input?',
          'Which item is selected?',
          'All of that belongs in state.',
        ],
      },
      {
        heading: 'A key rule to remember',
        paragraphs: [
          'You never change state directly.',
          'Instead, you tell React what the new state should be, and React handles the update and re-render for you. This keeps the UI predictable and avoids bugs that are hard to track down.',
        ],
      },
      {
        heading: 'Another important concept',
        paragraphs: [
          'State is local by default. Each component owns its own state unless you intentionally share it. This encourages cleaner design and better separation of concerns.',
        ],
      },
      {
        heading: 'Why this matters early',
        paragraphs: [
          'If you are learning React, mastering state early will save you a lot of frustration later. Almost every interactive feature - forms, filters, toggles, loading indicators - is built on top of it.',
        ],
      },
    ],
  },
  'understanding-wordpress-rest-api-post-get-delete-security': {
    title: 'Understanding WordPress REST API: POST, GET, DELETE & Security',
    date: '2026-06-27',
    tag: 'WordPress',
    intro: "In today's fast-moving web development landscape, REST APIs are the backbone of data-driven applications. WordPress, traditionally known for blogging and CMS, has matured into a powerful application framework with its REST API. Whether you're building a headless front-end or integrating external apps, understanding how to interact with and secure the REST API is crucial.",
    intro2: "In this post, we'll dive into how the WordPress REST API handles POST, GET, and DELETE requests, and most importantly, how to keep your API endpoints secure.",
    sections: [
      {
        heading: 'What is the WordPress REST API?',
        paragraphs: [
          'The WordPress REST API allows developers to access and manipulate WordPress content and settings using HTTP requests. It uses standard HTTP methods - GET, POST, PUT/PATCH, and DELETE - to interact with site data.',
        ],
      },
      {
        heading: 'GET - Fetching Data',
        paragraphs: [
          'GET requests are used to retrieve posts, users, media, or any custom content type. Example:',
        ],
        code: 'GET https://example.com/wp-json/wp/v2/posts',
        notesHeading: 'Security Note:',
        notes: [
          'GET requests are publicly accessible by default for most post types.',
          'Always validate and sanitize any parameters (like ?search=, ?slug=, ?author=) to prevent abuse.',
        ],
      },
      {
        heading: 'POST - Creating Data',
        paragraphs: [
          'POST requests allow you to create content, such as a new blog post.',
        ],
        notesHeading: 'Requirements:',
        notes: [
          'Authenticated request (usually via Application Passwords, OAuth, or JWT)',
          'Proper permissions (for example, only users with edit_posts can create posts)',
        ],
      },
      {
        heading: 'DELETE - Removing Data',
        paragraphs: [
          'To delete a post, use a DELETE request:',
        ],
        code: 'DELETE https://example.com/wp-json/wp/v2/posts/123',
        notesHeading: 'Note:',
        notes: [
          'Requires authentication',
          'By default, items are moved to trash unless ?force=true is added',
        ],
      },
      {
        heading: 'Security Best Practices',
        subsections: [
          {
            heading: '1. Authentication & Authorization',
            paragraphs: ['Use strong methods for authentication:'],
            notes: [
              'Application Passwords (built into WordPress 5.6+)',
              'JWT Authentication (plugin-based, better for headless apps)',
              'OAuth (advanced use)',
              "Make sure users only access what they're authorized to.",
            ],
          },
          {
            heading: '2. Restrict Access to Sensitive Routes',
            paragraphs: [
              "If you're creating custom endpoints, use permission_callback:",
            ],
            code: "register_rest_route('myplugin/v1', '/secure-data', array( 'methods' => 'GET', 'callback' => 'my_callback', 'permission_callback' => function () { return current_user_can('manage_options'); } ));",
          },
          {
            heading: '3. Nonce Verification (for Front-End JS Calls)',
            paragraphs: [
              "Use wp_create_nonce('wp_rest') and pass it via headers:",
            ],
            code: "fetch('/wp-json/myplugin/v1/secure-data', { headers: { 'X-WP-Nonce': myLocalizedScript.nonce } });",
            notes: [
              "Then verify with check_ajax_referer('wp_rest') or wp_verify_nonce() on the server.",
            ],
          },
          {
            heading: '4. Rate Limiting & Logging',
            paragraphs: [
              'Implement rate limiting with a plugin or custom logic to avoid brute-force or spam. Also, log REST requests for auditing and debugging.',
            ],
          },
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          "The WordPress REST API unlocks incredible flexibility, but with great power comes the responsibility of securing your endpoints. Always authenticate, authorize, validate, and sanitize every request, and do not expose more than you need.",
        ],
      },
    ],
  },
}

export const socialLinks = {
  github: 'https://github.com/Veka85',
  linkedin: 'https://www.linkedin.com/in/vedran-kovacevic-bl/',
}

export const contactMessage = {
  headline: "Let's work together",
  text: "I'm open to new opportunities and collaborations. Drop me a message—I typically respond within 24 hours.",
}

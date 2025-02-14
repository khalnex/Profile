// gitprofile.config.js

const config = {
  github: {
    username: 'khalnex', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'kmotala1',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '905-650-9135',
    email: 'khaleel.motala@gmail.com',
  },
  resume: {
    fileUrl:
      'https://1drv.ms/b/s!ArX0V4KqjQO0g7x5Kh7HSmArczjbiA?e=vzaGTm', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SQL',
    'Tableau',
    'PowerBI',
    'Excel',
    'Python',
  ],
  experiences: [
    {
      company: 'PFF',
      position: 'Data Analyst',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://www.pff.com',
    },
    {
      company: 'Springboard',
      position: 'Data Analytics Fellow',
      from: 'April 2023',
      to: 'August 2023',
      companyLink: 'https://www.springboard.com',
    },    
    {
      company: 'AECOM',
      position: 'Environmental Planner',
      from: 'April 2020',
      to: 'August 2020',
      companyLink: 'https://aecom.com',
    },
    {
      company: 'TD Merchant Services',
      position: 'On-site Technician',
      from: 'November 2019',
      to: 'April 2020',
      companyLink: 'https://www.td.com/ca/en/business-banking/small-business/payment-options/processing-solutions',
    },
    {
      company: 'Brock University',
      position: 'Hydrology Research Intern',
      from: 'May 2018',
      to: 'September 2018',
      companyLink: 'https://brocku.ca',
    },    
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Toronto',
      degree: 'Bachelor of Science',
      from: '2012',
      to: '2017',
    },
    {
      institution: 'Springboard',
      degree: 'Data Analytics Bootcamp',
      from: '2023',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)

  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;

# Inquisitors-Web-Development
Inquisitors Society Website

A 3D, responsive website for the Inquisitors Society at the University of Engineering and Technology (UET), Lahore. It presents what the society does, the events it has run since August 2025, and its 2026 internship program.

It was built with plain HTML, CSS and JavaScript, plus three.js for the 3D scene. There is no build step and no framework.

What I built
A full-screen 3D scene behind the whole page: a glowing low-poly core with an inner gem, two orbiting rings, a particle field and a grid floor.
Scroll-driven 3D motion. The core rotates and moves as you scroll, and the camera follows the mouse.
A visual style based on a reference design: near-black background, cyan accent, cut-corner cards and buttons, and the Space Grotesk typeface.
A hero section, count-up statistics, and a "What we do" section with four pillars: competitions, career prep, ideas and culture, and community.
An events section with 21 events and weekly series, filterable by Competitions, Career, Culture and Community.
An internship section covering the 2026 program (389 interns, 8 weeks, AI, graphic design and web development tracks) and the documents interns receive.
A contact section with the society's email, phone number and address.
Card tilt on hover for mouse users.
Tech stack
Part	Tool
Structure	HTML5
Styling	CSS3 (custom properties, grid, flexbox, clip-path)
Logic	Vanilla JavaScript
3D	three.js r128 (bundled locally)
Font	Space Grotesk (Google Fonts, with system fallback)
Project structure
.
├── index.html
├── README.md
└── assets
    ├── css
    │   └── style.css       # all styling and the color tokens
    └── js
        ├── main.js         # event data, filters, count-up, 3D scene
        └── three.min.js    # three.js r128
Run locally
Clone or download this repository.
Open the folder in VS Code.
Install the Live Server extension, then right-click index.html and choose Open with Live Server.

Opening index.html directly in a browser also works. Three.js is included in assets/js, so the 3D scene runs without an internet connection. Only the font needs internet.

Customize
Colors: edit the variables under :root at the top of assets/css/style.css.
Events: edit the E array in assets/js/main.js. Each entry is [category, date, title, attendance, description].
Statistics: change the data-n values on the .n elements in index.html.
Contact details: edit the contact section in index.html.
Deploy with GitHub Pages
Push the project to a GitHub repository.
Go to Settings → Pages.
Under Build and deployment, choose Deploy from a branch, select main and the / (root) folder, then save.
Your site will be live at https://<your-username>.github.io/<repository-name>/.
Accessibility and performance
Responsive layout from phone to desktop.
Visible keyboard focus on links and buttons.
Animations are turned off for visitors who set "reduce motion" in their system.
The pixel ratio of the 3D canvas is capped at 2 to keep it smooth on phones.
If WebGL is unavailable, the page falls back to a plain gradient background and all content still works.
Content sources

The event details and internship information come from the society's official event reports and internship documents. Individual intern names and photos are not included on the site.

Contact

Inquisitors Society, UET Lahore, Pakistan Email: inquisitorssociety@gmail.com Phone: +92-309-6888664 Website: www.inquisitorssociety.com

Author

Built by [Muhammad Usman] for the Inquisitors Society.


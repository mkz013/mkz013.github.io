
## Features

- **Filterable project grid** — browse projects by category (AI & Voice, Security Engineering, Web Development, Penetration Testing, Mobile Security)
- **Custom design system** — consistent color tokens and typography scale defined via CSS variables in `index.css`
- **Responsive layout** — mobile-first design with adaptive grid layouts for larger screens
- **Direct contact and CV access** — GitHub, email, and downloadable CV linked from the hero section

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
git clone https://github.com/mkz013/[ePortfolio].git
cd [ePortfolio]
npm install
```

### Development

```bash
npm run dev
```

Runs the app locally at `http://localhost:5173` with hot module reloading.

### Build

```bash
npm run build
```

Outputs a production-ready build to the `dist/` folder.

### Preview production build

```bash
npm run preview
```

## Adding a New Project

Edit `src/data/projects.ts` and add a new entry following the existing shape (title, category, year, description, details, techStack, githubLink, liveLink, isStudentProject).

## Customization

Site-wide text (name, title, intro, availability, contact links) lives in `src/data/site.ts` — update this file to change hero content without touching component code.

Color palette and spacing tokens are defined as CSS custom properties in `src/index.css` under `:root`, making theme adjustments centralized and consistent across all sections.

## Contact

- **Email:** ochisorantonie@gmail.com
- **GitHub:** [github.com/mkz013](https://github.com/mkz013)
- **LinkedIn:** [linkedin.com/in/mkz013](https://www.linkedin.com/in/mkz013)

## License

This project is personal portfolio code. Feel free to reference the structure, but please don't reuse personal content or assets directly.
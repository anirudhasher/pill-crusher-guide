# Pill Crusher Guide
[![Netlify Status](https://api.netlify.com/api/v1/badges/1f2d0f43-9010-49a2-a4b8-47956788a672/deploy-status)](https://app.netlify.com/sites/pill-crush-guide/deploys)

A web application that helps users determine which medications can be safely crushed for patients who have difficulty swallowing pills.

## Features

- Search for medications by name or brand
- Visual indicators for safe/unsafe crushing
- Detailed information about each medication
- Alternative medication suggestions
- Multilingual support (English and Hindi)
- Responsive design for all devices

## Tech Stack

- [Astro](https://astro.build/) - Web framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [ShadCN UI](https://ui.shadcn.com/) - UI components
- [Intro.js](https://introjs.com/) - Interactive guides and disclaimers
- Custom i18n implementation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/
│   └── images/
│       └── pills/
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── PillCard.astro
│   │   └── SearchBar.astro
│   ├── data/
│   │   └── pills.ts
│   ├── i18n/
│   │   ├── messages/
│   │   │   ├── en.json
│   │   │   └── hi.json
│   │   ├── ui.ts
│   │   └── utils.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   └── pill/
│   │       └── [id].astro
│   ├── scripts/
│   │   └── disclaimer.js
│   └── styles/
│       └── globals.css
└── package.json
```

## For Backend Users: Adding New Pills

To add a new pill to the database, follow these steps:

1. **Create the SVG image for the pill**:
   - Create a new SVG file in the `public/images/pills/` directory
   - Use the following templates based on whether the pill can be crushed or not:

   **Safe to Crush Template (Green):**
   ```svg
   <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
     <rect width="200" height="200" fill="#22c55e" rx="20" ry="20" />
     <circle cx="100" cy="100" r="70" fill="white" opacity="0.8" />
     <text x="100" y="90" font-family="Arial" font-size="16" text-anchor="middle" fill="#166534">
       Medication Name
     </text>
     <text x="100" y="110" font-family="Arial" font-size="16" text-anchor="middle" fill="#166534">
       Dosage
     </text>
     <text x="100" y="140" font-family="Arial" font-size="14" text-anchor="middle" fill="#166534">
       Safe to Crush
     </text>
   </svg>
   ```

   **Do Not Crush Template (Red):**
   ```svg
   <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
     <rect width="200" height="200" fill="#ef4444" rx="20" ry="20" />
     <circle cx="100" cy="100" r="70" fill="white" opacity="0.8" />
     <text x="100" y="90" font-family="Arial" font-size="16" text-anchor="middle" fill="#7f1d1d">
       Medication Name
     </text>
     <text x="100" y="110" font-family="Arial" font-size="16" text-anchor="middle" fill="#7f1d1d">
       Dosage
     </text>
     <text x="100" y="140" font-family="Arial" font-size="14" text-anchor="middle" fill="#7f1d1d">
       Do Not Crush
     </text>
   </svg>
   ```

   - Replace "Medication Name" and "Dosage" with the actual medication name and dosage
   - Save the file with a URL-friendly name, e.g., `medication-name.svg`

2. **Add the pill data to `src/data/pills.ts`**:
   - Open the `src/data/pills.ts` file
   - Add a new entry to the `pills` array following this format:

   ```typescript
   {
     id: "medication-name-dosage", // URL-friendly ID (used in the URL)
     name: {
       en: "Medication Name (English)",
       hi: "दवा का नाम (Hindi)"
     },
     brand: {
       en: "Brand Name (English)",
       hi: "ब्रांड नाम (Hindi)"
     },
     canCrush: true, // true if safe to crush, false if not
     image: "/images/pills/medication-name.svg", // Path to the SVG image you created
     notes: {
       en: "Any special notes about crushing this medication (English)",
       hi: "इस दवा को कुचलने के बारे में कोई विशेष नोट्स (Hindi)"
     },
     alternatives: {
       en: "Alternative medications or forms (English)",
       hi: "वैकल्पिक दवाएं या रूप (Hindi)"
     }
   }
   ```

3. **IMPORTANT: Ensure consistency between the SVG and data**:
   - The `canCrush` value in the data must match the SVG image (green for true, red for false)
   - The text in the SVG should match the medication name and dosage

4. **Test your changes**:
   - Run the development server with `npm run dev`
   - Verify that the new pill appears in the list and displays correctly
   - Check that the pill detail page works and shows the correct information

## Adding Translations for a New Language

To add translations for a new language:

1. **Update the language configuration**:
   - In `src/i18n/utils.ts`, add the new language to the `languages` object:
     ```typescript
     export const languages = {
       en: 'English',
       hi: 'हिन्दी',
       es: 'Español', // Add your new language
     };
     ```

2. **Create a new message file**:
   - Create a new JSON file in `src/i18n/messages/` named after the language code (e.g., `es.json`)
   - Copy the structure from `en.json` and translate all values

3. **Update the UI translations**:
   - In `src/i18n/ui.ts`, add the new language section with all required translation keys:
     ```typescript
     export const ui = {
       en: {
         // English translations
       },
       hi: {
         // Hindi translations
       },
       es: {
         'site.title': 'Guía para Triturar Píldoras',
         'site.description': 'Descubra si su medicamento puede triturarse de forma segura',
         // Add all other translation keys
       }
     };
     ```

4. **Update pill data**:
   - In `src/data/pills.ts`, add translations for the new language to each pill:
     ```typescript
     {
       id: "paracetamol-500mg",
       name: {
         en: "Paracetamol 500mg",
         hi: "पैरासिटामोल 500मिग्रा",
         es: "Paracetamol 500mg" // Add Spanish translation
       },
       // Add translations for other fields
     }
     ```

5. **Update the project configuration**:
   - In `project.inlang.json`, add the new language code to the `languageTags` array

## Warning

This application is for educational purposes only. Always consult with a healthcare professional before crushing any medication. The creators of this application are not responsible for any health issues that may arise from using the information provided.

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

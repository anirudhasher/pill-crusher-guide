# Pill Crusher Guide

<div align="center">
  <img src="public/images/logo.png" alt="Pill Crusher Guide Logo" width="200"/>
  <h3>A multilingual guide to safely crushing medications</h3>
  
  [![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-id/deploy-status)](https://app.netlify.com/sites/pill-crusher-guide/deploys)
  ![License](https://img.shields.io/badge/license-MIT-blue)
  ![Astro](https://img.shields.io/badge/Astro-3.x-orange)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC)
</div>

## 🌟 Overview

The **Pill Crusher Guide** is a comprehensive, multilingual web application designed to help healthcare professionals, caregivers, and patients determine whether specific medications can be safely crushed or split. Improper crushing of certain medications can lead to serious health risks, and this tool aims to provide clear, accessible information to prevent such issues.

## 🚀 Features

- **Comprehensive Medication Database**: Information on a wide range of medications and whether they can be safely crushed
- **Multilingual Support**: Available in English, Hindi, and Tamil
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Search Functionality**: Quickly find specific medications
- **Detailed Information**: Includes alternative options for medications that cannot be crushed
- **Accessibility**: Designed with accessibility in mind for all users

## 🔧 Tech Stack

- **[Astro](https://astro.build/)**: Fast, modern static site generator
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[ShadCN UI](https://ui.shadcn.com/)**: Beautiful, accessible UI components
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Netlify](https://www.netlify.com/)**: Hosting and serverless functions

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or pnpm

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pill-crusher-guide.git
   cd pill-crusher-guide
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## 🌐 Internationalization

The application supports multiple languages through a custom i18n implementation:

- English (en)
- Hindi (hi)
- Tamil (ta)

To add a new language:

1. Create a new JSON file in `src/i18n/messages/` following the existing pattern
2. Add the language to the `languages` object in `src/i18n/utils.ts`
3. Update the language selector component

## 📊 Data Structure

Medication data is stored in `src/data/pills.json` and follows this structure:

```typescript
interface Pill {
  id: string;
  name: {
    en: string;
    hi: string;
    ta?: string;
    [key: string]: string | undefined;
  };
  brand: {
    en: string;
    hi: string;
    ta?: string;
    [key: string]: string | undefined;
  };
  canCrush: boolean;
  image: string;
  notes?: {
    en: string;
    hi: string;
    ta?: string;
    [key: string]: string | undefined;
  };
  alternatives?: {
    en: string[];
    hi: string[];
    ta?: string[];
    [key: string]: string[] | undefined;
  };
}
```

## 🚢 Deployment

The site is configured for easy deployment to Netlify:

1. Connect your GitHub repository to Netlify
2. Set the build command to `npm run build` or `pnpm build`
3. Set the publish directory to `dist`
4. Deploy!

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

The information provided by the Pill Crusher Guide is for educational purposes only. Always consult with a healthcare professional before crushing or altering any medication. The creators of this application are not responsible for any misuse or misinterpretation of the information provided.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

Project Link: [https://github.com/yourusername/pill-crusher-guide](https://github.com/yourusername/pill-crusher-guide)

---

<div align="center">
  Made with ❤️ for better healthcare
</div>

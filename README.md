# ثروات | Tharwat

<div align="center">

![Tharwat Logo](public/logo.png)

**منصة رقمية لشركة ثروات للطاقة الحيوية**

*A digital platform for Tharwat Bioenergy Company*

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)

</div>

---

## 📋 عن المشروع | About

ثروات هي شركة ناشئة تسعى إلى قيادة قطاع الطاقة من خلال الابتكار في مجال الوقود الحيوي المستدام المستخلص من النخيل.

Tharwat is a startup aiming to become a leader in the energy sector, driving innovation and shaping the future of global energy solutions through sustainable palm-based biofuel.

---

## ✨ المميزات | Features

- 🎠 **Hero Slider** — سلايدر تفاعلي مع شريط تقدم مخصص
- 🌿 **قسم الاستدامة** — Climate, People & Biodiversity initiatives
- 🃏 **بطاقات تفاعلية** — Discover Tharwat section with card carousel
- 📋 **نموذج طلب إزالة النخيل** — Palm tree removal request form
- 📱 **تصميم متجاوب** — Fully responsive (mobile, tablet, desktop)
- 🎨 **أنيميشن سلس** — Powered by Framer Motion

---

## 🛠️ التقنيات المستخدمة | Tech Stack

| التقنية | الإصدار | الاستخدام |
|---------|---------|-----------|
| [Next.js](https://nextjs.org) | 14.2.8 | React Framework |
| [TypeScript](https://www.typescriptlang.org) | 5.5 | Type Safety |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Styling |
| [Framer Motion](https://www.framer.com/motion) | 11.5 | Animations |
| [Splide.js](https://splidejs.com) | 4.1 | Sliders & Carousels |
| [shadcn/ui](https://ui.shadcn.com) | — | UI Components |
| [React Hook Form](https://react-hook-form.com) | 7.53 | Form Handling |
| [Zod](https://zod.dev) | 3.23 | Form Validation |
| [React Icons](https://react-icons.github.io) | 5.3 | Icons |

---

## 🚀 تشغيل المشروع | Getting Started

### المتطلبات | Prerequisites
- [Node.js](https://nodejs.org) v18 أو أحدث
- [pnpm](https://pnpm.io) أو npm

### خطوات التثبيت | Installation

```bash
# استنساخ المشروع
git clone https://github.com/YOUR_USERNAME/Tharwat.git

# الدخول إلى مجلد المشروع
cd Tharwat

# تثبيت الحزم
pnpm install
# أو
npm install

# تشغيل بيئة التطوير
pnpm dev
# أو
npm run dev
```

افتح المتصفح على [http://localhost:3000](http://localhost:3000)

---

## 📁 هيكل المشروع | Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   └── removal-request/        # Palm removal request page
│       ├── page.tsx
│       └── RemovalRequestForm.tsx
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   ├── MobileNavbar.tsx        # Mobile navigation
│   ├── Footer.tsx              # Footer
│   ├── homePage/
│   │   ├── Hero.tsx            # Hero slider section
│   │   ├── DiscoverSection.tsx # Cards carousel
│   │   ├── SustainabilitySection.tsx
│   │   ├── OrderSection.tsx
│   │   └── AboutUs.tsx
│   └── ui/                     # shadcn/ui components
├── constants/
│   └── index.ts                # Static data & content
└── lib/
    └── utils.ts                # Utility functions
```


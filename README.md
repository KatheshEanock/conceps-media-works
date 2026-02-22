# Concepts Media Works - Technical Assignment

A modern, responsive web application built with Vite React featuring authentication, product management, user management, and a comprehensive dashboard. This project demonstrates best practices in front-end development using HTML5, CSS3 (Flexbox/Grid), and React.

## Features

### Core Screens

1. **Sign In / Sign Up** - Authentication pages with OAuth options (Google, Apple)
2. **OTP Verification** - Phone verification with 6-digit OTP input
3. **Registration Form** - Multi-field form with validations and dropdown menus
4. **Dashboard** - Analytics dashboard with charts, metrics, and team management
5. **Product List** - Grid view with 8+ Nike products, search, filtering, and pagination
6. **Product Details Modal** - Product information with pricing and specifications
7. **User Management** - Table view with employee data and pagination
8. **Sidebar Navigation** - Navigation menu with active state indicators

### Bonus Features

- Responsive design (Mobile, Tablet, Desktop)
- Dark theme support ready
- Charts using Recharts library
- Form validation with react-hook-form and zod
- CSS variables for theme customization
- Pure CSS3 with Flexbox and CSS Grid layouts
- Mock data with 12+ products and 8 users

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Routing**: React Router v6
- **Charts**: Recharts 2.15.0
- **Icons**: React Icons
- **CSS**: Pure CSS3 (Flexbox & Grid)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Button.jsx       # Primary button component
│   ├── Input.jsx        # Input field component
│   ├     # Navigation sidebar
│   └── *.css            # Component styles
├── pages/               # Page components
│   ├── SignIn.jsx       # Sign in page
│   ├── SignUp.jsx       # Sign up page
│   ├── VerifyOTP.jsx    # OTP verification page
│   ├── Dashboard.jsx    # Dashboard with charts
│   ├── RegistrationForm.jsx  # Registration form
│   ├── ProductList.jsx  # Product listing page
│   ├── UserManagement.jsx    # User management table
│   └── *.css            # Page styles
├── lib/
│   ├── mockData.ts      # Mock products and users data
├── styles/
│   └── global.css       # Global styles and CSS variables
├── App.tsx              # Main app component with routing
├── main.tsx             # React entry point
└── vite-env.d.ts        # Vite type definitions
```

## Setup Instructions

### Prerequisites

- Node.js 16.0 or higher
- npm package manager

### Installation

1. **Clone or download the project**

   ```bash
   # If using Git
   git clone <repository-url>
   cd concepts-technical-assignment
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   The application will open at `http://localhost:5173`

4. **Build for production**

   ```bash
   pnpm build
   # or
   npm run build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   # or
   npm run preview
   ```

## Usage

### Navigation

- Start at `/signin` - Sign in page
- Navigate to `/signup` - Create new account
- `/verify-otp` - OTP verification screen
- `/dashboard` - Main dashboard with analytics
- `/registration` - Fill out registration form
- `/products` - Browse product catalog
- `/users` - View user management list

### Form Validation

All forms include:

- Email validation (must be valid email format)
- Password validation (minimum 8 characters with uppercase, lowercase, and numbers)
- Confirm password matching
- Required field validation
- Error messages below form fields

### Mock Data

- **Products**: 12 Nike shoes with pricing, ratings, and inventory
- **Users**: 8 team members across different departments

## Styling System

### CSS Variables

All colors, spacing, and typography are defined using CSS custom properties for easy theming:

```css
/* Colors */
--primary: #0052cc --background: #ffffff --text-primary: #111111
  /* Spacing Scale */ --spacing-1: 4px --spacing-2: 8px --spacing-4: 16px
  --spacing-6: 24px /* Typography */ --font-size-base: 16px
  --font-weight-medium: 500;
```

## Responsive Design

### Breakpoints

- **Mobile**: < 640px (single column, stacked layout)
- **Tablet**: 640px - 1024px (2 columns, adjusted components)
- **Desktop**: > 1024px (full multi-column layout)

All pages are fully responsive and optimized for touch interactions on mobile devices.

## Form Validation Examples

### Sign In Form

```javascript
email: valid email required
password: minimum 6 characters
rememberMe: optional boolean
```

### Sign Up Form

```javascript
email: valid email required
password: 8+ chars with uppercase, lowercase, numbers
confirmPassword: must match password
acceptTerms: must accept terms & conditions
```

### Registration Form

```javascript
fullName: 2+ characters required
email: valid email required
contactNumber: 10+ digits required
department: selection required
state: selection required
city: selection required
address: 5+ characters required
yearsOfExperience: at least one selection required
```

## Key Assumptions

1. **Authentication**: Uses localStorage for demo purposes (client-side only)
2. **API Integration**: Application uses mock data; no backend API calls
3. **OTP**: Countdown timer (37 seconds) for resend button
4. **Responsive**: Works on all modern browsers (Chrome, Firefox, Safari, Edge)
5. **Performance**: Optimized for fast load times with Vite bundler

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Lazy loaded components with React Router
- CSS Grid and Flexbox for efficient layouts
- Optimized images with proper sizing
- Minimal JavaScript bundle with Vite
- Responsive images that scale with viewport

## Accessibility Features

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management in modals
- Alt text for images
- Form field associations with labels
- Screen reader friendly content

## Submission Guidelines

This project includes:

- Clean and structured code following industry best practices
- Proper folder structure (component-based architecture)
- Reusable components throughout the application
- Form validation (basic level)
- Responsive design across all screen sizes
- User-friendly UI/UX matching design specifications
- HTML5, CSS3 (Flexbox/Grid), JavaScript/React

## Contact & Support

For questions or issues, please refer to the documentation or create an issue in the repository.

---

**Built for**: Concepts Media Works - Technical Assignment
**Date**: February 2026
**Duration**: 24 hours

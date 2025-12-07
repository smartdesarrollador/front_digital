# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Angular 17 web application for "One Digital" (iatecdigital.com) - a platform for managing courses, specializations, events, and business solutions. The project uses standalone components architecture (no NgModules) and integrates with a Laravel backend API at `https://back.iatecdigital.com`.

**Project Name**: `my-primer-proy-angular` (internal), `one_digital_v1` (widget sidebar reference)

## Development Commands

### Running the application
```bash
# Start development server (runs on http://localhost:4200/)
ng serve
# Or using npm
npm start
```

### Building
```bash
# Production build
ng build

# Development build with watch mode
ng build --watch --configuration development
# Or using npm
npm run watch
```

### Testing
```bash
# Run unit tests via Karma
ng test
# Or using npm
npm test
```

### Code generation
```bash
# Generate new component
ng generate component component-name

# Other generators available
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Architecture

### Routing Structure

The application has three main route hierarchies:

1. **Public Routes** (`/`) - VistaComponent layout
   - `/` - Landing page (InicioComponent)
   - `/cursos` - Courses listing
   - `/especialidades` - Specializations listing
   - `/detalle/:id/:curso_nombre` - Course/product detail pages
   - `/contacto` - Contact page
   - `/events` - Events listing
   - `/solucion` - Solutions page

2. **Admin Routes** (`/admin`) - AdminComponent layout
   - `/admin/dashboard` - Admin dashboard (requires AuthGuard)
   - `/admin/banners` - Banner management
   - `/admin/mision` - Mission/vision management
   - `/admin/carousel` - Carousel management
   - All admin routes are protected by AuthGuard

3. **Authentication Routes** (`/auth`)
   - `/auth/login` - Login page
   - `/auth/register` - Registration page
   - `/portal` - Portal landing page

### Component Organization

- `src/app/pages/` - Page components organized by route hierarchy
  - `vista/` - Public-facing pages (inicio, cursos, especialidades, contacto, evento, solucion, certificate)
  - `admin/` - Admin pages (dashboard, banners, carousel, mision)
  - `login/` - Authentication pages

- `src/app/shared/` - Shared UI components (navbar, footer, sidebar)

- `src/app/layout/` - Layout wrapper components (LayoutComponent, LayoutUnoComponent, LayoutDosComponent, LayoutTresComponent)

- `src/app/paginas/` - Additional feature pages (legacy admin functionality including contratacion, capacitaciones, denuncias, gestion, politicas)

### Services Architecture

Services are organized in `src/app/services/`:

- **Entity Services**: Handle CRUD operations for main entities
  - `empleador.service.ts` - Employer management
  - `trabajador.service.ts` - Worker management
  - `producto.service.ts` - Products (courses/specializations)
  - `evento.service.ts` - Events
  - `solucion.service.ts` - Solutions
  - `testimonio.service.ts` - Testimonials
  - `carousel.service.ts` - Carousel items
  - `mision.service.ts` - Mission/vision content

- **Banner Services**: Specialized services for different banner types
  - `banner-curso.service.ts`
  - `banner-especialidad.service.ts`
  - `banner-contacto.service.ts`
  - `banner-evento.service.ts`
  - `banner-solucion.service.ts`

- **Utility Services**:
  - `upload.service.ts` - File upload handling
  - `services/login/data.service.ts` - Authentication and user data
  - `services/localstorage/contrato-local-storage.service.ts` - LocalStorage operations
  - `permission.service.ts` - Permission management

### Authentication & Guards

Authentication uses JWT tokens stored in localStorage:

- `guards/auth.guard.ts` - Validates token existence, redirects to `/auth/login` if missing
- `guards/admin.guard.ts` - Admin-specific authorization
- `guards/empleador.guard.ts` - Employer role authorization
- `guards/trabajador.ts` - Worker role authorization

Token is stored as `localStorage.getItem('token')` after successful login.

### API Integration

Environment configuration is in `src/environments/`:
- `environment.ts` - Production config (points to `https://back.iatecdigital.com`)
- `environment.development.ts` - Development config

All API endpoints are centralized in the environment files. The backend is a Laravel API with endpoints for:
- Authentication (`/api/login`, `/api/register`)
- Products (`/api/productos/*`)
- Carousel (`/api/carousel/*`)
- Mission (`/api/mision/*`)
- Banners (`/api/banner_*/*`)
- Events (`/api/eventos/*`)
- Solutions (`/api/soluciones/*`)
- Contact emails (`/api/contacto`)
- Testimonials (`/api/testimonios`)

### Styling

The project uses **Tailwind CSS** with custom theme extensions:

- Custom colors: azul, celeste, amarillo, naranja, verde, rojo (with `_claro` light variants)
- Custom fonts: Roboto, Gloria Hallelujah
- Flowbite plugin integrated for UI components
- Custom animations (blob animation with 7s infinite loop)

Global styles configured in `angular.json` include:
- ngx-owl-carousel-o styles
- Animate.css
- AOS (Animate on Scroll)
- Slick carousel

### Key Dependencies

- **UI/UX**:
  - Tailwind CSS + Flowbite
  - Animate.css, AOS
  - ngx-owl-carousel-o, slick-carousel
  - FontAwesome icons

- **Data Visualization**: ApexCharts (ng-apexcharts)

- **Rich Text**: Quill editor (ngx-quill)

- **Utilities**:
  - SweetAlert2 - Alerts/modals
  - ngx-toastr - Toast notifications
  - ngx-clipboard - Clipboard operations
  - pdfmake - PDF generation
  - jwt-decode - JWT token decoding
  - jQuery - Required for slick-carousel

### Build Configuration

- **CommonJS Dependencies**: apexcharts, aos, sweetalert2, quill (allowed in angular.json)
- **Bundle Size Limits**:
  - Initial: 5MB max (warning at 5MB)
  - Component styles: 4KB max (warning at 2KB)
- **File Replacements**: Development mode swaps `environment.ts` with `environment.development.ts`

## Important Notes

- The project uses Angular 17's **standalone components** architecture - no `@NgModule` decorators in use (see `app.config.ts` for provider configuration)
- Main routing is defined in `app.routes.ts` using the Routes array
- The project has legacy module files (`app_.module.ts`, `app-routing_.module.ts`) which are not in use
- Test files are present in the `/test/angular/` directory for learning Angular concepts
- Contract generation functionality exists in `/paginas/admin/contratacion/contrato/` with multi-step processes (primer-proceso through duodecimo-proceso)

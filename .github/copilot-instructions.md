# AI Agent Instructions for PeliculasAPP

## Project Overview
This is an Ionic/Angular mobile application for browsing movies. The app follows a tab-based structure with movie listings, search, and favorites functionality.

## Key Architecture Patterns

### Services Layer
- **MoviesService** (`services/movies.service.ts`): Central service for movie API interactions
  - Uses environment config for API credentials
  - All API calls go through `ejecutarQuery<T>` method for consistent auth/language handling
  - Implements pagination for popular movies
  
- **DataLocalService** (`services/data-local.service.ts`): Manages local storage
  - Uses `@ionic/storage-angular` for persistent storage
  - Handles favorites management with optimistic UI updates

### Component Structure
- Organized in feature modules (tab1, tab2, tab3)
- Reusable slideshow components in `components/`
  - `slideshow-backdrop`: Full-width movie previews
  - `slideshow-poster`: Movie poster grid layout
  - `slideshow-pares`: Paired movie layout
- Detalle component for movie details view

### Data Flow
1. Movie data fetched through MoviesService
2. Displayed via slideshow components
3. Local favorites managed by DataLocalService
4. Toast notifications for user feedback

## Development Workflows

### Local Development
```bash
npm start  # Runs ng serve
```

### Building
```bash
npm run build  # Production build
ionic capacitor build android  # For Android
ionic capacitor build ios      # For iOS
```

### Key Dependencies
- Angular v20
- Ionic v8
- Capacitor v7
- @ionic/storage-angular for local storage
- Swiper for slideshow components

## Project-Specific Conventions

### Type Safety
- Use interfaces from `interfaces/interfaces.ts` for API responses
- Generic type parameter `<T>` used in service methods

### State Management
- Services maintain minimal state (e.g., `popularesPage` counter)
- Local storage used for persistence instead of complex state management

### Component Communication
- Services injected at root level for global access
- Components use async data patterns with Observables

### Navigation
- Tab-based primary navigation
- Push-based navigation for details views

## Common Gotchas
- Initialize storage in DataLocalService before use (see `init()` method)
- API responses include language parameters for localization
- Movie IDs must be handled as strings in comparisons
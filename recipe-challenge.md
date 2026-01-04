# Recipe Search & Collection Manager - React/TypeScript Challenge

## Overview
Build a recipe search and collection management application that demonstrates proficiency with modern React development tools and patterns. Users will be able to search for recipes, view detailed information, and maintain a personal collection with custom notes and ratings.

## Tech Stack Requirements
- **React** with **TypeScript**
- **TanStack Query** (React Query) - API data fetching and caching
- **TanStack Router** - File-based routing
- **Zod** - Schema validation
- **React Hook Form** - Form state management
- **TheMealDB API** - Free recipe API (no API key required)

## API Information
**Base URL:** `https://www.themealdb.com/api/json/v1/1/`

Key endpoints:
- Search by name: `search.php?s={query}`
- Get by ID: `lookup.php?i={id}`
- Random meal: `random.php`
- List categories: `categories.php`

## Core Features

### 1. Search Page (Home Route: `/`)
- Search input that queries recipes by name
- Display search results in a grid/list with:
  - Recipe thumbnail
  - Recipe name
  - Category
  - Area/cuisine
- Click on a recipe to navigate to its detail page
- Show loading states during API calls
- Handle empty states and errors gracefully

### 2. Recipe Detail Page (Route: `/recipe/$recipeId`)
- Display full recipe information:
  - Large image
  - Name, category, area
  - Instructions
  - Ingredients list with measurements
  - YouTube video link (if available)
- "Add to Collection" button that opens a form
- Indicate if recipe is already in collection

### 3. Add to Collection Form (Modal/Drawer)
Use React Hook Form + Zod for:
- **Personal Rating** (1-5 stars, required)
- **Notes** (textarea, optional, max 500 characters)
- **Tags** (optional, comma-separated)
- **Date Added** (auto-populated, readonly)

Validation requirements:
- Rating must be between 1-5
- Notes cannot exceed 500 characters
- Form should show validation errors inline

### 4. My Collection Page (Route: `/collection`)
- Display all saved recipes
- Show custom rating and notes preview
- Filter by rating (1-5 stars)
- Search within collection
- Delete recipes from collection
- Click to view full recipe details

## Technical Requirements

### TanStack Query
- Create custom hooks for API calls (`useRecipeSearch`, `useRecipeById`)
- Implement proper query keys for caching
- Use mutations for adding/removing from collection
- Show loading and error states using query status

### TanStack Router
- Set up file-based routing structure
- Implement route parameters for recipe detail page
- Use search params for search query persistence
- Implement navigation with proper type safety

### Zod
- Create schemas for:
  - API response validation (Meal object)
  - Collection form validation
  - Saved recipe data structure
- Export TypeScript types from Zod schemas
- Handle validation errors appropriately

### React Hook Form
- Integrate with Zod resolver
- Implement controlled form inputs
- Show real-time validation feedback
- Handle form submission with loading states

### State Management
- Use TanStack Query for server state
- Use React state or localStorage for collection persistence
- Consider using TanStack Router's search params for UI state

## Bonus Challenges (Optional)

1. **Advanced Filtering**
   - Filter by category, cuisine, or tags
   - Multi-select filters

2. **Sort Options**
   - Sort collection by date added, rating, or name

3. **Recipe Stats**
   - Show collection statistics (total recipes, average rating, etc.)

4. **Share Feature**
   - Generate shareable links for recipes

5. **Responsive Design**
   - Mobile-first approach
   - Touch-friendly interactions

6. **Optimistic Updates**
   - Immediate UI updates when adding/removing recipes

7. **Recipe Export**
   - Export collection as JSON

## Evaluation Criteria

- ✅ Correct implementation of all required libraries
- ✅ Type safety throughout the application
- ✅ Proper error handling and loading states
- ✅ Clean component architecture
- ✅ Validation working correctly
- ✅ Routing working with proper navigation
- ✅ Data caching and refetching behavior
- ✅ Code organization and readability
- ✅ User experience and interface design

## Getting Started Tips

1. Start with setting up TanStack Router and basic routes
2. Create Zod schemas for the API response
3. Build the search page with TanStack Query
4. Implement the detail page with route parameters
5. Create the collection form with React Hook Form + Zod
6. Build the collection page with filtering
7. Polish UI/UX and add error handling

## Resources

- [TanStack Query Docs](https://tanstack.com/query/latest)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [Zod Documentation](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [TheMealDB API](https://www.themealdb.com/api.php)

## Time Estimate
This challenge should take approximately 8-12 hours for an intermediate developer to complete the core features.

Good luck! 🚀
# REMWaste HR Frontend Redesign

This project involved redesigning a waste hire frontend page, focusing on a clean, maintainable, responsive UI/UX, and functionality preservation. The project was bootstrapped with Vite and uses React, TypeScript, React Query, Radix UI, and Tailwind CSS.

## Project Setup and Technologies

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with PostCSS and Autoprefixer)
- **State Management/Data Fetching**: React Query
- **UI Components**: Radix UI (for accessible and unstyled components)
- **Icons**: React Icons (specifically Font Awesome for header steps)

## Key Features and Improvements

### 1. Modern and Responsive UI/UX

- **Dark Mode**: The application is configured for a dark theme using Tailwind CSS's `darkMode: 'class'` strategy. It adapts to the user's system/browser dark mode preference.
- **Card-Based Layout**: Each skip size is presented in a distinct card, providing a clear and organized view.
- **Interactive Hover Effects**: Cards now include a subtle hover effect (scale and shadow) for better user feedback.
- **Modal for Details**: Detailed information for selected skips is displayed in a clean, accessible modal dialog powered by Radix UI.
- **Responsive Grid**: The layout of skip cards adapts dynamically across different screen sizes, from mobile to desktop.

### 2. Header Step Timeline

- **Multi-Step Progress Indicator**: A `HeaderStepTimeline` component was introduced to visually guide users through the process steps.
- **Professional Icons**: Each step in the timeline now features a relevant icon from the `react-icons` library, enhancing visual clarity and professionalism.
- **Improved Responsiveness**: The timeline is designed to be responsive, adapting its layout and hiding step names on smaller screens to prioritize space, while adjusting spacing on larger screens for better readability.

### 3. Code Structure and Maintainability

- **Component-Based Architecture**: The application is broken down into smaller, reusable React components (`WasteHirePage`, `SkipCard`, `SkipDetailsModal`, `HeaderStepTimeline`) for better organization and easier maintenance.
- **TypeScript**: Ensures type safety throughout the codebase, reducing runtime errors and improving code quality.
- **Centralized Data**: The waste data is extracted into a separate file (`src/data/wasteData.ts`), making it easier to manage and update.
- **Git Ignore**: A `.gitignore` file has been added to the project root to manage version control effectively by excluding unnecessary files like `node_modules` and build artifacts.

## Getting Started

To run the application locally, follow these steps:

1.  **Install Dependencies**:
    Navigate to the project root in your terminal and install the required Node.js packages:
    ```bash
    npm install
    ```

2.  **Start the Development Server**:
    Launch the application in development mode:
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173`.

3.  **Enable Dark Mode (Optional)**:
    To view the application in dark mode, ensure your operating system or browser settings are configured for a dark theme.

## Data Structure

The `src/types/waste.ts` file defines the `WasteData` interface:

```typescript
export interface WasteData {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
```

The `src/data/wasteData.ts` file contains the mock JSON data used for the application. Note that `imageUrl` is not used as per the user's request. Also, `postcode` is present in data but not displayed in the UI.

## Customization and Extension

-   **Styling**: Modify `tailwind.config.js` to adjust the color palette, fonts, or other design tokens. You can also directly apply Tailwind CSS classes in your components.
-   **Data Integration**: Replace the mock `wasteData` with actual API calls using React Query's `useQuery` hook.
-   **UI Components**: Further customize or extend the Radix UI components as needed.
-   **Header Steps**: Adjust the `steps` array in `src/components/WasteHirePage.tsx` to modify the timeline steps or their icons. 
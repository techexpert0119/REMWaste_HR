import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WasteHirePage from "./components/WasteHirePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <WasteHirePage />
      </div>
    </QueryClientProvider>
  );
}

export default App;

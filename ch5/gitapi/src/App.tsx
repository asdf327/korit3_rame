import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Repositories from './components/Repositories';

function App() {
  const queryClient = new QueryClient();  

  return (
    <QueryClientProvider client={queryClient}>
      <Repositories />
    </QueryClientProvider>
  );
}

export default App;

import './App.css';
import UseQueryDataFetching from './component/UseQueryDataFetching';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (    
    <div className="row"> 
      <div className="col-md-12">
        <div className="my-3">
          <QueryClientProvider client={queryClient}>
              <UseQueryDataFetching />
          </QueryClientProvider>          
        </div>
      </div>          
    </div>  
  );
}

export default App;

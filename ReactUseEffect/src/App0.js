import './App.css';
import UseQueryDataFetching1 from './component/UseQueryDataFetching0';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (    
    <div className="row"> 
      <div className="col-md-12">
        <div className="my-3">
          <QueryClientProvider client={queryClient}>
              <UseQueryDataFetching1 />
          </QueryClientProvider>          
        </div>
      </div>          
    </div>  
  );
}

export default App;

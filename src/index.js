import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root/Root';
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <QueryClientProvider client={queryClient} >
            <Root />
      </QueryClientProvider>
);
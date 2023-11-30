import React from "react";
import UsersContainer from "./users/UsersContainer";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UsersContainer />
    </QueryClientProvider>
  );
}

export default App;

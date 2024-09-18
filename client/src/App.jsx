import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCach } from '@apollo/client';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCach(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Outlet />
      </div>
    </ApolloProvider>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

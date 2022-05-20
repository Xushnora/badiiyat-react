import './App.scss';
import Category from './components/Category/Category';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Layout from './UI/Layout/Layout';

function App() {
  return (
    <Layout>
        <Header />
        <Hero />
        <Category />
    </Layout>
  );
}

export default App;

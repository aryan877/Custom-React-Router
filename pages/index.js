import Router from './Router';
import Link from './Link';

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Router
        routes={[
          { path: '/', component: <Home /> },
          { path: '/about', component: <About /> },
          { path: '/contact', component: <Contact /> },
        ]}
      />
    </>
  );
};

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

export default App;

import './App.css';

import Card from './components/Card';
import Form from './components/Form';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="main">
      <Form />
      <Card />
    </div>
  );
};

export default App;

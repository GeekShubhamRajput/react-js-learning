import './App.css';
import {Text} from './components/polymorphic/Text'

function App() {
  return (
    <div className="App">
      <Text as="h1" size="sm" color="primary">Heading Text </Text>
      <Text as="p" size="md" color="secondary">Paragraph </Text>
      <Text as="label" htmlFor="someId" size="lg" color="primary">label </Text>
    </div>
  );
}

export default App;

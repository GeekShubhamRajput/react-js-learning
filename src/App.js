import './App.css';
import Hero from "./components/Hero"
import ErrorBoundary from "./components/ErrorBoundary"

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="ShaktiMan" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Hanuman" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  )
}

export default App;

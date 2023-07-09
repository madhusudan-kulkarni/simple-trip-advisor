import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { data } from './data/data'
import ContinentPage from './ContinentPage'
import CountryPage from './CountryPage'
import DestinationListPage from './DestinationListPage'
import DestinationDetailPage from './DestinationDetailPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white bg-gray-700">
        <Routes>
          <Route
            path="/"
            element={<ContinentPage continents={data.continents} />}
          />
          <Route
            path="/:continent"
            element={<CountryPage continents={data.continents} />}
          />
          <Route
            path="/:continent/:country"
            element={<DestinationListPage continents={data.continents} />}
          />
          <Route
            path="/:continent/:country/:destination"
            element={<DestinationDetailPage continents={data.continents} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

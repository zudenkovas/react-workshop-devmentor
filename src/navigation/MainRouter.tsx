import { Routes, Route } from 'react-router-dom'
import { RouteKey } from './routes'
import { CountriesContainer } from '@/containers/CountriesContainer'
import { CountryContainer } from '@/containers/CountryContainer'

export const MainRouter = () => (
    <Routes>
        <Route path={RouteKey.Index} element={<CountriesContainer />} />
        <Route path={RouteKey.Countries} element={<CountriesContainer />} />
        <Route path={RouteKey.Country} element={<CountryContainer />} />
    </Routes>
)

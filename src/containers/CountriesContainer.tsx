import { useQuery } from 'react-query'
import { useState, useEffect } from 'react'
import { getCountries } from '@/api/countries/requests'
import { CountryCard } from '@/components/CountryCard/CountryCard'
import { Container, TextField } from '@mui/material'
import { Country } from '@/api/countries/types'

export const CountriesContainer = () => {
    const { data } = useQuery('countries', getCountries)
    const [searchResult, setSearchResult] = useState<Country[]>([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        setSearchResult(data || [])
    }, [data])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (data?.length) {
            const query = e.target.value.toLowerCase()

            const searchResult = data.filter((country) => {
                return country.country.toLowerCase().includes(query)
            })
            setSearch(query)
            setSearchResult(searchResult)
        }
    }

    return (
        <Container maxWidth="md">
            <TextField
                label="Search"
                placeholder="Search for a country..."
                sx={{ margin: '20px 0' }}
                fullWidth
                onChange={handleSearch}
                value={search}
            />
            <Container
                disableGutters
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridGap: '20px',
                }}
            >
                {searchResult?.map((country) => (
                    <CountryCard {...country} />
                ))}
            </Container>
        </Container>
    )
}

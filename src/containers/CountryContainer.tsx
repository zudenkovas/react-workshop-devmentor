import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getCountry } from '@/api/countries/requests'
import {
    Container,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material'

export const CountryContainer = () => {
    const { id = '' } = useParams<{ id: string }>()
    const { data } = useQuery(['country', id], () => getCountry(id))

    return (
        <Container maxWidth="md">
            <Container
                disableGutters
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h2"
                    sx={{ textAlign: 'center', marginBottom: '10px' }}
                >
                    {data?.country}
                </Typography>
                <img alt={data?.country} src={data?.countryInfo.flag} />
            </Container>
            <Container
                disableGutters
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <List dense>
                    <ListItem>
                        <ListItemText
                            primary={`Active cases: ${data?.active || '-'}`}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={`Active cases per one million: ${
                                data?.activePerOneMillion || '-'
                            }`}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText
                            primary={`Cases: ${data?.cases || '-'}`}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={`Cases per million: ${
                                data?.casesPerOneMillion || '-'
                            }`}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText
                            primary={`Deaths: ${data?.deaths || '-'}`}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText
                            primary={`Deaths per million: ${
                                data?.deathsPerOneMillion || '-'
                            }`}
                        />
                    </ListItem>
                </List>
            </Container>
        </Container>
    )
}

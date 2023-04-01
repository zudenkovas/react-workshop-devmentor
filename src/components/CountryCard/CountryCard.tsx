import { Country } from '@/api/countries/types'
import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
    List,
    ListItem,
    ListItemText,
} from '@mui/material'
import { NavLink } from '@/components/Link/NavLink'
import { RouteKey } from '@/navigation/routes'
import { generatePath } from 'react-router-dom'

export const CountryCard = ({
    country,
    countryInfo,
    cases,
    deaths,
    recovered,
}: Country) => {
    return (
        <Card>
            <NavLink
                to={generatePath(RouteKey.Country, {
                    id: countryInfo.iso2 || '',
                })}
                underline="none"
                color="inherit"
            >
                <CardHeader
                    avatar={<Avatar alt={country} src={countryInfo.flag} />}
                    title={country}
                />
            </NavLink>
            <CardContent>
                <List dense>
                    <ListItem>
                        <ListItemText primary={`Cases: ${cases}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Deaths: ${deaths}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Recovered: ${recovered}`} />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}

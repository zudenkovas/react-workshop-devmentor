import { AppBar, Container, TableContainer } from '@mui/material'
import { NavLink } from '@/components/Link/NavLink'
import { RouteKey } from '@/navigation/routes'

export const Header = () => {
    return (
        <AppBar position="sticky">
            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '50px',
                }}
            >
                <NavLink to={RouteKey.Index} color="inherit" underline="none">
                    Home
                </NavLink>
                <NavLink
                    to={RouteKey.Countries}
                    color="inherit"
                    underline="none"
                >
                    Countries
                </NavLink>
            </Container>
        </AppBar>
    )
}

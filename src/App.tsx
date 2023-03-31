import { Typography, Link } from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'

const Wrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const StyledLink = styled(Link)`
    font-family: 'Space Grotesk';
    padding: 0 30px;

    &:hover {
        background: rgb(255, 225, 107);
    }
`

function App() {
    return (
        <Wrapper>
            <Typography variant="h1">
                <StyledLink
                    color="inherit"
                    href="https://www.devmentor.online"
                    underline="none"
                    target="_blank"
                >
                    devMentor
                </StyledLink>
            </Typography>
        </Wrapper>
    )
}

export default App

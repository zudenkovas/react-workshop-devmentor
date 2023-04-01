import { PropsWithChildren } from 'react'
import { Link, LinkProps } from '@mui/material'
import {
    NavLink as RouterLink,
    NavLinkProps as RouterNavLinkProps,
} from 'react-router-dom'

type NavLinkProps = PropsWithChildren<LinkProps & RouterNavLinkProps>

export const NavLink = (props: NavLinkProps) => (
    <Link component={RouterLink} {...props} />
)

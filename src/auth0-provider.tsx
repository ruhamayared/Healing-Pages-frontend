import { Auth0Provider } from '@auth0/auth0-react'

interface Auth0ProviderProps {
    children: React.ReactNode;
}

const Auth0ProviderWithHistory: React.FC<Auth0ProviderProps> = ({ children }) => {
    const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN as string
    const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID as string

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithHistory;

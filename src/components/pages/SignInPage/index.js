import { SignInTemplate } from '../../templates/'
import { useAuth } from '../../../contexts/AuthContext';

export const SignInPage = () => {
    const { login } = useAuth();

    return (<SignInTemplate handleSignIn={login}></SignInTemplate>)
}

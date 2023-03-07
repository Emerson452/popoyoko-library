import { useNavigate } from 'react-router-dom'

import axios from '../../../config/axios'
import { SignUpTemplate } from '../../templates/'

export const SignUpPage = () => {
    const navigate = useNavigate()

    const handleSignUp = async (form) => {
        const { data: { result } } = await axios.post('/user/register', form)
        if (result) {
            navigate('/signin')
        }
    }

    return (<SignUpTemplate handleSignUp={handleSignUp}></SignUpTemplate>)
}

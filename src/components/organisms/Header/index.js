import { useNavigate } from 'react-router-dom'
import './index.css'

import axios from '../../../config/axios'
import { Button } from '../../atoms/'
import { Logo } from '../../atoms/Logo'
import { UserAvatar } from '../../atoms/UserAvatar'
import { useAuth } from '../../../contexts/AuthContext'

export const Header = () => {
    const navigate = useNavigate()
    const { currentUser } = useAuth();

    const handleSignOut = async () => {
        await axios.get('/user/logout')
        navigate('/signin')
    }


    return (
        <header>
            <div className="content">
                <Logo onClick={() => navigate('/')}/>
                <div className="right">
                    <Button onClick={() => navigate('/upload')}>Upload</Button>
                    <Button className="secondary" onClick={() => handleSignOut()}>Sign Out</Button>
                    { currentUser && <UserAvatar className="avatar" onClick={() => navigate(`/users/${currentUser._id}`)}/> }
                </div>
            </div>
        </header>
    )
}

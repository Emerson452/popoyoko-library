import { useEffect } from 'react';
import { useMusic } from '../../../contexts/MusicContext'
import { Logo } from '../../atoms/Logo'
import { FeedTemplate } from '../../templates/'

export const FeedPage = () => {
    
    const { tracks, error, loading } = useMusic();

    if (loading) return <Logo className="loader loading"/>
    
    return !error ? (<FeedTemplate musics={tracks}></FeedTemplate>) : <p>{error.message}</p>
}

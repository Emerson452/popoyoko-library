import './index.css'

import { Button } from '../../atoms'
import { PlaybackTimeline } from '../../atoms/PlaybackTimeline'
import { useMusic } from '../../../contexts/MusicContext'
import { useEffect, useState } from 'react'

export const PlayerBar = () => {

    const { currentTrack, currentProgress } = useMusic();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (currentTrack) {
            setIsPlaying(currentTrack?.state?.paused)
        }
    }, [currentTrack?.state?.paused])

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            currentTrack?.controls?.pause();
        } else {
            currentTrack?.controls?.play();
        }
    }

    const handleSeek = (rate) => {
        currentTrack?.controls?.seek(rate / 100 * currentTrack?.state?.duration);
    }

    if (!currentTrack) return <></>

    return (
        <section className="playerBar">
            <div className="content">
                <div className="infoControl">
                    <Button  className={isPlaying ? "stop" : "play"} onClick={handlePlay} />
                    <ul>
                        <li className="songName"><a>{currentTrack?.title}</a></li>
                        <li><a> {currentTrack?.author}</a></li>
                    </ul>
                </div>
                <PlaybackTimeline progress={currentProgress} seek={handleSeek}/>
            </div>
        </section>
    )
}

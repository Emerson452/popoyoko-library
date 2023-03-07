import "./index.css";

import { useEffect, useState, useRef } from 'react'
import { useNavigate } from "react-router";

import { Card, Button, Range, UserAvatar, PlaybackTimeline } from '../../atoms'
import { useAudio } from '../../../hooks/useAudio'
import { useMusic } from "../../../contexts/MusicContext";
import { useWaveFormData } from "../../../hooks/useWaveFormData";

const baseURI = process.env.REACT_APP_BASE_URI

export const MusicCard = ({ 
  music: {
    _id,
    author: { 
      username: author,
      _id: uid 
    }, 
    audio, 
    title, 
    duration 
  },
}) => {

  const { element, state, controls } = useAudio({ src: `${baseURI}/tracks/${audio.filename}` });
  const { currentTrack, setCurrentTrack, setCurrentProgress } = useMusic();

  const waveFormData = useWaveFormData(state.arrayBuffer);
  
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const rate = state.time / duration * 100 
    setProgress(rate);
    if (currentTrack?.id === _id) {
      setCurrentProgress(rate)
    }
  }, [state.time, duration])

  const formatDuration = (duration) => new Date(duration * 1000).toISOString().substr(11, 8);

  const handlePlayPause = () => {
    if (currentTrack) { currentTrack?.controls?.pause(); }
    if (currentTrack?._id !== _id) setCurrentTrack({ id: _id, author, title, element, state, controls });
    state.paused ? controls.play() : controls.pause()
  }

  const handleSeek = (rate) => {
    controls.seek(rate / 100 * duration)
  }


  //canvas
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    if (!waveFormData) return;
    const canvas = canvasRef.current;
    const card = cardRef.current;

    const canvasHeight = card.offsetHeight;
    
    canvas.width = card.clientWidth;
    canvas.height = canvasHeight;

    const canvasLenght = Math.floor((card.clientWidth) / 5);

    const step = Math.floor(waveFormData.length / canvasLenght);
    let sound = waveFormData.map((value, index, array) => {
      if (index % step === 0 && index !== 0) {
        const tmp = array.slice(index - step, index);
        const average = tmp.reduce((a, b) => a + b) / tmp.length
        return average;
      }
    })
    sound = sound.filter(a => a !== undefined);

    const context = canvas.getContext("2d");
    context.fillStyle = "#7E57F4";
    for (let i = 0; i < canvasLenght; i++) {
      context.fillRect(5 * i, canvasHeight - (canvasHeight * sound[i]), 4, canvasHeight * sound[i]);
    }
    contextRef.current = context;
  }, [waveFormData]);
  
  return (
    <Card className="musicCard" refe={cardRef}>
      {element}
      <div className="header">
        <div className="left">
          <UserAvatar onClick={() => navigate(`/users/${uid}`)}/>
          <ul>
            <li className="title">{title}</li>
            <li>by<a onClick={() => navigate(`/users/${uid}`)}>{author}</a></li>
          </ul>
        </div>
        <ul>
          <li>{formatDuration(duration)}</li>
        </ul>
      </div>
      <canvas
        className="canvas"
        ref={canvasRef}
      />
      <Range value={progress} onChange={(e) => { handleSeek(e) }}></Range>
      <div className="footer">
        <Button onClick={handlePlayPause}>{state.paused ? "Play" : "Pause"}</Button>
      </div>
      <PlaybackTimeline progress={progress} seek={handleSeek}/>
    </Card>
  )
}

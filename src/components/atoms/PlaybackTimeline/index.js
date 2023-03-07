import { useEffect, useRef, useState } from "react";

import "./index.css";


export const PlaybackTimeline = ({ progress, seek }) => {
    const [hover, setHover] = useState()

    const timelineRef = useRef(null)
    const selectionRef = useRef(null)
    const trackRef = useRef(null)

    useEffect(() => {
        const track = trackRef.current;
        track.style.width = `${progress}%`;
    }, [progress])

    useEffect(() => {
        const selection = selectionRef.current
        selection.style.width = hover + "px"
    }, [hover])

    const handleHover = (e, value = undefined) => {
        if (value !== undefined) setHover(value);
        else {
            const cursor = e.clientX - trackRef.current.getBoundingClientRect().x;
            setHover(cursor);
        }
    }

    const handleSeek = (e) => {
        const cursor = e.clientX - trackRef.current.getBoundingClientRect().x;
        const rate = cursor / timelineRef?.current?.offsetWidth * 100;
        seek(rate);
    }

    return (
        <div
            className="playbackTimeline"
            ref={timelineRef}
            onMouseMove={handleHover}
            onMouseLeave={(e) => handleHover(e, 0)}
            onClick={handleSeek}
        >
            <div className="track" ref={trackRef} />
            <div className="selection" ref={selectionRef} />
        </div>
    )
}

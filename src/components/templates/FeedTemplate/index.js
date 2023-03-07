import "./index.css";

import { MusicCard } from '../../organisms/MusicCard'
import { Logo } from "../../atoms/Logo";

export const FeedTemplate = ({ musics }) => {
    
    if (!musics) return <Logo className="loader loading"></Logo>

    return <section className="feed">{musics.map((music, key) => <MusicCard key={key} music={music}></MusicCard>)}</section>
    
};

import { useParams } from "react-router";

import { useMusic } from "../../../contexts/MusicContext";
import useAxios from "../../../hooks/useAxios";

import { Logo } from "../../atoms/Logo";
import { UserProfileTemplate } from "../../templates";

export const UserProfilePage = () => {
  const { uid } = useParams();
  
  const { data: user } = useAxios({ url: `/user/${uid}`, method: 'get' });
  const { tracks, getTracksByUID } = useMusic();

  return user && tracks ? (
    <UserProfileTemplate profileData={{ user: user?.success, tracks: getTracksByUID(uid) }} />
  ) : <Logo className="loading loader"/>
}
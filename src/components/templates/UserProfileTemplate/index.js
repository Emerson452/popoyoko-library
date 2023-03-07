import "./index.css";

import { FeedTemplate } from "..";
import { UserAvatar } from "../../atoms/UserAvatar";
import { Button } from "../../atoms";

export const UserProfileTemplate = ({ profileData }) => {
  const { user, tracks } = profileData

  return (
    <div className="userTemplate">
      <div className="userHeader">
        <div className="content">
          <div className="userInfos">
            <div className="avatar"><UserAvatar big /></div>
            <div className="userName">{user.username}</div>
          </div>
          <div className="buttons">
            <Button className="secondary">Follow</Button>
          </div>
        </div>
      </div>
      <FeedTemplate musics={tracks} />
    </div>)
}

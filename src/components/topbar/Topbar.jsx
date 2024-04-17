import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dash Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconPadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconPadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

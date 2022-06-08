import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faFacebookMessenger, faGithub, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons'
import DonateButton from "../utils/DonateButton";

export default function IconsBar({ styleClass, parentStyleClass }) {

  return (
    <div className={parentStyleClass}>
      <a href={"https://www.facebook.com/profile.php?id=100078427363056"} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebookF} className={`cursor-pointer ${styleClass}`} />
      </a>
      {/* <a href={"https://www.facebook.com/sturainis"} target="_blank" rel="noreferrer"> */}
      <FontAwesomeIcon icon={faDiscord} className={`cursor-pointer ${styleClass}`} />
      {/* </a> */}
      <a href={"https://www.youtube.com/channel/UC_KHyjfFuyJM0BDuVIGLH-Q/videos"} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faYoutube} className={`cursor-pointer ${styleClass}`} />
      </a>
      <a href={"https://github.com/AutocorrectGuy/portfolio"} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className={`cursor-pointer ${styleClass}`} />
      </a>
      {/* <DonateButton
        w={styleClass.split(" ")[0]}
        h={styleClass.split(" ")[1]}
        color={styleClass.split(" ")[2]}
        hoverColor={styleClass.split(" ")[3]}
        maxH={styleClass.split(" ")[4]}
      /> */}
    </div>
  )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function IconsBar({styleClass, parentStyleClass}) {
  return(
    <div className={parentStyleClass}>
    <FontAwesomeIcon icon={faFacebookF} className={`cursor-pointer ${styleClass}`} />
    <FontAwesomeIcon icon={faDiscord} className={`cursor-pointer ${styleClass}`} />
    <FontAwesomeIcon icon={faYoutube} className={`cursor-pointer ${styleClass}`} />
    <FontAwesomeIcon icon={faGithub} className={`cursor-pointer ${styleClass}`} />
  </div>
  )
}
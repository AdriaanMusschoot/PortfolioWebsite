/* Data Imports */
import { ReactComponent as SteamSVG } from '../../../assets/svg/steam_icon.svg';

/* Style Imports */
import '../../../styles/buttons/ProjectButtons.css';

/* HTML */
export default function SteamButton({sourceLink}) {
  return (
    <a href={sourceLink} rel='noreferrer' target='_blank'>
        <SteamSVG className='svg'/>
    </a>
  )
};
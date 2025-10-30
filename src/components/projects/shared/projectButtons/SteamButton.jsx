/* Data Imports */
import { ReactComponent as SteamSVG } from '../../../../assets/svg/steam_icon.svg';

/* HTML */
export default function SteamButton({sourceLink}) {
  return (
    <a href={sourceLink} rel='noreferrer' target='_blank'>
        <SteamSVG className='svg'/>
    </a>
  )
};
/* Data Imports */
import { ReactComponent as ItchioSVG } from '../../../assets/svg/itchio_icon.svg';

/* Style Imports */
import '../../../styles/buttons/ProjectButtons.css';

/* HTML */
export default function ItchioButton({sourceLink}) {
  return (
        <a href={sourceLink} rel='noreferrer' target='_blank'>
          <ItchioSVG className='svg'/>
        </a>
  )
};
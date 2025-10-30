/* Data Imports */
import { ReactComponent as ItchioSVG } from '../../../../assets/svg/itchio_icon.svg';

/* HTML */
export default function ItchioButton({sourceLink}) {
  return (
    <a href={sourceLink} rel='noreferrer' target='_blank'>
      <ItchioSVG className='svg'/>
    </a>
  )
};
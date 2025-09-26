/* Data Imports */
import { ReactComponent as MailLogo } from '../../assets/SVG/mail_icon.svg';

/* HTML */
export default function MailToButton() {
  return (
    <a href='mailto:contact@adriaanmusschoot.com' rel='noreferrer' target='_blank'>
        <MailLogo className='svg'/>
    </a>
  )
};
/* Data Imports */
import { ReactComponent as LinkedInLogo } from './linkedin_icon.svg';

/* HTML */
export default function LinkedInButton() {
  return (
    <a href='https://www.linkedin.com/in/adriaan-musschoot/' rel='noreferrer' target='_blank'>
        <LinkedInLogo className='svg'/>
    </a>
  )
};
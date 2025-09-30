/* Data Imports */
import { ReactComponent as GithubLogo } from '../../../assets/svg/github_text.svg';

/* Style Imports */
import '../../../styles/buttons/ProjectButtons.css';

/* HTML */
export default function GithubTextButton({sourceLink}) {
  return (
    <a href={sourceLink} rel='noreferrer' target='_blank'>
        <GithubLogo className='svg'/>
    </a>
  )
}; 
/* Data Imports */
import { ReactComponent as GithubLogo } from '../../assets/svg/github_icon.svg';

/* HTML */
export default function GithubButton() {
  return (
    <a href='https://github.com/AdriaanMusschoot' rel='noreferrer' target='_blank'>
        <GithubLogo className='svg'/>
    </a>
  )
};
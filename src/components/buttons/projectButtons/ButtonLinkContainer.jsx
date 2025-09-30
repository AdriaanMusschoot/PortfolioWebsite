/* Data Imports */
import SteamButton from '../../buttons/projectButtons/SteamButton.jsx';
import ItchioButton from '../../buttons/projectButtons/ItchioButton.jsx';
import GithubTextButton from '../../buttons/projectButtons/GithubTextButton.jsx';

/* Style Imports */
import '../../../styles/buttons/ProjectLinks.css';

/* HTML */
export default function ProjectButtons({ links }) {

    const renderButton = (sourceLink) => 
    {
      if (sourceLink.includes('steam')) 
      {
        return (
          <SteamButton sourceLink={sourceLink} />
        );
      } 
      else if (sourceLink.includes('itch.io') || sourceLink.includes('itchio')) 
      {
        return (
          <ItchioButton sourceLink={sourceLink} />
        );
      } 
      else if (sourceLink.includes('github')) 
      {
        return (
          <GithubTextButton sourceLink={sourceLink} />
        );
      } 
      else 
      {
        return null
      }
    };

  const linksArray = Array.isArray(links) ? links : [links];

  return (
    <div className="button-link-container">
      {
        linksArray.map
        ((link, index) => 
          (
            renderButton(link)
          )
        )
      }
    </div>
  );
}

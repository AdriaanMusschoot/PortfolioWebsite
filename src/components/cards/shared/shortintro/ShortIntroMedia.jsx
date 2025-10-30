/* Style Imports */
import { ShortIntroVideo, ShortIntroImage } from './ShortIntro.js';

/* HTML */
export default function ShortIntroMedia( { MediaFilePath } )
{
    const FileExtension = MediaFilePath.split('.').pop().toLowerCase();
    const ShortIntroMediaAlt = 'short-intro-media';

    if (['mp4', 'webm'].includes(FileExtension))
    {
        return (
            <ShortIntroVideo muted loop autoPlay controls src={ MediaFilePath } alt={ShortIntroMediaAlt} />
        );
    }
    else if (['png', 'jpg', 'jpeg', 'gif'].includes(FileExtension))
    {
        return (
            <ShortIntroImage src={ MediaFilePath } alt={ShortIntroMediaAlt} />
        );
    }
    else
    {
        return (
            <p>Unsupported File Type Extension</p>
        );
    }

}
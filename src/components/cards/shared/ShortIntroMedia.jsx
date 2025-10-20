/* Style Imports */
import { ShortIntroVideo, ShortIntroImage } from './ShortIntroMedia.js'

/* HTML */
export default function ShortIntroMedia( { MediaFilePath } )
{
    const FileExtension = MediaFilePath.split('.').pop().toLowerCase();

    if (['mp4', 'webm'].includes(FileExtension))
    {
        return (
            <ShortIntroVideo autoPlay controls>
                <source src={ MediaFilePath }/>
            </ShortIntroVideo>
        );
    }
    else if (['png', 'jpg', 'jpeg', 'gif'].includes(FileExtension))
    {
        return (
            <ShortIntroImage src={ MediaFilePath } />
        );
    }
    else
    {
        return (
            <p>Unsupported File Type Extension</p>
        );
    }

}
/* Style Imports */

/* HTML */
export default function ShortIntroMedia( { MediaFilePath } )
{
    const FileExtension = MediaFilePath.split('.').pop().toLowerCase();

    if (['mp4', 'webm'].includes(FileExtension))
    {
        return (
            <video autoPlay controls src={ MediaFilePath }/>
        );
    }
    else if (['png', 'jpg', 'jpeg', 'gif'].includes(FileExtension))
    {
        return (
            <img src={ MediaFilePath } alt='loading'/>
        );
    }
    else
    {
        return (
            <p>Unsupported File Type Extension</p>
        );
    }

}
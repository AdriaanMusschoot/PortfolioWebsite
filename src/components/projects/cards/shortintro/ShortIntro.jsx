/* Style Imports */
import './ShortIntro.scss';

/* HTML */
export default function ShortIntro( { children } )
{
    return (
        <div className='short-intro'>
            {children}
        </div>
    )
}
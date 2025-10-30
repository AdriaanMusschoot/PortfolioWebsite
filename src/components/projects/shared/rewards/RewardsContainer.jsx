/* Style */
import './RewardsContainer.css';

/* HTML */
export default function RewardsContainer( { rewards } )
{
    const RewardClassName='reward-img';
    const RewardSourcePath = ( reward ) => {
        if ( reward.includes( 'TheRookies' ) )
        {
            return './assets/competitions/TheRookies_Finalist_Badge.webp';
        }
        else if ( reward.includes( 'GDWC' ) )
        {
            return './assets/competitions/GDWC_Finalist_Badge.png';
        }
        return null;
    }

    return (
        <div className='rewards-container'>
            { rewards && rewards.map( ( reward, index ) => (
                <div key={ index } className={ RewardClassName }>
                    <img src={ RewardSourcePath( reward ) } alt={RewardClassName}/>
                </div>
            ))}
        </div>
    )
}
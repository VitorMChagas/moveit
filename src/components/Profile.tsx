import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={ styles.profileContainer }>
            <img src="https://avatars.githubusercontent.com/u/4055124?s=400&u=f737990af07ea112206b0621dc896774e77b5587&v=4" alt="Vitor Chagas"/>
            <div>
                <strong>Vitor Chagas</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level { level }
                </p>
            </div>
        </div>
    );
}
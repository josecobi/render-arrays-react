import Scores from '/src/components/Scores';
import PropTypes from 'prop-types';

function Learners({name, bio, scores}){
    
        return(
            <div>
            <p className="learner-name">
            {name}
            </p>
            <p>
                {bio}
            </p>
            {scores.map((score) => {
                return (<Scores key={scores.indexOf(score)}
                date={score.date}
                score={score.score}
                />)
            })}
            </div>
            
        )       
        
}

Learners.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    scores: PropTypes.object
  };
export default Learners;
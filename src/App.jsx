import { useState } from 'react'
import array from "/src/data/array.jsx"
import Learners from '/src/components/Learners'; 
import './App.css'

function App() {
  const [learners] = useState(array);
  return (
    <div>
        {learners.map((learner) => {
              return(
                <Learners key={learners.indexOf(learner)}
                    name = {learner.name} 
                    bio = {learner.bio}
                    scores = {learner.scores}
                    learner = {learner} />
              )
          }) 
      }
    </div>
  );
}

export default App;

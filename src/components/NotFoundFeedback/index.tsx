import React from 'react';
import {ImSad} from 'react-icons/im';
import {NotFoundFeedbackContainer} from './styles';

const NotFoundFeedback = () => {
  return (
    <NotFoundFeedbackContainer data-testid='notFoundFeedback'>
      <div>
        <h2>No results found</h2>
        <ImSad size={48}/>
      </div>
      <p>Try another search term</p>
      
    </NotFoundFeedbackContainer>
  );
};

export default NotFoundFeedback;
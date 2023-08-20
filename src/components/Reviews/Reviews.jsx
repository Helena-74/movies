import React from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
  margin: 20px;
`;

const StyledHeader = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin-bottom: 10px;
`;

const Reviews = ({ reviews }) => {
  return (
    <ReviewsContainer>
      <StyledHeader>Reviews</StyledHeader>
      <StyledList>
        {reviews.map((review) => (
          <StyledListItem key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </StyledListItem>
        ))}
      </StyledList>
    </ReviewsContainer>
  );
};

export default Reviews;


// import React from 'react';
// import { useParams } from 'react-router-dom';

// function Reviews({ reviews }) {
//   return (
//     <div>
//       <h3>Reviews</h3>
//       <ul>
//         {reviews.map((review) => (
//           <li key={review.id}>
//             <p>Author: {review.author}</p>
//             <p>{review.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Reviews;


import React from 'react';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';

const CastContainer = styled.div`
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
  margin-bottom: 5px;
`;

const Cast = ({ cast }) => {
  return (
    <CastContainer>
      <StyledHeader>Cast</StyledHeader>
      <StyledList>
        {cast.map((actor) => (
          <StyledListItem key={actor.id}>{actor.name}</StyledListItem>
        ))}
      </StyledList>
    </CastContainer>
  );
};

export default Cast;


// import React from 'react';
// import { useParams } from 'react-router-dom';

// function Cast({ cast }) {
//   return (
//     <div>
//       <h3>Cast</h3>
//       <ul>
//         {cast.map((actor) => (
//           <li key={actor.id}>{actor.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Cast;


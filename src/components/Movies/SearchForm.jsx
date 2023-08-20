import React, { useState } from 'react';
import styled from 'styled-components';
import { searchMoviesByKeyword } from '../api'; 

const FormContainer = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (query) {
      const searchData = await searchMoviesByKeyword(query);
      onSubmit(searchData.results);
      setQuery('');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a movie..."
      />
      <Button type="submit">Search</Button>
    </FormContainer>
  );
};

export default SearchForm;


// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FormContainer = styled.form`
//   margin-bottom: 20px;
// `;

// const Input = styled.input`
//   padding: 8px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   padding: 8px 12px;
//   font-size: 16px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const SearchForm = ({ onSubmit }) => {
//   const [query, setQuery] = useState('');

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(query);
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <Input type="text" value={query} onChange={handleChange} />
//       <Button type="submit">Search</Button>
//     </FormContainer>
//   );
// };

// export default SearchForm;

// function SearchForm({ onSubmit }) {
//   const [query, setQuery] = useState('');

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(query);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={query} onChange={handleChange} />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// export default SearchForm;


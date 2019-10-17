import styled from 'styled-components';

export const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
   
  @media screen and (max-width: 800px) {
    align-items: center;
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }    
`;
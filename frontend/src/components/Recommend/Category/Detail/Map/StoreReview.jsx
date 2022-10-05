import styled from '@emotion/styled';

const ReviewBox = styled('div')`
  padding: 15px 25px;
  border-bottom: 1.5px solid #f6f6f6;
  font-size: 0.9em;
  &:last-child {
    border-bottom: none;
  }
`;

export default function StoreReview({ children }) {
  return <ReviewBox>{children}</ReviewBox>;
}

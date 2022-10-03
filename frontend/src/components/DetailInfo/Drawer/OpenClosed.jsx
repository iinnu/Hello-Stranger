import styled from '@emotion/styled';

const CustomBox = styled('span')`
  padding: 0 1px;
  border: 1px solid #b9b9b9;
  font-size: 0.9em;
  color: gray;
  margin-left: 10px;
`;

export default function OpenClosed({ open = false }) {
  return <CustomBox>{open ? '영업중' : '영업종료'}</CustomBox>;
}

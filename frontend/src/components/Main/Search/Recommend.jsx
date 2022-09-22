import { useNavigate } from 'react-router-dom';
import { useMainState } from '../MainContext';
import CustomButton from 'components/common/CustomButton';

function Recommend({ children }) {
  const { location, range } = useMainState();
  const navigate = useNavigate();

  const handleClick = () => {
    console.log({ location, range });
    navigate(`/recommend`);
  };

  return (
    <RecommendButton
      className="search__button"
      variant="contained"
      size="large"
      sx={{ marginTop: '15px' }}
      onClick={handleClick}
    >
      {children}
    </RecommendButton>
  );
}

export default Recommend;

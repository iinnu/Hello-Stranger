import 'styles/Recommend/RecommendResultPage.scss';
import { useEffect, useState } from 'react';
import { getSpotifyRecommendation } from 'api/spotify';
import { ResultProvider } from 'components/Recommend/Context/ResultContext';
import { useRecommendContext } from 'components/Recommend/Context/RecommendContext';
import {
  setRecommendCurrent,
  setRecommendList,
} from 'components/Recommend/Context/musicReducer';
import Container from 'components/common/Container';
import ResultLoading from 'components/Recommend/Result/ResultLoading';
import ResultMap from 'components/Recommend/Result/Map/ResultMap';

function RecommendResultPage() {
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useRecommendContext();
  const { list } = state.musicReducer;

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    const seed = list.filter((item) => item.choiceYN === 1)[0];
    getSpotifyRecommendation(seed).then((res) => {
      dispatch(setRecommendList(res));
      dispatch(setRecommendCurrent(res[0]));
    });
  }, []);

  return (
    <Container>
      {loading && <ResultLoading handleLoading={handleLoading} />}
      {!loading && (
        <ResultProvider>
          <ResultMap />
        </ResultProvider>
      )}
    </Container>
  );
}

export default RecommendResultPage;

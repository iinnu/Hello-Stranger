import 'styles/Recommend/RecommendResultPage.scss';
import { useState } from 'react';
import Container from 'components/common/Container';
import ResultLoading from 'components/Recommend/Result/ResultLoading';
import ResultMap from 'components/Recommend/Result/ResultMap';

function RecommendResultPage() {
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <Container>
      {loading && <ResultLoading handleLoading={handleLoading} />}
      {!loading && <ResultMap />}
    </Container>
  );
}

export default RecommendResultPage;

import 'styles/Recommend/RecommendPage.scss';
import Container from 'components/common/Container';
import CloseRecommend from 'components/Recommend/CloseRecommend';
import PrevNext from 'components/Recommend/PrevNext';
import Music from 'components/Recommend/Music/Music';

function RecommendPage() {
  return (
    <Container>
      <CloseRecommend />
      <Music />
      <PrevNext />
    </Container>
  );
}

export default RecommendPage;

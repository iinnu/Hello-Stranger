import 'styles/Recommend/RecommendPage.scss';
import { useRecommendContext } from 'components/Recommend/Context/RecommendContext';
import Container from 'components/common/Container';
import CloseRecommend from 'components/Recommend/CloseRecommend';
import PrevNext from 'components/Recommend/PrevNext';
import Music from 'components/Recommend/Music';
import Title from 'components/Recommend/Title';
import Food from 'components/Recommend/Food';
import Activity from 'components/Recommend/Activity';

const titles = [
  ['어떤 음악을', '듣고 싶으신가요?'],
  ['어떤 음식을', '먹고 싶으신가요?'],
  ['어떤 활동을', '하고 싶으신가요?'],
];

function RecommendPage() {
  // const { index } = useRecommendContext().state;
  const { state } = useRecommendContext();
  const index = state.indexReducer.index;

  return (
    <Container>
      <CloseRecommend />
      <div className="recommend-content">
        <Title title={titles[index]} />
        {index === 0 ? <Music /> : index === 1 ? <Food /> : <Activity />}
        {/* <Food /> */}
      </div>
      <PrevNext index={index} />
    </Container>
  );
}

export default RecommendPage;

import sample from 'assets/images/sample.jpg';

export default function StoreDrawer({ list }) {
  return (
    <div className="drawer__list-inner">
      <div className="drawer__list-inner__desc">
        * 카테고리를 선택하면 가게 목록을 볼 수 있습니다
      </div>
      <div className="category-list__inner">
        {list
          .filter((item) => item.choiceYN !== 2)
          .map((item) => (
            <div className="category-card">
              <div className="category-card__img-wrapper">
                <img src={sample} alt="cateogry-img" />
              </div>
              <div className="category-card__category-desc">
                <div className="category-desc__inner">
                  <span>
                    {item.foodCategory
                      ? item.foodCategory
                      : item.activityCategory}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

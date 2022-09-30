import styled from '@emotion/styled';
import classNames from 'classnames';

const Row = styled('div')`
  display: flex;
  justify-content: center;
`;

export default function MenuItem({ icon, label, onClick, active }) {
  return (
    <div
      className={
        active ? classNames('menu__item', 'menu__item--active') : 'menu__item'
      }
      onClick={onClick}
    >
      <Row>{icon}</Row>
      <Row>{label}</Row>
    </div>
  );
}

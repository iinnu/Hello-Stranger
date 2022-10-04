import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import NearTabPanel from './NearTabPanel';
const backdrop = {
  style: { background: 'none' },
};

const CustomSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiPaper-root {
    padding: 0;
    width: 100%;
    max-width: 500px;
    right: 0;
    left: unset;
    box-shadow: 0px -2px 5px 0px #d6d6d6;
    border-radius: 0;
    background-color: #f1f1f1;
    height: 75%;
  }
`;

const StyledBox = styled('div')`
  margin-bottom: 8px;
  background-color: white;
`;

const CustomLabel = styled(Button)`
  background-color: white;
  color: black;
  cursor: default;

  &:hover {
    background: none;
  }

  & .MuiTouchRipple-root {
    display: none;
  }
`;

export default function NearDrawer({ open, toggleDrawer, type, nearData, getCurrentStore }) {
  return (
    <CustomSwipeableDrawer
      anchor="bottom"
      open={open}
      disable
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      disableBackdropTransition
      disableDiscovery
      disableSwipeToOpen
      ModalProps={{
        componentsProps: { backdrop: backdrop },
      }}
    >
      <div className="near-analysis__drawer">
        <NearTabPanel type={type} nearData={nearData} getCurrentStore={getCurrentStore}/>
      </div>
    </CustomSwipeableDrawer>
  );
}

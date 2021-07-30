import {Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Header = () => {
  return (
    <div className="main-header">
        <h1><Icon icon={locationIcon}/>Wildfire Tracker powered by NASA Wildfire API</h1>
    </div>
  );
}
export default Header;
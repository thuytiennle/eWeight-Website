import React from 'react';
import { useSelector} from 'react-redux';
import { FaHeart, FaBars } from 'react-icons/fa';
import {UserManage} from '../UserManage';
import {Avatar} from '../../../components/Avatar';
import {WeightManage} from '../WeightManage';
// import { ModalButton } from '../../../components/Button';

const SidebarContent = ({
  handleToggleSidebar,
}) => {
   // Get state form store by using useSelector of redux
   const isSelectUserManage = useSelector(
    (state) => state.dashboardReducer.isSelectUserManage,
  );

  const isSelectWeightManage = useSelector(
    (state) => state.dashboardReducer.isSelectWeightManage,
  );

  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <Avatar />
      {isSelectUserManage && <UserManage />}
      {isSelectWeightManage && <WeightManage />}

      {/* <footer>
        <small style={{ color: 'black' }}>
          © 2021 made with <FaHeart style={{ color: 'red' }} /> by -{' '}
          Le Ngan
        </small>
        <br />
      </footer> */}
    </main>
  );
};

export default SidebarContent;
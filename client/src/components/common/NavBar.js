import axios from 'axios';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { ClientID } from '../../Config';

function LogoIcon() {
  return (
    <LogoWrap>
      <IconButton>
        <LogoIconChild icon={faCodepen} />
      </IconButton>
    </LogoWrap>
  );
}

const LogoWrap = styled('div')`
  margin: 0 0 50px 0;
`;

const LogoIconChild = styled(FontAwesomeIcon)`
  color: #8a48f5;
  font-size: 40px;
  transform: rotate(45deg);
`;

function HomeIcon() {
  return (
    <IconWrapper>
      <IconButton>
        <HomeIconChild icon={faLandmark} />
      </IconButton>
    </IconWrapper>
  );
}

const HomeIconChild = styled(FontAwesomeIcon)`
  color: #8f00ff;
`;

function User() {
  return (
    <IconWrapper>
      <IconButton>
        <UserChild icon={faUser} />
      </IconButton>
    </IconWrapper>
  );
}

const UserChild = styled(FontAwesomeIcon)`
  color: #8595a8;
`;

function PowerOff() {
  function handleClick(e) {
    e.preventDefault();
    axios
      .get(
        `https://kauth.kakao.com/oauth/logout?client_id=${ClientID}&logout_redirect_uri=http://localhost:3000/login`
      )
      .then(function (response) {
        console.log('로그아웃 했다!');
        window.sessionStorage.clear();
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    <IconWrapper>
      <IconButton onClick={handleClick}>
        <PowerOffChlid icon={faPowerOff} />
      </IconButton>
    </IconWrapper>
  );
}

const PowerOffChlid = styled(FontAwesomeIcon)`
  color: #8595a8;
`;

function Setting() {
  return (
    <IconWrapper>
      <IconButton>
        <SettingChild icon={faCog} />
      </IconButton>
    </IconWrapper>
  );
}

const SettingChild = styled(FontAwesomeIcon)`
  color: #8595a8;
`;

function Calendar() {
  return (
    <IconWrapper>
      <IconButton>
        <CalendarChild icon={faCalendarAlt} />
      </IconButton>
    </IconWrapper>
  );
}

const CalendarChild = styled(FontAwesomeIcon)`
  color: #8595a8;
`;

const IconWrapper = styled('div')`
  margin: 15px 0;
`;

function NavBar() {
  return (
    <Nav>
      <div></div>
      <LogoWrap>
        <Link to="/">
          <LogoIcon />
        </Link>
      </LogoWrap>
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="friend-list">
        <User />
      </Link>
      <Link to="/calendar">
        <Calendar />
      </Link>
      <Link to="/">
        {/* mypage? */}
        <Setting />
      </Link>
      <Link to="/">
        {/* 로그아웃 */}
        <PowerOff />
      </Link>
    </Nav>
  );
}

const Nav = styled(Toolbar)`
  padding: 10px;
  /*position: fixed;*/
  display: flex;
  flex-direction: column;
  height: 135%;
  width: 50px;
  background-color: #f4f5fa;
  left: 0;
`;

export default NavBar;

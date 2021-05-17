//import { useState } from 'react';

import styled from 'styled-components';
//import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Logo from '../components/common/Logo';
import UserName from '../components/common/UserName';
//import Calendar from './Calendar';

function Hello({ username }) {
  return <StyledHello>{username}님 안녕하세요!</StyledHello>;
}

const StyledHello = styled('div')`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;
`;

function Profile({ username }) {
  return (
    <ProfileBox>
      <ProfileContent>{username}</ProfileContent>
      {/*// 이미지 ..아마 path로 받을듯?
			// 이름
			// 별명?
			// 이상한 숫자??
			// 나의 코디*/}
    </ProfileBox>
  );
}

const ProfileContent = styled(Box)`
  margin: 30px;
`;

const ProfileBox = styled(Box)`
  width: 364px;
  height: 380px;
  left: 131px;
  top: 216px;

  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
  margin: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Weather() {
  return (
    <WeatherBox>
      <WeatherText>오늘의 날씨</WeatherText>
      <RealWeather>(날씨 받아와서 띄우기)</RealWeather>
    </WeatherBox>
  );
}

const WeatherBox = styled(Box)`
  width: 365px;
  height: 315px;
  border-radius: 30px;
  background: linear-gradient(1.51deg, #ebf1ff 5.34%, #f2f5fe 72.41%);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherText = styled(Box)`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin: 18px;
`;

const RealWeather = styled(Box)``;

function Main() {
  // api server에서 username을 받아와야함
  //  const [username, setUsername] = useState();
  const username = '김윤주';
  return (
    <MainLayout>
      <Header>
        <Logo />
        <UserName username={username} />
      </Header>
      <Body>
        <UserInfo>
          <Hello username={username} />
          <Profile username={username} />
          <Weather />
        </UserInfo>
        {/*<TodayOOTD></TodayOOTD>
        <Calendar></Calendar>*/}
      </Body>
    </MainLayout>
  );
}

const MainLayout = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Header = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Body = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Main;

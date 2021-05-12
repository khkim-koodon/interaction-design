import styled from 'styled-components';
import BigBtn from '../../../components/big-btn';
import NavigationBar from '../../../components/nav-bar';
import H227px400 from '../../../foundation/typography/h2-27px-400';
import H227px700 from '../../../foundation/typography/h2-27px-700';
import P314px400 from '../../../foundation/typography/p3-14px-400';
import EventBox from '../../../components/consignment/event-box';
import CommissionInformation from '../../../components/consignment/commission-information';
import WhatCanKoodonDoForYou from '../../../components/consignment/do-for-you';

const ConsignmentHome = () => {
  return (
    <>
      {/* NavigationBar 교체 필요 */}
      <NavigationBar rightAction="channelTalk" />
      <Main>
        {/* marginTop Production에서 수정 필요 */}
        <H227px700 color="black" marginTop="64px">
          중고 명품 판매
        </H227px700>
        <H227px400 color="black" marginTop="-2px">
          쿠돈이 대신해드릴게요
        </H227px400>

        <P314px400 color="gray3" marginTop="16px">
          쿠돈이 무엇을 도와주나요? 🤔
        </P314px400>

        <WhatCanKoodonDoForYou />

        <EventBox />

        <CommissionInformation />

        {/* BigButton 교체 필요 */}
        <BigButtonWrap>
          <BigBtn //
            text="판매 대행 신청서 작성"
            textColor="white"
            validation={true}
          />
        </BigButtonWrap>
      </Main>
    </>
  );
};

export default ConsignmentHome;

const Main = styled.main`
  overflow-x: hidden; // 애니메이션 작동 시 width 작아지는 문제 해결
  overflow-y: auto;
  max-width: 480px;
  margin: 0 auto;
  padding-bottom: 160px;
  min-height: 100vh;
  box-shadow: 0px 0px 19px 0px rgb(0, 0, 0, 0.16);
  text-align: center;

  h2 {
    letter-spacing: -0.8px;
  }
`;

const BigButtonWrap = styled.div`
  position: fixed;
  bottom: 63px; // 48 + 1 + 16
  left: 16px;
  right: 16px;
  max-width: 448px;
  margin: 0 auto;
`;

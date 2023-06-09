import styled from "styled-components";

export const StudyTitleWrapper = styled.div`
  display: flex;
`;
export const StudyLogoImg = styled.img``;
export const StudyTitle = styled.h2`
  font-family: "Istok Web";
  font-style: normal;
  font-weight: 700;
  font-size: 68px;
  color: #ffc742;
`;
export const RegisterWraper = styled.div`
  display: flex;
  align-items: center;
  white-space: no;
`;
export const StudySearchingBarWrap = styled.div`
  margin-left: 349px;
  border: 2.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 13px;
  width: 359px;
  display: flex;
  height: 50px;
  align-items: center;
`;


export const StudySearchingBar = styled.input`
  width: 100%;
  border: 1px none black;
  padding-right: 132px;
`;
export const StudyWrapper = styled.div`
  width: 1176px;

  margin: 0 auto;
  padding: 39px 23px 12px 12px;
`;

export const StudyContents = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  border: 2.5px solid rgba(238, 110, 3, 0.2);
  border-radius: 47.5px;
`;
export const StudyContentsElement = styled.li`
  padding: 17px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  border-radius: 24px;
  width: 281px;
  text-align: center;
  background: linear-gradient(
    90deg,
    #ffc642 0%,
    rgba(255, 238, 199, 0.0260417) 251.08%
  );
  transition: 3s;
`;
export const SemiWrapper2 = styled.div`
  width: 100%;
  display: flex;
  margin-left: 180px;
`;

export const SemiStudy = styled.ul`
  width: 144px;
  height: 40px;
  transition: 3s;
  background-color: #fcfbe9;
  border: 1px solid rgba(240, 180, 39, 0.5);
  border-radius: 13px;
  padding: 6px 5px 17px 13px;
  text-align: center;
  align-items: center;
  list-style: none;
  margin-right: 11px;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  color: rgba(100, 100, 100, 1);
`;

export const SemiStudyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchingBarWrap = styled.div`
  margin-left: 349px;
  border: 2.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 13px;
  width: 359px;
  display: flex;
  height: 50px;
  align-items: center;
`;

export const SearchingBar = styled.input`
  width: 100%;
  border: 1px none black;
  padding-right: 132px;
`;
export const RegisterWrap = styled.div`
  display: flex;
  align-items: center;
  white-space: no;
`;

export const RegisterStudyWrapper = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
`;

export const StudyContentsUI = styled.div`
  width: 1062px;
  border: 2px solid rgba(187, 187, 187, 0.67);
  border-radius: 25px;
  display: flex;
  margin: 16px auto;
  font-family: "Inter";
`;
export const StudyRecruit = styled.div`
  background: #ee6e03;
  border-radius: 47px;
  width: 141px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;
export const StudyRecruitIcon = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
`;
export const StudyRecruitIconPeople = styled.span`
  margin: 15px 25px;
  display: flex;
  gap: 5px;
`;
export const StudyRecruitTextContentsWrap = styled.div``;
export const StudyRecruitText = styled.p`
  width: 633px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const StudyIcon = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  flex-shrink: 0;
`;

export const StudyRecruitTextContentsDiv = styled.div`
  display: flex;
  gap: 4px;
`;
export const StudyRecruitTextContentsWrapIcon = styled.span`
  background: #e9e9e9;
  border: 1px solid #d2d2d2;
  border-radius: 47px;
  padding: 5px 8px;
  gap: 3px;
`;

export const RegiststerDataDiv = styled.div`
  cursor: pointer;
`;

export const RegisterTextButton = styled.button`
  background: #82b52e;
  border: 2.5px solid #709d25;
  border-radius: 13px;
  padding: 12px 25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.07em;
  color: #ffffff;
`;

export const wholeText = styled.div``;

export const PromotionContentsElements = styled.div`
  background: linear-gradient(
    90deg,
    #ffc642 0%,
    rgba(255, 238, 199, 0.0260417) 251.08%
  );
  transition: 3s;

  cursor: pointer;
  &.selected {
    background-color: blue;
  }
`;

// 여기서부터 card 디자인
export const CardContainer = styled.div`
  margin: 17px 0;
  display: flex;
  column-gap: 34px;
  row-gap: 70px;
  flex-wrap: wrap;
`;

export const CardWrap = styled.div`
  background-color: #fff;
  box-shadow: 0 16px 33px 1px rgba(0, 0, 0, 15%);
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 19px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 256px;
  height: 379px;
`;

export const CompanyText = styled.p`
  font-size: 15px;
  color: #646464;
  text-align: center;
  line-height: 22px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

export const CardTitle = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-top: 0;
  margin-bottom: 15px;
  letter-spacing: -0.02em;
`;

export const PromotionWrap = styled.div`
  display: flex;
  column-gap: 3px;
  justify-content: center;
`;

export const PromotionBox = styled.div`
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.37);
  border: 1.7px solid #a2df3c;
  border-radius: 6px;
  padding: 4px 6px;

  color: #587a20;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
`;

export const CardDetailText = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #797979;
  margin-top: 10px;
`;

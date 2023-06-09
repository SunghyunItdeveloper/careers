import { Textarea } from "@mui/joy";
import styled from "styled-components";

export const StudyFormWholeWrap = styled.div`
  width: 100%;
  background: #f6f6f6;
`;
export const StudyRegisterButton = styled.button`
  margin-top: 20px;
  padding: 9px 19px;
  background: #ee6e03;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  outline: none;
  border-style: none;
  margin-right: 10px;
  width: 148px;
`;
export const StudyFormWrapper = styled.div`
  width: 100%;
  max-width: 1062px;
  margin: 0 auto;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  font-family: "Inter";
  font-style: normal;
`;

export const StudyFormFont = styled.h2`
  font-size: 30px;
  font-weight: 600;
  font-family: "Inter";
  margin-bottom: 48px;
`;

export const StudyFormRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StudyContentsWrap = styled.div`
  margin-bottom: 24px;
`;

export const StudyTitleTextWrap = styled.div`
  margin-bottom: 16px;
`;

export const LineStudy = styled.div`
  border: 3px solid #e9e9e9;
  width: 100%;
  max-width: 982px;
  margin: 75px auto;
`;

export const StudyTextForm = styled(Textarea)({
  width: "100%",
  height: "639px",
  borderRadius: "4px",
  marginBottom: "51px",
});

export const StudyTextFormWrap = styled.div`
  margin-left: 48px;
  padding-top: 48px;
  width: 100%;
  max-width: 982px;
  margin: 0 auto;
`;

export const StudyRegisterWrap = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  max-width: 1062px;
  margin-top: 40px;
`;

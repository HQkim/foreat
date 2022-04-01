import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Plus from "assets/img/Plus.png"
import Button2 from "components/commons/Button2";

const SubTheme = styled.div`
  margin-top: 3rem;
`

const SubTitle = styled.div`
  font-size: 25px;
`

const Sub = styled.div`
  font-size: 15px;
  color: #8C8B8B;
  margin-top: 1rem;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
`

const PLUS = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  border-radius: 4rem;
  height: 8rem;
  width: 8rem;
  cursor: pointer;
`;

const ImageSub = styled.div`
  font-size: 15px;
  margin-top: 1rem;
  font-weight: bold;

`;

const DislikedIngredient = styled.div`
`

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DietaryRestrictions = ({ on, setWidgetId, surveyList }) => {
  const [cholesterolShow, setCholesterolShow] = useState(surveyList.cholesterol);
  const [sodiumShow, setSodiumShow] = useState(surveyList.sodium);
  const [sugarShow, setsugarShow] = useState(surveyList.sugar);
  const [interestShow, setInterestShow] = useState();

  useEffect(() => {
    setCholesterolShow(surveyList.cholesterol)
    setSodiumShow(surveyList.sodium)
    setsugarShow(surveyList.sugar)
    if (surveyList.cholesterol === false && surveyList.sodium === false
      && surveyList.sugar === false) {setInterestShow(true)}
  }, [surveyList])

    return (
      <DislikedIngredient>
        <SubTheme>
          <SubTitle>Dietary Restrictions</SubTitle>
          <Sub>Click ‘ADD Dietary Restrictions’ and Add ingredient that you don’t like.</Sub>
        </SubTheme>

        <Item>
        <BoxContainer>
        <div style={{ width: "40rem" }}>
          <SpaceBetweenContainer>
            <Button2
              bc={cholesterolShow ? on : ""}
              name="Low cholesterol"
            />
            <Button2
              bc={sodiumShow ? on : ""}
              name="Low sodium"
            />
                        <Button2
              bc={sugarShow ? on : ""}
              name="Low sugar"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2
              bc={interestShow ? on : ""}
              name="No interest"
            />
            <PLUS
              onClick={() => {
                if (setWidgetId) setWidgetId("M02");
              }}
            >
              <Image src={Plus}/>
              <ImageSub>ADD Infos</ImageSub>
            </PLUS>


          </SpaceBetweenContainer>
        </div>
      </BoxContainer>
        </Item>
      </DislikedIngredient>
          
      );
    }
  
  export default DietaryRestrictions;
  
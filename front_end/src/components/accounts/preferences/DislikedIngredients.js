import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Plus from "assets/img/Plus.png"
import Rosemary from "assets/img/Ingredient_rosemary.jpg"

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

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem;
`;

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

const DislikedIngredients = ({setWidgetId}) => {
    return (
      <DislikedIngredient>
        <SubTheme>
          <SubTitle>DislikedIngredients</SubTitle>
          <Sub>Click ‘ADD DISLIKED INGREDIENTS’ and Add ingredient that you don’t like.</Sub>
        </SubTheme>

        <Item>
          <ImageContainer>
            <Image src={Rosemary}/>
            <ImageSub>VEGETARIAN</ImageSub>
          </ImageContainer>
            
          <ImageContainer>
            <PLUS
              onClick={() => {
                if (setWidgetId) setWidgetId("M03");
              }}
            >
              <Image src={Plus}/>
              <ImageSub>ADD DIETS</ImageSub>
            </PLUS>
          </ImageContainer>
        </Item>
      </DislikedIngredient>
          
      );
    }
  
  export default DislikedIngredients;
  
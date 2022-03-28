import React, { useState } from 'react';
import styled from "styled-components";


const Container = styled.div`
  min-height: 100vh;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${(props) => (props.fs ? props.fs : "3rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "300")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
`

const Question = styled.div`
  display: flex;
  justify-content: center;
  .line {
    width: 100%;
    height: 1.2rem;
    background-color: #ED8141;
  }
  .box {
    width: 50rem;
    height: 37rem;
    border: 0px solid grey;
    box-shadow: 3px 5px 5px 5px #d3d3d3;
  }
  .number {
    display: flex;
    justify-content: flex-end;
    margin: 1.5rem 1.5rem 0 0;
  }
`

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const Button = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 1px 1px 10px 3px #e2e2e2;
  width: ${(props) => (props.w ? props.w : "")};
  height: ${(props) => (props.h ? props.h : "")};
  background-color: white;
  border: 1px solid grey;
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  &:hover {
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : "#000"};
  }
`

const NextButton =styled.button`
  display: flex;
  float: right;
  margin: 1.5rem 3rem 0 0;
  font-size: 1.2rem;
  font-weight: 100;
  cursor: pointer;
  background-color: white;
  border: none;
`

const GoalSurvey = () => {
  return (
    <>
    <Container>
        <Question>
          <div className='box'>
            <div className='line'></div>
            <div className='number'>6/6</div>
            <Title fs="2.5rem" fw="300" mt="2rem" mb="1rem">Select your information</Title>
            <Title fs="1.2rem" fw="200" mb="1rem">Check your diet goal.</Title>
            <BoxContainer>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  <Button mt="1rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    Beginner cook
                  </Button>
                  <Button mt="1rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    Try new cuisin
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    Save time
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    Eat healty
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    Try diet
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    No interest
                  </Button>
                </SpaceBetweenContainer>
              </div>
            </BoxContainer>
            <NextButton>Continue</NextButton>
          </div>
        </Question>
      </Container>
    </>
  )
}


export default GoalSurvey;
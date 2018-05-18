import React from 'react';
import styled from 'styled-components';

import AnswersList from '../AnswersList/Container';
import NewAnswer from '../NewAnswer/Container';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


const Title = styled.h1``;


const Description = styled.div`
  font-size: 12pt;
  margin: 10px;
  padding: 15px 0;
`;


const QuestionPage = ({ question, author }) => (
  <Wrapper>
    <Title>{question.title}</Title>

    <div>By: <strong>{author.profile.fullName}</strong></div>

    <Description>{question.description}</Description>

    <AnswersList />

    <NewAnswer />
  </Wrapper>
);


export default QuestionPage;

import React from "react";
import styled from "styled-components";

const resultsList = [
  {
    date: "13.09.2021",
    media: "Комсомольская правда KP.RU",
    title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
    sort: "Технические новости",
    src: "../assets/screen2.svg",
    article:
      "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.",
    articleTwo:
      "Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
    words: "2 543 слова",
  },
  {
    date: "15.10.2021",
    media: "VC.RU",
    title:
      "Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций",
    sort: "Технические новости",
    src: "../assets/screen1.svg",
    article:
      "Кто такой Data Scientist и чем он занимается? Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один.",
    articleTwo:
      "В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу.",
    words: "3 233 слова",
  },
];

const ResultsContainer = styled.div`
  width: 91%;
  margin: 0 auto;
  margin-top: 5.8rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ResultItem = styled.div`
  width: 49%;
  background: #ffffff;
  box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 1.9rem 3rem 3.5rem 3rem;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const TextSpan = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.02em;
  color: #949494;
  @media (max-width: 375px) {
    font-size: 1.2rem;
    margin-left: 2rem;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3.1rem;
  letter-spacing: 0.02em;
  color: #000000;
  margin-top: 2.4rem;
  @media (max-width: 425px) {
    font-size: 1.9rem;
  }
`;
const Sort = styled.div`
  width: 15.7rem;
  height: 2.2rem;
  background: #ffb64f;
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  color: #000000;
  text-align: center;
  padding-top: 0.2rem;
  margin-top: 1.4rem;
`;
const SpansContainer = styled.div`
  max-width: 35rem;
  display: flex;
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 18rem;
  margin-top: 1.4rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const Article = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.02em;
  color: #000000;
  opacity: 0.5;
  margin-top: 2rem;
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

const ArticleTwo = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.02em;
  color: #000000;
  opacity: 0.5;
  margin-top: 2rem;
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

const SearchBtn = styled.button`
  width: 22rem;
  height: 5rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.02em;
  color: #000000;
  background: #7ce3e1;
  border: none;
  border-radius: 0.5rem;
  margin-top: 3.2rem;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 20rem;
  }
  @media (max-width: 375px) {
    width: 16rem;
    font-size: 1.4rem;
  }
`;

const LowBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Results() {
  const element = resultsList.map((item, index) => (
    <ResultItem key={index}>
      <SpansContainer>
        <TextSpan>{item.date}</TextSpan>
        <TextSpan>{item.media}</TextSpan>
      </SpansContainer>
      <Title>{item.title}</Title>
      <Sort>{item.sort}</Sort>
      <ImgContainer>
        <img src={item.src} alt="" />
      </ImgContainer>
      <Article>{item.article}</Article>
      <ArticleTwo>{item.articleTwo}</ArticleTwo>
      <LowBox>
        <SearchBtn>Читать в источнике</SearchBtn>
        <TextSpan>{item.words}</TextSpan>
      </LowBox>
    </ResultItem>
  ));
  return <ResultsContainer>{element}</ResultsContainer>;
}

export default Results;

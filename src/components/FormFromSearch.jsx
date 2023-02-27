import React from "react";
import Checkbox from "./Checkbox";
import styled from "styled-components";

const Labels = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FormContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.form`
  width: 65%;
  padding: 2.1rem 3.9rem 3.2rem 4.4rem;
  background: #ffffff;
  box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  @media (max-width: 649px) {
    width: 100%;
    margin-bottom: 2.4rem;
  }
  @media (max-width: 375px) {
    padding: 2.4rem 2.6rem 3.7rem 1.4rem;
  }
`;
const Label = styled.label`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.2rem;
  /* identical to box height */
  letter-spacing: 0.03em;
  color: #000000;
`;

const Input = styled.input`
  width: 24.2rem;
  height: 4.3rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  background: #ffffff;
  border: 0.1rem solid #c7c7c7;
  box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  text-align: center;
  color: #949494;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const DateInput = styled.input`
  width: 17.6rem;
  height: 4.3rem;
  margin-top: 2rem;
  margin-right: 2rem;
  margin-bottom: 3rem;
  background: #ffffff;
  border: 0.1rem solid #c7c7c7;
  box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  text-align: center;
  color: #949494;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DateInputContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Select = styled.select`
  width: 24.2rem;
  height: 4.3rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  background: #ffffff;
  border: 0.1rem solid #c7c7c7;
  box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  text-align: center;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const LowFormContent = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: start;
  }
`;

const SubmithBtn = styled.button`
  width: 30.5rem;
  height: 5.9rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.7rem;
  color: #ffffff;
  background: #5970ff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 5rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;
const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 950px) {
    display: none;
  }
`;

const FormDescribe = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  /* identical to box height */
  letter-spacing: 0.03em;
  color: #949494;
  margin-top: 1rem;
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;
const FirstLow = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const SecondLow = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
function FormFromSearch(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormContent>
        <Labels>
          <Label htmlFor="number">
            ИНН компании<span>*</span>
          </Label>
          <Input type="number" placeholder="10 цифр" />
          <Label htmlFor="number">Тональность</Label>
          <Select onChange={() => {}}>
            <option value="any">Любая</option>
            <option value="any">Любая</option>
            <option value="any">Любая</option>
          </Select>
          <Label htmlFor="number">
            Количество документов в выдаче<span>*</span>
          </Label>
          <Input type="number" placeholder="от 1 до 100" />
        </Labels>

        <Checkboxes>
          {/* Checkbox */}
          <Checkbox text="Признак максимальной полноты" />
          <Checkbox text="Упоминания в бизнес-контексте" />
          <Checkbox text="Главная роль в публикации" />
          <Checkbox text="Публикации только с риск-факторами" />
          <Checkbox text="Включать технические новости рынков" />
          <Checkbox text="Включать анонсы и календари" />
          <Checkbox text="Включать сводки новостей" />
          {/* Checkbox */}
        </Checkboxes>
      </FormContent>
      <LowFormContent>
        <FirstLow>
          <Label htmlFor="number">
            Диапазон поиска<span>*</span>
          </Label>
          <DateInputContainer>
            <DateInput type="date" placeholder="Дата начала" />
            <DateInput type="date" placeholder="Дата конца" />
          </DateInputContainer>
        </FirstLow>
        <SecondLow>
          <SubmithBtn onClick={() => props.succesfull()}>Поиск</SubmithBtn>
          <FormDescribe>* Обязательные к заполнению поля</FormDescribe>
        </SecondLow>
      </LowFormContent>
    </FormContainer>
  );
}

export default FormFromSearch;

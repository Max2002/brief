import { useState } from "react";
import { createStructuredSelector } from 'reselect';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getAnswers } from "../../redux/actionCreator/getAnswers";
import { allAnswersSelector } from "../../redux/selectors/answersSelector";
import TextField from "../../components/TextField";
import { Button } from "../Form/styled";
import { FormStyle, Error, Data, Item, Header, Row, Title, Info } from './styled';

const allAnswers = createStructuredSelector({
  answers: allAnswersSelector,
});

export default function Results() {
  const [invalid, setInvalid] = useState(false);
  const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  const { answers } = useSelector(allAnswers);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = ({ login, password }) => {
    if (login === 'admin' && password === 'admin') {
      dispatch(getAnswers());
      setInvalid(false);
      setAuth(true);
    } else {
      setInvalid(true);
      setAuth(false);
    }
  };

  return Object.keys(answers).length === 0 && !auth ? (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        label="Login"
        register={register('login', {
          required: 'Обов`язкове поле!',
        })}
        name="login"
        error={errors.login && errors.login.message}
      />
      <TextField
        type="password"
        label="Password"
        register={register('password', {
          required: 'Обов`язкове поле!',
        })}
        name="password"
        error={errors.password && errors.password.message}
      />
      {invalid && <Error>Логін або пароль не вірний!</Error>}
      <Button name='auth' type='submit'>Log in</Button>
    </FormStyle>
  ) : <Data>{Object.keys(answers).map((key) => {
    const { data: { backgroundInfo, brandInfo, competition,
      country, deadline, email, name, budget, objective, projectName,
      services, shortDescription, stakeHolders, strengths, targetAudience, weaknesses } } = answers[key];

    return <Item key={key}>
      <Header>Запис id: {key}</Header>
      <Row>
        <Title>Name:</Title>
        <Info>{name}</Info>
      </Row>
      <Row>
        <Title>Email:</Title>
        <Info>{email}</Info>
      </Row>
      <Row>
        <Title>Project name:</Title>
        <Info>{projectName}</Info>
      </Row>
      <Row>
        <Title>Project`s country:</Title>
        <Info>{country}</Info>
      </Row>
      <Row>
        <Title>What services or products do your company produce?:</Title>
        <Info>{services}</Info>
      </Row>
      <Row>
        <Title>How are you different from your competition?:</Title>
        <Info>{competition}</Info>
      </Row>
      <Row>
        <Title>Describe your company's strengths:</Title>
        <Info>{strengths}</Info>
      </Row>
      <Row>
        <Title>Describe your company's weaknesses:</Title>
        <Info>{weaknesses}</Info>
      </Row>
      <Row>
        <Title>Describe your project idea:</Title>
        <Info>{shortDescription}</Info>
      </Row>
      <Row>
        <Title>What do you want to get as a result?:</Title>
        <Info>{objective}</Info>
      </Row>
      <Row>
        <Title>Who are the key stakeholders? Who's the owner/sponsor?:</Title>
        <Info>{stakeHolders}</Info>
      </Row>
      <Row>
        <Title>Budget:</Title>
        <Info>{budget}</Info>
      </Row>
      <Row>
        <Title>Deadline:</Title>
        <Info>{deadline}</Info>
      </Row>
      <Row>
        <Title>Target audience:</Title>
        <Info>{targetAudience}</Info>
      </Row>
      <Row>
        <Title>Brand info:</Title>
        <Info>{brandInfo}</Info>
      </Row>
      <Row>
        <Title>Background info:</Title>
        <Info>{backgroundInfo}</Info>
      </Row>
    </Item>;
  })}</Data>;
}
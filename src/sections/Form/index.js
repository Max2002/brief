import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { codeSelector } from "../../redux/selectors/briefSelector";
import { recoverCode } from "../../redux/actionCreator/postBrief";
import { postBrief } from "../../redux/actionCreator/postBrief";
import TextField from "../../components/TextField";
import { FormStyle, Button, PopUp, Text } from './styled';

const codeResponse = createStructuredSelector({
  code: codeSelector,
});

export default function Form() {
  const dispatch = useDispatch();
  const { code } = useSelector(codeResponse);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      country: '',
      shortDescription: '',
      objective: '',
      budget: '',
      deadline: '',
      targetAudience: '',
      backgroundInfo: '',
      projectName: '',
      stakeHolders: '',
      services: '',
      competition: '',
      strengths: '',
      weaknesses: '',
      brandInfo: ''
    },
  });

  const onSubmit = (data) => {
    dispatch(postBrief(data));
    reset();
  }

  return code !== '' ? (
    <PopUp>
      <Text>{code === '200' ? "Форма успішно надіслана" : "Щось пішло не так :( Спробуйте іще раз"}</Text>
      <Button onClick={() => dispatch(recoverCode())}>{code === '200' ? "Повернутися" :
        "Спробувати іще раз"}</Button>
    </PopUp>
  ) : (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        label="Your name"
        register={register('name', {
          required: 'Обов`язкове поле!',
        })}
        name="name"
        error={errors.name && errors.name.message}
      />
      <TextField
        type="email"
        label="Your email"
        register={register('email', {
          required: 'Обов`язкове поле!',
        })}
        name="email"
        error={errors.email && errors.email.message}
        placeholder="test@gmail.com"
      />
      <TextField
        type="text"
        label="Project name"
        register={register('projectName', {
          required: 'Обов`язкове поле!',
        })}
        name="projectName"
        error={errors.projectName && errors.projectName.message}
      />
      <TextField
        type="text"
        label="Project`s country"
        register={register('country', {
          required: 'Обов`язкове поле!',
        })}
        name="country"
        error={errors.country && errors.country.message}
      />
      <TextField
        type="text"
        label="What services or products do your company produce?"
        register={register('services', {
          required: 'Обов`язкове поле!',
        })}
        name="services"
        error={errors.services && errors.services.message}
      />
      <TextField
        type="text"
        label="How are you different from your competition?"
        register={register('competition', {
          required: 'Обов`язкове поле!',
        })}
        name="competition"
        error={errors.competition && errors.competition.message}
      />
      <TextField
        type="text"
        label="Describe your company's strengths"
        register={register('strengths', {
          required: 'Обов`язкове поле!',
        })}
        name="strengths"
        error={errors.strengths && errors.strengths.message}
      />
      <TextField
        type="text"
        label="Describe your company's weaknesses"
        register={register('weaknesses', {
          required: 'Обов`язкове поле!',
        })}
        name="weaknesses"
        error={errors.weaknesses && errors.weaknesses.message}
      />
      <TextField
        type="text"
        label="Describe your project idea"
        register={register('shortDescription', {
          required: 'Обов`язкове поле!',
        })}
        name="shortDescription"
        error={errors.shortDescription && errors.shortDescription.message}
      />
      <TextField
        type="text"
        label="What do you want to get as a result?"
        register={register('objective', {
          required: 'Обов`язкове поле!',
        })}
        name="objective"
        error={errors.objective && errors.objective.message}
      />
      <TextField
        type="text"
        label="Who are the key stakeholders? Who's the owner/sponsor?"
        register={register('stakeHolders', {
          required: 'Обов`язкове поле!',
        })}
        name="stakeHolders"
        error={errors.stakeHolders && errors.stakeHolders.message}
      />
      <TextField
        type="text"
        label="Budget"
        register={register('budget', {
          required: 'Обов`язкове поле!',
        })}
        name="budget"
        error={errors.budget && errors.budget.message}
      />
      <TextField
        type="date"
        label="Deadline"
        register={register('deadline', {
          required: 'Обов`язкове поле!',
        })}
        name="deadline"
        error={errors.deadline && errors.deadline.message}
      />
      <TextField
        type="text"
        label="Target audience"
        register={register('targetAudience', {
          required: 'Обов`язкове поле!',
        })}
        name="targetAudience"
        error={errors.targetAudience && errors.targetAudience.message}
      />
      <TextField
        type="text"
        label="Brand info"
        register={register('brandInfo', {
          required: 'Обов`язкове поле!',
        })}
        name="brandInfo"
        error={errors.brandInfo && errors.brandInfo.message}
        placeholder='colour palette, fonts, slogan'
      />
      <TextField
        type="text"
        label="Background info"
        register={register('backgroundInfo', {
          required: 'Обов`язкове поле!',
        })}
        name="backgroundInfo"
        error={errors.backgroundInfo && errors.backgroundInfo.message}
        placeholder='Additional information that may be useful'
      />
      <Button name='submitForm' type='submit'>Відправити</Button>
    </FormStyle>
  );
}
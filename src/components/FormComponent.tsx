import React from 'react';

interface FormProps {
  formData: {
    name: string;
    email: string;
    password: string;
  };
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormComponent: React.FC<FormProps> = ({
  formData,
  onSubmitHandler,
  onFormChange,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        name='name'
        required
        type='text'
        placeholder='Name'
        value={formData.name}
        onChange={onFormChange}
      />
      <input
        name='email'
        required
        type='email'
        placeholder='Email'
        value={formData.email}
        onChange={onFormChange}
      />
      <input
        required
        name='password'
        type='password'
        placeholder='Password'
        value={formData.password}
        onChange={onFormChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormComponent;

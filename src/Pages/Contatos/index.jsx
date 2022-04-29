import ChatBot from 'react-simple-chatbot';
import * as C from './styles'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';


class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export const Contatos = () => {
  

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#E61B2B',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#E61B2B',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  const steps = [
    {
      id: '1',
      message: 'Olá, qual é o seu nome?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}! What is your gender?',
      trigger: 'gender',
    },
    {
      id: 'gender',
      options: [
        { value: 'male', label: 'Male', trigger: '5' },
        { value: 'female', label: 'Female', trigger: '5' },
      ],
    },
    {
      id: '5',
      message: 'How old are you?',
      trigger: 'age',
    },
    {
      id: 'age',
      user: true,
      trigger: '7',
      validator: (value) => {
        if (isNaN(value)) {
          return 'value must be a number';
        } else if (value < 0) {
          return 'value must be positive';
        } else if (value > 120) {
          return `${value}? Come on!`;
        }

        return true;
      },
    },
    {
      id: '7',
      message: 'Great! Check out your summary',
      trigger: 'review',
    },
    {
      id: 'review',
      component: <Review />,
      asMessage: true,
      trigger: 'update',
    },
    {
      id: 'update',
      message: 'Would you like to update some field?',
      trigger: 'update-question',
    },
    {
      id: 'update-question',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'update-yes' },
        { value: 'no', label: 'No', trigger: 'end-message' },
      ],
    },
    {
      id: 'update-yes',
      message: 'What field would you like to update?',
      trigger: 'update-fields',
    },
    {
      id: 'update-fields',
      options: [
        { value: 'name', label: 'Name', trigger: 'update-name' },
        { value: 'gender', label: 'Gender', trigger: 'update-gender' },
        { value: 'age', label: 'Age', trigger: 'update-age' },
      ],
    },
    {
      id: 'update-name',
      update: 'name',
      trigger: '7',
    },
    {
      id: 'update-gender',
      update: 'gender',
      trigger: '7',
    },
    {
      id: 'update-age',
      update: 'age',
      trigger: '7',
    },
    {
      id: 'end-message',
      message: 'Thanks! Your data was submitted successfully!',
      end: true,
    },
  ]

  return (
    <C.Container>
      <C.Form>
        <h1>Como podemos te ajudar?</h1>

        <h3>Seu nome</h3>
        <input type="text" />
        <h3>E-mail</h3>
        <input type="email" />

      </C.Form>
      <C.Chat>
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="Chat Tools Software"
            steps={steps}
          />
        </ThemeProvider>
      </C.Chat>
    </C.Container>
  )
}

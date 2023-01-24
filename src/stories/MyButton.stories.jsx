import React from 'react';
import '../assets/styles/_all.scss';
import MyButton from '../components/MyButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'MyProject/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dark: true,
  label: 'My Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  dark: false,
  label: 'My Secondary Button',
};
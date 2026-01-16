import React from 'react';
import { Button } from '../components/Button';
import { generateCSSVariables } from '../tokens/transform';

// Generate CSS variables for Storybook
const cssVars = generateCSSVariables('light');

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
  },
};

// Template for creating stories
const Template = (args) => <Button {...args} cssVars={cssVars} />;

// Primary Button Stories
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  children: 'Primary Button',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  variant: 'primary',
  size: 'small',
  children: 'Small Button',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  variant: 'primary',
  size: 'large',
  children: 'Large Button',
};

// Secondary Button Stories
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  children: 'Secondary Button',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  variant: 'secondary',
  size: 'small',
  children: 'Small Button',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  variant: 'secondary',
  size: 'large',
  children: 'Large Button',
};

import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { generateCSSVariables } from '../tokens/transform';

const cssVars = generateCSSVariables('light');

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Optional card title',
    },
  },
};

const Template = (args) => <Card {...args} cssVars={cssVars} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  children: (
    <div>
      <p style={{ margin: '0 0 16px 0' }}>
        This is a card component using design tokens for padding, border radius, and background color.
      </p>
      <Button cssVars={cssVars}>Card Action</Button>
    </div>
  ),
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  children: (
    <div>
      <p style={{ margin: '0 0 16px 0' }}>
        Cards are flexible containers for grouping related content.
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="primary" cssVars={cssVars}>Primary</Button>
        <Button variant="secondary" cssVars={cssVars}>Secondary</Button>
      </div>
    </div>
  ),
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  title: 'Simple Card',
  children: (
    <p style={{ margin: 0 }}>
      A simple card with just text content and no actions.
    </p>
  ),
};

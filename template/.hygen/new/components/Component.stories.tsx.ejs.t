---
to: <%= dir_name %>/<%= category %>/<%= component_name %>/<%= component_name %>.stories.tsx
---

import { Meta, Story } from '@storybook/react';
import { ComponentProps } from "react";

import { <%= component_name %> } from '.';

const meta: Meta = {
    title: '<%= dir_name %>/<%= category %>/<%= component_name %>',
    component: <%= component_name %>,
}

export default meta;

const Template: Story<ComponentProps<typeof <%= component_name %>>> = (args) => <<%= component_name %> {...args} />;

export const Default = Template.bind({});
Default.args = {};

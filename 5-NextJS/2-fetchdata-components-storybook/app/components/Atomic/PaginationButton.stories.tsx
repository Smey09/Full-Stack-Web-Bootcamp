import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import PaginationButton, { PaginationButtonProps } from "./PaginationButton";

export default {
  title: "UI/atoms/PaginationButton",
  component: PaginationButton,
} as Meta;

const Template: StoryFn<PaginationButtonProps> = (args) => (
  <PaginationButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pageNumber: 1,
  isActive: false,
  onClick: (pageNumber) => console.log(pageNumber),
};

export const Active = Template.bind({});
Active.args = {
  pageNumber: 1,
  isActive: true,
  onClick: (pageNumber) => console.log(pageNumber),
};

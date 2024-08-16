import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import PaginationControls from "./PaginationControls";
import { PaginationControlsProps } from "./PaginationControls";

export default {
  title: "UI/molecules/PaginationControls",
  component: PaginationControls,
} as Meta;

const Template: StoryFn<PaginationControlsProps> = (args) => (
  <PaginationControls {...args} />
);

export const Default = Template.bind({});
Default.args = {
  totalPages: 5,
  currentPage: 1,
  onPageChange: (pageNumber) => console.log(pageNumber),
};

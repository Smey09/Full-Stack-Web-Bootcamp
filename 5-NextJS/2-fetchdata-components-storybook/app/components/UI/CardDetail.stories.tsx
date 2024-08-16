import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProductDetails, { ProductDetailsProps } from "../CardDetail";

export default {
  title: "UI/Card/ProductDetails",
  component: ProductDetails,
} as Meta;

const Template: StoryFn<ProductDetailsProps> = (args) => (
  <ProductDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  thumbnail: "https://via.placeholder.com/150",
  title: "Sample Product",
  price: 99.99,
  description: "This is a sample product description.",
};

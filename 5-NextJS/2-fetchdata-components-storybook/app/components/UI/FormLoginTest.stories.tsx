import type { Meta, StoryObj } from "@storybook/react";

import { userEvent, within, expect } from "@storybook/test";

import { LoginForm } from "../LoginForm";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};
export default meta;

// export default {
//   title: "UI/Card/LoginForm",
//   component: LoginForm,
// } as Meta;

type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId("email"), "email@provider.com");

    await userEvent.type(canvas.getByTestId("password"), "a-random-password");

    await userEvent.click(canvas.getByRole("button"));

    // 👇 Assert DOM structure
    await expect(
      canvas.getByText("Everything is perfect. Nice!")
    ).toBeInTheDocument();
  },
};

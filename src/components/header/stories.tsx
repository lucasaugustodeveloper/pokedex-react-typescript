import type { Meta, StoryObj } from '@storybook/react'

import Header from './index'

const meta: Meta<typeof Header> = {
  component: Header,
}

type Story = StoryObj<typeof Header>

export const Basic: Story = {
  render: () => <Header />,
}

export default meta

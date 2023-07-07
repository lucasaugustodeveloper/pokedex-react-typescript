import type { Meta, StoryObj } from '@storybook/react'

import Search from './index'

const meta: Meta<typeof Search> = {
  component: Search,
}

type Story = StoryObj<typeof Search>

export const Basic: Story = {
  render: () => <Search />,
}

export default meta

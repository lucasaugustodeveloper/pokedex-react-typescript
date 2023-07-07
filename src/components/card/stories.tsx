import type { Meta, StoryObj } from '@storybook/react'

import Card from './index'

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {
    skills: {
      control: { type: 'array' },
      table: {
        category: 'Skills'
      }
    }
  }
}

type Story = StoryObj<typeof Card>

export const Basic: Story = {
  render: (args) => <Card {...args} />,
}

Basic.args = {
  name: 'Balbusaur',
  skills: ['Grass', 'Poison'],
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
}

export default meta

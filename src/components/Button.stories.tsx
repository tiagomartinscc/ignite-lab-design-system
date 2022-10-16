import { Button, ButtonPropos } from "./Button"
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account'
    },
    argTypes: {}
} as Meta<ButtonPropos>

export const Default: StoryObj<ButtonPropos> = {}
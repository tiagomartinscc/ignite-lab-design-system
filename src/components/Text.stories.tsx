import { Text, TextPropos } from "./Text"
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextPropos>

export const Default: StoryObj<TextPropos> = {

}

export const Small: StoryObj<TextPropos> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextPropos> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextPropos> = {
    args: {
        asChild: true,
        children: (
            <p>Testando</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }            
        }
    }
}
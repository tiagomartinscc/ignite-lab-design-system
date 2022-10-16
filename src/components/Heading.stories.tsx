import { Heading, HeadingPropos } from "./Heading"
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Heading',
    component: Heading,
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
} as Meta<HeadingPropos>

export const Default: StoryObj<HeadingPropos> = {

}

export const Small: StoryObj<HeadingPropos> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingPropos> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingPropos> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with H1</h1>
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
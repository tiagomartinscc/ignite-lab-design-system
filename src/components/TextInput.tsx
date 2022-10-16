import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { Children, InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export interface TextInputRootProps {
    children: ReactNode;
}

TextInputRoot.displayName = 'TextInput.Root'
function TextInputRoot ({children}: TextInputRootProps ) {
    return (
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-gray-800 focus-within::ring-2 ring-cyan-300'>
            {children}
        </div>
    )
}


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}
TextInputInput.displayName = 'TextInput.Input'
function TextInputInput( props : TextInputInputProps) {
    return (
        <input
            {...props}
            className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
        />
    )
}

export interface TextInputIconInterface {
    children: ReactNode
}

TextInputIcon.displayName = 'TextInput.Icon'
function TextInputIcon( {children} : TextInputIconInterface) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}
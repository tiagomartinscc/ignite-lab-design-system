import { clsx } from 'clsx'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxPropos {
}

export function Checkbox({ }: CheckboxPropos) {

    return (
        <CheckboxPrimitive.Root 
            className={clsx(
                'w-6 h-6 p-[2px] bg-gray-800 rounded',
            )}
        >
            <CheckboxPrimitive.Indicator asChild >
                <Check weight='bold' className='text-cyan-500 h-5 w-5' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}
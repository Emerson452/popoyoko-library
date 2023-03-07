import { forwardRef } from 'react'

import './index.css'

export const FileInput = forwardRef (({ ...rest }, ref) => (
    <input
        type="file"
        ref={ref}
        {...rest}>
    </input>
)) 

import { useEffect } from 'react';

import { useUpload } from '../../../hooks/useUpload';
import { Range } from '../../atoms/Range'
import { UploadTemplate } from '../../templates/'

export const UploadPage = () => {
    const { upload, progress, error } = useUpload()

    if (error) return <p>{error.message}</p>

    return (<>
        <Range value={progress} onChange={() => {}} readOnly></Range>
        <UploadTemplate handleUpload={upload}></UploadTemplate>
    </>)
}

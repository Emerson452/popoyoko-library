import { useEffect, useRef, useState } from "react"

import { Form } from "../../molecules/Form"
import { FormInput } from "../../molecules/FormInput"
import { FileInput, TextInput } from "../../atoms"

export const UploadTemplate = ({ handleUpload }) => {
    const [form, setForm] = useState({ title:"", audio: {} })
    const fileInputRef = useRef()

    const handleResetForm = () => {
        setForm({ title:"", audio: {} });
        fileInputRef.current.value = null
    }

    const handleDragOver = (e) => {
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (let i = 0; i < e.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (e.dataTransfer.items[i].kind === 'file') {
                    const audio = e.dataTransfer.items[i].getAsFile()
                    setForm({ ...form, audio })
                }
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                const audio = e.dataTransfer.files[i]
                setForm({ ...form, audio })
            }
        }        
    }

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.files) {
            const audio = e.target.files[0]
            setForm({ ...form, audio })
        }
    }

    return (
        <Form label="Upload music" onSubmit={() => { handleUpload({ ...form }); handleResetForm() }}>
            <FormInput label="Title">
                <TextInput 
                    name="title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}>
                </TextInput>
            </FormInput>
            <FormInput label="Music file">
                <FileInput
                    ref={fileInputRef}
                    onDrop={handleDrop}
                    onChange={handleChange}
                    onDragOver={handleDragOver}
                    accept="audio/*"
                    multiple={false}>
                </FileInput>
            </FormInput>
        </Form>
    )
}

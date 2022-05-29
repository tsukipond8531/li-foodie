import React, { useState } from 'react'

export function PreviewProfileImg(props) {

    const [preview, setPreview] = useState()

    const reader = new FileReader();
    reader.readAsDataURL(props.file)
    reader.onload = () => {
        setPreview(reader.result) 
    }
    return (
        <img src={preview} alt={preview} className="w-24 h-24"/>
    )
}

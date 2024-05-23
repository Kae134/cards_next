'use client'

import style from './Form.module.css'
import { FormEvent } from 'react'

function Form() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            let response = await fetch('/api/submit', {
                method: "POST",
                body: formData,
            });
            response = await response.json()
            alert(`${response.num}`)
        } catch (error) {
            console.error("Error when submitting :", error)
        }

    }
    return (
            <form className={style.form} onSubmit={handleSubmit}>
                <input className={style.num} type="number" name='number' />
                <input className={style.text} type="text" name='text' />
                <button type='submit'>Submit</button>
            </form>
        )
    }


export default Form
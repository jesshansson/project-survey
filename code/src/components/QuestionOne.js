import React from 'react'

export const QuestionOne = ({name, setName}) => {
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    return (
        <>
        <h2 tabindex='0'>On what email address can we reach you?</h2>
        
        <label for="email-address" aria-label='email address'>
            <input 
            type="text" 
            id="email-address" 
            className='email-input'
            placeholder='example@mail.com'
            value={name} 
            onChange={handleNameChange} 
            required
            />
        </label>

        <div className="image-center">
            <img className='second-image' src='/images/goldenretriever.jpg' alt='Golden retriever dog'/>
        </div>
        </>
    );
}

export default QuestionOne
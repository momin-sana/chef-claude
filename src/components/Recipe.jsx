import React from 'react'
import ReactMarkdown from 'react-markdown'

function Recipe({ recipe }) {
    return (
        <div>
            <section className='suggested-recipe-container'>
                <h2 className="recipe-heading">AI suggests following Recipe:</h2>

                {/* Render the AI-generated recipe using Markdown formatting */}
                <ReactMarkdown>{recipe}</ReactMarkdown>
            </section>
        </div>
    )
}

export default Recipe
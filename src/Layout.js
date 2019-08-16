import React from 'react';

const Layout = (props) => {
    const { question, options, answer, handleResult } = props;
    const handleClick = (e) => {
        if (e.target.value === answer) {
            handleResult(true)
        } else {
            handleResult(false)
        }
    }
    return (
        <>
            <h2 className="text-danger">{question}</h2>
            {
                options.map(option => {
                    return <button onClick={(handleClick)} value={option} className="btn btn-block btn-light">{option}</button>
                })
            }
        </>
    )

}
export default Layout;
import React from 'react'

const componentStateContext = React.createContext()

function ComponentStateProvider(props) {

    const newPostState = React.useState(false)

    const buttonStates = {
        newPostState,
    }
    return (
        <componentStateContext.Provider value={buttonStates}>
            {props.children}
        </componentStateContext.Provider>
    )
}

export { componentStateContext, ComponentStateProvider }

import React from 'react'

export const Layout = ({ children }) => {
    return (
        <div
            style={{
                background: 'linear-gradient(180deg, rgba(255,74,78,1) 0%, rgba(255,92,126,1) 50%)',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                margin: '0',
                padding: '0',
                boxSizing: 'border-box',
                width: '100vw',
                minHeight:'100vh'
            }}>
            {children}
        </div>
    )
}

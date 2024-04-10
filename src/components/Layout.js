import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
return (
<div className='layout'>

    <Navbar />
    <div className="content">
        {/* content for each page */}
    </div>

    { children }

    <footer>
        <p>Copyright 2024 to Sv.Si. Site</p>
    </footer>
</div>
)
}
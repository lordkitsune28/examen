import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Productos from '../components/Productos';
// import SearchScreen from '../components/SearchScreen';


import { Navbar } from '../components/Navbar';


export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Productos />} />
                {/* <Route exact path="/charapters" element={<CharapterList />} />
                <Route exact path="/search" element={<SearchScreen />} /> */}
            </Routes>
        </Router>
    )
}
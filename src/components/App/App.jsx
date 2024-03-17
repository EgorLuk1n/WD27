import React, {useEffect, useState} from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Place from "../Place/Place";
import Loader from "../Loading/Loader.jsx";


function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 5000);
    }, []);

    return (
        (isLoading ? (<Loader/>) : (
            <>

                <Header/>
                <Place/>
            </>)
        )


    )
}

export default App

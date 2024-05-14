import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loading from './components/loading/Loading';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Navbar from './components/navbar/Navbar';

const baseURL = 'https://lidodartcms.tbndesign.dk/wp-json/wp/v2/';

const frontpageURL = `${baseURL}frontpage`;

const fetchURLs = [frontpageURL];

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [frontpage, setFrontpage] = useState(true);

    const fetchData = async () => {
		setIsLoading(true);
		const [frontpageData] = await Promise.all(
		  	fetchURLs.map((url) => fetch(url).then((res) => res.json()))
		);
		setFrontpage(frontpageData[0].acf);
		setIsLoading(false);
	}

    useEffect(() => {
		fetchData();
	}, []);

    if(isLoading) {
		return (
		  <>
			<Loading loading={isLoading} color={'#FF7F50'} />
		  </>
		)
	}

    return (
        <div className="App">
            <ScrollToTop />
            <section className="navMainContainer">
				<Navbar />
			</section>
        </div>
    );
}

export default App;

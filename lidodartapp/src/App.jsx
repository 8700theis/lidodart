import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loading from './components/loading/Loading';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import TopInfoBar from './components/navbar/TopInfoBar';
import Navbar from './components/navbar/Navbar';

import Home from './pages/Home';
import Member from './pages/Member';
import Footer from './components/footer/Footer';

const baseURL = 'https://lidodartcms.tbndesign.dk/wp-json/wp/v2/';

const frontpageURL = `${baseURL}frontpage`;
const memberURL = `${baseURL}member`;

const fetchURLs = [frontpageURL, memberURL];

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [frontpage, setFrontpage] = useState(true);
    const [memberpage, setMemberpage] = useState(true);

    const fetchData = async () => {
		setIsLoading(true);
		const [frontpageData, memberData] = await Promise.all(
		  	fetchURLs.map((url) => fetch(url).then((res) => res.json()))
		);
		setFrontpage(frontpageData[0].acf);
		setMemberpage(memberData[0].acf);
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
				<div className="navMainWrapper">
					<TopInfoBar />
					<Navbar />
				</div>
			</section>
			<section className='mainContent'>
				<Routes>
					<Route path='/' element={<Home frontpageData={frontpage} />} />
					<Route path='/bliv-medlem-af-lido-dartklub' element={<Member memberpageData={memberpage} />} />
				</Routes>
			</section>
			<section className='footerMainContainer'>
				<Footer />
			</section>
        </div>
    );
}

export default App;

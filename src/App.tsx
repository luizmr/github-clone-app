import "react-calendar-heatmap/dist/styles.css";

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Repo from "./pages/Repo";
import Footer from "./components/Footer";
import Repositories from "./pages/Repositories";

import { ThemeName, themes } from "./styles/themes";

function App() {
	const [themeName, setThemeName] = useState<ThemeName>("light");
	const currentTheme = themes[themeName];

	const [search, setSearch] = useState("github");

	return (
		<ThemeProvider theme={currentTheme}>
			<BrowserRouter>
				<Header
					themeName={themeName}
					setThemeName={setThemeName}
					search={search}
					setSearch={setSearch}
				/>

				<Routes>
					<Route path="/" element={<Profile search={search} />} />
					<Route
						path="/:username"
						element={<Profile search={search} />}
					/>
					<Route path="/:username/:reponame" element={<Repo />} />
					<Route
						path="/repositories"
						element={<Repositories search={search} />}
					/>
				</Routes>

				<Footer />

				<GlobalStyles />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;

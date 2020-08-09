import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, GithubLogo, SearchForm } from "./styles";

import { ThemeName } from "../../styles/themes";

interface Props {
	themeName: ThemeName;
	setThemeName: (newName: ThemeName) => void;
	search: string;
	setSearch: (newName: string) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName, setSearch }) => {
	// const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const [value, setValue] = useState("");

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		setSearch(value);
		navigate("/" + value.toLowerCase().trim());
		setValue("");
	}

	function toggleTheme() {
		setThemeName(themeName === "light" ? "dark" : "light");
	}

	return (
		<Container>
			<GithubLogo onClick={toggleTheme} />
			<SearchForm onSubmit={handleSubmit}>
				<input
					placeholder="Enter Username or Repo"
					value={value}
					onChange={(e) => setValue(e.currentTarget.value)}
				/>
			</SearchForm>
		</Container>
	);
};

export default Header;

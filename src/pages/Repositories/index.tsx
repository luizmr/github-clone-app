import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
	Container,
	Main,
	MainSide,
	Repos,
	RepoIcon,
	Tab,
	LinkButton,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

import { APIUser, APIRepo } from "../../@types";

interface Data {
	user?: APIUser;
	repos?: APIRepo[];
	error?: string;
}

interface Props {
	search: string;
}

const Profile: React.FC<Props> = ({ search }) => {
	const { username = search } = useParams();
	const [data, setData] = useState<Data>();

	useEffect(() => {
		console.log("oisossoi");
		Promise.all([
			fetch(`https://api.github.com/users/${username}`),
			fetch(`https://api.github.com/users/${username}/repos`),
		]).then(async (responses) => {
			const [userResponse, reposResponse] = responses;

			if (userResponse.status === 404) {
				setData({ error: "User not found!" });
				return;
			}

			const user = await userResponse.json();
			const repos = await reposResponse.json();

			setData({
				user,
				repos,
			});
		});
	}, [username]);

	if (data?.error) {
		return <h1>{data.error}</h1>;
	}

	if (!data?.user || !data?.repos) {
		return <h1>Loading...</h1>;
	}

	return (
		<Container>
			<Main>
				<MainSide>
					<Repos>
						<div className="header">
							<h2>All repos</h2>
							<Link to="/">
								<LinkButton>
									<span>Back Home</span>
								</LinkButton>
							</Link>
						</div>

						<div>
							{data.repos.map((item) => (
								<RepoCard
									key={item.name}
									username={item.owner.login}
									reponame={item.name}
									description={item.description}
									language={item.language}
									stars={item.stargazers_count}
									forks={item.forks}
								/>
							))}
						</div>
					</Repos>
				</MainSide>
			</Main>
		</Container>
	);
};

export default Profile;

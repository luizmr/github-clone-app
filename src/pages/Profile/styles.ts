import styled from "styled-components";
import { RiBookMarkLine } from "react-icons/ri";

export const Container = styled.div`
	--horizontalPadding: 16px;
	--verticalPadding: 24px;

	padding: var(--verticalPadding) var(--horizontalPadding);
	overflow: hidden;
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;

	margin: 0 auto;
	max-width: 1280px;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

export const LeftSide = styled.div`
	padding: 0 var(--horizontalPadding);
	@media (min-width: 768px) {
		width: 25%;
	}
`;

export const RightSide = styled.div`
	padding: 0 var(--horizontalPadding);
	@media (min-width: 768px) {
		width: 75%;
	}
`;

export const Repos = styled.div`
	margin-top: var(--verticalPadding);

	> h2 {
		font-size: 16px;
		font-weight: normal;
	}

	> div {
		margin-top: 8px;

		display: grid;
		gap: 16px;

		grid-template-columns: 1fr;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
			grid-auto-rows: minmax(min-content, max-content);
		}
	}
`;

export const CalendarHeading = styled.span`
	font-size: 16px;
	margin: 36px 0 9px;
	display: inline-flex;
`;

export const RepoIcon = styled(RiBookMarkLine)`
	width: 16px;
	height: 16px;
	margin-right: 4px;
`;

export const Tab = styled.div`
	.content {
		display: flex;
		align-items: center;
		width: min-content;

		padding: 14px 16px;

		border-bottom: 2px solid var(--orange);

		.label {
			font-size: 14px;
			padding: 0 7px;
			font-weight: 600;
		}
		.number {
			font-size: 12px;
			background: var(--ticker);
			padding: 2px 6px;
			border-radius: 24px;

			> a {
				text-decoration: none;

				&:hover {
					color: var(--link);
				}
			}
		}
	}

	.line {
		display: flex;
		width: 200vw;
		border-bottom: 1px solid var(--border);
		margin-left: -50vw;
	}

	&.mobile {
		margin-top: var(--verticalPadding);
		.content {
			margin: 0 auto;
		}

		@media (min-width: 768px) {
			display: none;
		}
	}
	&.desktop {
		display: none;

		@media (min-width: 768px) {
			display: unset;

			.wrapper {
				display: flex;
				margin: 0 auto;
				max-width: 1280px;
			}
			.offset {
				width: 25%;
				margin-right: var(--horizontalPadding);
			}
		}
	}
`;

export const Error = styled.div`
	height: calc(100vh - 154px);
	width: 1280px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> h1 {
		background: var(--search);
		border: 1px solid var(--header);
		outline: 0;
		border-radius: 6px;
		padding: 7px 12px;
		width: 20vw;
		text-align: center;
		margin-bottom: 15px;
	}
`;

export const Button = styled.button`
	font-size: 16px;
	background: var(--gray-dark);
	padding: 12px 17px;
	border-radius: 24px;
	width: max-content;

	display: flex;
	align-items: center;
	color: var(--primary);

	&:hover {
		cursor: pointer;
	}

	&:focus,
	&:active {
		outline: none;
	}
`;

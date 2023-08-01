import styled from "styled-components";

import { GiTechnoHeart } from "react-icons/gi";

const Footer = () => {
	return (
		<StyledFooter>
			Made with&nbsp;
			<GiTechnoHeart className="heart" size={22} />
			&nbsp;by Snehil
			<br />
			<span>
				<a href="https://github.com/SneakySensei/portfolio-v2" target="_blank">
					View Source
				</a>
				<br />
				Design Inspired by{" "}
				<a href="https://sarahdayan.dev/" target="_blank">
					Sarah Dayan
				</a>
			</span>
		</StyledFooter>
	);
};

export default Footer;

// STYLES

const StyledFooter = styled.footer`
	font-size: 14pt;
	color: ${({ theme }) => theme.fontSecondary};
	margin-bottom: 1rem;
	text-align: center;
	/* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; */
	.heart {
		color: ${({ theme }) => theme.fontPrimary};
		margin-bottom: -0.15rem;
	}

	a {
		font-weight: normal;
	}

	span {
		font-size: 11pt;
	}
`;

import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { 
	Flex,
	Text,
  	Image,
  	ChakraProvider,
	Spinner,
} from "@chakra-ui/react";
import "./App.scss";
import "./mdi/css/materialdesignicons.css";
import conn from "./conn.png";
import mintBtn from "./mintBtn.png";
import faq from "./faq.svg";
import fore from "./fore.svg";
import git from "./git.svg";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import rmap from "./rmap.svg";
import road from "./road.png";
import roadMob from "./roadMob.png";
import sea from "./sea.svg";
import send from "./send.svg";
import twitter from "./twitter.svg";
import lightVoice from "./light.mp4";
import mediumVoice from "./medium.mp4";
import thickVoice from "./thick.mp4";

function App() {
	const [fuckY, setFuckY] = useState("")
	const [isMint, setIsMint] = useState(false)
	useEffect(() => {
		setInterval(function(){
			if (window.ethereum.selectedAddress) {
				setIsMint(true)
			}
			else {
				setIsMint(false)
			}
		}, 100)
	}, [])

	return (
		<ChakraProvider>
			<Flex fontFamily='ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji' w="100%" minHeight="100vh" direction="column">
				<span id="connectButton" style={{ display: "none" }}></span>
				<span id="claimButton" style={{ display: "none" }}></span>
				<Flex w="100%" py={["10%", "2%"]} direction="column" bg="rgb(255 242 197)" px={["4%", "13%"]}>
					<Flex w="100%" justify="space-between" align="center">
						<Image h={["24px", "56px"]} w="auto" src={fore} />
						<Flex justify="flex-end" align="center">
							<Image h={["24px", "48px"]} src={rmap} cursor="pointer" mr="2" transition="300ms ease-in-out" _hover={{ h: "44px" }} onClick={() => {
								var a = document.getElementById('rdMap')
								a.scrollIntoView({behavior: "smooth"})
							}} />
							<Image h={["24px", "48px"]} src={git} cursor="pointer" mr="4" transition="300ms ease-in-out" _hover={{ h: "40px" }} onClick={() => window.open("https://discord.com/invite/fortheculture", "_BLANK")} />
							<Image h={["24px", "48px"]} src={twitter} cursor="pointer" mr="4" transition="300ms ease-in-out" _hover={{ h: "40px" }} onClick={() => window.open("https://twitter.com/nftftc", "_BLANK")} />
							<Image h={["24px", "48px"]} src={sea} cursor="pointer" transition="300ms ease-in-out" _hover={{ h: "40px" }} onClick={() => window.open("https://opensea.io/collection/ftc-official", "_BLANK")} />
						</Flex>
					</Flex>
					
					<Flex w="100%" align="center" pt="6" mt={["20%", "12"]}>
						<Flex align="center" ml="5%" display={["none", "flex"]} w="30%">
							<Flex direction="column">
								<Image w="180px" mb="8" src={img1} cursor="pointer" transition="300ms ease-in-out" _hover={{ transform: "translateY(6px)" }} onClick={() => {
									var audio = new Audio(thickVoice);
									audio.play();
								}} />
								<Image w="130px" src={img2} cursor="pointer" transition="300ms ease-in-out" _hover={{ transform: "translateY(6px)" }} onClick={() => {
									var audio = new Audio(lightVoice);
									audio.play();
								}} />
							</Flex>
							<Image w="140px" src={img3} ml="-8" cursor="pointer" transition="300ms ease-in-out" _hover={{ transform: "translateY(6px)" }} onClick={() => {
									var audio = new Audio(mediumVoice);
									audio.play();
								}} />
						</Flex>
						<Flex flex="1" align="center" justify="center" direction="column">
							<Image w={["65%", "70%"]} src={img4} />
							{
								isMint
								?
								<>
									<Image w={["65%", "70%"]} src={mintBtn} _hover={{ w: "65%" }} transition="300ms ease-in-out" cursor="pointer" onClick={() => document.getElementById('claimButton').click()} />

									<Flex mt="3" bg="#fcda7c" color="#000" fontFamily="font" letterSpacing="3px" transform="rotate(-3deg)" px={["20%", "20%"]} py={["2", "1"]} borderBottomRightRadius="20px" borderBottomLeftRadius="49px" fontSize={["36px","34px"]} border="1px solid #000" cursor="pointer" transition="300ms ease-in-out" _hover={{ px: "16%", letterSpacing: "1px" }} onClick={() => document.getElementById('claimButton').click()}><Text transform="rotate(5deg)">BURN</Text></Flex>
								</>
								:
								<Image w={["65%", "70%"]} src={conn} _hover={{ w: "65%" }} transition="300ms ease-in-out" cursor="pointer" onClick={() => document.getElementById('connectButton').click()} />
							}
							<div id="notEli" style={{ color: "rgb(248 113 113)", fontStyle: "italic", fontSize: "1.2rem", textAlign: "center", marginTop: "15px", textTransform: "capitalize", letterSpacing: "2px", fontFamily: "font" }}></div>
						</Flex>
						<Flex w="38.5%" justify="center" display={["none", "flex"]} direction="column" align="center">
							<Flex w="97%" transition="300ms ease-in-out" _hover={{ width: "100%" }} className="formFloat" direction="column" px="20%">
								{
									fuckY === "" ?
									<>
										<Text fontSize="1.875rem" lineHeight="2.25rem" color="rgb(254 215 136)" fontWeight="bold">Hi, wtf is your name?</Text>
										<Flex>
											<input type="text" style={{ color: "rgb(254 215 136)", width: "100%", borderBottom: "2px solid rgb(254 215 136)", fontSize: "20px" }} id="myName" />
											<Image w="44px" src={send} ml="2" cursor="pointer" onClick={() => {
												var a = document.getElementById('myName').value
												if(a !== "") {
													setFuckY(a)
												}
											}} />
										</Flex>
									</>
									:
									<Flex color="rgb(254 215 136)" fontWeight="bold" w="100%" py="10" justify="center" fontSize="1.875rem" lineHeight="2.25rem" textAlign="center" overflow="scroll" className="scPage">F*ck you {fuckY}</Flex>
								}
							</Flex>
						</Flex>
					</Flex>
				</Flex>

				<Flex direction="column" w="100%" color="rgb(114 110 184)" px={["2%", "12%"]} pt={["2", "2"]} pb={["2", "5"]} bg="rgb(235 234 252)">
					<Text fontSize={["16px", "38px"]} fontWeight="bolder" textAlign="center"> 6969 Supply &amp; Free Mint + Get 0.01 ETH for minting</Text>
					<Text fontSize={["13px", "1.25rem"]} fontWeight="bolder" textAlign="center">Minted: 6896/6969</Text>
				</Flex>

				<Flex w="100%" px={["0", "10%"]} pb="4">
					<Image src={road} w="100%" id="rdMap" display={["none", "block"]} />
					<Image src={roadMob} w="100%" id="rdMap" display={["block", "none"]} />
				</Flex>

			</Flex>
		</ChakraProvider>
	)
}

export default App;

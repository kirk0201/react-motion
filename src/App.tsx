import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
  box-sizing:border-box;
}
body {
  font-family: 'Noto Sans KR', 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
a {
  text-decoration: none;
  color:inherit;
}
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <GridBox>
        <Box whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></Box>
        <Box whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Circle />
        </Box>
        <Box whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></Box>
        <Box whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></Box>
      </GridBox>
      <SwitchBtn>Switch</SwitchBtn>
      {/* <motion.div></motion.div> */}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;
const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const Box = styled(motion.button)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const SwitchBtn = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: 700;
`;

const Circle = styled(motion.div)`
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
`;
export default App;

import styled, { createGlobalStyle } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
  const [click, setClick] = useState<string | null>(null);
  const [circle, setCircle] = useState(false);
  const clickHandler = (n: string | null) => {
    setClick(n);
  };
  const circleHandler = () => {
    setCircle((prev) => !prev);
  };

  const boxVariants = {
    box1: {
      x: -10,
      y: -10,
      scale: 1.1,
    },
    box2: {
      x: 10,
      y: -10,
      scale: 1.1,
    },
    box3: {
      x: -10,
      y: 10,
      scale: 1.1,
    },
    box4: {
      x: 10,
      y: 10,
      scale: 1.1,
    },
  };
  const overlayVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    leaving: {
      opacity: 0,
    },
  };

  const btnVariants = {
    initial: {
      color: "blue",
    },
    visible: {
      color: "yellow",
    },
    exit: {
      color: "blue",
    },
  };
  return (
    <Wrapper>
      <GlobalStyle />
      <GridBox>
        <Box
          variants={boxVariants}
          whileHover="box1"
          whileTap={{ scale: 0.9 }}
          onClick={() => clickHandler("1")}
          layoutId={"1"}
        ></Box>
        <Box
          variants={boxVariants}
          whileHover="box2"
          whileTap={{ scale: 0.9 }}
          onClick={() => clickHandler("2")}
          layoutId={"2"}
        >
          {circle ? null : <Circle layoutId="circle" />}
        </Box>
        <Box
          variants={boxVariants}
          whileHover="box3"
          whileTap={{ scale: 0.9 }}
          onClick={() => clickHandler("3")}
          layoutId={"3"}
        >
          {circle ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          variants={boxVariants}
          whileHover="box4"
          whileTap={{ scale: 0.9 }}
          onClick={() => clickHandler("4")}
          layoutId={"4"}
        ></Box>
      </GridBox>
      <SwitchBtn
        onClick={circleHandler}
        variants={btnVariants}
        initial="initial"
        animate={circle ? "visible" : "exit"}
        exit="exit"
      >
        Switch
      </SwitchBtn>
      <AnimatePresence>
        {click ? (
          <Overlay
            variants={overlayVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
            onClick={() => setClick(null)}
          >
            <Box layoutId={click} style={{ width: "400px", height: "200px" }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
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

const SwitchBtn = styled(motion.button)`
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

const Overlay = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default App;

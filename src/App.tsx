import React from "react";
import { Box } from "@chakra-ui/react";
import TopSection from "./Components/TopSection";
import BottomSection from "./Components/BottomSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box>
      <TopSection />
      <BottomSection />
      <Footer />
    </Box>
  );
}

export default App;

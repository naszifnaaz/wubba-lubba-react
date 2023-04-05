import "./App.css";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CharacterCard } from "./components/CharacterCard";
import { Spinner } from "@chakra-ui/react";
import { Branding } from "./components/Branding";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="App">
      <Branding />
      {characters.length === 0 ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          marginTop={"50px"}
        />
      ) : (
        <SimpleGrid columns={[1, 2, 3, 4]}>
          {characters.map((character, index) => {
            return <CharacterCard character={character} key={index} />;
          })}
        </SimpleGrid>
      )}
    </div>
  );
}

export default App;

import "./App.css";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CharacterCard } from "./components/CharacterCard";
import { Spinner, useToast, useColorMode } from "@chakra-ui/react";
import { Branding } from "./components/Branding";
import { Pagination } from "./components/Pagination";
import { Filter } from "./components/Filter";

function App() {
  const api = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const toast = useToast();

  function incPage() {
    if (page === totalPages) return;
    setPage(page + 1);
  }

  function decPage() {
    if (page === 1) return;
    setPage(page - 1);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    async function getData() {
      try {
        let data = await fetch(
          `${api}?name=${searchQuery}&gender=${filterGender}&status=${filterStatus}&page=${page}`
        );
        data = await data.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (err) {
        setCharacters([]);
        setTotalPages(1);
        toast({
          title: "No Results Found!.",
          description: "No such character available!",
          status: "warning",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
      }
    }
    getData();
  }, [page, searchQuery, filterGender, filterStatus]);

  return (
    <div className="App">
      <>
        <Branding />
        <Filter
          setSearchQuery={setSearchQuery}
          setFilterStatus={setFilterStatus}
          setFilterGender={setFilterGender}
        />
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
        <>
          {totalPages === 1 ? null : (
            <Pagination page={page} incPage={incPage} decPage={decPage} />
          )}
        </>
      </>
    </div>
  );
}

export default App;

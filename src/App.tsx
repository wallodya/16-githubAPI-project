import Container from "./components/Container/Container.lazy"
import "./App.css"
import Header from "components/Header/Header"
import SearchBar from "components/SearchBar/SearchBar"

function App() {
	return (
        <Container>
            <Header />
            <SearchBar />
        </Container>
    )
}

export default App

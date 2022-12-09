import Container from "./components/Container/Container.lazy"
import "./App.css"
import Header from "components/Header/Header"
import SearchBar from "components/SearchBar/SearchBar"
import UserProvider from "providers/UserProvider"
import UserCard from "components/UserCard/UserCard.lazy"

function App() {
	return (
        <UserProvider>
            <Container>
                <Header />
                <SearchBar />
                <UserCard />
            </Container>
        </UserProvider>
    )
}

export default App

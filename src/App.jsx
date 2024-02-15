import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListMember from './components/admin-listMember/ListMember.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<ListMember/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

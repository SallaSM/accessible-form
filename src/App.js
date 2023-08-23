import './styles.css';
import {Header} from "./components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage"
import FormComponents from "./pages/FormComponents/FormComponents";
import GeneralInfo from "./pages/GeneralInfo";
import {Route, Routes} from "react-router-dom";
import Handles from "./pages/FormComponents/Handles/Handles";
import RadioButton from "./pages/FormComponents/Handles/RadioButton";
import CheckBox from "./pages/FormComponents/Handles/CheckBox";
import InputFiels from "./pages/FormComponents/InputFields/InputFiels";
import Autocomplete from "./pages/FormComponents/InputFields/Autocomplete";
import Navbar from "./components/Navbar";
import BasicButton from "./pages/FormComponents/Handles/BasicButton";
import InputValidation from "./pages/FormComponents/InputFields/InputValidation";
import ChangingView from "./pages/ ChangingView/ChangingView";

function App() {

  return (
    <>

        <HelmetProvider>
          <Header/>
            <div className="flex">
                <Navbar />
                    <div className="container">
                        <Routes>
                            <Route path="/"  index element={<MainPage/>}/>
                            <Route path="/yleista_tietoa" element={<GeneralInfo/>}/>
                            <Route path="/lomake_komponentit" element={<FormComponents/>}/>
                            /*handles*/
                            <Route path="/lomake_komponentit/painikkeet" element={<Handles/>}/>
                            <Route path="/lomake_komponentit/painikkeet/painike" element={<BasicButton/>}/>
                            <Route path="/lomake_komponentit/painikkeet/radiopainike" element={<RadioButton/>}/>
                            <Route path="/lomake_komponentit/painikkeet/valintaruutu" element={<CheckBox/>}/>
                            /*inputfields*/
                            <Route path="/lomake_komponentit/syottokentat" element={<InputFiels/>}/>
                            <Route path="/lomake_komponentit/syottokentat/syotteen_validointi" element={<InputValidation/>}/>
                            <Route path="/lomake_komponentit/syottokentat/automaattinen_taydennys" element={<Autocomplete/>}/>
                            /*muuttuva näkymä*/
                            <Route path="/muuttuva_nakyma" element={<ChangingView/>}/>
                        </Routes>
                    </div>
            </div>
        </HelmetProvider>
    </>
  );
}

export default App;

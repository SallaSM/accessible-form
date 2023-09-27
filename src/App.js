import './styles.css';
import {Header} from "./components/Header";
import { HelmetProvider } from "react-helmet-async";
import MainPage from "./pages/MainPage"
import FormComponents from "./pages/FormComponents/FormComponents";
import GeneralInfo from "./pages/GeneralInfo";
import {Route, Routes} from "react-router-dom";
import Handles from "./pages/FormComponents/Handles/Handles";
import RadioButton from "./pages/FormComponents/Handles/RadioButton";
import CheckBox from "./pages/FormComponents/Handles/CheckBox";
import InputFields from "./pages/FormComponents/InputFields/InputFields";
import Autocomplete from "./pages/FormComponents/InputFields/Autocomplete";
import Navbar from "./components/Navbar";
import BasicButton from "./pages/FormComponents/Handles/BasicButton";
import InputValidation from "./pages/FormComponents/InputFields/InputValidation";
import ChangingView from "./pages/ ChangingView/ChangingView";
import Combobox from "./pages/FormComponents/InputFields/Combobox";


function App() {


  return (


        <div className="content">
        <HelmetProvider>

          <Header/>
            {/*<Breadcrumbs/>*/}
            <div className="flex">

                <Navbar />
                <main>
                        <Routes>
                            <Route path="/"  element={<MainPage/>}/>
                            <Route path="/yleista_tietoa" element={<GeneralInfo/>}/>
                            <Route path="/lomake_komponentit" element={<FormComponents/>}/>
                            /*handles*/
                            <Route path="/lomake_komponentit/painikkeet" element={<Handles/>}/>
                            <Route path="/lomake_komponentit/painikkeet/painike" element={<BasicButton/>}/>
                            <Route path="/lomake_komponentit/painikkeet/radiopainike" element={<RadioButton/>}/>
                            <Route path="/lomake_komponentit/painikkeet/valintaruutu" element={<CheckBox/>}/>
                            /*inputfields*/
                            <Route path="/lomake_komponentit/syottokentat" element={<InputFields/>}/>
                            <Route path="/lomake_komponentit/syottokentat/syotteen_validointi" element={<InputValidation/>}/>
                            <Route path="/lomake_komponentit/syottokentat/automaattinen_taydennys" element={<Autocomplete/>}/>
                            <Route path="/lomake_komponentit/syottokentat/pudotusvalikko" element={<Combobox/>}/>
                            /*muuttuva näkymä*/
                            <Route path="/muuttuva_nakyma" element={<ChangingView/>}/>
                        </Routes>
                </main>
            </div>

        </HelmetProvider>
    </div>



  );

}

export default App;

import './styles.css';
import {Header} from "./components/Header";
import { HelmetProvider } from "react-helmet-async";
import MainPage from "./pages/MainPage"
import FormComponents from "./pages/FormComponents/FormComponents";
import GeneralInfo from "./pages/GeneralInfo";
import {Route, Routes, Navigate} from "react-router-dom";
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
import Breadcrumb from "./components/Breadcrumb";



function App({location}) {
    const shouldRedirect = true;

  return (
        <>
        <HelmetProvider>
            <Header/>
            {/*<a id="skip-link" className="skip-link" href="#main-content">Siirry sisältöön</a>*/}
            <div>
                <Navbar />
                <div className="block">
                    {/*<Breadcrumbs/>*/}
                    <Breadcrumb/>
                    <main id="main-content">
                            <Routes >
                                <Route path="/"  element={<MainPage/>}/>
                                <Route path="/accessible-form" element={
                                    shouldRedirect? (
                                        <Navigate replace to= "/"/>
                                        ):(
                                            <MainPage/>
                                        )
                                    }
                                />
                                <Route path="/yleista_tietoa" element={<GeneralInfo/>}/>
                                <Route path="/lomakekomponentit" element={<FormComponents/>}/>
                                /*handles*/
                                <Route path="/lomakekomponentit/painikkeet" element={<Handles/>}/>
                                <Route path="/lomakekomponentit/painikkeet/painike" element={<BasicButton/>}/>
                                <Route path="/lomakekomponentit/painikkeet/radiopainike" element={<RadioButton/>}/>
                                <Route path="/lomakekomponentit/painikkeet/valintaruutu" element={<CheckBox/>}/>
                                /*inputfields*/
                                <Route path="/lomakekomponentit/syottokentat" element={<InputFields/>}/>
                                <Route path="/lomakekomponentit/syottokentat/syotteen_validointi" element={<InputValidation/>}/>
                                <Route path="/lomakekomponentit/syottokentat/automaattinen_taydennys" element={<Autocomplete/>}/>
                                <Route path="/lomakekomponentit/syottokentat/pudotusvalikko" element={<Combobox/>}/>
                                /*muuttuva näkymä*/
                                <Route path="/muuttuva_nakyma" element={<ChangingView/>}/>
                            </Routes>
                    </main>
                </div>
            </div>

        </HelmetProvider>
    </>


  );

}

export default App;

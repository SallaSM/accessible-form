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
import ToggleButton from "./pages/FormComponents/Handles/ToggleButton";



function App({location}) {
    const shouldRedirect = true;

  return (
        <>
        <HelmetProvider>
            <div>
            <div className="block" >
            <Header/>
            {/*<a id="skip-link" className="skip-link" href="#main-content">Siirry sisältöön</a>*/}

                <Navbar />

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
                                <Route path="/yleista_saavutettavuudesta" element={<GeneralInfo/>}/>
                                <Route path="/lomake-elementti" element={<FormComponents/>}/>
                                /*handles*/
                                <Route path="/lomake-elementti/painikkeet" element={<Handles/>}/>
                                <Route path="/lomake-elementti/painikkeet/valintapainike" element={<ToggleButton/>}/>
                                <Route path="/lomake-elementti/painikkeet/painike" element={<BasicButton/>}/>
                                <Route path="/lomake-elementti/painikkeet/radiopainike" element={<RadioButton/>}/>
                                <Route path="/lomake-elementti/painikkeet/valintaruutu" element={<CheckBox/>}/>
                                /*inputfields*/
                                <Route path="/lomake-elementti/syottokentat" element={<InputFields/>}/>
                                <Route path="/lomake-elementti/syottokentat/syotteen_validointi" element={<InputValidation/>}/>
                                <Route path="/lomake-elementti/syottokentat/automaattinen_taydennys" element={<Autocomplete/>}/>
                                <Route path="/lomake-elementti/syottokentat/pudotusvalikko" element={<Combobox/>}/>
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

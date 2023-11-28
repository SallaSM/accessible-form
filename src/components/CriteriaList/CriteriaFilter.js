import wcag from "../data/wcag.json";
import CriteriaListItem from "./CriteriaListItem";

export function CriteriaFilter(props) {
    const filtered= wcag.filter(criteria=> criteria.tunniste.includes(props.searchterm));
    console.log(" filtered index =  " + props.listIndex)


    return (<>
            <CriteriaListItem
                items={filtered}
                listIndex={props.listIndex}
                func={props.func}
                listDropdown={props.listDropdown}
            />
        </>
    );
}
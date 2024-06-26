import wcag from "../data/wcag.json";
import CriteriaListItem from "./CriteriaListItem";

/**
 * This function gets wcag criteria list wcag.json.
 * Function filters wcag criteria by search term that comes as a prop (in this case from CriteriaList component).
   Search term is number of the criteria. The form of the search term is for example 1.1.1.
 * Search term is "tunniste" that is the criteria number.
 * The filtered list is used as props in CriteriaListItem.
 */
export function CriteriaFilter(props) {
    const filtered= wcag.filter(criteria=> criteria.tunniste === (props.searchterm));
    console.log(" filtered index =  " + props.listIndex)


    return (<>
            <CriteriaListItem
                items={filtered}
                listIndex={props.listIndex}
                func={props.func}
                listDropdown={props.listDropdown}
                div={props.div}
            />
        </>
    );
}
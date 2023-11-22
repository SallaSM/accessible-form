import wcag from "./data/wcag.json";
import CriteriaListItem from "./CriteriaList/CriteriaListItem";

export function CriteriaFilter({searchterm}) {

        const filtered= wcag.filter(criteria=> criteria.tunniste.includes(searchterm));
        console.log(filtered)

    return (<>
            <CriteriaListItem
                items={filtered}
            />
        </>
    );
}
import React from "react";

/**
 * NOT USED
 * Component for criterialist dropdown that contains all the content of wcag criteria info, but not used. The current way of using dropdown is in CriteriaListItem.js.
 */
const CriteriaDropdown =(props) => {

    return(
        <div className="criteria-info-box">
            <p aria-label={props.taso} className="criteriaLevelBox">{props.criteria.taso}</p>
            <p>{props.criteria.selite}</p>
            {props.criteria.alaselite ? (
                <ul className="criteria-sublist">
                    {props.criteria.alaselite.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            ) : ""
            }
            {props.criteria.lisaselite ? (
                <p>{props.criteria.lisaselite}</p>
            ) : ""
            }
            {props.criteria.huomautus ? (
                <div>
                    {props.criteria.huomautus.map((item, i) => {
                        return (
                            <div className="additional-note-div">
                                <p className="bold-text">HUOMAUTUS</p>
                                <p className="note-text" key={i}>{item}</p>
                            </div>
                        )
                    })}
                </div>
            ) : ""
            }

            <a  href={props.criteria.linkki} target="_blank"> Lue lisää kriteeristä {props.tunniste} (Vie ulkoiseen palveluun)</a>



        </div>


)
}

export default CriteriaDropdown;

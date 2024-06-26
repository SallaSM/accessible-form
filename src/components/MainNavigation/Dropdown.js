import MenuItems from './MenuItems';

/**
 * Dropdown is a submenu that contains new UL-element that uses MenuItems to create li-elements.
 * depthLevel will grow by 1 in every submenu level created. So top level= 0, first submenu = 1, submenu of submenu= 2.
 * The MenuItems component checks if items coming from submenu list has their own submenus.
 * If there is more, new Dropdown will be used and new submenu ul with higher depthlevel will be created.
 *
 * Props:
 * submenus: submenu array from previous level item.
 * dropdown (boolean): is used to show or hide the submenu
 * depthLevel (number): is manipulated by growing depthLevel by 1 because submenus get deeper.
 */

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';

    return (
        <ul
            className={`dropdown ${dropdownClass} ${
                dropdown ? 'show' : ''
            }`}
        >
            {submenus.map((submenu, index) => (

                <MenuItems
                    items={submenu}
                    key={index}
                    depthLevel={depthLevel}
                />
            ))}
        </ul>
    );
};

export default Dropdown;
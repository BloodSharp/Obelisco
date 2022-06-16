const CLASS_PROGRESSION = '.progression';
const CLASS_PROGRESSION_LINK = 'progression-link';
const CLASS_PROGRESSION_ITEM = 'progression-item';
const CLASS_EXPANDED = 'expanded';
const CLASS_ACTIVE = 'active';
const CLASS_SHOW = 'show';
const CLASS_NAVBAR_SEARCH = '.navbar-search';
const CLASS_NAVBAR_BRAND = '.navbar-brand';
const CLASS_NAVBAR_TOGGLE = '.navbar-toggler';
const CLASS_LIST_GROUP_CONTENT = '.list-group-content';
const CLASS_FORM_SEARCH_SM = '.form-search-sm';
const CLASS_FORM_GROUP = '.form-group';
const CLASS_ACTIVE_SEARCH = 'active-search';
const CLASS_FORM_CONTROL_SM = 'form-control-sm';
const CLASS_NAVBAR_TOGGLER_ICON = 'navbar-toggler-icon';
const CLASS_NAVBAR_COLLAPSE = '.navbar-collapse';
const CLASS_NAV = '.nav';
const CLASS_NAV_PILL = '.nav-pills';
const CLASS_COLLAPSE = '.collapse';

function showInputSearch(): void {
  const headerSearch = document.querySelector(CLASS_NAVBAR_SEARCH) as HTMLElement;
  const navbarBrand = document.querySelector(CLASS_NAVBAR_BRAND) as HTMLElement;
  const navbarToggler = document.querySelector(CLASS_NAVBAR_TOGGLE) as HTMLElement;
  const buttonSignOut = document.querySelector(CLASS_LIST_GROUP_CONTENT) as HTMLElement;
  const formSearch = document.querySelector(CLASS_FORM_SEARCH_SM) as HTMLElement;

  const formGroup = document.querySelector(CLASS_FORM_GROUP) as HTMLElement;

  let inputSearch: HTMLInputElement;
  if (formGroup?.['dataset'].formSearch === 'true') {
    inputSearch = formGroup.children[0] as HTMLInputElement;
  }

  if (!headerSearch?.classList.contains(CLASS_ACTIVE_SEARCH)) {
    headerSearch?.classList.add(CLASS_ACTIVE_SEARCH);
    navbarBrand.style.display = 'none';
    headerSearch.style.display = 'block';
    navbarToggler.style.display = 'none';

    if (buttonSignOut) {
      buttonSignOut.style.display = 'none';
    }

    // agrega un la "x" para cerrar el buscador
    formGroup.style.width = '100%';
    const closeSearch = document.createElement('i');
    closeSearch.classList.add('bx', 'bx-x');
    closeSearch.style.fontSize = '1.7rem';
    closeSearch.style.cursor = 'pointer';

    formSearch.style.display = 'flex';
    formSearch.style.alignItems = 'center';
    formSearch.style.justifyContent = 'space-between';
    formSearch.style.gap = '0.938rem';
    formGroup.style.height = '2.75rem';
    formSearch?.appendChild(closeSearch);

    closeSearch.addEventListener('click', () => {
      headerSearch?.classList.remove(CLASS_ACTIVE_SEARCH);
      navbarBrand.style.display = 'inline-block';
      navbarToggler.style.display = 'inline';

      inputSearch.value = '';
      formSearch?.removeChild(closeSearch);
      formSearch.style.display = '';
      formSearch.style.alignItems = '';
      formSearch.style.justifyContent = '';
      formSearch.style.gap = '';
      formGroup.style.height = '';

      if (buttonSignOut) {
        buttonSignOut.style.display = 'block';
      }
    });
  }
}

function buttonCollapsed(): void {
  const buttonToggle = document.querySelector(CLASS_NAVBAR_COLLAPSE) as HTMLButtonElement;
  const navPill = document.querySelector(`${CLASS_NAV}, ${CLASS_NAV_PILL}`) as HTMLUListElement;
  const collapse = document.querySelector(`${CLASS_NAVBAR_COLLAPSE}, ${CLASS_COLLAPSE}, .${CLASS_SHOW}`) as HTMLElement;

  if (buttonToggle?.classList.contains(CLASS_SHOW)) {
    collapse.style.height = '0px';
    buttonToggle?.classList.remove(CLASS_SHOW);
  } else {
    collapse.style.height = `${navPill?.getBoundingClientRect().height + 3}px`;
    navPill.style.margin = '0 3px 3px 0';
    buttonToggle?.classList.add(CLASS_SHOW);
  }
}

// Init
(function (window, document) {
  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener(
      'click',
      function (event) {
        // navbar input search
        if (
          event?.target?.['dataset'].formSearch === 'true' &&
          event?.target?.['children'][0].classList.contains(CLASS_FORM_CONTROL_SM)
        ) {
          showInputSearch();
        }

        // button collapsed
        if (
          event?.target?.['dataset'].oToggle === 'collapse' ||
          event?.target?.['classList'].contains(CLASS_NAVBAR_TOGGLER_ICON)
        ) {
          buttonCollapsed();
        }
      },
      false
    );
  });
})(window, document);

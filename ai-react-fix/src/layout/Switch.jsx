import { useSelector } from "react-redux";

import Home from "pages/home/Home";

export default function Switch() {
    const page = useSelector(state => state.nav.currentPage);

    switch (page) {
        case 'home':
            return (<Home />);
        case 'history':
            return (<></>);
        case 'guide':
            return (<></>);
        case 'faq':
            return (<></>);
        case 'support':
            return (<></>);
        default:
            return (<></>);
    }
}
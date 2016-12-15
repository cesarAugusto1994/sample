/**
 * Created by cesar on 13/12/16.
 */

const NavBar = React.createClass({
    render: function () {
        return (
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="/" className="brand-logo">Temple</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Entrar</a></li>
                    </ul>

                    <ul id="nav-mobile" className="side-nav">
                        <li><a href="#">Entrar</a></li>
                    </ul>
                    <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        )
    }
});

if (document.getElementById('layout')) {
    ReactDOM.render(
        <NavBar />,
    document.getElementById('layout'));
}


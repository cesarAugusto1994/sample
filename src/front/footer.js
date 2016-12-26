/**
 * Created by cesar on 14/12/16.
 */

const Footer = React.createClass({

    render: function () {
        return (
            <footer className="page-footer teal">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Sample <small>Beta</small></h5>
                            <p className="grey-text text-lighten-4">Bem vindo ao acervo publico.</p>
                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Settings</h5>
                            <ul>
                                <li><a className="white-text" href="#!">Registrar-se</a></li>
                            </ul>
                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Links Uteis</h5>
                            <ul>
                                <li><a className="white-text" href="#!">ICM</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Made by <a className="brown-text text-lighten-3"
                                   href="http://materializecss.com">C&eacute;sar Augusto</a>
                    </div>
                </div>
            </footer>
        )
    }
});

    ReactDOM.render(
        <Footer />,
        document.getElementById('footer'));
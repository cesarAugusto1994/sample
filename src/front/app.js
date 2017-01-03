/**
 * Created by cesar on 10/12/16.
 */

var {Navbar, Icon, NavItem, Card, CardTitle, Col, Breadcrumb, MenuItem} = require('react-materialize');

const Banner = React.createClass({

    render: function () {
        return (
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <br/><br/>
                        <h1 className="header center teal-text text-lighten-2">Temple</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Bem vindo ao Temple!</h5>
                        </div>
                        <div className="row center">
                            <a href="/categoria/"
                               className="btn-large waves-effect waves-light teal lighten-1">Registre-se</a>
                        </div>
                        <br/><br/>
                    </div>
                </div>
                <div className="parallax">
                    <img src="http://www.pptbackgroundstemplates.com/backgrounds/violin-instrument-ppt-backgrounds-powerpoint.jpg" alt="Unsplashed background img 1"/>
                </div>
            </div>
        )
    }
});

const Container = React.createClass({

    getInitialState : function () {
        return {data : []}
    },

    load : function () {

        $.get('/api/colecoes', function (result) {
            this.setState({data: result})
        }.bind(this));

    },

    componentDidMount : function () {
        this.load();
    },
    
    render : function () {
        return (
            <div className="container">
                <div className="section">

                    <div className="row">
                        <div className="col s12 m12">
                            <h2 className="center teal-text">Cole&ccedil;&otilde;es</h2>
                        </div>
                        {this.state.data.map(function (colecao) {
                            var href = '/colecao/' + colecao.nome.toLowerCase();
                            return (
                                <a href={href} className="black-text" key={colecao.id}>
                                <div className="col s12 m4">
                                    <div className="icon-block">
                                        <h2 className="center brown-text"><i className="material-icons">play_circle_outline</i></h2>
                                        <h5 className="center">{colecao.nome}</h5>
                                        <p className="light">{colecao.descricao}</p>
                                    </div>
                                </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    
});

const Paralax = React.createClass({

    render : function () {
        return (
            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src="http://materializecss.com/templates/parallax-template/background2.jpg" alt="Unsplashed background img 2"/></div>
            </div>
        )
    }

});

const Container2 = React.createClass({

    render : function () {
        return (
            <div className="container">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>Contact Us</h4>
                            <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

});

const Paralax2 = React.createClass({

    render : function () {
        return (
            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src="http://materializecss.com/templates/parallax-template/background3.jpg" alt="Unsplashed background img 3" /></div>
            </div>

        )
    }

});

const Render = React.createClass({

    render : function () {
        return (
            <div>
                <Banner />
                <Container />
                <Paralax />
                <Container2 />
                <Paralax2 />
            </div>
        )
    }

});

if (document.getElementById('app')) {
    ReactDOM.render(
        <Render />,
        document.getElementById('app')
    );
}
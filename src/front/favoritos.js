/**
 * Created by cesar on 13/12/16.
 */

const Favoritos = React.createClass({

    getInitialState: function () {
        return {musica: [], favorito: false}
    },

    load: function () {
        $.get('/api/favorito?musica=' + this.props.musica, function (result) {
            this.setState({favorito: !!result})
        }.bind(this))
    },

    componentDidMount: function () {
        this.load();
    },

    handleSubmit: function (e) {

        e.preventDefault();

        var _this = this;

        $.ajax({
            type: 'POST',
            url: "/api/favoritos/add-remove",
            data: {
                musica: this.props.musica
            },
            cache: false,
            success: function (data) {
                _this.load();
            }
        });

    },

    render: function () {

        var status = 'stars';

        if (this.state.favorito == true) {
            status = 'star';
        }

        return (
            <a onClick={this.handleSubmit} className="secondary-content"><i
                className="material-icons">{status}</i></a>
        )
    }

});

const Container = React.createClass({

    getInitialState: function () {
        return {data: []}
    },

    load: function () {

        $.get('/api/favoritos', function (result) {
            this.setState({data: result})
        }.bind(this));

    },

    componentDidMount: function () {
        this.load();
    },

    render: function () {
        return (
            <div id="index-banner" className="">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="section">
                            <div className="row">

                                <nav>
                                    <div className="nav-wrapper teal">
                                        <div className="col s12">
                                            <a className="breadcrumb">Favoritos</a>
                                        </div>
                                    </div><br/>
                                </nav>

                                <br/>

                                {this.state.data.map(function (musica) {
                                    var href = '/musica/' + musica.nome.toLowerCase().replace(/ /g, '-');
                                    var img = '/assets/custom/img/teal.png';
                                    return (
                                        <div className="col s12 m4" key={musica.id}>
                                            <div className="card">
                                                <a href={href} className="black-text">
                                                    <div className="card-image">
                                                        <img src={img}/>
                                                        <span
                                                            className="card-title">{musica.numero_formatado}</span>
                                                    </div>
                                                    <div className="card-content black-text">
                                                        <Favoritos musica={musica.id}/>
                                                        <p>{musica.nome} </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
});

const Render = React.createClass({

    render: function () {
        return (
            <Container />
        )
    }

});

if (document.getElementById('favoritos')) {

    ReactDOM.render(
        <Render/>,
        document.getElementById('favoritos')
    );

}
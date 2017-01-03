/**
 * Created by cesar on 13/12/16.
 */

const Anexos = React.createClass({

    getInitialState: function () {
        return {data: []}
    },

    load: function () {

        var slice = '';

        if (this.props.musica) {
            slice = this.props.musica;
        }

        $.get('/api/anexos/' + slice, function (result) {
            this.setState({data: result})
        }.bind(this));
    },

    componentDidMount: function () {
        this.load();
    },

    render: function () {
        return (
            <div>
                {this.state.data.map(function (anexo) {

                    let tipo = '';

                    if (anexo.tipo.nome == 'Video') {
                        tipo = 'theaters'
                    } else if (anexo.tipo.nome == 'Documento') {
                        tipo = 'perm_media'
                    } else if (anexo.tipo.nome == 'Link') {
                        tipo = 'launch'
                    } else {
                        tipo = 'play_arrow';
                    }

                    return (
                        <ul className="collection" key={anexo.id}>
                            <li className="collection-item avatar">
                                <i className="material-icons circle teal">{tipo}</i>
                                <span className="title">{anexo.nome}</span>
                                <p>Adicionado por {anexo.usuario.nome} <br/>
                                    Postado em {anexo.cadastro}
                                </p>
                            </li>
                        </ul>
                    )
                })}
            </div>
        )
    }
});

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

        var slice = '';

        if (this.props.musica) {
            slice = this.props.musica;
        }

        $.get('/api/musica/' + slice, function (result) {
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
                                <div className="card teal">
                                    <div className="card-content white-text">
                                        <b>{this.state.data.numero_formatado} - {this.state.data.nome}</b>
                                        <Favoritos musica={this.props.musica}/>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content">
                                        <pre data-key="C">{this.state.data.letra}</pre>
                                    </div>
                                </div>
                                <Anexos musica={this.props.musica}/>
                                <div className="fixed-action-btn horizontal">
                                    <a href="#modal1" className="modal-trigger waves-effect waves-light btn">Contribuir
                                        <i className="material-icons right">add</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

const ModalForm = React.createClass({

    render: function () {
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Modal Header</h4>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        )
    }

});

const Render = React.createClass({

    render: function () {
        return (
            <div>
                <Container musica={this.props.musica}/>
                <ModalForm />
            </div>
        )
    }

});

if (document.getElementById('single')) {

    var musica = $("#single").data('musica');

    $(function () {
        $("pre").transpose("C");
    });

    ReactDOM.render(
        <Render musica={musica}/>,
        document.getElementById('single')
    );

}
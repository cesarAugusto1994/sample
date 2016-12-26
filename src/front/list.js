/**
 * Created by cesar on 13/12/16.
 */

const Container = React.createClass({

    getInitialState: function () {
        return {data: []}
    },

    load: function () {

        var slice = '';

        if (this.props.colecao) {
            slice = this.props.colecao;
        }

        $.get('/api/categorias/' + slice, function (result) {
            this.setState({data: result})
        }.bind(this));

    },

    componentDidMount: function () {
        this.load();
    },

    render: function () {

        var view = (
            <div id="index-banner" className="teal">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="section">
                            <div className="row">
                                <h3 className="center white-text"><i className="material-icons">error_outline</i> Opss..
                                    Nada Encontrado.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        if (this.state.data.length !== 0) {
            view = (<div id="index-banner" className="">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="section">
                            <div className="row">

                                <nav>
                                    <div className="nav-wrapper teal">
                                        <div className="col s12">
                                            <a href="#!" className="breadcrumb">{this.props.colecaoNome}</a>
                                        </div>
                                    </div><br/>
                                </nav>

                                {this.state.data.map(function (categoria) {
                                    var href = '/categoria/' + categoria.nome.toLowerCase().replace(/ /g, '-');
                                    var img = '/assets/custom/img/' + categoria.imagem;
                                    return (
                                        <div className="col s12 m4" key={categoria.id}>
                                            <div className="card">
                                                <a href={href} className="black-text">
                                                    <div className="card-image">
                                                        <img src={img}/>
                                                        <span className="card-title">{categoria.nome}</span>
                                                    </div>
                                                    <div className="card-content black-text">
                                                        <p>{categoria.nome}</p>
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
            </div>)
        }

        return (
            <div>{view}</div>
        )
    }
});

const Render = React.createClass({

    render: function () {
        return (
            <Container colecao={this.props.colecao} colecaoNome={this.props.colecaoNome}/>
        )
    }

});

if (document.getElementById('list')) {

    var colecao = $("#list").data('colecao');
    var colecaoNome = $("#list").data('colecao-nome');

    ReactDOM.render(
        <Render colecao={colecao} colecaoNome={colecaoNome}/>,
        document.getElementById('list')
    );

}
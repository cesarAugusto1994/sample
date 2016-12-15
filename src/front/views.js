/**
 * Created by cesar on 13/12/16.
 */

const Container = React.createClass({

    getInitialState: function () {
        return {data: []}
    },

    load: function () {

        var slice = '';

        if (this.props.categoria) {
            slice = this.props.categoria;
        }

        $.get('/api/musicas/' + slice, function (result) {
            this.setState({data: result})
        }.bind(this));

    },

    componentDidMount: function () {
        this.load();
    },

    render: function () {
        return (
            <div id="index-banner" className="teal">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="section">
                            <div className="row">
                                {this.state.data.map(function (musica) {
                                    var href = '/musica/' + musica.nome.toLowerCase().replace(/ /g, '-');
                                    var img = '/assets/custom/img/background1.jpg';
                                    return (
                                        <div className="col s12 m4" key={musica.id}>
                                            <div className="card">
                                                <a href={href} className="black-text">
                                                    <div className="card-image">
                                                        <img src={img}/>
                                                        <span
                                                            className="card-title">{musica.numero} {musica.nome}</span>
                                                    </div>
                                                    <div className="card-content black-text">
                                                        <p>{musica.numero} {musica.nome}</p>
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
            <Container categoria={this.props.categoria}/>
        )
    }

});

if (document.getElementById('views')) {

    var categoria = $("#views").data('categoria');

    ReactDOM.render(
        <Render categoria={categoria}/>,
        document.getElementById('views')
    );

}
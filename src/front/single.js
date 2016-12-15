/**
 * Created by cesar on 13/12/16.
 */

const Anexos = React.createClass({

    getInitialState: function () {
        return {data: []}
    },

    load: function () {

        let slice = '';

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
                    return (
                        <div className="col s12 m4" key={anexo.id}>
                            <div className="card">
                                <div className="card-content black-text">
                                    <h3>{anexo.nome}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
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
            <div id="index-banner" className="teal">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="section">
                            <div className="row">
                                <div className="card">
                                    <div className="card-content black-text">
                                        <h3>{this.state.data.nome}</h3>
                                    </div>
                                </div>
                                <Anexos musica={this.props.musica}/>
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
            <Container musica={this.props.musica}/>
        )
    }

});

if (document.getElementById('single')) {

    var musica = $("#single").data('musica');

    ReactDOM.render(
        <Render musica={musica}/>,
        document.getElementById('single')
    );

}
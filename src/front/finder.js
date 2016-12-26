/**
 * Created by cesar on 13/12/16.
 */

const Container = React.createClass({

    getInitialState: function () {
        return {data: []}
    },

    load: function () {
        $.get('/api/colecoes', function (result) {
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
                                <ul className="collapsible" data-collapsible="accordion">
                                    {this.state.data.map(function (colecao) {
                                        return (
                                            <li>
                                                <div className="collapsible-header"><i className="material-icons">filter_drama</i>{colecao.nome}</div>
                                                <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                                            </li>
                                        )
                                    })}
                                </ul>
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
            <Container/>
        )
    }

});

if (document.getElementById('finder')) {

    ReactDOM.render(
        <Render/>,
        document.getElementById('finder')
    );

}
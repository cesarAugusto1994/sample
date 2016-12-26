/**
 * Created by cesar on 26/12/16.
 */

const Form = React.createClass({

    render: function () {
        return (
            <div className="container">
                <div className="section">
                    <div className="row">
                        <h4>Adicionar Musica</h4>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="nome" type="text" className="validate"/>
                                        <label htmlFor="nome">Nome</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="categoria" type="text" className="validate"/>
                                        <label htmlFor="categoria">Categoria</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
        }

        });

        if (document.getElementById('form-musicas')) {
            ReactDOM.render(
                <div><Form /></div>, document.getElementById('form-musicas')
            );
        }

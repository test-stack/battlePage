import React, {PureComponent} from 'react';

export default class Todo extends PureComponent {
  render() {
    const {_id, i, toggleModal, deleteTodo} = this.props;
    const {topic, description} = this.props._source;
    return (
      <div className="col-sm-4" id={`todo${i}`}>
        <div className="card">
          <div className="card-block">
            <h3 className="card-title" id="todoTitle">{topic}</h3>
            <h6 className="card-subtitle mb-2 text-muted" id="orderCard">{i + 1}#</h6>
            <p className="card-text" id="todoText">{`${description.substring(0, 150)} ...`}</p>
            <div className="btn-group btn-group-sm" role="group" aria-label="...">
              <button className="btn btn-danger" role="button" id="todoRemoveButton" onClick={() => deleteTodo(_id)}>
                Smazat Todo
              </button>
              <button className="btn btn-secondary" role="button" id="todoShowModalButton"
                      onClick={() => toggleModal(i)}>Zobrazit detail Todo
              </button>
            </div>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

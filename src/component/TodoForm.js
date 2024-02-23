import { Component } from "react";
import './Form.css';


class TodoForm extends Component {
    render() {

        const { value, onCreate, onChange, onKeyPress } = this.props

        return (
            <>
                <div className="form">
                    <input value={value}
                        onChange={onChange}
                        onKeyUp={onKeyPress} />
                    <div
                        className="create-button"
                        onClick={onCreate}>추가</div>
                </div>
            </>
        )
    }
}

export default TodoForm;

import './Button.css';

const Button = ({text, color, a, b, c}) => {
    return (
        <butten classNane="btn" style={{color, backgroundColor:a}}>{text}버튼</butten>
    )
}

export default Button;
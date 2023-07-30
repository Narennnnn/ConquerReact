import PropTypes from "prop-types";

export const Person = (props) => {
    return (
        <div className="App">
            <h1>Name: {props.name}</h1>
            <h2>Email: {props.email}</h2>
            <h3>Age: {props.age}</h3>
            <p>This person {props.isMarried ? "is" : "is not"} Married</p>
            {props.friends.map((friend) => (
                <h1 key={friend}>{friend}</h1>
            ))}
        </div>
    );
};

Person.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string, // Corrected 'PropTypes.email' to 'PropTypes.string'
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    friends: PropTypes.arrayOf(PropTypes.string),
};

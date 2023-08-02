interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
}
export const Person = (props: Props) => {
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

const Pet = ({ name, animal, breed}) => {
    // Destructuring props: instead of Pet = (props) and accessing props.name etc
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",  // type of element
        { id: "something-important" }, // attributes that you want to give to the component
        [
            React.createElement("h1", {}, "Adopt me!"),
            React.createElement(Pet, { 
                name: "Luna", 
                animal: "Dog", 
                breed: "Havanese"
            }),
            React.createElement(Pet, { 
                name: "Pepper", 
                animal: "Bird", 
                breed: "Cockatiel"}),
            React.createElement(Pet, { 
                name: "Doink", 
                animal: "Cat", 
                breed: "Mixt"})
        ] // the children
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);
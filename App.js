{/* <div id="parent">
    <div id="child1">
        <h1>Hello we are in h1</h1>
        <h2>Hello we are in h2</h2>
    </div>
    <div id="child2">
        <h1>Hello we are in h1</h1>
        <h2>Hello we are in h2</h2>
    </div>
</div> */}


const parent = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",{id:"child1"},[React.createElement("h1",{},"We are in h1"),
        React.createElement("h2",{},"We are in h2")]),
        React.createElement("div",{id:"child2"},[React.createElement("h1",{},"We are in h1"),
        React.createElement("h2",{},"We are in h2")])
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
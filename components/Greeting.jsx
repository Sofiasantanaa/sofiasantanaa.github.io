// Greeting Component: A simple component that receives and uses props.
export default function Greeting({ name }) {
  // Renders the greeting message using the 'name' prop.
  return <h2 className="greeting">Hello, {name}!</h2>;
}
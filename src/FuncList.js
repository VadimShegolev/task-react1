export default function FuncList(props) {
    return (
    <ul>{props.items.length} elements
        {props.items.map(item => (
          <li  style={{fontSize: 14}} key={item.id}>{item.text}</li>
        ))}
    </ul>
    );
  }
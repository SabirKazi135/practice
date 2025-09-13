import useStore from '/store/useStore';

function NameDisplay() {
  const name = useStore((state) => state.name);
  return <p>Name: {name}</p>;
}

export default NameDisplay;

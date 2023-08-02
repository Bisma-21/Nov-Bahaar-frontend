import { Button } from "./ButtonStyle";
const ButtonComponent = (props) => {
  let { title, click, className, disabled } = props;
  return (
    <>
      <Button onClick={click} className={className} disabled={disabled}>
        {title}
      </Button>
    </>
  );
};
export default ButtonComponent;

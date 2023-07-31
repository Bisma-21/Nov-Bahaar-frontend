import { CircleDiv } from "./LoaderStyle";

const LoaderComponent = (props) => {
  let { className } = props;
  return (
    <>
      <CircleDiv className={className}></CircleDiv>
    </>
  );
};
export default LoaderComponent;

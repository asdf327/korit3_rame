import { HelloProps } from "../types";

export default function HelloComponent({name, age}: HelloProps) {
  return (
    <>
      <h1>Hello Component!</h1>
      <h2>{name}! {age} 살입니다!</h2>
    </>
  );
}
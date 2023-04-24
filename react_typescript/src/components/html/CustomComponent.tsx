import {Greet} from "../Greet"

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return(<div>Hello {props.name}</div>)
}

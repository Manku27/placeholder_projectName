interface Props {
  control : any
  label : string
  name : any
  type : any
}

export const Input = ({
  control,
  label,
  name,
  type ='text',
  ...rest
} : Props) => {
  return <>Input</>
}
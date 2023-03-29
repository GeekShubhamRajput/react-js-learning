type statusProps = {
  status: "loading" | "success" | "error"
}

export const Status = ({status}: statusProps) => {
  let message
  if(status === "loading"){
    message = "Loading...."
  }else if(status === "success"){
    message = "Data fetched successfully"
  }else if(status === "error"){
    message = "Error fetching data"
  }
  return(<h2>{message}</h2>) 
}

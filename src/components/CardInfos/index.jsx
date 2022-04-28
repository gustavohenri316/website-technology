import * as C from './styles'

export const CardInfos = (props) => {
  return (
    <C.Container>
    
            <img src={props.img} />
            <h2>{props.title}</h2>
            <p>{props.describe}</p>
        
    </C.Container>
  )
}

import Button from '../Button/Button'
import Card from '../Card/Card'
import classes from './ErrorModel.module.css'

const ErrorModel = props => {
  return (
    <div>
      <div className={classes.backdrop} onClick={() => props.closeModel(false)} />
      <Card className={classes.modal} >
        <header className={classes.header}>
          <h2>{props.error.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={() => props.closeModel(false)}>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModel
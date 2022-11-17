import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button/Button'
import Card from '../Card/Card'
import classes from './ErrorModel.module.css'

const Backdrop = props => {
  return (
    <div className={classes.backdrop} onClick={() => props.closeModel(false)} />
  )
}

const Modal = props => {
  props = props.event
  return (
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
  )
}

const ErrorModel = props => {
  return (
    <React.Fragment>
      { ReactDOM.createPortal(<Backdrop closeModel={props.closeModel} />, document.getElementById('backdrop-overlay')) }
      { ReactDOM.createPortal(<Modal event={props}/>, document.getElementById('modal-overlay')) }
    </React.Fragment>
  )
}

export default ErrorModel
import React from 'react';
import withStore from '~/hocs/withStore';
import styles from './index.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Alert } from 'react-bootstrap';

class Notifications extends React.Component{
    render(){
        let model = this.props.stores.notifications;
        let messages = model.list.map((note) => {
            return (
            <CSSTransition key={note.id} 
                           classNames={{
                             enter: styles.itemEnter,
                             enterActive: styles.itemEnterActive,
                             exitActive: styles.itemLeaveActive
                           }}
                           timeout={500}
            >
                <Alert variant="warning" onClick={() => {model.remove(note.id)}} dismissible>
                    {note.message}
                </Alert>   
            </CSSTransition>
            );
        });

        return (
            <TransitionGroup className={styles.box}>
                {messages}
            </TransitionGroup>
        );
    }
}

export default withStore(Notifications);